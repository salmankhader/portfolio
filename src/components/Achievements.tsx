"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Flame } from "lucide-react";
import { ACHIEVEMENTS } from "@/constants";

export default function Achievements() {
    const icons = [Trophy, Award, Medal, Star, Flame];

    return (
        <section id="achievements" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Milestones & Achievements</h2>
                <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                {ACHIEVEMENTS.map((achievement, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-6 p-6 mb-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 hover:border-primary/30 transition-all group"
                        >
                            <div className="p-4 rounded-full bg-white/5 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6" />
                            </div>
                            <p className="text-lg text-neutral-300 font-medium">{achievement}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
