"use client";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function Conatiner() {
  const serviceDetail = [
    {
      icon: "/images/service/1.svg",
      heading: "Free Online Evaluation",
      text: "Get a fast, data-backed price range based on real-time market insights. No fees, no commitments.",
    },
    {
      icon: "/images/service/2.svg",
      heading: "AI-Assisted Qualification",
      text: "Our intelligent chatbot asks the right questions to understand your RV’s condition, ownership and expectations.",
    },
    {
      icon: "/images/service/3.svg",
      heading: "Digital Info Packet",
      text: "A beautifully designed info packet with process details, required documents, fees, and timeline expectations.",
    },
    {
      icon: "/images/service/4.svg",
      heading: "Dedicated VA Support",
      text: "Our Virtual Assistants (VAs) step in to answer questions, help with documents, and make sure everything’s on track.",
    },
    {
      icon: "/images/service/5.svg",
      heading: "Secure Document Upload",
      text: "A secure online portal lets you easily upload your title, ID, lien release, service records, and RV photos",
    },
    {
      icon: "/images/service/6.svg",
      heading: "Schedule Drop-off or Inspection",
      text: "Book an inspection or drop-off time using our live calendar tool. Pick a date that works for you, and we’ll handle the rest.",
    },
  ];
  return (
    <>
      <Box sx={{ py: 6, px: { xs: 4, sm: 2, lg: 12, xl: 20 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // textAlign: "center",
            alignItems: "center",
            // mb: 5,
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "var(--font-sm)",
              fontWeight: 600,
              fontFamily: "var(--font-family-montserrat)",
              background:
                "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.71) 46%)",
              width: "100px",
              mx: "auto",
              pl: "0.3rem",
              // textAlign: "center",
            }}
          >
            SERVICES
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "var(--font-basic)", sm: "var(--font-lg)" },
              fontWeight: 600,
              fontFamily: "var(--font-family-montserrat)",
              color: "var(--bg-color)",
              textAlign: "center",
            }}
          >
            Our Premium Services
          </Typography>

          <Grid container spacing={2} mb={4}>
            {serviceDetail.map((link, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    py: 2,
                    px: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "330px",
                    height: "275px",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={link.icon}
                    alt={link.heading}
                    sx={{
                      width: "62px",
                      height: "62px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "var(--font-sm)", md: "var(--font-md)" },
                      fontWeight: 600,
                      fontFamily: "var(--font-family-montserrat)",
                      color: "var(--bg-color)",
                      lineHeight: "26px",
                    }}
                  >
                    {link.heading}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "var(--font-xs)", md: "var(--font-sm)" },
                      fontWeight: 400,
                      fontFamily: "var(--font-family-lato)",
                      color: "#222222BF",
                      lineHeight: "24px",
                    }}
                  >
                    {link.text}
                  </Typography>
                  <Button
                    style={{
                      padding: "6px 20px",
                      backgroundColor: "var(--icon-color)",
                      color: "var(--white-text)",
                      border: "none",
                      borderRadius: "3px",
                      fontWeight: 600,
                      cursor: "pointer",
                      textTransform: "capitalize",
                    }}
                  >
                    See Details
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Button
            size="large"
            style={{
              padding: "20px 30px",
              backgroundColor: "var(--icon-color)",
              color: "var(--white-text)",
              border: "none",
              borderRadius: "5px",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            See all Services
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Conatiner;
