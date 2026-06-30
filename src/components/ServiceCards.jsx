function ServiceCards() {
  return (
    <section className="bg-[#f4f7fb]">
      <div className="max-w-[1500px] mx-auto px-14 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-[#cde87a] p-14 min-h-[330px] transition duration-300 hover:-translate-y-2">
          <span className="bg-white text-blue-700 border border-orange-400 px-4 py-2 rounded-full text-sm font-bold">
            For Employers
          </span>

          <h2 className="text-4xl font-extrabold mt-8 leading-tight">
            Find Your
            <br />
            <span className="text-orange-400">Next Star Hire</span>
          </h2>

          <p className="text-white mt-6 max-w-lg">
            Tailored recruitment and workforce solutions designed to help you
            build high-performing teams across every sector.
          </p>

          <button className="bg-orange-400 text-white px-8 py-3 rounded-full mt-8 font-bold">
            Explore →
          </button>
        </div>

        <div className="bg-white p-14 min-h-[380px] transition duration-300 hover:-translate-y-2">
          <span className="bg-white text-blue-700 border border-orange-400 px-4 py-2 rounded-full text-sm font-bold">
            For Employee
          </span>

          <h2 className="text-4xl font-extrabold mt-8 leading-tight text-blue-700">
            Discover Your
            <br />
            <span className="text-orange-400">Dream Career</span>
          </h2>

          <p className="text-blue-700 mt-6 max-w-lg">
            Explore opportunities that match your skills, experience and
            ambitions. We connect you with employers who value your potential.
          </p>

          <button className="bg-orange-400 text-white px-8 py-3 rounded-full mt-8 font-bold">
            Explore →
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;