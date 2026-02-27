"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Star, Trophy } from "lucide-react";

export default function Hero() {
    const containerVariants = {
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
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Intro details */}
            <div className="text-center mb-20 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-medium"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    AI Systems Engineer & Full-Stack Developer
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Building scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Intelligent Systems</span> <br className="hidden md:block" /> and high-performance applications.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I'm MD SALMAN KHADER. I specialize in developing end-to-end architectures, AI readiness platforms, and competitive problem-solving.
                </motion.p>
            </div>

            {/* Bento Grid layout for Competitive Stats */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* LeetCode Card */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 0 25px rgba(59, 130, 246, 0.15)" }}
                    className="bg-neutral-900 border border-neutral-800 hover:border-primary/30 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden group transition-colors duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-neutral-950 p-4 rounded-full mb-5 border border-neutral-800 group-hover:border-primary/50 transition-colors">
                        <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2 tracking-tight">1881</h3>
                    <p className="text-neutral-400 font-medium text-center">LeetCode Max Rating</p>
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Code2 className="w-24 h-24" />
                    </div>
                </motion.div>

                {/* Global Rank Card */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 0 25px rgba(59, 130, 246, 0.15)" }}
                    className="bg-neutral-900 border border-neutral-800 hover:border-primary/30 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden group transition-colors duration-300 md:col-span-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-neutral-950 p-4 rounded-full mb-5 border border-neutral-800 group-hover:border-primary/50 transition-colors">
                        <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2 tracking-tight">268</h3>
                    <p className="text-neutral-400 font-medium text-center">Global Rank (Starters)</p>
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Globe className="w-24 h-24" />
                    </div>
                </motion.div>

                {/* CodeChef Card */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 0 25px rgba(59, 130, 246, 0.15)" }}
                    className="bg-neutral-900 border border-neutral-800 hover:border-primary/30 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden group transition-colors duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-neutral-950 p-4 rounded-full mb-5 border border-neutral-800 group-hover:border-primary/50 transition-colors">
                        <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3].map((star) => (
                            <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <h3 className="text-xl font-bold mb-1">CodeChef 3-Star</h3>
                    <p className="text-neutral-400 font-medium mt-1">Rating 1673</p>
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Trophy className="w-24 h-24" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
