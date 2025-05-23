import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../utils/Cardsdata";

const Parentreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="w-full h-full py-16 px-4 md:px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">WHAT </span>
            <span className="text-orange-500">PARENT SAYS</span>
          </h2>
        </div>

        <div
          className="relative overflow-hidden" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          <div className="md:hidden">
            <TestimonialCard
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="flex flex-nowrap overflow-hidden justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white w-full h-full rounded-lg shadow-lg p-6 transition-all duration-300 ${
        isActive ? "opacity-100 scale-100" : "opacity-80 scale-95"
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img
            src={testimonial.image || "./user-img.png"}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-orange-500">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-gray-600">{testimonial.testimonial}</p>
    </div>
  );
};

export default Parentreview;
