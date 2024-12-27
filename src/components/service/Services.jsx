import React from "react";
import { ServiceCard } from "./ServiceCard";
import "./Services.css";
import s1 from "../../assets/Services/s1.png";
import s2 from "../../assets/Services/s2.png";
import s3 from "../../assets/Services/s3.png";
import s4 from "../../assets/Services/s4.png";
import s5 from "../../assets/Services/s5.png";
import s6 from "../../assets/Services/s6.png";
import s7 from "../../assets/Services/s7.png";
import s8 from "../../assets/Services/s8.png";

const SERVICES_DATA = [
  {
    title: "Free Counselling",
    description:
      "Get Free Expert Guidance on your Study Abroad dream and shortlist courses from a plethora of 500+ Universities and 15,000+ courses.",
    image: s1,
  },
  {
    title: "University Shortlisting",
    description:
      "50% Applications fail due to wrong choice of university. Apply to multiple institutions in a single application with numerous fee waivers and save your time",
    image: s2,
    imageAlt: "University selection process",
    isReversed: true,
  },
  {
    title: "Statement of Purpose",
    description:
      "Get an Education Loan without Collateral within 3-5 working days at competitive Interest Rates and clear the financial hurdle.",
    image: s3,
    imageAlt: "Writing statement of purpose",
  },
  {
    title: "Curriculum Vitae",
    description:
      "Unlock your potential with Germanywale - CV enhancement experts for successful university applications",
    image: s4,
    imageAlt: "CV preparation",
    isReversed: true,
  },
  {
    title: "Letter of Recommendation",
    description: '"Good" to "Great" - Letter of recommendation ',
    image: s5,
    imageAlt: "Letter of recommendation",
  },
  {
    title: "University Application",
    description:
      "Send your money abroad securely for University Fees, GIC, LIVING Expenses or a Blocked Account at the lowest Exchange Rates and fastest processing.",
    image: s6,
    imageAlt: "University application process",
    isReversed: true,
  },
  {
    title: "Visa Assistance",
    description:
      "With our Visa Expert, fulfil the Visa application requirements and apply for the Visa. We have a success rate of more than 95.5%",
    image: s7,
    imageAlt: "Visa assistance",
  },
  {
    title: "Accommodation and Travel Assistance",
    description:
      "Struggling to find accommodation before moving to a new country? Not anymore. Book your secure accommodation online and stay stress-free.",
    image: s8,
    imageAlt: "Accommodation assistance",
    isReversed: true,
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24 relative">
          <h2 className="services-heading">SERVICES</h2>
          <span className="what-we-do">WHAT WE DO</span>
        </div>

        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <div className="vertical-line"></div> */}

          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
