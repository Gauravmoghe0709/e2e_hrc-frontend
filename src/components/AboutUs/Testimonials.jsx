import { useEffect, useState } from "react";
import { getTestimonials } from "../../services/aboutus/testimonialService";
import testimonialsbg from "../../assets/images/Testimonialbg.png";

const Testimonials = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await getTestimonials();
        const activeItems = (response?.data || [])
          .filter((item) => item.isActive !== false)
          .sort((a, b) => Number(a.displayOrder ?? a.order ?? 0) - Number(b.displayOrder ?? b.order ?? 0));
        setItems(activeItems);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="px-6 md:px-16 py-0 md:py-16"
      style={{
        backgroundImage: `url(${testimonialsbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl">
        {items[0]?.badgeText ? (
          <p className="rounded-full bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 w-fit">{items[0].badgeText}</p>
        ) : null}
        {items[0]?.sectionTitle ? (
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-300">
              {items[0].sectionTitle} {items[0]?.highlightText ? <span className="text-blue-700">{items[0].highlightText}</span> : null}
            </h2>
            <div className="hidden gap-3 md:flex">
              <button aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-white">
                ←
              </button>
              <button aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white">
                →
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-2 flex items-center justify-between">
            <div />
            <div className="hidden gap-3 md:flex">
              <button aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-white">
                ←
              </button>
              <button aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white">
                →
              </button>
            </div>
          </div>
        )}
          
        </div>
        {items[0]?.sectionDescription ? (
          <p className="mb-10 max-w-xl text-slate-500">{items[0].sectionDescription}</p>
        ) : null}

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-3 h-4 w-3/5 rounded-full bg-slate-200" />
                <div className="h-24 rounded-2xl bg-slate-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            Testimonials content is temporarily unavailable.
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No testimonials available.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item, idx) => (
              <div key={item._id || idx} className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                <div>
                  {item.image ? (
                    <div className="mb-4">
                      <img src={item.image} alt={item.companyName || item.testimonialTitle} className="w-12 h-12 rounded-full object-cover" />
                    </div>
                  ) : null}

                  <h3 className="mb-3 font-semibold text-slate-900">
                    {item.testimonialTitle || item.companyName || ''}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">“{item.review}”</p>
                </div>
                <div>
                  <p className="mt-6 font-serif italic text-slate-700">{item.companyName}</p>
                  {item.designation ? <p className="text-sm text-slate-500">{item.designation}</p> : null}
                  {item.rating ? <p className="text-sm text-orange-500 mt-2">{`★`.repeat(Math.max(0, Math.min(5, Number(item.rating))))}</p> : null}
                </div>
              </div>
            ))}
          </div>
        )}
    </section>
  );
};

export default Testimonials;
