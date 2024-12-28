import { useState } from "react";
import "./Testimonials.css";

import t1 from "../assets/Testimonial/Testimonial2/1.png";
import t2 from "../assets/Testimonial/Testimonial2/2.png";
import t3 from "../assets/Testimonial/Testimonial2/3.png";
import t4 from "../assets/Testimonial/Testimonial2/4.png";
import t5 from "../assets/Testimonial/Testimonial2/5.png";
import t6 from "../assets/Testimonial/Testimonial2/6.png";
import t7 from "../assets/Testimonial/Testimonial2/7.png";
import t8 from "../assets/Testimonial/Testimonial2/8.png";
import t9 from "../assets/Testimonial/Testimonial2/9.png";
import t10 from "../assets/Testimonial/Testimonial2/10.png";
import tu1 from "../assets/TestimonialUniversity/tu1.png";
import u1 from "../assets/TestimonialUniversity/u1.png";
import u2 from "../assets/TestimonialUniversity/u2.png";
import u3 from "../assets/TestimonialUniversity/u3.png";
import u4 from "../assets/TestimonialUniversity/u4.png";
import u5 from "../assets/TestimonialUniversity/u5.png";
import u6 from "../assets/TestimonialUniversity/u6.png";
import u7 from "../assets/TestimonialUniversity/u7.png";
import u8 from "../assets/TestimonialUniversity/u8.png";
import u9 from "../assets/TestimonialUniversity/u9.png";
import u10 from "../assets/TestimonialUniversity/u10.png";
const testimonials = [
  {
    id: 1,
    name: "Saksham Jethwa",
    role: "",
    text: "I had the privilege of using Germanywale to help me navigate the process of studying in Germany, and I couldn't be more pleased with the experience. The team at provided invaluable guidance on choosing the right university and program that aligned with my academic goals and career aspirations.",
    image: t1,
    universityImage: u1,
  },
  {
    id: 2,
    name: "Kundan Prabhu",
    role: "Masters in Computer Science",
    text: "Germanywale is so much better when compared to other organizations, they offer clear and hassle-free service with scholarship assistance. I have recommended it to a couple of my friends! Saurabh is excellent and kind. I’m glad I got him as my counselor",
    image: t2,
    universityImage: u2,
  },
  {
    id: 3,
    name: "Cerun Alex Varkey",
    role: "Masters in Material Science",
    text: "I am really glad I contacted Germanywale, they helped me clear all my doubts and confusion regarding my course, college selection, and application process. I am extremely happy with the services and would recommend Germanywale to anyone looking to secure an offer from their dream university",
    image: t3,
    universityImage: u3,
  },
  {
    id: 4,
    name: "Pratik Patel",
    role: "Masters in Business Administrations",
    text: "Education in Germany was an alien idea to me and hence I was really confused about how to make the right choice They guided me towards the right colleges for me, helped me to write my Statement of Intent, and likewise handled me every step of the way.",
    image: t4,
    universityImage: u4,
  },
  {
    id: 5,
    name: "Bhavin Viththamani",
    role: "Masters in Mechatronics",
    text: "I want to thank Germanywale for helping me to plan my studies in Germany. The structured approach adopted by them made the admission process very smooth and helped me make the right choices which would otherwise have been very difficult. I would especially like to thank my mentor who helped me a lot throughout the process",
    image: t5,
    universityImage: u5,
  },
  {
    id: 6,
    name: "Akshay Halkude",
    role: "Masters in Business Administration",

    text: "The kind of ownership my mentor and team at Germanywale had was immense. They were just as worried about my application as I was, that's pretty rare. I was managed uniquely and was given a customized approach. This experience will always be unparalleled, getting into HTW Berlin feels like fuzzy magic.",
    image: t6,
    universityImage: u6,
  },
  {
    id: 7,
    name: "Pranay Khobragade",
    role: "Masters in Business Administration and Engineering",
    text: "Thanks to the team, I was able to recognize what I want to do in life, believe in myself, and reach my dream university. The time and effort that the team invested helped me realize exactly why an MBA is important to me, and what is that I should take from it. This is what made the entire process seamless and helped me depict my true story in my application.",
    image: t7,
    universityImage: u7,
  },
  {
    id: 8,
    name: "Santosh K Reddy",
    role: "Masters in Mechatronics System",
    text: "I have been associated with Germanywale for a year now and their Mentors have helped me through all my difficulties in applying for a Master's in Germany. No matter how small or big my problem might be, my mentor was always available for me even at late hours as well as to help and guide me through a plethora of ways I might resolve my issues.",
    image: t8,
    universityImage: u8,
  },
  {
    id: 9,
    name: "Likhitha Potturu",
    role: "Masters in Simulation and System Design",
    text: "In my experience, Germanywale took the hassle out of the process of applying to universities in Germany and gave me an honest and critical opinion on my statement and supporting documents that helped me grab admits from prestigious universities. They are very patient and did bear with all sorts of questions and confusion that I came up with!",
    image: t9,
    universityImage: u9,
  },
  {
    id: 10,
    name: "Karthik Lokhande",
    role: "Computer Aided Conception and Production in Mechanical Engineering,",
    text: "Germanywale offered excellent service by high-level professionals. I would recommend Germanywale to everyone. They offer great one-to-one advice and great personal statement help. Their professionalism and cordiality would benefit anyone looking for a course in Germany.",
    image: t10,
    universityImage: u10,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const visibleIndices = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = testimonials.length - 1;
      if (index >= testimonials.length) index = 0;
      visibleIndices.push(index);
    }
    return visibleIndices;
  };

  return (
    <div className="testimonials-container">
      <div className="testimonial-outer-heading">
        <p className="testimonial-heading">TESTIMONIALS</p>
        <span className="testimonial-outer-heading2">WHAT OUR CLIENT SAYS</span>
      </div>

      <div className="testimonials-slider">
        <button className="nav-button prev" onClick={handlePrev}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="svg-arrow-prev"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="testimonials-content">
          <div className="testimonials-track">
            {getVisibleTestimonials().map((index, position) => (
              <div
                key={testimonials[index].id}
                className={`testimonial-card ${position === 1 ? "center" : ""}`}
                style={{
                  height: "530px",
                  width: "400px",
                }}
              >
                <div className="testimonial-inner">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="testimonial-image"
                  />
                  <h3
                    className="testimonial-name"
                    style={{
                      fontFamily: "Gilroy",
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "26.28px",
                      textAlign: "center",
                      color: "#525252",
                    }}
                  >
                    {testimonials[index].name}
                  </h3>
                  <p
                    className="testimonial-role"
                    style={{
                      fontFamily: "Gilroy",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "18.28px",
                      textAlign: "center",
                      color: "#525252",
                    }}
                  >
                    {testimonials[index].role}
                  </p>
                  {testimonials[index].universityImage && (
                    <img
                      src={testimonials[index].universityImage}
                      alt="University"
                      className="university-image object-contain"
                      style={{
                        width: "209px",
                        height: "97px",
                        paddingBottom: "8px",
                        filter: "none",
                        boxShadow: "none",
                      }}
                    />
                  )}

                  <p
                    className="testimonial-text"
                    style={{
                      fontFamily: "Gilroy",
                      fontSize: "12px",
                      fontWeight: "400",
                      // lineHeight: "24.28px",
                      textAlign: "center",
                      color: "#525252",
                      // marginBottom: "40px",
                    }}
                  >
                    {testimonials[index].text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-button next next-slide-arrow"
          onClick={handleNext}
        >
          <svg
            viewBox="0 0 24 24"
            className="next-arrow"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
