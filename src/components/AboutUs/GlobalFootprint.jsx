import React from "react";
import LocationMap from "../common/LocationMap";

const GlobalFootprint = () => {
     return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <span className="bg-[#f4f7fb] text-[#004CA5] px-4 py-2 rounded-full text-sm font-medium">
          Our Locations
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004CA5] mt-5">
          Global Presence
        </h2>

        <p className="mt-4 text-gray-500">
          Connecting talent across borders with localized expertise and global reach.
        </p>
      </div>

      <LocationMap />
    </section>
  );
};



export default GlobalFootprint;
