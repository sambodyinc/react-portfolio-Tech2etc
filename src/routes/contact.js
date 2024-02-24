import React from "react";
import Navbar from "../components/navbar";
import Heroimg2 from "../components/heroimg2";
import Form from "../components/form";
import Footer from "../components/footer";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        imagebg="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="CONTACT"
        text="Write me, let's have a chat."
      />
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
