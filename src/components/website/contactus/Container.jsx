import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function Container() {
  const contactdata = [
    {
      icon: "/images/contact/1.svg",
      heading: "Address",
      text: "6391 Elgin St. Celina, Delaware",
    },
    {
      icon: "/images/contact/2.svg",
      heading: "Phone Number",
      text: "(629) 555-0129",
    },
    {
      icon: "/images/contact/3.svg",
      heading: "Opening",
      text: "Sun-10AM To 5PM",
    },
    {
      icon: "/images/contact/4.svg",
      heading: "E-mail",
      text: "michael.mitc@example.com",
    },
  ];
  return (
    <>
      <Box
        sx={{
          py: 4,
          px: { xs: 4, md: 8 },
        }}
      >
        <Grid container spacing={2}>
          {contactdata.map((link, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderBottom: "0.87px solid #F0A837",
                    boxShadow: "0px 3.82px 17.36px -0.87px #1310220D",
                  }}
                >
                  <Box
                    component="img"
                    src={link.icon}
                    sx={{
                      width: "56px",
                      height: "56px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "var(--font-sm)",
                        md: "var(--font-basic)",
                      },
                      fontFamily: "var(--font-family-montserrat)",
                      fontWeight: 600,
                      color: "var(--bg-color)",
                      //   lineHeight: "46px",
                    }}
                  >
                    {link.heading}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "var(--font-sm)",
                      fontFamily: "var(--font-family-lato)",
                      fontWeight: 400,
                      color: "#333333",
                      //   lineHeight: "46px",
                    }}
                  >
                    {link.text}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Container;
