import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

function Apointment() {
  const schedule = [
    {
      icon: "/images/dashboard/apointment/location.svg",
      name: "Name",
      text: "Manchester Kent",
    },
    {
      icon: "/images/dashboard/apointment/call.svg",
      name: "Phone",
      text: "(406) 555-0120",
    },
    {
      icon: "/images/dashboard/apointment/inbox.svg",
      name: "Email",
      text: "georgia.young@example.com",
    },
  ];
  return (
    <>
      <Grid>
        <Grid>
          {/* Mian box of Schedule */}

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
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
                  fontSize: { xs: "var(--font-md)", sm: "var(--font-basic)" },
                }}
              >
                Schedule your RV Drop-Off
              </Typography>
            </Box>

            {/* Right button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                backgroundColor: "var(--icon-color)",
                borderRadius: "8px",
                p: "10px 20px",
              }}
            >
              <Box
                component="img"
                src="/images/dashboard/apointment/calendarlogo.svg"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 600,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-xs) ",
                }}
              >
                Calendar
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "start", sm: "space-between" },
              backgroundColor: "#292A28",
              borderRadius: "13px",
              px: { xs: 2, sm: 4 },
              py: { xs: 2, md: 6 },
              mt: 1.5,
              gap: { xs: 4, md: 2 },
            }}
          >
            {schedule.map((link, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center", // Ensure icon + text aligned vertically
                  gap: 2,
                }}
              >
                {/* Icon */}
                <Box
                  component="img"
                  src={link.icon}
                  sx={{
                    width: "20px",
                    height: "20px",
                  }}
                />

                {/* Texts */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "column" }, // Row on mobile, column on larger
                    alignItems: { xs: "center", sm: "flex-start" }, // Important: Align left in column view
                    gap: { xs: 1, sm: 0 }, // Reduce gap on sm
                  }}
                >
                  <Typography
                    sx={{
                      color: "var(--white-text)",
                      fontWeight: 500,
                      fontFamily: "var(--font-family-montserrat)",
                      fontSize: "var(--font-sm)",
                    }}
                  >
                    {link.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF8A",
                      fontWeight: 500,
                      fontFamily: "var(--font-family-montserrat)", // typo fixed here
                      fontSize: "var(--font-xs)",
                    }}
                  >
                    {link.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Apointment;
