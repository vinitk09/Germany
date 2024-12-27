import { useEffect, useState, useCallback } from "react";
import TestimonialCard from "./TestimonialCard";
import sr from "../../assets/review/Symbols.png";

const testimonials = [
  {
    id: 1,
    name: "Krish",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    description:
      "Best consultant I ever met. I connected with them just for the uniassist money transfer but I found them very professional. Hence, I took test of the service also. Highly recommended.",
  },
  {
    id: 2,
    name: "Navin Burande",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    description:
      "Experience was amazing. They get in touch with them through Rohit. They are very professional and trustworthy. They helped to short list the best universities according to my profile. Due to them I am in Germany now. Thank you team.  Highly recommended.",
  },
  {
    id: 3,
    name: "Cyrus Pulsar",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    description:
      "Team is very genuine. I was stuck with my university application process when I tried with other advisor. They took my money also which was wasted,But Germanywale helped me very nicely, due to them only I got my dream admit in Germany.",
  },
  {
    id: 4,
    name: "Rutul Dhawane",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 5,
    description:
      "I took Free counseling from Germanywale. I found their service very genuine and worthy. The thing I like most is they are giving 100% admit guaranteed. Hence, took the service and good news that I got admit in public university 🤩 Looking forward to take visa and accommodation also.I would recommended to every aspirant who is planning to study abroad.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideWidth = isMobile ? 100 : 33.333;
  const visibleSlides = isMobile ? 1 : 3;

  // Create a circular array by duplicating testimonials
  const allTestimonials = [...testimonials, ...testimonials];

  const slideToNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // If we've reached the end of the original set, reset to the beginning
      if (nextIndex >= testimonials.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 0);
        return prevIndex;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return nextIndex;
    });
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(slideToNext, 3000);
    return () => clearInterval(interval);
  }, [slideToNext]);

  return (
    <div className="relative overflow-hidden p-4">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
        }}
      >
        {allTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className={`${isMobile ? "min-w-full" : "min-w-[33.333%]"} px-4`}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
