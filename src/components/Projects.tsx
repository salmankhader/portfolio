"use client";

import { motion } from "framer-motion";
import { Github, Calendar, FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/constants";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-10 group hover:border-primary/30 transition-colors flex flex-col h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FolderGit2 className="w-32 h-32" />
                        </div>
                        <div className="flex justify-between items-start mb-6 z-10 relative">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title.split('|')[0].trim()}</h3>
                                <p className="text-primary font-medium">{project.title.split('|')[1]?.trim()}</p>
                            </div>
                            <div className="flex gap-3">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6 z-10 relative">
                            <Calendar className="w-4 h-4" />
                            <span>{project.duration}</span>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow z-10 relative">
                            {project.description.map((desc, i) => (
                                <li key={i} className="text-slate-400 flex items-start text-base">
                                    <span className="text-primary mr-3 mt-1.5">•</span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-auto z-10 relative">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-neutral-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
