function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-orange-400">E2E HRC</h2>
          <p className="text-gray-400 mt-4">
            Connecting exceptional talent with exceptional businesses across the UK,
            Europe, South Asia, and the GCC.
          </p>
        </div>

        <div>
          <h3 className="text-orange-400 font-bold mb-4">UK Head Office</h3>
          <p className="text-gray-400">Birmingham, UK</p>
          <p className="text-gray-400 mt-2">+44 (0) 121 778 2400</p>
          <p className="text-gray-400 mt-2">info@e2hrc.co.uk</p>
        </div>

        <div>
          <h3 className="text-orange-400 font-bold mb-4">Navigation</h3>
          <p className="text-gray-400">Home</p>
          <p className="text-gray-400 mt-2">About Us</p>
          <p className="text-gray-400 mt-2">Our Services</p>
          <p className="text-gray-400 mt-2">Latest Jobs</p>
          <p className="text-gray-400 mt-2">Expert Blogs</p>
        </div>

        <div>
          <h3 className="text-orange-400 font-bold mb-4">Our Office Locations</h3>
          <div className="bg-blue-900 rounded-2xl h-40 flex items-center justify-center">
            World Map
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        COPYRIGHT © 2024 BY E2E HUMAN RESOURCE CONSULTANCY LTD | ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

export default Footer;