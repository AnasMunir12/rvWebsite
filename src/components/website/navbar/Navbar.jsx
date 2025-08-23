import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Sell Your RV", path: "/RVsell" },
    { name: "Faq", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            height: 40,
            bgcolor: "var(--bg-color)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { md: 10, lg: 15 },
            py: 0.5,
            zIndex: 1200,
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/images/icons/callIcon.svg"
                alt="Call"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hind)",
                }}
              >
                Call on : (+62) 134 567 891
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/images/icons/mailIcon.svg"
                alt="Email"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hind)",
                }}
              >
                kamperven@domain.com
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            gap={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#fff" }}
              />
            }
          >
            <Box
              component="img"
              src="/images/icons/facebook.svg"
              alt="Facebook"
              sx={{ width: 25, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/twitter.svg"
              alt="Twitter"
              sx={{ width: 25, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/youtube.svg"
              alt="YouTube"
              sx={{ width: 18, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/instagram.svg"
              alt="Instagram"
              sx={{ width: 18, cursor: "pointer" }}
            />
          </Stack>
        </Box>
      )}

      {/* Main Navbar */}
      <Box
        sx={{
          width: "100%",
          height: 72,
          position: "absolute",
          top: { md: 40 },
          left: 0,
          px: { xs: 2, lg: 2 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1100,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
        }}
      >
        {/* Inner container with shrinkable width */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "800px", md: "100%", lg: "100%" }, // 👈 shrink limit
            // px: { xs: 2, sm: 4, md: 6 }, // responsive padding
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center" flex={1}>
            {/* Left side for logo if needed */}
          </Box>

          {isMobile ? (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon
                sx={{
                  fontSize: 30,
                  color: "var(--bg-color)",
                  bgcolor: "#F0A837",
                  borderRadius: "5px",
                }}
              />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center" gap={{ md: 5, lg: 7 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: isActive
                          ? "var(--icon-color)"
                          : "var(--white-text)",
                        fontSize: "var(--font-sm)",
                        fontWeight: isActive ? 700 : 400,
                        fontFamily: "var(--font-family-montserrat)",
                        lineHeight: "22px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "var(--icon-color)",
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                );
              })}

              <Box
                onClick={() => navigate("/login")}
                sx={{
                  px: 3,
                  py: 1.5,
                  border: "1px solid var(--icon-color)",
                  borderRadius: "3px",
                  backgroundColor: "var(--white-text)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "var(--icon-color)",
                    borderColor: "var(--icon-color)",
                    "& .hover-text": {
                      color: "var(--white-text)",
                    },
                  },
                }}
              >
                <Typography
                  className="hover-text"
                  sx={{
                    fontSize: "var(--font-sm)",
                    fontWeight: 600,
                    fontFamily: "var(--font-family-montserrat)",
                    color: "var(--bg-color)",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Login Now
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "var(--bg-color)",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpenDrawer(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          <Box
            onClick={() => {
              navigate("/login");
              setOpenDrawer(false);
            }}
            sx={{
              width: "100%",
              py: 1.5,
              backgroundColor: "var(--white-text)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid var(--icon-color)",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                fontWeight: 600,
                fontFamily: "var(--font-family-montserrat)",
                color: "var(--bg-color)",
              }}
            >
              Login Now
            </Typography>
          </Box>

          <Stack direction="column" spacing={3} mt={2}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none" }}
                onClick={() => setOpenDrawer(false)}
              >
                <Typography
                  sx={{
                    color: "var(--white-text)",
                    fontSize: "var(--font-sm)",
                    fontWeight: 400,
                    fontFamily: "var(--font-family-montserrat)",
                    "&:hover": {
                      color: "var(--icon-color)",
                    },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
