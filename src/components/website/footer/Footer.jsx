import { Box, Grid, Typography, InputBase, IconButton } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

function Footer() {
  const icons = [
    "/images/landingpage/footer/1.svg",
    "/images/landingpage/footer/2.svg",
    "/images/landingpage/footer/4.svg",
    "/images/landingpage/footer/3.svg",
  ];

  const quickLinks = [
    {
      label: "About",
      icon: "/images/landingpage/footer/arrow.svg",
      path: "/about",
    },
    {
      label: "Sell Your RV ",
      icon: "/images/landingpage/footer/arrow.svg",
      path: "/RVsell",
    },
    {
      label: "Contact",
      icon: "/images/landingpage/footer/arrow.svg",
      path: "/contact",
    },
  ];

  const customerServices = [
    {
      label: "Address",
      icon: "/images/landingpage/footer/arrow.svg",
      description: "6391 Elgin St. Celina, Delaware",
    },
    {
      label: "Phone Number",
      icon: "/images/landingpage/footer/arrow.svg",
      description: "(629) 555-0129",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--bg-color)",
        pt: 10,
        pb: 1,
        px: { xs: 2, md: 6, lg: 8 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* First Grid */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              sx={{
                fontSize: { xs: "var(--font-sm)", sm: "var(--font-md)" },
                fontWeight: 400,
                fontFamily: "var(--font-family-lato)",
                color: "var(--white-text)",
                lineHeight: "24px",
              }}
            >
              Our advanced digital process handles everything from first contact
              to RV drop-off with ease and accuracy.
            </Typography>
            <Box display="flex" gap={2}>
              {icons.map((icon, index) => (
                <Box
                  key={index}
                  component="img"
                  src={icon}
                  alt={`footer-icon-${index}`}
                  sx={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, filter 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      filter: "brightness(1.2)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Second Grid - Quick Links */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "start", sm: "start" }}
            sx={{
              mx: { xs: 0, sm: 8, xl: 10 },
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-md)",
                fontWeight: 600,
                fontFamily: "var(--font-family-lato)",
                color: "var(--white-text)",
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            {quickLinks.map((item, idx) => (
              <Box
                key={idx}
                display="flex"
                alignItems="center"
                gap={1.5}
                mb={2}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt="arrow-icon"
                  sx={{ width: "9px", height: "14px" }}
                />
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "var(--font-sm)",
                      color: "var(--white-text)",
                      fontFamily: "var(--font-family-lato)",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Third Grid - Customer Services */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontSize: "var(--font-md)",
              fontWeight: 600,
              fontFamily: "var(--font-family-lato)",
              color: "var(--white-text)",
              mb: 2,
            }}
          >
            Customer Services
          </Typography>
          {customerServices.map((item, idx) => (
            <Box key={idx} mb={2}>
              <Box display="flex" alignItems="center" gap={1.5}>
                <Box
                  component="img"
                  src={item.icon}
                  alt="arrow-icon"
                  sx={{ width: "9px", height: "14px" }}
                />
                <Typography
                  sx={{
                    fontSize: "var(--font-sm)",
                    color: "var(--white-text)",
                    fontFamily: "var(--font-family-lato)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "var(--font-sm)",
                  fontFamily: "var(--font-family-lato)",
                  color: "#ffffff99",
                  ml: 3,
                  mt: 0.5,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Fourth Grid - Subscribe */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontSize: "var(--font-md)",
              fontWeight: 600,
              fontFamily: "var(--font-family-lato)",
              color: "var(--white-text)",
              mb: 2,
            }}
          >
            Subscribe Newsletter
          </Typography>
          <Typography
            sx={{
              fontSize: "var(--font-sm)",
              color: "var(--white-text)",
              fontFamily: "var(--font-family-lato)",
              mb: 2,
            }}
          >
            Subscribe our Newsletter for future Updates
          </Typography>
          <Box
            sx={{
              display: "flex",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "white",
              width: "100%",
              maxWidth: 300,
            }}
          >
            <InputBase
              placeholder="Your Email"
              sx={{
                flex: 1,
                px: 2,
                py: 1,
                fontSize: "var(--font-sm)",
                fontFamily: "var(--font-family-lato)",
                color: "black",
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#F2A33A",
                borderRadius: 0,
                px: 2,
                "&:hover": { backgroundColor: "#d88f2e" },
              }}
            >
              <SendIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography
        sx={{
          fontFamily: "var(--font-family-hind)",
          fontSize: "var(--font-sm)",
          color: "var(--white-text)",
          fontWeight: 400,
          textAlign: "center",
          mt: 8,
        }}
      >
        Copyright © 2025. All rights reserved. Senew tech
      </Typography>
    </Box>
  );
}

export default Footer;
