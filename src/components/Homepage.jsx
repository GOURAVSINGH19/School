import { useState } from "react";
import { cardData } from "../../utils/Cardsdata";
import { Eye, EyeOff } from "lucide-react";
const Homepage = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", formData);
  };
  return (
    <div className="flex flex-col hero-banner">
      <div className="flex-grow relative hero-container">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
          <div className="md:w-[70%] mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">BE A </span>
              <span className="text-black">SMART STUDENT</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-12">
              SchoolAura Is A Smart Education Platform
            </h2>

            <div className=" w-full flex justify-between items-center gap-5  relative">
              <div className="hero-services"></div>
              {cardData.map((item, index) => (
                <div key={index} className="text-center hero-services-li">
                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </h3>
                  {item.links.map((list, i) => (
                    <div key={i}>
                      <a
                        href={list.href}
                        className="block bg-orange-500 text-white py-2 rounded-md mb-3"
                      >
                        {list.text}
                      </a>
                    </div>
                  ))}
                  <a
                    href="#"
                    className="flex items-center justify-center text-black font-medium"
                  >
                    {item.lowertext}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className=" md:pl-8">
            <div className="rounded-sm relative">
              <div className="relative max-w-md mx-auto">
                <div className="flex h-20 justify-center -mt-16 mb-4">
                  <div className="rounded-full  p-1 absolute z-10">
                    <img
                      src="./user-img.png"
                      alt="Student Avatar"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="form-container">
                  <div className="flex border-b">
                    <button
                      className={`w-1/2 py-3 text-center font-medium ${
                        activeTab === "student"
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("student")}
                    >
                      Student Login
                    </button>
                    <button
                      className={`w-1/2 py-3 text-center font-medium ${
                        activeTab === "parent"
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("parent")}
                    >
                      Parents Login
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        {activeTab === "student"
                          ? "Mobile Number or Key"
                          : "Parent Mobile or Email"}
                      </label>
                      <input
                        type="text"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                        placeholder={
                          activeTab === "student"
                            ? "Enter mobile or key"
                            : "Enter mobile or email"
                        }
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">
                        {activeTab === "student"
                          ? "Student Password"
                          : "Parent Password"}
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md p-2 pr-10 bg-gray-100"
                          placeholder="Enter password"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white py-3 rounded-md mb-4 hover:bg-gray-800 transition-colors"
                    >
                      Login
                    </button>

                    <div className="flex justify-between text-sm">
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Forgot Password
                      </a>
                      {activeTab === "student" && (
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-800"
                        >
                          Create Account
                        </a>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
            ))}
        </div>
      </div>
      <svg
        className="bottom-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 270"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Homepage;
