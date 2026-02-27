"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    neighbors: number[];
    visited: boolean;
    distance: number;
    activationTime: number;
}

export default function BFSBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let nodes: Node[] = [];
        const NUM_NODES = 100;
        const CONNECTION_DISTANCE = 150;
        const PRIMARY_COLOR = "59, 130, 246"; // #3b82f6 (Electric Blue)

        let mouseX = -1000;
        let mouseY = -1000;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initNodes();
        };

        const initNodes = () => {
            nodes = [];
            for (let i = 0; i < NUM_NODES; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    neighbors: [],
                    visited: false,
                    distance: -1,
                    activationTime: 0
                });
            }
            buildGraph();
        };

        const buildGraph = () => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].neighbors = [];
                for (let j = 0; j < nodes.length; j++) {
                    if (i === j) continue;
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DISTANCE) {
                        nodes[i].neighbors.push(j);
                    }
                }
            }
        };

        const runBFS = (sourceIndex: number) => {
            // Reset all nodes
            nodes.forEach(node => {
                node.visited = false;
                node.distance = -1;
            });

            const queue: number[] = [sourceIndex];
            nodes[sourceIndex].visited = true;
            nodes[sourceIndex].distance = 0;
            nodes[sourceIndex].activationTime = Date.now();

            let head = 0;
            while (head < queue.length) {
                const curr = queue[head++];

                for (const neighborIdx of nodes[curr].neighbors) {
                    if (!nodes[neighborIdx].visited) {
                        nodes[neighborIdx].visited = true;
                        nodes[neighborIdx].distance = nodes[curr].distance + 1;
                        // Delay visual activation based on distance to simulate wave
                        nodes[neighborIdx].activationTime = Date.now() + (nodes[neighborIdx].distance * 200);
                        queue.push(neighborIdx);
                    }
                }
            }
        };

        const findClosestNode = (x: number, y: number): number => {
            let minDist = Infinity;
            let closestIdx = -1;

            for (let i = 0; i < nodes.length; i++) {
                const dx = nodes[i].x - x;
                const dy = nodes[i].y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < minDist && dist < 100) { // Only activate if relatively close
                    minDist = dist;
                    closestIdx = i;
                }
            }
            return closestIdx;
        };

        const update = () => {
            // Move nodes
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].x += nodes[i].vx;
                nodes[i].y += nodes[i].vy;

                // Bounce off edges
                if (nodes[i].x < 0 || nodes[i].x > canvas.width) nodes[i].vx *= -1;
                if (nodes[i].y < 0 || nodes[i].y > canvas.height) nodes[i].vy *= -1;
            }

            // Rebuild graph completely every few frames could be expensive
            // So we just update distances dynamically in standard rendering
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const now = Date.now();

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        // Check if both nodes are 'active' within the BFS wave
                        const isActiveI = nodes[i].visited && now >= nodes[i].activationTime;
                        const isActiveJ = nodes[j].visited && now >= nodes[j].activationTime;

                        // Fade out the activation over time (lasts for 2 seconds)
                        let opacity = 0.05; // Base faint visibility
                        if (isActiveI && isActiveJ) {
                            const timeSinceActive = Math.min(now - Math.max(nodes[i].activationTime, nodes[j].activationTime), 2000);
                            opacity = Math.max(0.05, 0.6 * (1 - timeSinceActive / 2000));
                        }

                        // Further reduce opacity by distance to fade out long edges
                        opacity *= (1 - dist / CONNECTION_DISTANCE);

                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(${PRIMARY_COLOR}, ${opacity})`;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (let i = 0; i < nodes.length; i++) {
                const isActive = nodes[i].visited && now >= nodes[i].activationTime;

                ctx.beginPath();
                ctx.arc(nodes[i].x, nodes[i].y, nodes[i].radius, 0, Math.PI * 2);

                if (isActive) {
                    const timeSinceActive = Math.min(now - nodes[i].activationTime, 2000);
                    const intensity = Math.max(0.1, 1 - (timeSinceActive / 2000));

                    ctx.fillStyle = `rgba(${PRIMARY_COLOR}, ${intensity})`;

                    // Glow effect for active nodes
                    ctx.shadowBlur = 15 * intensity;
                    ctx.shadowColor = `rgba(${PRIMARY_COLOR}, ${intensity})`;
                } else {
                    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
                ctx.shadowBlur = 0; // Reset for next items
            }
        };

        const tick = () => {
            update();
            draw();
            animationFrameId = requestAnimationFrame(tick);
        };

        // Event Listeners
        window.addEventListener("resize", resize);

        let debounceTimer: NodeJS.Timeout;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Throttle BFS triggers so it doesn't run every single pixel move
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const closest = findClosestNode(mouseX, mouseY);
                if (closest !== -1) {
                    buildGraph(); // Update adjacency list with current positions
                    runBFS(closest);
                }
            }, 50);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Initial setup
        resize();
        tick();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-60"
        />
    );
}
