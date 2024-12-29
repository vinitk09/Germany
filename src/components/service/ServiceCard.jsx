import "./Services.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ResponsiveImage } from "../service/common/ResponsiveImage";
import "remixicon/fonts/remixicon.css"; // Import Remix Icons CSS
import { animateScroll as scroll } from "react-scroll";

export function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  isReversed = false,
  routePath, // Pass the route path dynamically
  imageSize = "medium",
  customHeight,
  customWidth,
  endThreshold = 6015, // Default end value if not provided
}) {
  const navigate = useNavigate();

  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(() => {
    const startThreshold = 3100; // Airplane appears after scrolling 500px

    const handleScroll = () => {
      const servicesSection = document.getElementById("services-section");
      const scrollY = window.scrollY;

      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = scrollY > startThreshold && scrollY < endThreshold;

        setShouldDisplay(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [endThreshold]);

  return (
    <div id="services-section" style={{ position: "relative" }}>
      {/* Airplane Icon */}
      {shouldDisplay && (
        <i
          className="ri-plane-line airplane-icon"
          style={{
            position: "fixed",
            fontSize: "48px", // Larger airplane size
            color: "transparent", // Make the text color transparent
            background: "linear-gradient(92deg, #FF9422 6.81%, #D63715 90.38%)", // Apply gradient to background
            backgroundClip: "text", // Clip the background to the text (icon)
            left: "50%", // Centered horizontally
            transform: "translateX(-50%) rotate(180deg)", // Rotated airplane icon
            top: "320px", // Fixed position
            zIndex: 1000, // Above other content
            transition: "opacity 0.3s ease", // Smooth transition for opacity
          }}
        ></i>
      )}

      {/* Service Card */}
      <div className="relative flex items-center justify-center mb-16 lg:mb-24">
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            height: "500px", // Section height for airplane to stop
            width: "4.5px", // Line thickness
            backgroundColor: "grey",
            left: "50%", // Line centered horizontally
            transform: "translateX(-50%)",
            overflow: "hidden",
          }}
          className="vertical-line"
        ></div>

        {/* Content Section */}
        <div
          className={`flex flex-col gap-8 lg:gap-16 lg:flex-row ${
            isReversed ? "lg:flex-row-reverse" : ""
          } items-center`}
        >
          {/* Image Section */}
          <div className="w-[266px] lg:w-1/2 img-section">
            <ResponsiveImage src={image} alt={imageAlt} className="" />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 title">
            <h3
              className="text-3xl lg:text-4xl xl:text-5xl leading-tight"
              style={{
                fontFamily: "Gilroy",
                fontWeight: "600",
                fontSize: "32px",
              }}
            >
              {title}
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "Gilroy",
                fontWeight: "300",
                fontSize: "18px",
              }}
            >
              {description}
            </p>
            <button
              onClick={() => navigate(routePath)}
              className="inline-flex items-center px-6 py-3 text-white rounded-lg transition-colors bg-gradient-to-r from-[#FF9422] to-[#D63715] hover:from-[#D63715] hover:to-[#FF9422]"
            >
              Know More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
