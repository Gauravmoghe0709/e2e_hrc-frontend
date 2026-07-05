import React, { useEffect, useState } from "react";
import { getWhoWeAre } from "../../services/aboutServices";

const WhoWeAre = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWhoWeAre = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await getWhoWeAre();
        setData(response?.data || null);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWhoWeAre();
  }, []);

  // Check if section is active or if no data exists
  if (!loading && (!data || data.isActive === false)) {
    return null;
  }

  const title = data?.title || "Who We Are";
  const description1 = data?.description1 || "";
  const description2 = data?.description2 || "";
  const description3 = data?.description3 || "";
  const image = data?.image || "";
  const experienceYears = data?.experienceYears || "";
  const experienceLabel = data?.experienceLabel || "";

  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          {loading ? (
            <div className="text-slate-500">Loading content...</div>
          ) : error ? (
            <div className="text-slate-500">Content is temporarily unavailable.</div>
          ) : (
            <>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">{title}</h2>
              {description1 ? <p className="mb-5 leading-relaxed text-slate-500">{description1}</p> : null}
              {description2 ? <p className="mb-5 leading-relaxed text-slate-500">{description2}</p> : null}
              {description3 ? <p className="leading-relaxed text-slate-500">{description3}</p> : null}
            </>
          )}
        </div>

        <div className="relative">
          {image ? (
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={image} alt={title} className="h-80 w-full object-cover" />
            </div>
          ) : null}

          {experienceYears || experienceLabel ? (
            <div className="absolute -bottom-6 left-6 rounded-xl bg-blue-900 px-6 py-4 text-white shadow-lg">
              <p className="text-2xl font-bold leading-none">{experienceYears}</p>
              <p className="mt-1 text-xs tracking-wide text-blue-200">{experienceLabel}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
