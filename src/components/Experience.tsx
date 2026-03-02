"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/constants";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="relative border-l border-neutral-800 ml-4 md:ml-8 space-y-12">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={exp.company + index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[5px] top-6 w-[9px] h-[9px] rounded-full bg-primary ring-4 ring-neutral-950"></div>

                        <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-10 hover:border-primary/30 transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                                        <Building2 className="w-5 h-5" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-sm text-neutral-400 font-medium bg-white/5 py-2 px-4 rounded-xl border border-white/5 md:w-fit md:ml-auto">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="w-4 h-4" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-slate-400 flex items-start text-base">
                                        <span className="text-primary mr-3 mt-1.5">•</span>
                                        <span className="leading-relaxed">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
