import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";

import LazySection from "../components/common/LazySection";
import Loading from "../components/common/Loader";

const ServiceCards = lazy(() => import("../components/Home/ServiceCards"));
const Sectors = lazy(() => import("../components/Home/Sectors"));
const Process = lazy(() => import("../components/Home/Process"));
const Locations = lazy(() => import("../components/Home/Locations"));
const BlogSection = lazy(() => import("../components/Home/BlogSection"));
const ContactSection = lazy(() => import("../components/Home/ContactSection"));



function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <ServiceCards />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <Sectors />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <Process />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <Locations />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <BlogSection />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <ContactSection />
        </Suspense>
      </LazySection>

      <Footer />
    </>
  );
}

export default Home;