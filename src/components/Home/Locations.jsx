import { useEffect, useState } from "react";
import axios from "axios";

function Locations() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/api/location-cards");
        setCards(response?.data?.data || []);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <span className="bg-[#f4f7fb] text-[#004CA5] px-4 py-2 rounded-full text-sm font-medium">
          Our Locations
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004CA5] mt-5">
          Our Office Locations
        </h2>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-72 animate-pulse rounded-3xl bg-gray-200"
            />
          ))}
        </div>
      ) : error ? (
        <div className="mt-12 rounded-3xl border border-dashed border-orange-200 bg-orange-50 p-8 text-center text-gray-600">
          Locations are temporarily unavailable.
        </div>
      ) : cards.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-dashed border-orange-200 bg-orange-50 p-8 text-center text-gray-600">
          No locations available right now.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {cards.map((card, index) => {
            const cardId = card._id || `${card.cityname}-${index}`;
            const isImageLoaded = loadedImages[cardId];

            return (
              <div
                key={cardId}
                className="group relative h-72 overflow-hidden rounded-3xl bg-slate-700 text-white shadow-lg"
              >
                {card.image ? (
                  <>
                    {!isImageLoaded && (
                      <div className="absolute inset-0 animate-pulse bg-gray-200" />
                    )}

                    <img
                      src={card.image}
                      alt={card.cityname}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleImageLoad(cardId)}
                      className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                        isImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </>
                ) : (
                  <div className="flex h-full items-end bg-linear-to-br from-orange-500 to-orange-700 p-6">
                    <h3 className="text-2xl font-bold">{card.cityname}</h3>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/90 to-transparent p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                    {card.contryname}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{card.cityname}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Locations;