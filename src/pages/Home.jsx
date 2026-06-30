import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import Sectors from "../components/Sectors";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Locations from "../components/Locations";
import Blogs from "../components/Blogs";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCards />
      <Sectors />
      <Process />
      <WhyChooseUs />
      <Locations />
      <Blogs />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;