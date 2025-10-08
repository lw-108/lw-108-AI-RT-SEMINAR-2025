// ✅ All imports must be at the very top
import React, { useState } from "react";
import { X } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    registerNumber: "",
    email: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null; // ✅ this must come after imports, inside component

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "feedback"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFormData({
        username: "",
        registerNumber: "",
        email: "",
        feedback: "",
      });

      onClose(); // close modal
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-pulse-600 rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-scale-in text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white dark:text-white">
            Seminar Feedback
          </h2>
          <button
            onClick={onClose}
            className="text-pulse-600 transition-colors bg-white rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-white-300 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              disabled={isSubmitting}
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full px-4 py-2 rounded-full border border-white-300 dark:border-white-600 bg-white dark:bg-[beige] text-pulse-900 dark:text-pulse-600 focus:ring-8 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Register Number */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-white-300 mb-2">
              Register Number
            </label>
            <input
              type="text"
              required
              disabled={isSubmitting}
              value={formData.registerNumber}
              onChange={(e) =>
                setFormData({ ...formData, registerNumber: e.target.value })
              }
              className="w-full px-4 py-2 rounded-full border border-white-300 dark:border-white-600 bg-white dark:bg-[beige] text-pulse-900 dark:text-pulse-600 focus:ring-8 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-white-300 mb-2">
              Email ID
            </label>
            <input
              type="email"
              required
              disabled={isSubmitting}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-full border border-white-300 dark:border-white-600 bg-white dark:bg-[beige] text-pulse-900 dark:text-pulse-600 focus:ring-8 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="block text-sm font-medium text-white dark:text-white-300 mb-2">
              Feedback Comments
            </label>
            <textarea
              required
              rows={4}
              disabled={isSubmitting}
              value={formData.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
              className="w-full px-4 py-2 rounded-3xl border border-white-300 dark:border-white-600 bg-white dark:bg-[beige] text-pulse-900 dark:text-pulse-600 focus:ring-8 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-3 rounded-lg transition-all duration-300 disabled:opacity-50 hover:bg-white hover:text-pulse-600"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
