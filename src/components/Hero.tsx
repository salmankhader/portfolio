"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Star, Trophy } from "lucide-react";

export default function Hero() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center py-32 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Intro details */}
            <div className="text-center mb-20 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-medium"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    AI Systems Engineer & Full-Stack Developer
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-[1.15] font-sans"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Building scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">Intelligent Systems</span> <br className="hidden md:block" /> and high-performance applications.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I&apos;m MDSALMAN KHADER. I specialize in developing end-to-end architectures, AI readiness platforms, and competitive problem-solving.
                </motion.p>
            </div>

            {/* Bento Grid layout for Competitive Stats */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
                variants={containerVariants as any}
                initial="hidden"
                animate="visible"
            >
                {/* LeetCode Card */}
                <motion.div
                    variants={itemVariants as any}
                    whileHover={{ y: -8, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-white/5 p-3 rounded-full mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                        <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold mb-3 tracking-tight">1881</h3>
                    <p className="text-neutral-400 font-medium text-center z-10 text-sm">LeetCode Max Rating</p>
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Code2 className="w-24 h-24" />
                    </div>
                </motion.div>

                {/* Global Rank Card */}
                <motion.div
                    variants={itemVariants as any}
                    whileHover={{ y: -8, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300 md:col-span-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-white/5 p-3 rounded-full mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                        <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold mb-3 tracking-tight">268</h3>
                    <p className="text-neutral-400 font-medium text-center z-10 text-sm">Global Rank (Starters)</p>
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Globe className="w-24 h-24" />
                    </div>
                </motion.div>

                {/* CodeChef Card */}
                <motion.div
                    variants={itemVariants as any}
                    whileHover={{ y: -8, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-white/5 p-3 rounded-full mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                        <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 z-10">CodeChef 3-Star</h3>
                    <p className="text-neutral-400 font-medium mt-1 z-10 text-sm">Rating 1673</p>
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Trophy className="w-24 h-24" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
