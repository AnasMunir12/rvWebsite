import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Touch() {
  const contactDetails = [
    {
      iconimg: "/images/landingpage/phone.png",
      text: "Phone",
      info: "Call us during business hours",
      number: "(555) 123-4577",
    },
    {
      iconimg: "/images/landingpage/email.png",
      text: "Email",
      info: "Send us a message anytime",
      number: "consign@autoconsignpro.com",
    },
    {
      iconimg: "/images/landingpage/location.png",
      text: "Location",
      info: "Visit our dealership",
      number: "123 RV Boulevard, Dealership",
    },
  ];

  const separatorImages = [
    "/images/landingpage/arrowdown.png",
    "/images/landingpage/arrowup.png",
  ];

  return (
    <>
      <Box
        sx={{ py: 8, px: { xs: 2, md: 6, lg: 8 }, backgroundColor: "#F4F4F4" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
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
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "var(--font-basic)", sm: "var(--font-lg)" },
              fontWeight: 600,
              fontFamily: "var(--font-family-montserrat)",
              color: "var(--bg-color)",
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "var(--font-sm)", sm: "var(--font-md)" },
              fontWeight: 400,
              fontFamily: "var(--font-family-lato)",
              color: "var(--bg-color)",
              lineHeight: "24px",
            }}
          >
            Our team is here to help you through every step of the consignment
            process.
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              overflowX: { xs: "visible", sm: "auto" },
            }}
          >
            {contactDetails.map((item, index) => (
              <React.Fragment key={index}>
                <Grid
                  sx={{
                    flex: "0 0 auto",
                    p: 2,
                    borderRadius: 2,
                    textAlign: "center",
                    width: { xs: 220, sm: 250 },
                  }}
                >
                  <Box
                    component="img"
                    src={item.iconimg}
                    alt={item.text}
                    sx={{ width: 40, height: 40, mb: 1 }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "var(--font-basic)",
                      fontFamily: "var(--font-family-montserrat)",
                      color: "var(--bg-color)",
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "var(--font-sm)",
                      fontFamily: "var(--font-family-montserrat)",
                      color: "var(--bg-color)",
                    }}
                  >
                    {item.info}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "var(--font-md)",
                      color: "var(--icon-color)",
                      fontFamily: "var(--font-family-lato)",
                    }}
                  >
                    {item.number}
                  </Typography>
                </Grid>

                {/* Only add image between boxes, not after the last one */}
                {index < contactDetails.length - 1 && (
                  <Grid display={{ xs: "none", sm: "block" }}>
                    <Box
                      component="img"
                      src={separatorImages[index]}
                      alt="separator"
                      sx={{ width: 40, height: "auto" }}
                    />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Touch;
