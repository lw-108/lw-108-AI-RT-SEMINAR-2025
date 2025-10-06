import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call or form submission
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "Your download will begin shortly.",
      });

      // ✅ Automatically trigger file download
      const link = document.createElement("a");
      link.href = "/seminar-slides.pptx"; // File inside /public folder
      link.download = "AI_TOOLS & REACT_WEB-COMPS.pptx"; // Optional custom name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form state
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-white dark:bg-gray-900 py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          {/* Header Chip */}
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                05
              </span>
              <span>Conclusion</span>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-5xl font-display font-bold mb-4 text-left text-gray-900 dark:text-white">
            Thank you for exploring AI + React!
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 text-left">
            Download the seminar slides and connect with us for more insights.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <div className="relative flex-grow w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email for updates"
                className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700 dark:text-gray-300"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 md:ml-4 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Downloading..." : "Download Seminar Slides"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
