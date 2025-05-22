const Achivesection = () => {
  return (
    <div className="relative min-h-screen bg-white achieve-section">
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="relative bg-[#111836] text-white flex flex-col justify-center left-side_clip">
          <div className="clip-img">
            <img src="./Clip.png" alt="clip-img" className="clip_bg-img" />
          </div>
          <ul className="text-md md:text-lg font-bold mb-6 clip-upper-text z-10">
            <li>- 256 Courses</li>
            <li>- Expert Teachers</li>
            <li>- Online Education</li>
          </ul>
        </div>

        <div className="md:w-3/5 p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111836] mb-4">
            Why Online Study With SchoolAura
          </h1>
          <p className="text-gray-700 mb-6">
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, and
            carrying books, notebooks and how much to buy books?
          </p>

          <div className="mb-6">
            <span className="font-bold text-gray-800">Solution:</span>{" "}
            <span className="text-gray-700">
              Now you can find a simple solution with schoolaura. In these days
              almost everyone has a Smartphone, Tab or Laptop. So just open your
              device and start your study from anywhere anytime while you are
              travelling, sitting in the park, and etc.
            </span>
          </div>

          <p className="text-gray-700">
            Now Use your time and gain knowledge in every second and Use your
            device for right things not for waste your time
          </p>
        </div>
      </div>

      <div className="relative w-[90%] ml-[15px]">
        <div className="relative  flex justify-center">
          <img
            src="./Layer-20.png"
            alt="Students studying together"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Achivesection;
