import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#0f1033] text-white relative">
      <div>
        <div className="absolute top-[-130px] left-[26%] z-[10] max-w-6xl mx-auto px-4 py-8 bg-gray-100 text-black">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                SUBSCRIBE OUR
                <br />
                <span className="text-orange-500">NEWSLETTER</span>
              </h2>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-300 flex-grow md:w-80"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              About US
            </h3>
            <p className="text-gray-300">
              SchoolAura Smart Education Platform is a step towards making
              learning better and effective for the students and help to
              acheiving their goals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Quick as
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Benefits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Featurs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Help & Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Terms &
                  condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="text-orange-500 mr-2">›</span> Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Contact Us
            </h3>
            <div className="flex space-x-2">
              <a
                href="#"
                className="bg-[#3b5998] hover:opacity-90 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#e1306c] hover:opacity-90 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-[#1da1f2] hover:opacity-90 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-[#25d366] hover:opacity-90 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold">CaLL US</h4>
              <a
                href="tel:+919540349392"
                className="text-blue-400 hover:underline"
              >
                +91-9540349392
              </a>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold">MAIL US</h4>
              <a
                href="mailto:contact@schoolaura.com"
                className="text-blue-400 hover:underline"
              >
                contact@schoolaura.com
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold">Office Address</h4>
              <p className="text-gray-300">
                E 44/3, Pocket D, Okhla Phase 1 Industrial Area, New Delhi,
                Delhi, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            2021 © SchoolAura. All Right Reserved
          </p>
          <p className="text-gray-400">
            Design & Development by{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Insoftlink Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
