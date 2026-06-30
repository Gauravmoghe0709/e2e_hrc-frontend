import { useEffect, useMemo, useState } from "react";
import { getApproachCards } from "../services/approachCardService";

const fallbackImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";

function WhyChooseUs() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchCards = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const response = await getApproachCards();
        if (isMounted) {
          const activeCards = (response?.data || [])
            .filter((card) => card.isActive !== false)
            .sort((a, b) => Number(a.displayOrder || 0) - Number(b.displayOrder || 0));
          setCards(activeCards);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
          setCards([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCards();

    return () => {
      isMounted = false;
    };
  }, []);

  const cardAccentClasses = useMemo(
    () => ["text-blue-700", "text-orange-400", "text-lime-500"],
    []
  );

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-375 px-6 sm:px-10 lg:px-14">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">
            Why Choose E2E HRC
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-700 sm:text-4xl lg:text-5xl">
            What makes us different
          </h2>
        </div>

        {isLoading ? (
          <div className="grid gap-10 md:grid-cols-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse rounded-3xl bg-[#f7f9fc] p-10">
                <div className="h-65 rounded-2xl bg-slate-200" />
                <div className="mt-6 h-4 w-1/3 rounded bg-slate-200" />
                <div className="mt-4 h-8 w-2/3 rounded bg-slate-200" />
                <div className="mt-4 h-20 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-dashed border-blue-200 bg-[#f7f9fc] p-10 text-center text-gray-600">
            Why Choose content is temporarily unavailable. Please try again soon.
          </div>
        ) : cards.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-blue-200 bg-[#f7f9fc] p-10 text-center text-gray-600">
            No data available.
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {cards.map((card, index) => {
              const accentClass = cardAccentClasses[index % cardAccentClasses.length];
              const imageSrc = card.image || fallbackImage;

              return (
                <div key={card._id || card.title} className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl bg-[#f7f9fc] md:grid-cols-2">
                  <img
                    src={imageSrc}
                    alt={card.title}
                    className="h-105 w-full object-contain bg-white p-4"
                  />

                  <div className="relative min-h-105 overflow-hidden p-8 sm:p-10 lg:p-14">
                    <span className={`absolute right-8 top-6 text-[220px] font-extrabold leading-none ${accentClass} opacity-20`}>
                      {card.title?.charAt(0) || "E"}
                    </span>

                    <div className="relative z-10">
                      <p className={`text-sm font-extrabold uppercase tracking-widest ${accentClass}`}>
                        {card.subtitle}
                      </p>

                      <h3 className="mt-6 text-2xl font-extrabold text-blue-700 sm:text-3xl">
                        {card.title}
                      </h3>

                      <p className="mt-6 text-base leading-8 text-gray-600">
                        {card.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
                        <div>
                          <h4 className={`text-3xl font-extrabold ${accentClass}`}>
                            {card.stat1Value || "—"}
                          </h4>
                          <p className="text-gray-500">{card.stat1Label || "Value"}</p>
                        </div>

                        <div>
                          <h4 className={`text-3xl font-extrabold ${accentClass}`}>
                            {card.stat2Value || "—"}
                          </h4>
                          <p className="text-gray-500">{card.stat2Label || "Value"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default WhyChooseUs;