function Blogs() {
  const blogs = [
    "Talent Acquisition Strategies That Actually Work",
    "Future Workforce Planning: Building Teams for Tomorrow",
    "Building High Performing Teams From Day One",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Latest Blog
          </span>

          <h2 className="text-5xl font-bold text-blue-700 mt-5">
            Career Growth Strategies for Professionals
          </h2>
        </div>

        <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-full font-semibold">
          View All Blog →
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800 text-white rounded-3xl p-8 min-h-[420px] flex flex-col justify-end">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm w-fit">
            Hiring Trends
          </span>

          <h3 className="text-3xl font-bold mt-4">
            Hiring Trends in the UK: What Employers Need to Know in 2025
          </h3>

          <p className="text-gray-300 mt-4">
            From AI-driven screening to flexible working demands, the UK
            recruitment landscape is shifting rapidly.
          </p>

          <button className="text-lime-300 mt-6 text-left">
            Read More →
          </button>
        </div>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-6 flex gap-5 items-center"
            >
              <div className="w-32 h-28 bg-gray-300 rounded-2xl"></div>

              <div>
                <span className="bg-lime-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Strategy
                </span>

                <h3 className="text-xl font-bold text-blue-700 mt-3">
                  {blog}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  5 min read · May 2025
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;