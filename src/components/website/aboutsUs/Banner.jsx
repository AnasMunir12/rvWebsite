import { Box, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/background.png)",
        width: "100%",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Box
          component="img"
          src="/images/about/line.svg"
          sx={{
            width: "25px",
            height: "4px",
          }}
        />
        <Typography
          sx={{
            fontSize: "var(--font-xs)",
            fontWeight: 500,
            fontFamily: "var(--font-family-montserrat)",
            color: "var(--white-text)",
            textTransform: "uppercase",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "var(--font-1xl)" },
          fontWeight: 500,
          fontFamily: "var(--font-family-montserrat)",
          color: "var(--white-text)",
          lineHeight: "59px",
        }}
      >
        About RV Consignment
      </Typography>
      <Box></Box>
    </Box>
  );
}

export default Banner;
