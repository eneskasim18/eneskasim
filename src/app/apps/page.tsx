"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const apps = [
    {
        id: 1,
        name: "Example App 1",
        description: "A revolutionary mobile application that solves real-world problems with elegant design.",
        icon: "/window.svg", // Placeholder
        platform: "iOS & Android",
        link: "#",
        tags: ["React Native", "TypeScript", "Node.js"]
    },
    {
        id: 2,
        name: "Example App 2",
        description: "Productivity tool designed to streamline your daily workflow and boost efficiency.",
        icon: "/globe.svg", // Placeholder
        platform: "iOS",
        link: "#",
        tags: ["SwiftUI", "CoreData"]
    }
];

export default function AppsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        My Applications
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A collection of mobile and web applications I've built and published.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apps.map((app, index) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <Smartphone className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <Link
                                    href={app.link}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            </div>

                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {app.name}
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                {app.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {app.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
