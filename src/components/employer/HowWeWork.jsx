import React from "react";
import {
  FileSearch,
  ClipboardList,
  Megaphone,
  Users,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Discovery",
    desc: "Understanding your business, culture, and requirements.",
  },
  {
    icon: ClipboardList,
    title: "Requirement Planning",
    desc: "Defining the ideal candidate profile and timeline.",
  },
  {
    icon: Megaphone,
    title: "Candidate Search",
    desc: "Active headhunting across our talent network.",
  },
  {
    icon: Users,
    title: "Shortlisting",
    desc: "Presenting only the best-matched candidates.",
  },
  {
    icon: PhoneCall,
    title: "Interview Support",
    desc: "Full coordination and coaching throughout.",
  },
  {
    icon: ShieldCheck,
    title: "Successful Hire",
    desc: "Placement, onboarding support, and follow-up.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-[linear-gradient(135deg,_#F0D7A4_0%,_#E9C65C_25%,_#D8AE32_50%,_#F4E4C3_75%,_#F7F3EA_100%)]  py-16 px-6 md:px-16 overflow-hidden">
      <div className="relative z-10 text-center mb-14">
        <p className="text-gray-700 tracking-widest text-sm font-semibold mb-2">
          FROM BRIEF TO SUCCESSFUL HIRE
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
          How We Work
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-5xl mx-auto text-center">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center px-4">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <div className="absolute inset-0 bg-brand-green/40 rotate-45 rounded-md" />
              <Icon className="relative z-10 text-brand-navy" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{title}</h3>
            <p className="text-sm text-gray-700 max-w-[220px]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
