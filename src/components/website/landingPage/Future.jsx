import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Future() {
  const futureDetail = [
    {
      icon: "/images/landingpage/future/lighting.svg",
      heading: "Lighting Fast Process",
      textL:
        "AI handles initial qualification & scheduling in minutes, not days",
    },
    {
      icon: "/images/landingpage/future/service.svg",
      heading: "24/7 Availability",
      textL: "Our AI chatbot and VAs work around the clock to serve your needs",
    },
    {
      icon: "/images/landingpage/future/maximum.svg",
      heading: "Maximum Sale Price",
      textL: "Real-time market data ensures competitive pricing for your RV",
    },
    {
      icon: "/images/landingpage/future/expert.svg",
      heading: "Expert Virtual Assistants",
      textL:
        "Trained VAs handle complex questions and guide you through the process",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          bgcolor: "var(--bg-color)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 6, lg: 8 },
          py: 8,
        }}
      >
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box display="flex" flexDirection={"column"} gap={4}>
              <Typography
                sx={{
                  display: "inline-block",
                  background:
                    "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.71) 46%)",
                  px: 1,
                  fontFamily: "var(--font-family-montserrat)",
                  textTransform: "uppercase",
                  fontSize: "var(--font-md)",
                  fontWeight: 600,
                  width: "180px",
                }}
              >
                Why Choose Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: {
                    xs: "var(--font-standard)",
                    md: "var(--font-lg)",
                  },
                  fontWeight: 600,
                  color: "var(--white-text)",
                }}
              >
                The Future of RV Selling
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-lato)",
                  fontSize: { xs: "var(--font-sm)", sm: "var(--font-md)" },
                  fontWeight: 400,
                  color: "var(--white-text)",
                  lineHeight: "24px",
                }}
              >
                Experience cutting-edge AI technology that maximizes your sale
                price while minimizing your effort. Our automated process is
                faster, smarter, and more efficient than traditional methods.
              </Typography>
              <Box>
                {/* First row with index 0 and 1 */}
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  gap={4}
                  mb={4}
                >
                  {futureDetail.slice(0, 2).map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                      width={{ xs: "100%", md: "50%" }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.heading}
                        sx={{
                          width: { xs: 38, sm: 44 },
                          height: { xs: 38, sm: 44 },
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "var(--font-family-montseerat)",
                            fontSize: {
                              xs: "var(--font-sm)",
                              md: "var(--font-md)",
                            },
                            fontWeight: 500,
                            color: "var(--white-text)",
                            lineHeight: "26px",
                          }}
                        >
                          {item.heading}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#FFFFFFA3",
                            fontFamily: "var(--font-family-Lato)",
                            fontSize: "var(--font-sm)",
                            fontWeight: 500,
                            lineHeight: "26px",
                          }}
                        >
                          {item.textL}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Second row with index 2 and 3 */}
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  gap={4}
                >
                  {futureDetail.slice(2, 4).map((item, index) => (
                    <Box
                      key={index + 2}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                      width={{ xs: "100%", md: "50%" }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.heading}
                        sx={{
                          width: { xs: 38, sm: 44 },
                          height: { xs: 38, sm: 44 },
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "var(--font-family-montseerat)",
                            fontSize: {
                              xs: "var(--font-sm)",
                              md: "var(--font-md)",
                            },
                            fontWeight: 500,
                            color: "var(--white-text)",
                            lineHeight: "26px",
                          }}
                        >
                          {item.heading}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#FFFFFFA3",
                            fontFamily: "var(--font-family-Lato)",
                            fontSize: "var(--font-sm)",
                            fontWeight: 500,
                            lineHeight: "26px",
                          }}
                        >
                          {item.textL}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/images/landingpage/future/bgimg.png"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Future;
