import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <div className="bg-black text-blue-500 text-center py-3 text-sm">
        Looking to hire exceptional talent? Submit a Vacancy →
      </div>

      <nav className="bg-white shadow-sm">
        <div className="max-w-[1500px] mx-auto px-14 py-5 flex items-center justify-between">
          <img src={logo} alt="E2E HRC" className="h-12" />

          <ul className="hidden lg:flex items-center gap-8 text-[#1b2a41] font-medium">
            <li className="text-blue-700">Home</li>
            <li>About Us</li>
            <li>Employer</li>
            <li>Employee</li>
            <li>Workforce Solutions</li>
            <li>Become a Partner</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>

          <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold">
            Submit Vacancy / CV
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;