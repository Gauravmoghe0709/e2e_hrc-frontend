import { useEffect, useState } from "react";
import { getMissionVision } from "../../services/aboutus/missionVisionService";

const MissionVision = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await getMissionVision();
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

    fetchItems();
  }, []);

  return (
    <section className="bg-slate-50 px-6 py-10 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {isLoading ? (
          [1, 2].map((item) => (
            <div key={item} className="animate-pulse rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-6 h-10 w-10 rounded-full bg-slate-200" />
              <div className="mb-3 h-5 w-1/3 rounded-full bg-slate-200" />
              <div className="h-20 rounded-2xl bg-slate-100" />
            </div>
          ))
        ) : error ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 md:col-span-2">
            Mission & Vision content is temporarily unavailable.
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 md:col-span-2">
            No mission or vision items available.
          </div>
        ) : (
          items.map((item) => {
            const isVision = item.type === "vision";

            return (
              <div
                key={item._id || item.title}
                className={`rounded-2xl p-8 shadow-sm border ${
                  isVision
                    ? "bg-blue-900 text-white border-blue-800"
                    : "bg-white border-slate-100"
                }`}
              >
                <div className={`mb-6 flex h-10 w-10 items-center justify-center rounded-full ${
                  isVision ? "bg-blue-800" : "bg-orange-50 text-orange-500"
                }`}>
                  {isVision ? "👁️" : "🚩"}
                </div>
                <h3 className={`mb-3 text-xl font-bold ${isVision ? "text-orange-400" : "text-orange-500"}`}>
                  {item.title}
                </h3>
                <p className={`${isVision ? "text-blue-100" : "text-slate-500"} leading-relaxed`}>
                  {item.description}
                </p>
                {item.image ? (
                  <div className="mt-6 rounded-lg overflow-hidden border border-slate-100">
                    <img src={item.image} alt={item.title} className="w-full object-cover" />
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default MissionVision;
