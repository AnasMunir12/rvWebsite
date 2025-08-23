import { useState } from "react";
import { Box, Drawer, useMediaQuery, Grid } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery("(max-width:1000px)");

  const handleColappased = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [heading, setHeading] = useState("Dashboard");

  return (
    <div className="dashboard-layout">
      <Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#f4f4f4",
          }}
        >
          {/* Sidebar (Desktop) */}
          {!isMobile && (
            <Box
              sx={{
                width: isCollapsed ? "80px" : "230px",
                minWidth: isCollapsed ? "80px" : "auto",
                transition: "width 0.3s ease",
                top: 0,
                height: "100vh",
                pt: "1rem",
                pl: "1rem",
                pb: "1rem",
              }}
            >
              <Sidebar
                setHeading={setHeading}
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
                setHeading={setHeading}
                isCollapsed={false}
                isMobile={true}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Drawer>
          )}

          {/* Main Content */}
          <Box
            sx={{
              width: "80%",
              flexGrow: 1,
              maxHeight: "100vh",
              overflowY: "auto",
              pr: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: "1.5rem",
            }}
          >
            <Navbar
              heading={heading}
              isMobile={isMobile}
              onMenuClick={handleDrawerToggle}
            />

            <Outlet />
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export default Layout;
