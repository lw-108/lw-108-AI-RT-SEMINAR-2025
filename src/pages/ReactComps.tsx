import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const ReactComps = () => {
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

    const components = [
        { name: "Button", description: "Interactive button component with variants" },
        { name: "Card", description: "Container component for content sections" },
        { name: "Dialog", description: "Modal dialog for user interactions" },
        { name: "Form", description: "Form handling with validation" },
        { name: "Navigation", description: "Responsive navigation components" },
        { name: "Toast", description: "Notification system for user feedback" }
    ];

    return ( <section id="react-comps" className="py-16 bg-white dark:bg-gray-900">
        <div className="min-h-screen bg-background transition-colors duration-300">
            <Navbar />
            <main className="pt-20">
                <section className="py-16 bg-background">
                    <div className="section-container opacity-0 animate-on-scroll">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="pulse-chip">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">⚛️</span>
                                <span>React Components</span>
                            </div>
                        </div>

                        <h1 className="text-5xl font-display font-bold mb-8 text-foreground">
                            React-Comps Library
                        </h1>

                        <p className="text-xl text-muted-foreground mb-12">
                            Reusable React components built with TypeScript and TailwindCSS
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {components.map((component, index) => (
                                <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {component.name}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {component.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
        </section>
    );
};

export default ReactComps;
