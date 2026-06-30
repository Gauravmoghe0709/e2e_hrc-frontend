import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const normalizeServices = (services = []) => {
  return [...services]
    .filter((service) => service.isActive !== false)
    .sort((a, b) => {
      const orderA = Number(a.displayOrder ?? a.order ?? 0);
      const orderB = Number(b.displayOrder ?? b.order ?? 0);
      return orderA - orderB;
    });
};

function Sectors() {
  const scrollRef = useRef(null);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("/api/services");
        if (isMounted) {
          setServices(normalizeServices(response?.data?.data || []));
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setServices([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchServices();

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f4f7fb]">
      <div className="mx-auto max-w-375 px-6 py-20 sm:px-10 lg:px-14">
        <span className="rounded-full bg-lime-100 px-4 py-2 text-sm font-bold text-green-700">
          Industries We Serve
        </span>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-bold text-blue-700 sm:text-4xl lg:text-5xl">
            Deep expertise across 25+ sectors
          </h2>

          {!isLoading && services.length > 0 && (
            <div className="flex gap-4">
              <button
                onClick={scrollLeft}
                aria-label="Scroll services left"
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-700 text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={scrollRight}
                aria-label="Scroll services right"
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-700 text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-90 animate-pulse overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <div className="h-full w-full bg-linear-to-br from-slate-200 to-slate-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="mt-12 rounded-3xl border border-dashed border-blue-200 bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700">Services are temporarily unavailable</h3>
            <p className="mt-2 text-sm text-gray-600">
              Please check back soon for the latest service offerings.
            </p>
          </div>
        ) : services.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-blue-200 bg-white p-8 text-center text-gray-600 shadow-sm">
            No services available.
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {services.map((service) => (
              <div
                key={service._id || service.title}
                className="group relative min-w-70 max-w-77.5 flex-1 overflow-hidden rounded-3xl shadow-sm sm:min-w-77.5"
              >
                <div className="h-102.5 w-full">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#0f4c81] via-[#2b6cb0] to-[#77c0f4] text-center text-sm font-semibold text-white">
                      {service.title}
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-black/45 transition duration-300 group-hover:bg-black/65" />

                <div className="absolute bottom-8 left-6 right-6 text-white transition-all duration-300">
                  <h3 className="text-2xl font-extrabold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-6 text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {service.shortDescription || "Tailored recruitment solutions for this sector."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Sectors;