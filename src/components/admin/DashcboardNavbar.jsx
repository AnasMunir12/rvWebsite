import { Box, Typography } from "@mui/material";
import React from "react";

function DashcboardNavbar() {
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
          Start Consign Now
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
        RV Consignment
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "var(--font-sm)", md: "var(--font-md)" },
          fontWeight: 300,
          fontFamily: "var(--font-family-lato)",
          color: "var(--white-text)",
          lineHeight: "26px",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        Our revolutionary AI and virtual assistant technology handles everything
        from first contact to RV drop-off.
      </Typography>
      <Box></Box>
    </Box>
  );
}

export default DashcboardNavbar;
