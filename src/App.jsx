import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Services from "./components/Services";
import Contact from "./components/Contact";
// import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "./components/Footer";
import GlobalPresence from "./components/GlobalPresence";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./components/Testimonials";
// import Partners from "./components/Partners";
import Universities from "./components/Universities";
// import Mentor from "./components/Mentor";
import ChooseUs from "./components/ChooseUs";
import "./assets/fonts.css";
import Transparency from "./components/Transparency";
// import MentorSection from "./components/mentor/MentorSection";
import Services from "./components/service/Services";
import Partners from "./components/partners/Partners";
import ChooseUs2 from "./components/ChooseUs2";
import { BlurEffects } from "./components/syncDocuments/BlurEffects";
import { Heading } from "./components/syncDocuments/Heading";
import { ImageSection } from "./components/syncDocuments/ImageSection";
import TestimonialSection from "./components/googleReviews/TestimonialSection";
import MentorSection from "./components/mentor/MentorSection";
import University from "./components/service/ServicesPages/University/University";
import Letter from "./components/service/ServicesPages/LetterOfRecommendation/Letter";
import Statement from "./components/service/ServicesPages/Statement/Statement";
import Cv from "./components/service/ServicesPages/CV/Cv";
import UniversityApplication from "./components/service/ServicesPages/UniversityApplication/UniversityApplication";
import Accomodation from "./components/service/ServicesPages/Accomodation/Accomodation";
import Visa from "./components/service/ServicesPages/VisaAssistance/Visa";
import BlogList from "./components/Blogs/BlogList";
import { blogs } from "./components/Blogs/blogs";
// import Partners from "./components/partners/Partners";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/* <ChooseUs /> */}
                  <ChooseUs2 />
                  <GlobalPresence />
                  <Testimonials />
                  <Services />
                  <Partners />
                  <Transparency />
                  <Universities />
                  <MentorSection />
                  <div className="container">
                    {/* <BlurEffects /> */}
                    <div className="content">
                      <Heading />
                      <ImageSection />
                    </div>
                  </div>
                  <TestimonialSection />
                  {/* <TestimonialSlider /> */}
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/university" element={<University />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/statement" element={<Statement />} />
            <Route path="/cv" element={<Cv />} />
            <Route
              path="/universityapplication"
              element={<UniversityApplication />}
            />
            <Route path="/accomodation" element={<Accomodation />} />
            <Route path="/visa" element={<Visa />} />
            <Route
              path="/blogs"
              element={
                <div className="app">
                  <h1 className="main-title">Latest News From Our Blogs</h1>
                  <BlogList blogs={blogs} />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
