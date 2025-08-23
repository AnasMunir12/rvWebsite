import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function SelectData() {
  const dates = [
    { day: "Monday", date: "15" },
    { day: "Tuesday", date: "15" },
    { day: "Wednesday", date: "15" },
    { day: "Thursday", date: "15" },
    { day: "Friday", date: "15" },
    { day: "Saturday", date: "15" },
    { day: "Sunday", date: "15" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {/* Mian box of Schedule */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          {/* left text  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Ensure vertical centering
              gap: 1.5, // Add spacing between image and text
            }}
          >
            <Box
              component="img"
              src="/images/dashboard/apointment/trucklogo.svg"
              sx={{
                width: "24px",
                height: "24px",
              }}
            />

            <Typography
              sx={{
                color: "var(--icon-color)",
                fontWeight: 600,
                fontFamily: "var(--font-family-montserrat)",
                fontSize: "var(--font-basic)",
              }}
            >
              Select date
            </Typography>
          </Box>
        </Box>

        {dates.map((link, index) => (
          <Grid size={{ xs: 6, sm: 3, md: 2.4 }} key={index}>
            <Box
              sx={{
                bgcolor: "#292A28",
                borderRadius: "13px",
                px: 2,
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "var(--icon-color)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                },
                "&:hover .hover-text": {
                  color: "black",
                  fontWeight: 600,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-sm  )",
                },
              }}
            >
              <Typography
                className="hover-text"
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 500,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-md  )",
                }}
              >
                {link.day}
              </Typography>
              <Typography
                className="hover-text"
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 500,
                  fontFamily: "var(--font-family-lato)",
                  fontSize: "var(--font-sm )",
                }}
              >
                {link.date}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SelectData;
