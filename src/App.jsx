import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import Achivesection from "./components/Achivesection";
import EducationalInterface from "./components/Education";
import SchoolAuraBenefits from "./components/Benifits";
import Parentreview from "./components/Parentreview";
import GallerySection from "./components/Gallerysection";
import EducationStats from "./components/Happyclient";
import BenefitsOfOnlineEducation from "./components/Spreadingsection";
import Footer from "./components/Footer";
import { useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
const App = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Homepage />
      <Achivesection />
      <EducationalInterface />
      <SchoolAuraBenefits />
      <BenefitsOfOnlineEducation />
      <EducationStats />
      <GallerySection />
      <Parentreview />
      <Footer />
      <div className="fixed text-white w-fit flex items-center bottom-4 right-4 z-50">
        <a
          href="#top"
          className="fixed bottom-20 right-4 bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded flex items-center justify-center transition-colors"
        >
          <ArrowUp size={20} />
        </a>
        <div>
          {showChat ? (
            <div className="bg-white text-black p-4 rounded-lg shadow-lg w-72 mb-2">
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Chat Support</p>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="bg-gray-100 p-3 rounded mb-3">
                <p className="text-sm">
                  Welcome to our site, if you need help simply reply to this
                  message, we are online and ready to help.
                </p>
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
          ) : null}
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-orange-500 hover:bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center relative transition-colors"
          >
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
