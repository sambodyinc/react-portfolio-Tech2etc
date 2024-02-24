import React from "react";
import Navbar from "../components/navbar";
import Heroimg2 from "../components/heroimg2";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Jobs from "../components/jobs";


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        bg-image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="PROJECTS"
        text="Some of my most recent work."
      />
      <Jobs/>
      <Pricing/>
      <Footer />
    </div>
  );
};

export default Project;
