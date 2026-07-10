import { useState, useEffect } from "react";
import heroImgPlaceholder from "../../assets/images/hero.png";
import { getHeroData } from "../../services/heroService";

/* ─── Skeleton ─────────────────────────────────────────────────────────── */
function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))", isolation: "isolate" }}>
      <div className="animate-pulse mx-auto" style={{ maxWidth: "1280px", padding: "87px 0 135px" }}>
        <div className="px-4 sm:px-8">
          <div className="h-8 bg-gray-500/40 rounded-full w-28"></div>
          <div className="space-y-3 mt-6 lg:mt-10">
            <div className="h-16 bg-gray-500/40 rounded-lg w-3/4"></div>
            <div className="h-16 bg-gray-500/40 rounded-lg w-2/3"></div>
          </div>
          <div className="space-y-2 mt-4 lg:mt-6">
            <div className="h-5 bg-gray-500/40 rounded w-1/2"></div>
            <div className="h-5 bg-gray-500/40 rounded w-2/5"></div>
          </div>
          <div className="flex gap-4 pt-2 mt-6">
            <div className="h-14 bg-gray-500/40 rounded-full w-40"></div>
            <div className="h-14 bg-gray-500/40 rounded-full w-48"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Error / Fallback ─────────────────────────────────────────────────── */
function HeroFallback() {
  return (
    <section className="min-h-[320px] flex items-center justify-center" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))", isolation: "isolate" }}>
      <div className="text-center py-20 px-6">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-gray-300 text-sm">Hero content is currently unavailable. Please try again later.</p>
      </div>
    </section>
  );
}

/* ─── Main Hero Component ───────────────────────────────────────────────── */
function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await getHeroData();
        if (res && res.data) {
          setHeroData(res.data);
        }
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHero();
  }, []);

  if (isLoading) return <HeroSkeleton />;
  if (hasError) return <HeroFallback />;
  if (!heroData || heroData.isActive === false) return null;

  const imageSrc = heroData.heroImage || heroImgPlaceholder;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        isolation: "isolate",
        background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
      }}
    >
      {/* ── "HRC" background watermark ── */}
      <div
        className="absolute pointer-events-none select-none overflow-hidden leading-none"
        style={{
          left: "21px",
          top: "0px",
          width: "1339px",
          height: "623px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontSize: "610px",
          color: "#191C1E",
          zIndex: 0,
        }}
      >
        HRC
      </div>

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1280px", padding: "87px 0 135px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-4 sm:px-8">

          {/* ── Left column: Text content ── */}
          <div>
            {/* Trusted badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "linear-gradient(49.52deg, rgba(18, 149, 212, 0.5) -4.12%, rgba(126, 196, 67, 0.5) 85.04%)",
              }}
            >
              <span className="inline-block rounded-full" style={{ width: "8px", height: "8px", background: "#C8D96F" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.7px", color: "#00458D" }}>
                Trusted
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 lg:mt-10">
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", lineHeight: "1.2", letterSpacing: "-1.28px", display: "block", color: "#FFFFFF" }}>
                Connecting Talent.
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", lineHeight: "1.2", letterSpacing: "-1.28px", display: "block", color: "#FFFFFF" }}>
                Building{" "}
                <span style={{ color: "#F39308" }}>Futures.</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-4 lg:mt-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "23px",
                color: "#FFFFFF",
                maxWidth: "672px",
              }}
            >
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 lg:mt-8">
              <a
                href={heroData.buttonLink || "#"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "17px 32px",
                  background: "#F39308",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.7px",
                  color: "#004CA5",
                }}
              >
                Hire Talent
                <span>→</span>
              </a>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 32px",
                  background: "#F7F9FB",
                  border: "1px solid #C2C6D4",
                  borderRadius: "9999px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.7px",
                  color: "#004CA5",
                }}
              >
                Find Opportunities
                <span>→</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="border-t border-white/20 mt-8 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">0+</h3>
                <p className="text-xs sm:text-sm uppercase text-white/60 mt-0.5">Clients</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">0+</h3>
                <p className="text-xs sm:text-sm uppercase text-white/60 mt-0.5">Candidates</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">25+</h3>
                <p className="text-xs sm:text-sm uppercase text-white/60 mt-0.5">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">4</h3>
                <p className="text-xs sm:text-sm uppercase text-white/60 mt-0.5">Offices</p>
              </div>
            </div>
          </div>

          {/* ── Right column: Hero Image ── */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative">
              <div className="absolute pointer-events-none" style={{ top: "-28px", left: "38.5px", width: "519px", height: "519px", borderRadius: "9999px", background: "#C2D760", opacity: "0.33", zIndex: 0 }} />
              <div className="absolute pointer-events-none" style={{ top: "36px", left: "106.5px", width: "419px", height: "419px", borderRadius: "9999px", border: "1px dashed #C2D760", zIndex: 0 }} />

              <div className="relative z-10 w-full max-w-[560px] lg:max-w-[760px] aspect-[4/3]">
              {!imgLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
              )}
              <img
                src={imageSrc}
                alt={heroData.title || "Hero Image"}
                loading="lazy"
                decoding="async"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => { e.target.src = heroImgPlaceholder; setImgLoaded(true); }}
                className={`w-full h-full object-contain rounded-2xl transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
