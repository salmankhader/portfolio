"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants";
import { Code2, Database, Layout, Wrench, BrainCircuit } from "lucide-react";

export default function Skills() {
    const categories = [
        { title: "Programming Languages", items: SKILLS.programmingLanguages, icon: Code2 },
        { title: "Core CS", items: SKILLS.coreCS, icon: BrainCircuit },
        { title: "Backend & APIs", items: SKILLS.backendAndAPIs, icon: Database },
        { title: "Frontend", items: SKILLS.frontend, icon: Layout },
        { title: "Tools & Platforms", items: SKILLS.toolsAndPlatforms, icon: Wrench },
    ];

    return (
        <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 hover:border-primary/30 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-white/5 text-primary">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill) => (
                                <span key={skill} className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
