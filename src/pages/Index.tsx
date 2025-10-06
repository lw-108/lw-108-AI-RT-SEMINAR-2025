
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HumanoidSection from "@/components/HumanoidSection";
import IntroQuote from "@/components/IntroQuote";
import Features from "@/components/Features";
import AItools from "@/components/AISettings";
import ReactSection from "@/components/ReactSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeedbackModal from "@/components/FeedbackModal";
import FeedbackSection from "@/components/FeedbackSection";


const Index = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackShown, setFeedbackShown] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!feedbackShown && !sessionStorage.getItem('feedbackSubmitted')) {
        setShowFeedbackModal(true);
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !feedbackShown && !sessionStorage.getItem('feedbackSubmitted')) {
        setShowFeedbackModal(true);
        setFeedbackShown(true);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [feedbackShown]);

  const handleCloseFeedback = () => {
    setShowFeedbackModal(false);
    sessionStorage.setItem('feedbackSubmitted', 'true');
  };

  // Initialize intersection observer to detect when elements enter viewport
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

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <HumanoidSection />
        <IntroQuote />
        <Features />
        <AItools/>
        <ReactSection />
        <Newsletter />
        <FeedbackSection/>
        <Footer />
      </main>
      <FeedbackModal isOpen={showFeedbackModal} onClose={handleCloseFeedback} />
      
    </div>
  );
};

export default Index;
