import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/employee/HeroSection';
import EmployeeJourneyServices from '../components/employee/EmployeeJourneyServices';
import TestimonialsCarousel from '../components/employee/TestimonialsCarousel';
import WhyChooseE2E from '../components/employee/WhyChooseE2E';
import testimonialsbg from "../assets/images/Testimonialbg.png";
import './Employee.css';

import sectorConstruction from '../assets/images/sectors/construction.jpg';
import sectorEducation from '../assets/images/sectors/education.jpg';
import sectorEngineering from '../assets/images/sectors/engineering.jpg';
import sectorFinance from '../assets/images/sectors/finance.jpg';
import sectorHealthcare from '../assets/images/sectors/healthcare.jpg';
import sectorIT from '../assets/images/sectors/it technology.jpg';
import sectorLogistics from '../assets/images/sectors/logistics.jpg';
import sectorManufacturing from '../assets/images/sectors/manuifacturing.jpg';
import FAQAndCTA from '../components/employer/FAQSection';

const testimonialsData = [
  {
    title: 'Efficient and Effective Hiring Process!',
    quote: "The efficiency of Applyfier's hiring process is commendable. The platform's intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.",
    logo: '/images/employee/Union.png',
    alt: 'Ford',
  },
  {
    title: 'Top-Notch Talent at Our Fingertips!',
    quote: "As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    logo: '/images/employee/disnep1.png',
    alt: 'Disney',
  },
  {
    title: 'Top-Notch Talent at Our Fingertips!',
    quote: "As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    logo: '/images/employee/disnep1.png',
    alt: 'Disney',
  },
];

import { useRef } from 'react';

export default function Employee() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 300;
    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ===== C. HERO SECTION ===== */}
      <HeroSection />

      <EmployeeJourneyServices></EmployeeJourneyServices>
      {/* ===== E. WHAT MAKES US DIFFERENT ===== */}
      <WhyChooseE2E />

      {/* ===== F. DEEP EXPERTISE ACROSS 25+ SECTORS ===== */}
      <section className="industries-section">
        <div className="industries-header">
          <div className="industries-header-left">
            <div className="industries-badge">Industries We Serve</div>
            <h2 className="industries-heading">Deep expertise across 25+ sectors</h2>
          </div>
          <div className="industries-nav">
            <button className="industries-nav-btn" aria-label="Previous" onClick={() => scroll('prev')}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#004CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="industries-nav-btn" aria-label="Next" onClick={() => scroll('next')}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="#004CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="industries-cards-wrapper">
          <div className="industries-cards-track" ref={trackRef}>
            {[
              { name: 'Manufacturing', image: sectorManufacturing },
              { name: 'Healthcare', image: sectorHealthcare },
              { name: 'Engineering', image: sectorEngineering },
              { name: 'Construction', image: sectorConstruction },
              { name: 'Logistics', image: sectorLogistics },
              { name: 'Finance', image: sectorFinance },
              { name: 'Education', image: sectorEducation },
              { name: 'IT Technology', image: sectorIT },
            ].map((sector) => (
              <div key={sector.name} className="industries-card">
                <img src={sector.image} alt={sector.name} className="industries-card-img" loading="lazy" />
                <div className="industries-card-overlay" />
                <div className="industries-card-content">
                  <div className="industries-card-heading-wrap">
                    <h3 className="industries-card-title">{sector.name}</h3>
                  </div>
                  <div className="industries-card-link"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAndCTA />

      {/* ===== G. TESTIMONIALS ===== */}
      <section className="emp-testimonials relative overflow-hidden" style={{
        backgroundImage: `url(${testimonialsbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "43px 100px 59px 100px",
        minHeight: "500px",
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="emp-testimonials-inner relative z-10 mx-auto flex flex-col" style={{ maxWidth: '1240px', gap: '50px' }}>

          <div className="emp-testimonials-top flex flex-col" style={{ width: '100%', gap: '40px' }}>
            <div className="emp-testimonials-header flex flex-col" style={{ width: '100%', gap: '30px' }}>
              <div className="emp-testimonials-badge flex items-center" style={{ gap: '20px', height: '32px' }}>
                <div style={{ width: '80px', borderTop: '1px solid #FFFFFF' }} />
                <span className="bg-white inline-flex items-center justify-center" style={{ width: '135px', height: '32px', padding: '10px 20px', borderRadius: '20px', gap: '10px' }}>
                  <span className="font-[Inter] text-[16px] leading-[19px] text-[#F39308]" style={{ fontWeight: 400 }}>Testimonials</span>
                </span>
              </div>
              <h2 className="emp-testimonials-heading font-[Poppins] font-semibold text-[36px] text-white m-0" style={{ width: '100%', lineHeight: '76px', letterSpacing: '0%' }}>
                What our candidates say
              </h2>
            </div>

            <div className="emp-testimonials-controls flex items-start" style={{ width: '100%', gap: '568px' }}>
              <p className="emp-testimonials-desc font-[Inter] text-white m-0" style={{ width: '100%', maxWidth: '580px', fontSize: '16px', lineHeight: '19px', fontWeight: 400, display: 'flex', alignItems: 'flex-end' }}>
                Discover the stories and experiences of individuals and companies who have found success and excellence through Applyfier
              </p>
            </div>
          </div>

          <TestimonialsCarousel data={testimonialsData} speed={30} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
