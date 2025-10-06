import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from "@/hooks/use-toast";

const FeedbackSection = () => {
    const [formData, setFormData] = useState({
        username: '',
        registerNumber: '',
        email: '',
        feedback: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'feedback'), {
                ...formData,
                timestamp: new Date().toISOString()
            });

            toast({
                title: "Thank you for your feedback!",
                description: "Your response has been recorded successfully."
            });

            setFormData({ username: '', registerNumber: '', email: '', feedback: '' });
        } catch (error) {
            toast({
                title: "Submission failed",
                description: "Please try again later.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Seminar Feedback</h2>
                    <p className="text-lg text-muted-foreground">
                        Share your thoughts and help us improve future seminars
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-lg">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                            Username
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            className="w-full px-6 py-4 text-lg rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                            Register Number
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.registerNumber}
                            onChange={(e) => setFormData({ ...formData, registerNumber: e.target.value })}
                            className="w-full px-6 py-4 text-lg rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                            placeholder="Enter your register number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                            Email ID
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-6 py-4 text-lg rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                            Feedback Comments
                        </label>
                        <textarea
                            required
                            rows={8}
                            value={formData.feedback}
                            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                            className="w-full px-6 py-4 text-lg rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all"
                            placeholder="Share your detailed feedback here..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 text-lg rounded-lg transition-all duration-300 disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FeedbackSection;
