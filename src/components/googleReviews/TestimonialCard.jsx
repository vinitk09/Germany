import { Star } from "lucide-react";
import g from "../../assets/review/devicon_google.svg";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className=" w-full mx-auto max-w-lg transition-transform transform hover:scale-105">
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          {/* User Info */}
          <div className="flex items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover mr-3 md:mr-4"
            />
            <div>
              <h3 className="font-gilroy font-semibold text-base md:text-lg text-gray-900">
                {testimonial.name}
              </h3>
              {/* Rating */}
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Google Logo */}
          <img
            src={g}
            alt="Google Logo"
            className="h-5 md:h-6 object-contain"
          />
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {testimonial.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
