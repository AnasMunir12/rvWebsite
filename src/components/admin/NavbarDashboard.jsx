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
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
function NavbarDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Faq", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* Contact bar - hidden on mobile */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            bgcolor: "var(--bg-color)",
            display: "flex",
            justifyContent: "space-between",
            px: 8,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"14px"}
          >
            <IconButton>
              <Box
                component="img"
                src="/images/icons/callIcon.svg"
                alt="Call"
              />
            </IconButton>
            <Typography
              sx={{
                color: "var(--white-text)",
                fontFamily: "var(--font-family-hind)",
                fontSize: "var(--font-sm)",
                fontWeight: 400,
              }}
            >
              Call on : (+62) 134 567 891
            </Typography>
            <IconButton>
              <Box
                component="img"
                src="/images/icons/mailIcon.svg"
                alt="Email"
              />
            </IconButton>
            <Typography
              sx={{
                color: "var(--white-text)",
                fontFamily: "var(--font-family-hind)",
                fontSize: "var(--font-sm)",
                fontWeight: 400,
              }}
            >
              kamperven@domain.com
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderColor: "var(--white-text)",
                  height: "12px",
                  alignSelf: "center",
                }}
              />
            }
          >
            <Box
              component="img"
              src="/images/icons/facebook.svg"
              alt="Facebook"
              sx={{ width: "21px", height: "12px" }}
            />
            <Box
              component="img"
              src="/images/icons/twitter.svg"
              alt="Twitter"
              sx={{ width: "21px", height: "12px" }}
            />
            <Box
              component="img"
              src="/images/icons/youtube.svg"
              alt="YouTube"
              sx={{ width: "21px", height: "12px" }}
            />
            <Box
              component="img"
              src="/images/icons/instagram.svg"
              alt="Instagram"
              sx={{ width: "21px", height: "12px" }}
            />
          </Stack>
        </Box>
      )}

      {/* Main Nav */}
      <Box
        sx={{
          width: "100%",
          height: "72px",
          display: "flex",
          justifyContent: isMobile ? "space-between" : "flex-end",
          alignItems: "center",
          px: { xs: 2, md: 2 },
          gap: { md: 2, lg: 6 },
          position: { xs: "absolute", md: "absolute" },
          top: { md: 25, lg: 32 },
          right: 0,
          zIndex: 1000,
          bgcolor: "transparent",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
          borderBottom: "1px solid #FFFFFF8F",
        }}
      >
        {isMobile ? (
          <>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  sx={{
                    fontSize: "30px",
                    color: "var(--bg-color)",
                    bgcolor: "#F0A837",
                    borderRadius: "5px",
                  }}
                />
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            <Stack direction={"row"} spacing={6}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: isActive
                          ? "var(--icon-color)"
                          : "var(--white-text)",
                        fontSize: "var(--font-sm)",
                        fontWeight: isActive ? 700 : 400,
                        fontFamily: "var(--font-family-montserrat)",
                        lineHeight: "22px",
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
            </Stack>
            <Box
              sx={{
                width: { md: "120px", lg: "140px" },
                height: { md: "35px", lg: "50px" },
                backgroundColor: "var(--white-text)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid var(--icon-color)",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "var(--icon-color)",
                  borderColor: "var(--icon-color)",
                  "& .hover-text": {
                    color: "var(--white-text)",
                  },
                },
              }}
              onClick={() => navigate("/login")}
            >
              <Typography
                className="hover-text"
                sx={{
                  fontSize: "var(--font-sm)",
                  fontFamily: "var(--font-family-montserrat)",
                  fontWeight: 600,
                  color: "var(--bg-color)",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Login Now
              </Typography>
            </Box>
          </>
        )}
      </Box>

      {/* Mobile Drawer */}
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
            display: "flex",
            flexDirection: "column",
            p: 3,
            gap: 3,
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpenDrawer(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* Login Button at Top in Drawer */}
          <Box
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "var(--white-text)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid var(--icon-color)",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/login");
              setOpenDrawer(false);
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                fontFamily: "var(--font-family-montserrat)",
                fontWeight: 600,
                color: "var(--bg-color)",
              }}
            >
              Login Now
            </Typography>
          </Box>

          {/* Nav Links in Column */}
          <Stack direction="column" spacing={3} mt={2}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none" }}
                onClick={() => setOpenDrawer(false)}
              >
                <Typography
                  component="span"
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

export default NavbarDashboard;
