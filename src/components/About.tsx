"use client";

import { motion } from "framer-motion";
import { Plane, BookOpen, Film, Mic } from "lucide-react";
import { PROFILE } from "@/constants";

export default function About() {
    const hobbies = [
        { name: "Travelling", icon: Plane, color: "text-blue-400", bg: "bg-blue-400/10" },
        { name: "Reading", icon: BookOpen, color: "text-emerald-400", bg: "bg-emerald-400/10" },
        { name: "Movies", icon: Film, color: "text-purple-400", bg: "bg-purple-400/10" },
        { name: "Singing", icon: Mic, color: "text-rose-400", bg: "bg-rose-400/10" },
    ];

    return (
        <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Journey */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="space-y-6 text-lg text-slate-400 leading-relaxed font-normal"
                >
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                        My journey into software engineering started with a fascination for problem-solving. Graduating with a <span className="text-white font-bold">B.Tech in Electronics and Communication Engineering</span> from <span className="text-white font-bold">GRIET, Hyderabad (8.1 CGPA)</span>, I quickly realized my true passion lied in crafting scalable, intelligent digital solutions.
                    </motion.p>
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                        As a <span className="text-primary font-bold">DSA Instructor and Mentor</span> for over 500 students at Suntek, I honed my analytical skills, eventually climbing the ranks to become deeply involved in competitive programming (Max Rating <span className="text-white font-bold">1881 on LeetCode</span> / Global Rank <span className="text-white font-bold">268 in CodeChef</span>).
                    </motion.p>
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                        This foundation laid the groundwork for my transition into the enterprise realm. After gaining valuable exposure to SAP processes sequentially at <span className="text-white font-bold">Accenture</span>, I am currently navigating the complexities of Artificial Intelligence as a <span className="text-white font-bold">Systems Engineer at TCS</span>. Here, I am architecting a comprehensive AI Readiness Assessment platform from the ground up, utilizing React, FastAPI, and Postgres to build out highly performant full-stack features and context-aware RAG pipelines.
                    </motion.p>
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                        Beyond the code, I am driven by the belief that the best systems are built at the intersection of robust architecture and intuitive design.
                    </motion.p>
                </motion.div>

                {/* Right Column: Life Beyond Code */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                >
                    {/* Decorative background blur */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur-xl opacity-20" />

                    <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-10 relative overflow-hidden h-full">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Life Beyond Code</h3>

                        <p className="text-neutral-400 mb-10 text-lg">
                            When I'm not optimizing algorithms or designing system architectures, I'm usually finding inspiration in the real world.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {hobbies.map((hobby, index) => (
                                <motion.div
                                    key={hobby.name}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors group"
                                >
                                    <div className={`p-4 rounded-full mb-4 ${hobby.bg} group-hover:scale-110 transition-transform duration-300`}>
                                        <hobby.icon className={`w-8 h-8 ${hobby.color}`} />
                                    </div>
                                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
                                        {hobby.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Subtle corner decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
