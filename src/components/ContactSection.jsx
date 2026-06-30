function ContactSection() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">
            Ready to get started?
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Let's Build <span className="text-orange-400">Success</span>
            <br />
            Together
          </h2>

          <p className="mt-6 text-blue-100">
            Whether you're hiring exceptional talent or searching for your next
            opportunity, we are here to help every step of the way.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-semibold">
              Hire Talent →
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold">
              Explore Opportunities
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-blue-700">
            Get in Touch with Our Employee Team
          </h3>

          <form className="mt-6 space-y-4">
            <input className="w-full border rounded-xl p-4" placeholder="Name" />
            <input className="w-full border rounded-xl p-4" placeholder="Email" />
            <input className="w-full border rounded-xl p-4" placeholder="Contact Number" />
            <textarea className="w-full border rounded-xl p-4" placeholder="Message" rows="4"></textarea>

            <button className="w-full bg-blue-700 text-white py-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;