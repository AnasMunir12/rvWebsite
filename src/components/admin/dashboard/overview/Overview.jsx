import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function Overview({ activities = [] }) {
  const mockActivities = [
    { id: 1, text: "My Activity here" },
    { id: 2, text: "......" },
  ];

  const displayedActivities =
    activities.length > 0 ? activities : mockActivities;

  return (
    <Grid container spacing={3}>
      {/* Your RV Section */}
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography
          sx={{
            color: "var(--white-text)",
            fontWeight: 500,
            fontFamily: "var(--font-family-montserrat)",
            fontSize: "var(--font-basic) ",
            mb: 2,
          }}
        >
          Overview
        </Typography>
        <Paper
          sx={{
            backgroundColor: "black",
            boxShadow: "0px 0px 4px 0px #FF8E291A",
            px: 3,
            py: 2,
            borderRadius: "20px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "var(--white-text)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                fontSize: "var(--font-basic) ",
              }}
            >
              Your RV
            </Typography>
            <Typography
              sx={{
                color: "var(--white-text)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                fontSize: "var(--font-basic) ",
              }}
            >
              ------- -------
            </Typography>
            <Typography
              sx={{
                color: "var(--icon-color)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                fontSize: "18px ",
              }}
            >
              $00.00
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#FFFFFF9E",
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              fontSize: "var(--font-sm)",
            }}
          >
            00miles
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--icon-color)",
              color: "var(--white-text)",
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              fontSize: { xs: "var(--font-xs)", sm: "var(--font-md)" },
              textTransform: "uppercase ",
              p: { xs: "10px 15px", sm: "15px 20px" },
            }}
          >
            Fill your Consignment Form
          </Button>
        </Paper>
      </Grid>

      {/* Consignment Progress */}
      <Grid size={{ xs: 12, md: 12 }}>
        <Paper
          sx={{
            backgroundColor: "black",
            boxShadow: "0px 0px 4px 0px #FF8E291A",
            px: 3,
            py: 2,
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{
              color: "var(--white-text)",
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              fontSize: "var(--font-basic) ",
            }}
            mb={2}
          >
            Consignment Progress{" "}
            <Typography
              component="span"
              sx={{
                color: "#FF8E29",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                fontSize: "var(--font-md) ",
              }}
            >
              0/5
            </Typography>
          </Typography>

          <Stack spacing={2}>
            {[
              {
                label: "Basic RV Info Submitted",
                desc: "RV details and initial information",
                icon: "/images/dashboard/overview/doc.svg",
              },
              {
                label: "Documents Uploaded",
                desc: "Title, insurance, and photos",
                icon: "/images/dashboard/overview/doc.svg",
              },
              {
                label: "Review Response",
                desc: "Our team is reviewing your submission",
                icon: "/images/dashboard/overview/preview.svg",
              },
              {
                label: "Appointment Scheduled",
                desc: "Schedule your RV inspection",
                icon: "/images/dashboard/overview/completed.svg",
              },
              {
                label: "Completed",
                desc: "Consignment process finished",
                icon: "/images/dashboard/overview/completed.svg",
              },
            ].map((item, idx) => (
              <Paper
                key={idx}
                sx={{
                  backgroundColor: "#282828",
                  p: 2,
                  borderBottom: "1px solid #E5E7EB4D",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Box
                    component="img"
                    src={item.icon}
                    sx={{
                      width: "34px",
                      height: "34px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: "var(--white-text)",
                        fontWeight: 500,
                        fontFamily: "var(--font-family-montserrat)",
                        fontSize: {
                          xs: "var(--font-xs)",
                          sm: "var(--font-sm)",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFFFFFB2",
                        fontWeight: 300,
                        fontFamily: "var(--font-family-montserrat)",
                        fontSize: {
                          xs: "var(--font-xs)",
                          sm: "var(--font-sm)",
                        },
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
                <Chip
                  label="Pending"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // 10% opacity white
                    color: "#FFFFFF", // Text fully opaque
                  }}
                />
              </Paper>
            ))}
          </Stack>
        </Paper>
      </Grid>

      {/* Recent Activity */}
      <Grid size={{ xs: 12, md: 12 }}>
        <Paper
          sx={{
            boxShadow: "0px 0px 4px 0px #FF8E291A",
            backgroundColor: "black",
            borderRadius: "20px",
            p: 2,
          }}
        >
          <Typography
            sx={{
              color: "var(--white-text)",
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              fontSize: "var(--font-basic)",
              letterSpacing: "-2%",
              mb: 2,
            }}
          >
            Recent Activity
          </Typography>

          {displayedActivities.length > 0 ? (
            displayedActivities.map((activity, index) => (
              <Box
                key={activity.id || index}
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
                sx={{
                  px: 2,
                  borderBottom: "1px solid #E5E7EB4D",
                  borderRadius: "12px",
                  width: "100%",
                  height: "47px",
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#F0A837",
                    borderRadius: 10,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "var(--white-text)",
                    fontWeight: 500,
                    fontFamily: "var(--font-family-montserrat)",
                    fontSize: "var(--font-sm)",
                  }}
                >
                  {activity.text}
                </Typography>
              </Box>
            ))
          ) : (
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#F0A837",
                  borderRadius: 10,
                }}
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 500,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-sm)",
                }}
              >
                No Activity here
              </Typography>
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Overview;
