import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  {
    name: "Manufacturing",
    img: "https://images.unsplash.com/photo-1581091870622-1c6b5c9d3b0a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Engineering",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Construction",
    img: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Logistics",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <span className="inline-block bg-brand-green/60 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Industries We Serve
      </span>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
          Deep expertise across 25+ sectors
        </h2>
        <div className="hidden sm:flex items-center gap-3">
          <button className="w-9 h-9 rounded-full border border-brand-navy/30 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-9 h-9 rounded-full border border-brand-navy/30 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {industries.map((item) => (
          <div
            key={item.name}
            className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
