"use client";
import { Box, Grid, Typography, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Conatiner() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tech = [
    {
      icon: "/images/faqs/1.svg",
      heading: "Smarter Selling with AI Technology",
      text: "AI-driven tools that price, market, and match your RV with serious buyers.",
    },
    {
      icon: "/images/faqs/2.svg",
      heading: "Zero Upfront Costs, Zero Hassle",
      text: "Start for free and only pay when your RV sells, with full transparency.",
    },
    {
      icon: "/images/faqs/3.svg",
      heading: "Personalized Support at Every Step",
      text: "Real experts handle your listing, paperwork, and negotiations from start to finish.",
    },
  ];

  const faqs = [
    {
      question: "How does your consignment process work?",
      answer:
        "RV consignment is a service where we help sell your RV for you, handling marketing, negotiations, and paperwork.",
    },
    {
      question: "Are there any upfront costs?",
      answer:
        "No upfront costs. You only pay once the RV is successfully sold.",
    },
    {
      question:
        "How is your platform different from a traditional RV dealership?",
      answer:
        "We’re not just a dealership—we’re a technology-driven RV selling platform. Unlike traditional dealers, we use AI, automation, and data to market your RV faster and smarter",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          py: 6,
          px: { xs: 2, md: 6, lg: 8 },
        }}
      >
        <Grid
          container
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Typography
                sx={{
                  fontSize: "var(--font-sm)",
                  fontWeight: 600,
                  fontFamily: "var(--font-family-montserrat)",
                  background:
                    "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.71) 46%)",
                  width: "50px",
                }}
              >
                FAQS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "var(--font-basic)", sm: "var(--font-lg)" },
                  fontWeight: 600,
                  fontFamily: "var(--font-family-montserrat)",
                }}
              >
                Frequently Asked Question's!
              </Typography>
              {faqs.map((faq, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    border: " 0.94px solid #E1E1E6 ",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-md)",
                        fontWeight: 500,
                        fontFamily: "var(--font-family-montserrat)",
                        lineHeight: "24px",
                        p: 2,
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <IconButton onClick={() => toggle(index)}>
                      {openIndex === index ? <RemoveIcon /> : <AddIcon />}
                    </IconButton>
                  </Box>
                  <Collapse in={openIndex === index}>
                    <Typography
                      sx={{
                        mt: 1,
                        fontFamily: "var(--font-family-montserrat)",
                        color: "#555",
                        bgcolor: "var(--icon-color)",
                        p: 2,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Collapse>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="/images/faqs/faqsimg.png" />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            {tech.map((link, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  mb: index === 0 || index === 1 ? 3 : 0,
                }}
              >
                <Box
                  component="img"
                  src={link.icon}
                  alt={link.heading}
                  sx={{
                    width: "52px",
                    height: "52px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "var(--font-md)", sm: "var(--font-basic)" },
                    fontWeight: 600,
                    fontFamily: "var(--font-family-montserrat)",
                    lineHeight: "26px",
                    color: "var(--bg-color  )",
                  }}
                >
                  {link.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "var(--font-sm)", sm: "var(--font-md)" },
                    fontWeight: 400,
                    fontFamily: "var(--font-family-lato)",
                    lineHeight: "26px",
                    color: "#222222BF",
                  }}
                >
                  {link.text}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Conatiner;
