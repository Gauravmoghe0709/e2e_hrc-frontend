import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            
            {/* Eyebrow - Yellow/Gold Text */}
            <div className="flex items-center space-x-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-400">
                Employer Recruitment
              </h1>
            </div>
             <div className="hidden sm:block h-1 w-[30%] bg-amber-400 rounded"></div>

            {/* Main Headline - White Text */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-xl">
              Helping businesses hire the right talent.
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Adjustment */}
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
