import { useState, useEffect } from "react";
import heroImgPlaceholder from "../../assets/images/hero.png";
import { getHeroData } from "../../services/heroService";

/* ─── Skeleton ─────────────────────────────────────────────────────────── */
function HeroSkeleton() {
  return (
    <section className="bg-[#f4f7fb] min-h-[680px] lg:min-h-[760px]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left skeleton */}
        <div className="animate-pulse space-y-5">
          <div className="h-8 bg-gray-200 rounded-full w-2/3"></div>
          <div className="space-y-3">
            <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-4/5"></div>
          </div>
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-5 bg-gray-200 rounded w-11/12"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="flex gap-4 pt-2">
            <div className="h-14 bg-gray-200 rounded-full w-40"></div>
            <div className="h-14 bg-gray-200 rounded-full w-48"></div>
          </div>
          <div className="border-t border-gray-200 pt-6 grid grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="space-y-1">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Right skeleton — image */}
        <div className="animate-pulse hidden lg:flex justify-end">
          <div className="w-full max-w-[760px] aspect-[4/3] bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}

/* ─── Error / Fallback ─────────────────────────────────────────────────── */
function HeroFallback() {
  return (
    <section className="bg-[#f4f7fb] min-h-[320px] flex items-center justify-center">
      <div className="text-center py-20 px-6">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm">Hero content is currently unavailable. Please try again later.</p>
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
    <section className="bg-[#f4f7fb] min-h-[680px] lg:min-h-[760px]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── Left column: Text content ── */}
        <div>
          {/* Subtitle badge */}
          {heroData.subtitle && (
            <span className="bg-lime-200 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold inline-block">
              ● {heroData.subtitle}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] lg:leading-[64px] font-extrabold mt-6 lg:mt-10 text-blue-700 whitespace-pre-line">
            {heroData.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-4 lg:mt-6 max-w-xl leading-7 lg:leading-9">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 lg:mt-8">
            {heroData.buttonText && (
              <a
                href={heroData.buttonLink || "#"}
                className="inline-block bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold transition-colors shadow-md shadow-orange-200"
              >
                {heroData.buttonText} →
              </a>
            )}
            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 active:bg-blue-100 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold transition-colors">
              Find Opportunities
            </button>
          </div>

          {/* Stats Row */}
          <div className="border-t border-gray-200 mt-8 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700">0+</h3>
              <p className="text-xs sm:text-sm uppercase text-gray-500 mt-0.5">Clients</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700">0+</h3>
              <p className="text-xs sm:text-sm uppercase text-gray-500 mt-0.5">Candidates</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700">25+</h3>
              <p className="text-xs sm:text-sm uppercase text-gray-500 mt-0.5">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700">4</h3>
              <p className="text-xs sm:text-sm uppercase text-gray-500 mt-0.5">Offices</p>
            </div>
          </div>
        </div>

        {/* ── Right column: Hero Image ── */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
          {/* Wrapper reserves space to prevent layout shift */}
          <div className="relative w-full max-w-[560px] lg:max-w-[760px] aspect-[4/3]">
            {/* Blur placeholder while image loads */}
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
    </section>
  );
}

export default Hero;
