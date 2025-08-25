// WebsiteLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../../components/website/navbar/Navbar";
import Footer from "../../components/website/footer/Footer";

function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default WebsiteLayout;
