const BenefitsOfOnlineEducation = () => {
  return (
    <div className="w-screen">
      <div className="mobile-app-container">
        <div className="mobile-app-image-container">
          <img
            src="./school_aura_app.jpg"
            alt="SchoolAura Mobile App Interface"
            className="mobile-app-image"
          />
        </div>

        <div className="mobile-app-content">
          <h1 className="mobile-app-heading">
            Easy to Access with{" "}
            <span className="mobile-app-highlight">Mobile APP</span>
          </h1>

          <p className="mobile-app-text">
            If you're looking for easily accessible resources for your
            classroom, then you're in the right place. Online learning with the
            Android app is very easy to access. That's why we've hand-curated
            the School Aura free app and website. Easy to use and learn!
          </p>

          <p className="mobile-app-text">
            To learn online, you need to be reasonably comfortable with Smart
            Mobile Phone, Tab, Laptops, and the internet. The advantage of
            learning online via an android app is that you can pause the
            video/audio whenever you need to take notes or simply absorb what
            has been said. Another fantastic feature of online learning is that
            you can re-listen to different parts as needed, which is something
            you can't do in a live lecture!
          </p>

          <button className="download-button">Download Now</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-2/3 pr-0 md:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-gray-900">Benefits of</span>
              <br />
              <span className="text-orange-500">Online Education</span>
            </h2>
            <div className="w-24 h-1 bg-gray-800 mb-6"></div>

            <p className="text-gray-700 mb-6">
              Online Education increases engagement by adding a human element.
              Studying in the comfort of your own home is convenient, but there
              are various other advantages of online study. It's especially
              beneficial for students who aren't as self-sufficient or who are
              used to the traditional educational model of "teacher and class."
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Time and Location Flexibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Find Unlimited Course Category</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>No Need to Carry Books</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>
                  Get Access in any mobile, Tab, Laptop with your credential
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>
                  Use your time when you are traveling, Outing and free time
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Exam Practice before exam</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md h-[400px]">
              <img
                src="/spreading.png"
                alt="Happy student giving thumbs up"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white mt-[-10px] py-8 px-4 flex flex-wrap justify-between items-center z-[2] relative">
          <div className="text-center w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <div className="text-4xl md:text-5xl font-bold">10000+</div>
            <div className="text-orange-500 text-xl">Total Exams</div>
          </div>
          <div className="text-center w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <div className="text-4xl md:text-5xl font-bold">600+</div>
            <div className="text-orange-500 text-xl">Courses</div>
          </div>
          <div className="text-center w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <div className="text-4xl md:text-5xl font-bold">3000+</div>
            <div className="text-orange-500 text-xl">Sucess Stories</div>
          </div>
          <div className="text-center w-full sm:w-1/2 md:w-1/4">
            <div className="text-4xl md:text-5xl font-bold">4.5/5</div>
            <div className="text-orange-500 text-xl">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfOnlineEducation;
