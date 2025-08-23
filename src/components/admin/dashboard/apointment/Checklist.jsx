import { Box, Typography } from "@mui/material";
import React from "react";

function Checklist() {
  const list = [
    {
      icon: "/images/dashboard/apointment/dropicon.svg",
      text: "Clean RV interior and exterior",
    },
    {
      icon: "/images/dashboard/apointment/dropicon.svg",
      text: "Empty all tanks (fresh water, gray water, black water)",
    },
    {
      icon: "/images/dashboard/apointment/dropicon.svg",
      text: "Bring all keys, remotes, and manuals",
    },
    {
      icon: "/images/dashboard/apointment/dropicon.svg",
      text: "Remove all personal belongings",
    },
  ];
  return (
    <>
      <Box
        sx={{
          bgcolor: "#292A28",
          borderRadius: "10px",
          px: 2,
          py: 4,
        }}
      >
        <Typography
          sx={{
            color: "var(--icon-color)",
            fontWeight: 600,
            fontFamily: "var(--font-family-montserrat)",
            fontSize: "var(--font-basic)",
            mb: 2,
          }}
        >
          Pre-Drop Checklist
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {list.map((link, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box component="img" src={link.icon} />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 500,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-sm)",
                  lineHeight: "26px",
                }}
              >
                {link.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "var(--icon-color)",
          py: 2,
          px: { xs: 2, sm: 0 },
          borderRadius: "3px",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "#b17f30ff",
            transition: "all 0.2s",
          },
        }}
      >
        <Typography
          sx={{
            color: "var(--white-text)",
            fontWeight: 500,
            fontFamily: "var(--font-family-montserrat)",
            fontSize: { xs: "var(--font-sm)", sm: "var(--font-md)" },
            textTransform: "uppercase",
          }}
        >
          Schedule for tuesday, January 16 , 2024 at 10 Am
        </Typography>
      </Box>
    </>
  );
}

export default Checklist;
