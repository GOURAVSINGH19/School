import { useState } from "react";
import { categoryData } from "../../utils/Cardsdata";
const EducationalInterface = () => {
  const [activeCategory, setActiveCategory] = useState("School");

  const categories = ["School", "Competitive", "Enterance", "Tutors"];

  return (
    <div className="w-full py-16 px-4  mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">PROVIDE</span>
            <br />
            <span className="text-orange-500">BEST EDUCATIONAL</span>
          </h2>
        </div>

        <div className="w-full bg-white rounded-md shadow-lg overflow-hidden fade-in">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 border-r border-gray-200 text-[1.5rem]">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`
                    py-4 px-6 cursor-pointer hover:bg-gray-100 transition-colors relative ${
                      activeCategory === category ? "bg-gray-100" : ""
                    }
                  `}
                  onClick={() => setActiveCategory(category)}
                >
                  {activeCategory === category && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                  )}
                  <span
                    className={`
                      font-medium
                      ${
                        activeCategory === category
                          ? "text-orange-500"
                          : "text-gray-700"
                      }
                    `}
                  >
                    {category}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full md:w-3/4 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryData[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md"
                  >
                    <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-white rounded-md overflow-hidden">
                      <span className="text-xl">N</span>
                    </div>
                    <div>
                      <div className="text-orange-500 font-medium">
                        {item.name}
                      </div>
                      <div className="text-gray-600 text-sm">{item.count}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalInterface;
