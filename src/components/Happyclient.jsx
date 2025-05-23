import {
  GraduationCap,
  Users,
  User,
  PresentationIcon as PresentationChart,
} from "lucide-react";

export default function EducationStats() {
  return (
    <div className="w-full py-16 bg-gray-300 px-4 md:px-8 lg:px-10 mt-10">
      <div className="w-full">
        <div className="flex justify-center  gap-8 items-center">
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute w-48 h-64 bg-navy-900 top-4 left-8 md:right-46 z-10" />
            <div className="absolute w-48 h-64 bg-gray-600 top-0 right-8 md:right-16 z-10" />
            <div className="relative z-20">
              <img
                src="./client.png"
                alt="Student with books"
                width={250}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-15">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">WE</span>
                <br />
                <span className="text-orange-500">ARE SPREADING</span>
              </h2>
              <div className="w-32 h-0.5 bg-gray-900" />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              <div className="flex items-start space-x-4">
                <div className="p-2 text-gray-800">
                  <GraduationCap size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="fade-out text-3xl md:text-4xl font-bold text-gray-900">
                    108+
                  </h3>
                  <p className="fade-out text-orange-500 text-lg font-medium">
                    Happy School
                  </p>
                </div>
              </div>

              <div  className="flex items-start space-x-4 fade-in">
                <div className="p-2 text-gray-800">
                  <User size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    58030+
                  </h3>
                  <p className="text-orange-500 text-lg font-medium">
                    Students
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 text-gray-800">
                  <Users size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    5360+
                  </h3>
                  <p className="text-orange-500 text-lg font-medium">
                    Happy Parents
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 text-gray-800">
                  <PresentationChart size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    10+
                  </h3>
                  <p className="text-orange-500 text-lg font-medium">
                    Happy Tutors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
