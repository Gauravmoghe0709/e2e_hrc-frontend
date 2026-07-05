import React, { useState } from 'react';
import { ChevronDown, Users, Globe, User } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of Employer do you offer?",
      answer: "We offer diverse employer types including multinational corporations, mid-sized companies, startups, and enterprise organizations across various industries."
    },
    {
      question: "Do you provide international recruitment services?",
      answer: "Yes, we provide comprehensive international recruitment services with expertise in cross-border hiring, visa sponsorship, and global talent acquisition."
    },
    {
      question: "Can you support high-volume hiring?",
      answer: "Absolutely. Our team specializes in managing high-volume recruitment campaigns with dedicated resources and proven processes for rapid scaling."
    },
    {
      question: "Do you provide temporary and contract staffing?",
      answer: "Yes, we offer flexible staffing solutions including temporary positions, contract roles, and project-based placements tailored to your needs."
    },
    {
      question: "How quickly can you fill a vacancy?",
      answer: "We typically fill vacancies within 2-4 weeks, depending on role complexity and requirements. Our efficient processes ensure faster time-to-hire."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          
          {/* Left Section - FAQ */}
          <div className="space-y-6">
            <div className="text-sm font-semibold tracking-wide text-amber-500 uppercase">
              Frequently Asked Questions
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-semibold text-blue-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - CTA Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
              
              {/* Icon Group - Top Right */}
              <div className="absolute top-6 right-4 space-y-7">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Users size={24} className="text-blue-200" />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Globe size={24} className="text-blue-200" />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <User size={24} className="text-blue-200" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 pr-4">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    Let's Build Your Employer Together
                  </h2>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Partner with E2E HRC and experience recruitment solutions that drive growth, efficiency and long-term success.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 group">
                  Submit a Vacancy
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
