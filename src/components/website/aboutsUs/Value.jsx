import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Value() {
  const valueData = [
    {
      heading: "📈 Our Mission",
      text: "To empower RV owners with a smarter, simpler way to sell, using automation, data, and dedicated support — all without upfront fees or wasted time.",
    },
    {
      heading: "🧭 Our Vision",
      text: "To become the go-to platform for RV consignment — where modern tools and human service come together to make selling your RV as easy as booking a flight.",
    },
  ];
  return (
    <>
      <Box sx={{ py: 6, px: { xs: 2, md: 6, lg: 8 } }}>
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
                "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.49) 46%)",
              width: "140px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            OUR VALUES
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
            Our Core Values
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/images/about/valueimg.png"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  width: "100%",
                }}
              >
                {valueData.map((data, index) => (
                  <Box key={index}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "var(--font-basic)",
                          sm: "var(--font-standard)",
                        },
                        fontFamily: "var(--font-family-montserrat)",
                        fontWeight: 600,
                        lineHeight: "46px",
                        color: "var(--bg-color)",
                      }}
                    >
                      {data.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "var(--font-sm)",
                          sm: "var(--font-md)",
                        },
                        fontFamily: "var(--font-family-lato)",
                        fontWeight: 400,
                        lineHeight: "24px",
                        color: "#222222BF",
                      }}
                    >
                      {data.text}
                    </Typography>
                    <br />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Value;
