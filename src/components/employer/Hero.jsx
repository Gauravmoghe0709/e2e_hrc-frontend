import { useEffect, useState } from 'react';
import { getEmployerHeroData } from '../../services/employer/employerHeroService';

function HeroSkeleton() {
  return (
    <section className="bg-[#f4f7fb] min-h-170 lg:min-h-190">
      <div className="max-w-375 mx-auto px-4 sm:px-8 lg:px-14 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-full w-2/3" />
          <div className="space-y-3">
            <div className="h-12 bg-gray-200 rounded-lg w-full" />
            <div className="h-12 bg-gray-200 rounded-lg w-4/5" />
          </div>
        </div>
        <div className="hidden lg:block w-full max-w-190 aspect-4/3 bg-gray-200 rounded-2xl" />
      </div>
    </section>
  );
}

function HeroFallback() {
  return (
    <section className="bg-[#f4f7fb] min-h-170 lg:min-h-190 flex items-center justify-center">
      <div className="text-center px-4 py-10">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm">Employer hero content is currently unavailable. Please try again later.</p>
      </div>
    </section>
  );
}

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadHero = async () => {
      try {
        const res = await getEmployerHeroData();
        if (res && res.data) {
          setHeroData(res.data);
        } else {
          setHeroData(null);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadHero();
  }, []);

  if (isLoading) return <HeroSkeleton />;
  if (hasError) return <HeroFallback />;
  if (!heroData) return <HeroFallback />;

  const backgroundImage = heroData.image ? heroData.image : null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-400">
                {heroData.title}
              </h1>
            </div>
            <div className="hidden sm:block h-1 w-[30%] bg-amber-400 rounded"></div>

            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
              {heroData.subtitle}
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          :global(body) {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
}
