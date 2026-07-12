import React, { useEffect, useState } from "react";
import { getWhyChooseE2E } from "../../services/aboutus/whyChooseE2EService";
import  {ShieldCheck} from "lucide-react";

const DEFAULT_TITLE = "Why Choose E2E HRC?";
const DEFAULT_DESC = "Delivering excellence through dedicated service and unparalleled market knowledge.";

const FallbackImage = () => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-lg mb-4 text-slate-400">
    •
  </div>
);

const WhyChooseUs = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await getWhyChooseE2E();
        const data = res?.data ?? [];
        // only active records and sort by displayOrder asc
        const active = (Array.isArray(data) ? data : [])
          .filter((d) => d && (d.isActive === undefined ? true : d.isActive))
          .sort((a, b) => (Number(a.displayOrder || 0) - Number(b.displayOrder || 0)));

        if (mounted) setItems(active);
      } catch (err) {
        console.error('Failed to load Why Choose data', err);
        if (mounted) setError(err.message || 'Failed to load data');
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  const headerTitle = items[0]?.sectionTitle || DEFAULT_TITLE;
  const headerDesc = items[0]?.sectionDescription || DEFAULT_DESC;


  return (
    <section className="px-6 md:px-16 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{headerTitle}</h2>
          <p className="text-slate-500">{headerDesc}</p>
        </div>

        {isLoading ? (
          <div className="text-center py-10 text-slate-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : items.length === 0 ? (
          <div className="text-center py-10 text-slate-500">No items to show.</div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              {items.map((card, idx) => {
                const hasImage = !!card.image;

                if (hasImage) {
                  return (
                    <div
                      key={card._id || card.title || idx}
                      className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow md:col-span-3"
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-1">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-lg mb-4">
                            <ShieldCheck className="w-5 h-5 text-blue-900" />
                          </div>
                          <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
                        </div>

                        <div className="w-full md:w-56 h-36 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  );
                }

                // small card (no image)
                return (
                  <div
                    key={card._id || card.title || idx}
                    className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-lg mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-900" />
                    </div>

                    <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
