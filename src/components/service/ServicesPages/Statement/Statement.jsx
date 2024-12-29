import React from "react";
import {
  FaUserGraduate,
  FaUniversity,
  FaFileAlt,
  FaFileContract,
  FaEnvelope,
  FaBuilding,
  FaPassport,
  FaHome,
} from "react-icons/fa";
// import "./University.css";
import ui from "../../../../assets/ServicePageImages/Statement/st.jpg";
// import Universities from "../../../Universities";

const services = [
  { icon: FaUserGraduate, title: "Free Counselling" },
  { icon: FaUniversity, title: "University Shortlisting" },
  { icon: FaFileAlt, title: "Statement of Purpose" },
  { icon: FaFileContract, title: "Curriculum Vitae" },
  { icon: FaEnvelope, title: "Letter of Recommendation" },
  { icon: FaBuilding, title: "Univeristy Application" },
  { icon: FaPassport, title: "Visa Assistance" },
  { icon: FaHome, title: "Accommodation and travel assistance" },
];
const Statement = () => {
  return (
    <div className="free-counselling-container">
      <div className="relative h-[300px] sm:h-[350px] md:h-[391px] lg:h-[450px] mt-16">
        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-600/90"></div>

        {/* Content */}
        <div className="relative z-4 flex h-full items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Statement Of Purpose{" "}
          </h1>
        </div>
      </div>

      <div className="our-services-section">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: "#FFFAF5",
                }}
              >
                <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-[16px] font-medium text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src={ui}
                alt="Graduation celebration"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Statement Of Purpose{" "}
              </h2>
              <p className="university-description mb-6">
                Stand out from the crowd with a great professionally assisted
                Statement of Purpose, and let us help you in putting your story
                into words
              </p>
              <ul className="space-y-4">
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Check plagiarism{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Check spelling and grammatical errors
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Give suggestion/feedback points
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Prepare proper evaluation report
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Delivery File Format: PDF and .docx
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={university}
                alt="University logo"
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Statement;
