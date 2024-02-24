import React from "react";
import Navbar from "../components/navbar";
import Heroimg2 from "../components/heroimg2";
import AboutContent from "../components/aboutContent";
import Footer from "../components/footer";


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        imagebg="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="ABOUT"
        text="I am a Front-End Developer."
      />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
