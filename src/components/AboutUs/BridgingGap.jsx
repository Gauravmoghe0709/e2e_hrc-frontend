import React, { useEffect, useState } from "react";
import { getAboutInfo } from "../../services/aboutServices";

const BridgingGap = () => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAboutInfo();
        setSectionData(response?.data || null);
      } catch (error) {
        console.error("Failed to load Bridging the Gap section", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="px-6 md:px-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="h-96 w-full rounded-2xl bg-slate-100 animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 w-32 rounded bg-slate-200 animate-pulse" />
            <div className="h-10 w-full rounded bg-slate-200 animate-pulse" />
            <div className="h-20 w-full rounded bg-slate-200 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (!sectionData || sectionData.isActive === false) {
    return null;
  }

  const features = [sectionData.feature1, sectionData.feature2, sectionData.feature3].filter(
    (item) => item && item.toString().trim() !== ""
  );

  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={sectionData.image || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"}
              alt={sectionData.heading || "Bridging the Gap section"}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-5 leading-snug">
            {sectionData.heading}
          </h2>
          <p className="text-slate-500 leading-relaxed mb-6">{sectionData.description}</p>

          {features.length > 0 && (
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={`${feature}-${index}`} className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-blue-800 rounded-sm shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default BridgingGap;
