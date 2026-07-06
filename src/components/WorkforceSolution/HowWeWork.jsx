import { FiBriefcase, FiTarget, FiSearch, FiClipboard, FiSettings, FiUsers } from 'react-icons/fi';
import { useScrollReveal } from '../common/useScrollReveal';

const steps = [
  { icon: FiBriefcase, step: 'Step 1', title: 'Understand Your Business' },
  { icon: FiTarget,    step: 'Step 2', title: 'Identify Talent Requirements' },
  { icon: FiSearch,    step: 'Step 3', title: 'Source & Screen Candidates' },
  { icon: FiClipboard, step: 'Step 4', title: 'Interview & Assessment' },
  { icon: FiSettings,  step: 'Step 5', title: 'Placement & Onboarding' },
  { icon: FiUsers,     step: 'Step 6', title: 'Ongoing Support' },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-gray-50 py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">Our Proven Process</p>
          <h2 className="font-bold text-3xl md:text-4xl text-blue-900">How We Work</h2>
        </div>

        <div className="relative">
          {/* Dashed connector — desktop only */}
          <div className="hidden lg:block absolute top-[22px] left-[calc(100%/12)] right-[calc(100%/12)]
                          border-t-2 border-dashed border-orange-400 opacity-60 z-0" aria-hidden="true" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {steps.map(({ icon: Icon, step, title }) => (
              <div
                key={step}
                className="relative z-10 flex flex-col items-center text-center gap-3"
              >
                <span className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-md
                                 hover:bg-blue-800 transition-colors duration-200">
                  <Icon size={20} className="text-white" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-600 text-xs font-medium">{step}</span>
                  <span className="font-semibold text-sm text-blue-900 leading-snug">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
