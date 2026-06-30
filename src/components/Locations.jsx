function Locations() {
  const locations = ["United Kingdom", "United Arab Emirates", "Europe", "India"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Our Locations
        </span>

        <h2 className="text-5xl font-bold text-blue-700 mt-5">
          Our Office Locations
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mt-12">
        {locations.map((location, index) => (
          <div
            key={index}
            className="h-72 rounded-3xl bg-slate-700 text-white flex items-end p-6"
          >
            <h3 className="text-2xl font-bold">{location}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;