import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "./Banner";
import Container from "./Container";
import Future from "./Future";
import Process from "./Process";
import Touch from "./Touch";
import Footer from "../footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container />
      <Future />
      <Process />
      <Touch />
      <Footer />
    </>
  );
}

export default LandingPage;
