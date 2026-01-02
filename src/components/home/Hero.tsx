"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Database, Globe } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-3 py-1 mb-8 border border-border/50"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">Available for new projects</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6 max-w-4xl"
                >
                    Full Stack Engineer <br />
                    <span className="text-primary">Crafting Digital Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                    I'm Enes, a software engineer with 2 years of experience building scalable backend, web and mobile applications.
                    I turn complex problems into elegant, user-centric products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 group cursor-default"
                    >
                        View My Apps
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="mailto:eneskasim_93@hotmail.com"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-all duration-200"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Tech Stack Icons Floating Animation */}
                <div className="mt-20 flex justify-center gap-8 text-muted-foreground/20">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <Code size={40} />
                    </motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                        <Database size={40} />
                    </motion.div>
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                        <Globe size={40} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
