import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const AISettings = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            <Navbar />
            <main className="pt-20">
                <section className="py-16 bg-secondary">
                    <div className="section-container opacity-0 animate-on-scroll">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="pulse-chip">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">⚙️</span>
                                <span>AI Settings</span>
                            </div>
                        </div>

                        <h1 className="text-5xl font-display font-bold mb-8 text-foreground">
                            AI-⚙️ Configuration
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Model Selection</h3>
                                <p className="text-muted-foreground">
                                    Choose and configure AI models for your applications
                                </p>
                            </Card>

                            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-foreground">API Integration</h3>
                                <p className="text-muted-foreground">
                                    Manage API keys and endpoints for AI services
                                </p>
                            </Card>

                            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Performance Tuning</h3>
                                <p className="text-muted-foreground">
                                    Optimize response times and accuracy settings
                                </p>
                            </Card>

                            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Usage Analytics</h3>
                                <p className="text-muted-foreground">
                                    Monitor AI tool usage and performance metrics
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AISettings;
