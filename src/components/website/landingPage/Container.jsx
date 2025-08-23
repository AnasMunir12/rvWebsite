import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Container() {
  const details = [
    {
      img: "/images/landingpage/container/tick.svg",
      text: "Maximize your RV's sale price through data-driven pricing",
    },
    {
      img: "/images/landingpage/container/tick.svg",
      text: "Eliminate waiting times with instant AI responses",
    },
    {
      img: "/images/landingpage/container/tick.svg",
      text: "Provide 24/7 support through advanced automation",
    },
    {
      img: "/images/landingpage/container/tick.svg",
      text: "Ensure complete security and transparency throughout",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        pt: { xs: 18, md: 16 },
        pb: { xs: 12, lg: 10 },
        px: { xs: 2, md: 6, lg: 8 },
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        maxWidth="xl"
        sx={{ mx: "auto" }}
      >
        {/* Left Grid - Images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              maxWidth: "100%",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/images/landingpage/container/section.png"
              alt="Section"
              sx={{
                width: "250px",
                height: "95px",
                position: "absolute",
                zIndex: 1,
                top: "-70px", // 🔥 move slightly up
                left: "5%", // similar to ml:2
              }}
            />
            <Box
              component="img"
              src="/images/landingpage/container/mainImage.png"
              alt="Main"
              sx={{
                width: "100%",
                height: "auto",
                mb: 2,
                position: "relative",
              }}
            />
            <Box display="flex" gap={"2%"}>
              <Box
                component="img"
                src="/images/landingpage/container/img1.png"
                alt="img1"
                sx={{ width: "49%", height: "auto" }}
              />
              <Box
                component="img"
                src="/images/landingpage/container/img2.png"
                alt="img2"
                sx={{ width: "49%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Grid - Text */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
              maxWidth: "100%",
              mx: "auto",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                background:
                  "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.49) 46%)",

                px: 1,
                fontFamily: "var(--font-family-montserrat)",
                textTransform: "uppercase",
                fontSize: "var(--font-md)",
                fontWeight: 600,
                width: "180px",
                color: "#222222",
              }}
            >
              About Rv Van
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "var(--font-standard)", md: "var(--font-lg)" },
                fontFamily: "var(--font-family-montserrat)",
                fontWeight: 600,
                color: "var(--bg-color)",
              }}
            >
              Revolutionizing RV Sales
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "var(--font-sm)", md: "var(--font-md)" },
                fontFamily: "var(--font-family-lato)",
                fontWeight: 400,
                color: "var(--bg-color)",
              }}
            >
              We're not just another RV dealership. We're technology pioneers
              who saw an industry stuck in the past and decided to build the
              future. Our mission is simple: use cutting-edge AI to make RV
              selling effortless, profitable, and stress-free.
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              {details.map((data, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Box component="img" src={data.img} alt="" />
                  <Typography
                    sx={{
                      fontSize: { xs: "var(--font-sm)", md: "var(--font-md)" },
                      color: "#222222BF",
                      fontWeight: 400,
                      lineHeight: "24px",
                      fontFamily: "var(--font-family-lato)",
                    }}
                  >
                    {data.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Container;
