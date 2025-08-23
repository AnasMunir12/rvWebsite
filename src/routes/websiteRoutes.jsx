// src/routes/websiteRoutes.js
import { Route } from "react-router-dom";
import Home from "../pages/website/landingPage/Home";
import About from "../pages/website/about/About";
import Faq from "../pages/website/faqs/Faq";
import Contact from "../pages/website/contact/Contact";
import SellRV from "../pages/website/sellRV/SellRV";

export const websiteRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/RVsell" element={<SellRV />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact" element={<Contact />} />
  </>
);
