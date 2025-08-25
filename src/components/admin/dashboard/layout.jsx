import { useState } from "react";
import { Box, IconButton, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashcboardNavbar from "../DashcboardNavbar";
import Sidebar from "../Sidebar";
import NavbarDashboard from "../NavbarDashboard";
import { Outlet } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleColappased = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="dashboard-layout">
      <NavbarDashboard />
      <DashcboardNavbar />

      <div className="dashboard-main">
        <Box
          sx={{
            backgroundImage: "url(/images/background.png)",
            height: "auto",
            px: isMobile ? 2 : 7,
            py: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              py: 2,
              gap: 2,
              // backgroundColor: "#3333335E",
              border: "1px solid #FFFFFF38",
              borderRadius: "20px",
            }}
          >
            {/* Sidebar (Desktop) */}
            {!isMobile && (
              <Box
                sx={{
                  width: isCollapsed ? "80px" : "300px",
                  // minWidth: isCollapsed ? "80px" : "auto",
                  transition: "width 0.3s ease",
                  alignSelf: "flex-start", // Important
                  position: "sticky",
                  top: "100px",
                  height: "100vh", // Full height of screen
                }}
              >
                <Sidebar
                  isCollapsed={isCollapsed}
                  handleCollapseToggle={handleColappased}
                  isMobile={isMobile}
                />
              </Box>
            )}

            {/* Sidebar (Mobile Drawer) */}
            {isMobile && (
              <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: { width: "250px", bgcolor: "black", p: 2 },
                }}
              >
                <Sidebar
                  isCollapsed={false}
                  isMobile={true}
                  handleDrawerToggle={handleDrawerToggle}
                />
              </Drawer>
            )}

            {/* Main Content */}
            <Box
              sx={
                {
                  // flexGrow: 1,
                  // maxHeight: "100vh", // full viewport height
                  // overflowY: "auto", // scroll only the right content
                  // pr: 2,
                  // scrollbarWidth: "none", // Firefox
                  // "&::-webkit-scrollbar": {
                  //   display: "none", // Chrome, Safari
                  // },
                }
              }
            >
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    bgcolor: "#F0A837",
                    color: "#fff",
                    width: "36px",
                    height: "36px",
                    mb: 2,
                    "&:hover": { bgcolor: "#d98e20" },
                  }}
                >
                  <MenuIcon fontSize="small" />
                </IconButton>
              )}
              <Outlet />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
