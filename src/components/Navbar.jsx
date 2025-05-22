import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, School } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#ff5202] text-white py-3 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center justify-center mb-4 md:mb-0 relative">
          <a href="/">
            <div className="relative">
              <img
                src="./logo_school.png"
                alt="SchoolAura Logo"
                width={150}
                height={40}
                className="h-10 w-auto relative z-[20]"
              />
              <div className="logo-cloud"></div>
            </div>
          </a>
        </div>

        <button
          className="md:hidden absolute right-4 top-4 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden md:flex"
          } flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0`}
          ref={dropdownRef}
        >
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
            <li className="w-full md:w-auto text-center">
              <a
                href="/"
                className="block py-2 px-3 hover:bg-white/10 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li className="relative w-full md:w-auto text-center group">
              <button
                onClick={() => toggleDropdown("exam")}
                className="flex items-center justify-center w-full md:w-auto py-2 px-3 hover:bg-white/10 rounded transition-colors"
              >
                Exam Solution <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <ul
                className={`${
                  activeDropdown === "exam" ? "block" : "hidden"
                } md:absolute md:top-full z-10 md:left-0 md:mt-1 bg-white text-gray-800 rounded shadow-lg md:min-w-[200px] w-full`}
              >
                <li>
                  <a
                    href="/exam?title=1st-12th-exam&catid=1"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    1<sup>st</sup>-12<sup>th</sup> Exam
                  </a>
                </li>
                <li>
                  <a
                    href="/exam?title=competitive-exam&catid=2"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Competitive Exam
                  </a>
                </li>
                <li>
                  <a
                    href="/exam?title=entrance-exam&catid=3"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Entrance Exam
                  </a>
                </li>
              </ul>
            </li>

            {/* Online Study Dropdown */}
            <li className="relative w-full md:w-auto text-center group">
              <button
                onClick={() => toggleDropdown("study")}
                className="flex items-center justify-center w-full md:w-auto py-2 px-3 hover:bg-white/10 rounded transition-colors"
              >
                Online Study <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <ul
                className={`${
                  activeDropdown === "study" ? "block" : "hidden"
                } md:absolute md:top-full z-10 md:left-0 md:mt-1 bg-white text-gray-800 rounded shadow-lg md:min-w-[200px] w-full`}
              >
                <li>
                  <a
                    href="/course?title=1st-12th-courses&catid=1"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    1<sup>st</sup>-12<sup>th</sup> Class
                  </a>
                </li>
                <li>
                  <a
                    href="/course?title=competitive-courses&catid=2"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Competitive Class
                  </a>
                </li>
                <li>
                  <a
                    href="/course?title=entrance-courses&catid=3"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Entrance Class
                  </a>
                </li>
              </ul>
            </li>

            {/* Tutor Solution Dropdown */}
            <li className="relative w-full md:w-auto text-center group">
              <button
                onClick={() => toggleDropdown("tutor")}
                className="flex items-center justify-center w-full md:w-auto py-2 px-3 hover:bg-white/10 rounded transition-colors"
              >
                Tutor Solution <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <ul
                className={`${
                  activeDropdown === "tutor" ? "block" : "hidden"
                } md:absolute md:top-full z-10 md:left-0 md:mt-1 bg-white text-gray-800 rounded shadow-lg md:min-w-[200px] w-full`}
              >
                <li>
                  <a
                    href="/find-tutor"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Find Tutor
                  </a>
                </li>
                <li>
                  <a
                    href="http://tutor.schoolaura.com/"
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Become Tutor
                  </a>
                </li>
              </ul>
            </li>

            <li className="w-full md:w-auto text-center">
              <a
                href="/blogs"
                className="block py-2 px-3 hover:bg-white/10 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </a>
            </li>

            <li className="w-full md:w-auto text-center">
              <a
                href="/contact"
                className="block py-2 px-3 hover:bg-white/10 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>

            <li className="w-full md:w-auto text-center">
              <a
                href="https://erp.schoolaura.com/"
                className="flex items-center justify-center py-2 px-3 hover:bg-white/10 rounded transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <School className="mr-1 h-4 w-4" /> School Management
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
