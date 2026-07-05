import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "Efficient and Effective Hiring Process!",
    quote:
      "The efficiency of the hiring process is commendable. The platform's intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.",
    brand: "Ford",
  },
  {
    title: "Top-Notch Talent at Our Fingertips!",
    quote:
      "As an employer, finding top-notch talent is crucial for our success. This has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    brand: "Disney",
  },
  {
    title: "Top-Notch Talent, Every Time!",
    quote:
      "As an employer, finding top-notch talent is crucial for our success. The platform's automated system and vast candidate network helped us connect with exceptional team members quickly.",
    brand: "Disney",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-brand-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
        <div>
          <span className="inline-block bg-white text-brand-navy text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-gray-400 max-w-md text-sm">
            Discover the stories and experiences of individuals and companies
            who have found success and excellence through our platform.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-black transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white text-brand-black flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.title}
            className="bg-white text-brand-navy rounded-xl p-7 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <h3 className="font-bold text-lg mb-3">{t.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                "{t.quote}"
              </p>
            </div>
            <p className="mt-6 font-serif italic text-xl text-gray-800">
              {t.brand}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
