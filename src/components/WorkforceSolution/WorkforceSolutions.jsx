import { FiUserPlus, FiClock, FiTarget, FiGlobe, FiShare2, FiMapPin } from 'react-icons/fi';

const services = [
  { icon: FiUserPlus, title: 'Permanent Recruitment',           desc: 'Hire skilled professionals for long-term success with our tailored recruitment approach.' },
  { icon: FiClock,    title: 'Contract & Temporary Staffing',   desc: 'Flexible staffing solutions to meet short-term, seasonal, and project-based business needs.' },
  { icon: FiTarget,   title: 'Executive Search',                desc: 'We identify and attract senior leaders and specialists for critical business roles.' },
  { icon: FiGlobe,    title: 'International Recruitment',       desc: 'Access qualified talent from the UK, Europe, GCC, and Asia to support global growth.' },
  { icon: FiShare2,   title: 'Recruitment Process Outsourcing', desc: 'Streamline your hiring with dedicated recruitment support and scalable RPO solutions.' },
  { icon: FiMapPin,   title: 'Workforce Consultancy',           desc: 'Expert advice on workforce planning, hiring strategies, market insights and organisational growth.' },
];

export default function WorkforceSolutions() {
  return (
    <section id="solutions" className="bg-gray-100 py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-blue-900">
            Our Workforce Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <span className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-white" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-blue-900 leading-snug">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
