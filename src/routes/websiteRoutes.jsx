// src/routes/websiteRoutes.js
import Home from "../pages/website/landingPage/Home";
import About from "../pages/website/about/About";
import Faq from "../pages/website/faqs/Faq";
import Contact from "../pages/website/contact/Contact";
import SellRV from "../pages/website/sellRV/SellRV";
import Navbar from "../components/adminDashboard/Navbar";
import { Route } from "react-router-dom";
import WebsiteLayout from "../pages/websiteLayout/WebsiteLayout";

export const websiteRoutes = (
  <>
    <Route element={<WebsiteLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/RVsell" element={<SellRV />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </>
);
