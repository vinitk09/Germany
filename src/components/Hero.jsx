import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSectionImage from "../assets/heroSection.jpg";
import Tesla from "../assets/Tesla.png";
import Audi from "../assets/Audi.png";
import BMW from "../assets/BMW.png";
import Lufthansa from "../assets/Lufthansa.png";
import Women from "../assets/Hero/Women.png";
// import Icon from "../assets/Hero/university_icon.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading_image">
        <div className="heading-h1">
          <h1>
            <span className="block">Empowering Dreams</span>
            <span className="block">of Studying in</span>
            <span className="block gradient-text">Germany</span>
          </h1>
        </div>
        <div class="circle-container">
          <img src={Women} alt="Hero image" />
          <div class="circle one"></div>
          <div class="circle two"></div>
          <div class="circle three"></div>
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a8 8 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128m-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24M96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192z"
              />
            </svg>
          </div>

          {/* Small icon of university */}
          <div class="icon-circle2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a8 8 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128m-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24M96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192z"
              />
            </svg>
          </div>
          <div className="accepted-card">
            <div className="accepted-heading">Accepted</div>
            <div className="accepted-description">
              Get admitted in best German Universities
            </div>
            <div className="tick-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <defs>
                  <mask id="ipTCorrect0">
                    <path
                      fill="#555555"
                      fillRule="evenodd"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                      clipRule="evenodd"
                    ></path>
                  </mask>
                </defs>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipTCorrect0)"
                ></path>
              </svg>
            </div>
          </div>

          {/* Accepted-Card behind the image of the girl */}
          <div className="accepted-card2">
            <div className="accepted-heading2">Accepted</div>
            <div className="accepted-description2">
              Get admitted in best German Universities
            </div>
            <div className="tick-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <defs>
                  <mask id="ipTCorrect0">
                    <path
                      fill="#555555"
                      fillRule="evenodd"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                      clipRule="evenodd"
                    ></path>
                  </mask>
                </defs>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipTCorrect0)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="call-for-counselling">
        <button className="btn-call">Call for free Counselling</button>
      </div>
      <div className="small-description">
        Our Student Work At Global Offices
      </div>
      <div className="car-logo">
        <div className="logo-container-b tesla">
          <img src={Tesla} alt="Tesla Logo" />
        </div>
        <div className="logo-container-b bmw">
          <img src={BMW} alt="BMW Logo" />
        </div>
        <div className="logo-container-b audi">
          <img src={Audi} alt="Audi Logo" />
        </div>

        <div className="logo-container-b lufthansa">
          <img src={Lufthansa} alt="Lufthansa Logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
