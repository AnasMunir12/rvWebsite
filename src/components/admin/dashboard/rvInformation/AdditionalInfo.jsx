import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function AdditionalInfo() {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            mt: 3,
            backgroundColor: "black",
            borderRadius: "10px",
            borderLeft: "4px solid #F0A837",
            px: 3,
            py: 3,
          }}
        >
          <Typography
            sx={{
              color: "var(--white-text)",
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              fontSize: "var(--font-basic) ",
              mb: 2,
            }}
          >
            Additional Information
          </Typography>

          {/* Main Box */}

          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-between" }}
            alignItems={"center"}
            gap={1}
          >
            {/* Know issue Field */}
            <Box>
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-sm)",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Known Issues
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
                    width: {
                      xs: "100%",
                      sm: "300px",
                      md: "350px",
                      lg: "450px",
                    },
                    height: { md: "80px" },
                    mb: 2,
                    borderRadius: "16px",
                    backgroundColor: "#282828",
                    border: "1px solid #E1E1E63D",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-family-montserrat)",
                    fontSize: "var(--font-basic)",
                    "& fieldset": {
                      borderColor: "2C2C2C", // Remove border
                    },
                    "&:hover fieldset": {
                      borderColor: "#2C2C2C", // Optional hover effect
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2C2C2C", // Optional focus color
                    },
                  },
                }}
                inputProps={{
                  sx: {
                    padding: "8px 14px",
                  },
                }}
              />
            </Box>

            {/* Modification upgrades Field */}
            <Box>
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-sm)",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Modifications/Upgrades
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                InputProps={{
                  sx: {
                    width: {
                      xs: "100%",
                      sm: "300px",
                      lg: "450px",
                    },
                    height: { md: "80px" },
                    mb: 2,
                    borderRadius: "16px",
                    backgroundColor: "#282828",
                    border: "1px solid #E1E1E63D",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-family-montserrat)",
                    fontSize: "var(--font-basic)",
                    "& fieldset": {
                      borderColor: "2C2C2C", // Remove border
                    },
                    "&:hover fieldset": {
                      borderColor: "#2C2C2C", // Optional hover effect
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2C2C2C", // Optional focus color
                    },
                  },
                }}
                inputProps={{
                  sx: {
                    padding: "8px 14px",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Service History Field */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontFamily: "var(--font-family-montserrat)",
                  fontSize: "var(--font-sm)",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Service History
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                InputProps={{
                  sx: {
                    width: {
                      xs: "100%",
                      sm: "300px",
                      md: "350px",
                      lg: "450px",
                    },
                    height: { md: "80px" },
                    mb: 2,
                    borderRadius: "16px",
                    backgroundColor: "#282828",
                    border: "1px solid #E1E1E63D",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-family-montserrat)",
                    fontSize: "var(--font-basic)",
                    "& fieldset": {
                      borderColor: "2C2C2C", // Remove border
                    },
                    "&:hover fieldset": {
                      borderColor: "#2C2C2C", // Optional hover effect
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2C2C2C", // Optional focus color
                    },
                  },
                }}
                inputProps={{
                  sx: {
                    padding: "8px 14px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>

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

export default AdditionalInfo;
