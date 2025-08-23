import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Lead Generation ",
    phase: "PHASE 1",
    heading: "Lead Generation ",
    text: "Our automated system handles initial qualification and collects basic RV details instantly.",
    points: [
      "Immediate automated response",
      "Smart qualification questions",
      "Real-time market data analysis",
      "Preliminary value estimation",
    ],
  },
  {
    number: "02",
    title: "Chatbot Qualification",
    phase: "Phase 2",
    heading: "On-site Evaluation",
    text: "Our experts inspect the RV to ensure it meets our consignment criteria.",
    points: [
      "Exterior evaluation",
      "Interior checks",
      "Photo documentation",
      "Eligibility confirmation",
    ],
  },
  {
    number: "03",
    title: "Info Packet Access Page",
    phase: "Phase 3",
    heading: "Formalizing the Partnership",
    text: "We provide a consignment agreement with all terms clearly stated.",
    points: [
      "Review contract",
      "Clarify terms",
      "Sign agreement",
      "Initiate next steps",
    ],
  },
  {
    number: "04",
    title: "VA Engagement Page",
    phase: "Phase 4",
    heading: "Prepping for Sale",
    text: "We prepare professional photos and create a compelling listing for maximum exposure.",
    points: [
      "Photography session",
      "Listing draft",
      "Client approval",
      "Publishing listing",
    ],
  },
  {
    number: "05",
    title: "Document Upload Portal",
    phase: "Phase 5",
    heading: "VA Engagement Page",
    text: "We handle all inquiries, showing, and communication with potential buyers.",
    points: [
      "Respond to inquiries",
      "Schedule viewings",
      "Buyer vetting",
      "Negotiation support",
    ],
  },
  {
    number: "06",
    title: "Schedule Inspection",
    phase: "Phase 6",
    heading: "Sealing the Deal",
    text: "Once a buyer is secured, we handle paperwork and ensure a smooth transaction.",
    points: [
      "Secure payment",
      "Document transfer",
      "Buyer verification",
      "Final delivery",
    ],
  },
];

function Process() {
  const [selected, setSelected] = useState(processSteps[0]);

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6, lg: 8 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          mb: 5,
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
          OUR PROCESS
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "var(--font-basic)", sm: "var(--font-lg)" },
            fontWeight: 600,
            fontFamily: "var(--font-family-montserrat)",
            color: "var(--bg-color)",
          }}
        >
          How We Get Things Done
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Grid */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {processSteps.map((step, index) => (
              <Box
                key={index}
                onClick={() => setSelected(step)}
                sx={{
                  height: { xs: 90, sm: 140 },
                  width: { xs: "100%", sm: 250 },
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" },
                  alignItems: { xs: "center", sm: "start" },
                  justifyContent: "center",
                  gap: 2,
                  p: 2,
                  cursor: "pointer",
                  backgroundColor:
                    selected.number === step.number
                      ? "var(--bg-color)"
                      : "var(--white-text)",
                  transition: "all 0.3s ease-in-out",
                  borderRadius: 2,
                  boxShadow: "2px 4px 10px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "var(--white-text)",
                    fontFamily: "var(--font-family-montserrat)",
                    bgcolor: "var(--icon-color)",
                    width: 30,
                    height: 30,
                    lineHeight: "30px",
                    textAlign: "center",
                    borderRadius: "4px",
                    boxShadow: "2px 4px 10px 0px rgba(146, 133, 133, 0.25)",
                  }}
                >
                  {step.number}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "var(--font-family-montserrat)",
                    fontWeight: 600,
                    fontSize: "var(--font-md)",
                    mt: 1,
                    color:
                      selected.title === step.title
                        ? "var(--white-text)"
                        : "var(--bg-color)",
                    textAlign: "center",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        {/* Right Grid */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            sx={{
              fontSize: "var(--font-md)",
              fontWeight: 600,
              color: "var(--bg-color)",
              fontFamily: "var(--font-family-montserrat)",
              background:
                "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.71) 46%)",
              width: "80px",
              textTransform: "uppercase",
            }}
          >
            {selected.phase}
          </Typography>
          <Typography
            sx={{
              fontSize: "var(--font-lg)",
              fontWeight: 600,
              color: "var(--bg-color)",
              fontFamily: "var(--font-family-montserrat)",
            }}
          >
            {selected.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "var(--font-md)", sm: "var(--font-basic)" },
              fontWeight: 400,
              color: "var(--bg-color)",
              fontFamily: "var(--font-family-montserrat)",
              lineHeight: "37px",
            }}
          >
            {selected.text}
          </Typography>
          <Box>
            <List
              sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {selected.points.map((point, idx) => (
                <ListItem key={idx} disableGutters>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Box
                      component="img"
                      src="/images/landingpage/purpose.svg"
                      alt="icon"
                      sx={{ width: 20, height: 20 }} // Optional: size control
                    />
                    <ListItemText
                      primary={point}
                      sx={{ color: "#222222BF", m: 0 }}
                    />
                  </Box>
                </ListItem>
              ))}
            </List>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
                mt: { xs: 2, sm: -30 },
                ml: { xs: 0, sm: 30 },
              }}
            >
              <Box
                component="img"
                src="/images/landingpage/purposeimg.png"
                sx={{
                  width: { xs: "80%", sm: "auto" }, // optional: responsive width
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Process;
