import React from 'react';
import { Clock, Users, FileText, Globe } from 'lucide-react';
import Heroimage from "../../assets/images/image hero.jpg"
import { FiAward, FiUsers, FiCheckCircle, FiGlobe } from "react-icons/fi";
import styles from "../common/WorkforceHeroSection.module.css";
const stats = [
  { icon: FiAward, value: "18+", label: "Years Experience" },
  { icon: FiUsers, value: "450+", label: "Clients Served" },
  { icon: FiCheckCircle, value: "12K+", label: "Placements" },
  { icon: FiGlobe, value: "4", label: "Global Offices" },
];
export default function Hero() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="border-2 border-orange-400 text-orange-500 text-sm font-semibold px-6 py-2 rounded-full uppercase tracking-wider">
                Strategic • Flexible • Global
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-blue-900">Workforce Solutions</span>
                <br />
                <span className="text-blue-900">That Drive</span>
                <br />
                <span className="text-orange-500">Business Growth</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed">
              At E2E Human Resource Consultancy, we provide end-to-end workforce solutions that help organisations attract, recruit, manage, and retain exceptional talent.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden md:block">
            <div className="relative">
              <img
                src={Heroimage}
                alt="Professional workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className={styles.statsCard} role="list" aria-label="Company statistics">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className={styles.statItem} role="listitem">
              <span className={styles.statIcon} aria-hidden="true">
                <Icon size={22} />
              </span>
              <strong className={styles.statValue}>{value}</strong>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
