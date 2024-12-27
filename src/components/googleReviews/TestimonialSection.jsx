import React from "react";
import { Star, StarHalf } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";
import "./review.css";

const TestimonialSection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <h1 className="googlereview-heading text-center mb-10 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Reviews from around the Globe
        </h1>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-xl max-w-full sm:max-w-lg md:max-w-3xl w-full md:w-[75%] lg:w-[50%] p-6 md:p-8">
            {/* Google Logo and Rating Container */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
              {/* Google Logo */}
              <div className="flex flex-col items-center sm:items-start">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-12 sm:h-16 md:h-20 object-contain mb-3"
                />
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  <Star
                    size={20}
                    sm:size={25}
                    md:size={30}
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                  <Star
                    size={20}
                    sm:size={25}
                    md:size={30}
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                  <Star
                    size={20}
                    sm:size={25}
                    md:size={30}
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                  <Star
                    size={20}
                    sm:size={25}
                    md:size={30}
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                  <StarHalf
                    size={20}
                    sm:size={25}
                    md:size={30}
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                  <span className="ml-2 text-lg sm:text-xl md:text-2xl text-gray-600">
                    4.5
                  </span>
                </div>
              </div>

              {/* Rating Score */}
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500">
                4.7
              </div>
            </div>
          </div>
        </div>

        <TestimonialSlider />
      </div>
    </div>
  );
};

export default TestimonialSection;
