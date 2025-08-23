"use client";
import {
  Box,
  Button,
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React, { useState } from "react";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import styled from "styled-components";

// Custom Connector Line
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 8, // Adjusts line position vertically to match circle center
    left: "calc(-50% + 10px)",
    right: "calc(50% + 10px)",
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#FFFFFF4D", // Default Line Color
    borderTopWidth: 2,
    borderRadius: 1,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: "#F0A837", // Active Line Color
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: "#F0A837", // Completed Line Color
  },
}));

// Custom Step Icon Component
const CustomStepIcon = (props) => {
  const { active, completed } = props;
  return (
    <Box
      sx={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: completed
          ? "#F0A837"
          : active
          ? "#F0A837"
          : "transparent",
        border: `2px solid ${completed || active ? "#F0A837" : "#FFFFFF4D"}`,
        zIndex: 1,
      }}
    />
  );
};

// Upload Box Component
const UploadBox = ({ title, desc, onUpload }) => (
  <Box
    sx={{
      bgcolor: "#292A28",
      borderLeft: "4px solid #F0A837",
      boxShadow: "0px 4px 4px 0px #0000001A",
      py: 3,
      px: 3,
      borderRadius: "10px",
    }}
  >
    <Box display={"flex"} justifyContent={"space-between"}>
      <Typography
        sx={{
          color: "var(--white-text)",
          fontWeight: 500,
          fontFamily: "var(--font-family-montserrat)",
          fontSize: { xs: "var(--font-sm)", sm: "var(--font-basic)" },
        }}
      >
        {title}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        sx={{
          gap: 1.5,
        }}
      >
        <Typography
          sx={{
            bgcolor: "rgba(194, 65, 83, 0.1)",
            borderRadius: "27px",
            color: "#C24153",
            px: { xs: 1, sm: 2 },
            py: { xs: 0, sm: 0.5 },
            display: "inline-block",
          }}
        >
          Required
        </Typography>
        <Typography
          sx={{
            bgcolor: "rgba(225, 225, 225, 0.1)",
            borderRadius: "27px",
            color: "#E1E1E199",
            px: { xs: 1, sm: 2 },
            py: { xs: 0, sm: 0.5 },
            display: "inline-block",
          }}
        >
          Pending
        </Typography>
      </Box>
    </Box>
    <Typography
      sx={{
        color: "#FFFFFF8A",
        fontWeight: 500,
        fontFamily: "var(--font-family-montserrat)",
        fontSize: "var(--font-sm)",
        mb: 2,
        mt: { xs: 2, lg: 0 },
      }}
    >
      {desc}
    </Typography>

    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", lg: "185px" },
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 1, sm: 3 },
        py: { xs: 2, lg: 2 },
        px: { xs: 2, lg: 4 },
        textAlign: { xs: "center", lg: "start" },
      }}
    >
      {/* SVG Dashed Border */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          fill="none"
          stroke="#FFFFFF4D"
          strokeWidth="2"
          strokeDasharray="12,12"
        />
      </svg>

      {/* Upload Section */}
      <Box
        display={"flex"}
        flexDirection={{ xs: "row", lg: "row" }}
        alignItems={"center"}
        gap={2}
        zIndex={1}
      >
        <Box
          component="img"
          src="/images/dashboard/document/upload.svg"
          sx={{ width: "16px", height: "15px" }}
        />
        <Typography
          sx={{
            color: "var(--white-text)",
            fontWeight: 500,
            fontFamily: "var(--font-family-montserrat)",
            fontSize: "var(--font-sm)",
          }}
        >
          Upload your file here
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "#FFFFFF80",
          fontWeight: 400,
          fontFamily: "var(--font-family-montserrat)",
          fontSize: "var(--font-xs)",
        }}
      >
        or click to browse
      </Typography>

      <Button
        variant="contained"
        component="label"
        sx={{
          zIndex: 1,
          bgcolor: "#F0A837",
          color: "#FFFFFF",
          textTransform: "none",
          fontSize: "var(--font-sm)",
          fontWeight: 600,
          borderRadius: "5px",
          "&:hover": { bgcolor: "#d98e20" },
        }}
      >
        Choose File
        <input type="file" hidden onChange={onUpload} />
      </Button>

      <Typography
        sx={{
          color: "#FFFFFF80",
          fontWeight: 400,
          fontFamily: "var(--font-family-montserrat)",
          fontSize: "var(--font-xs)",
          zIndex: 1,
        }}
      >
        Supported formats: PDF, JPG, PNG (Max size: 10MB)
      </Typography>
    </Box>
  </Box>
);

export default function Document() {
  const [activeStep, setActiveStep] = useState(0);

  const documents = [
    { title: "Title Certification", desc: "Official vehicle title document" },
    { title: "Insurance Copy", desc: "Current insurance documentation" },
    { title: "RV Photos", desc: "Interior and exterior photos" },
    {
      title: "Maintenance Records",
      desc: "Service history and maintenance logs",
    },
  ];

  const handleUpload = () => {
    if (activeStep < documents.length) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "var(--white-text)",
            fontWeight: 500,
            fontFamily: "var(--font-family-montserrat)",
            fontSize: "var(--font-basic)",
            mb: 2,
          }}
        >
          Document
        </Typography>

        <Box
          sx={{
            mt: 3,
            backgroundColor: "black",
            borderRadius: "10px",
            px: 3,
            py: 3,
          }}
        >
          {/* Header */}
          <Box display={"flex"} flexDirection={"row"} gap={2} mb={5}>
            <Box component="img" src="/images/dashboard/document/file.svg" />
            <Box>
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 500,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: { xs: "var(--font-md)", sm: "var(--font-basic)" },
                }}
              >
                Document Upload Progress
              </Typography>
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 400,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: { xs: "var(--font-xs)", sm: "var(--font-sm)" },
                }}
              >
                Upload all required documents to proceed with your RV
                consignment.
              </Typography>
            </Box>
          </Box>

          {/* Stepper */}
          <Box mb={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontWeight: 500,
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: { xs: "var(--font-md)", sm: "var(--font-basic)" },
                }}
              >
                Upload Progress
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF80",
                  fontSize: { xs: "var(--font-xs)", sm: "var(--font-sm)" },
                  ml: 2,
                }}
              >
                ({activeStep} of {documents.length} Documents Uploaded)
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{ flexGrow: 1 }}
              >
                {documents.map((doc, index) => (
                  <Step key={index}>
                    <StepLabel StepIconComponent={CustomStepIcon}></StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>

          {/* Upload Boxes */}
          <Grid container spacing={2}>
            {documents.map((doc, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <UploadBox
                  title={doc.title}
                  desc={doc.desc}
                  onUpload={handleUpload}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Footer Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "end",
          mt: 3,
          gap: 1,
        }}
      >
        <Button
          sx={{
            border: "1px solid #F0A837",
            color: "var(--icon-color)",
            borderRadius: "8px",
            p: "10px 15px",
            "&:hover": {
              bgcolor: "var(--icon-color)",
              color: "var(--white-text)",
              transition: "all 0.3s",
            },
          }}
        >
          Save Draft
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "var(--icon-color)",
            borderRadius: "8px",
            p: "10px 15px",
            border: "1px solid #F0A837",
            "&:hover": {
              bgcolor: "transparent",
              color: "var(--icon-color)",
              border: "1px solid #F0A837",
              transition: "all 0.3s",
            },
          }}
        >
          Submit & Proceed to next
        </Button>
      </Box>
    </>
  );
}
