import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function RvInformation() {
  return (
    <Box>
      <Typography
        sx={{
          color: "var(--white-text)",
          fontWeight: 500,
          fontFamily: "var(--font-family-montserrat)",
          fontSize: "var(--font-basic) ",
          mb: 2,
        }}
      >
        Rv Information
      </Typography>
      <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
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
                BASIC INFORMATION
              </Typography>

              {/* Make Field */}
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
                  Make
                </Typography>
                <TextField
                  placeholder="------<>------"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
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

              {/* Model Field */}
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
                  Model
                </Typography>
                <TextField
                  placeholder="------<>------"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
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

              {/* Year Field */}
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
                  Year
                </Typography>
                <TextField
                  placeholder="------<>------"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
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

              {/* Milleage Field */}
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
                  Mileage
                </Typography>
                <TextField
                  placeholder="------<>------"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
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

              {/* asking price Field */}
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
                  Asking Price
                </Typography>
                <TextField
                  placeholder="------<>------"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
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

              {/* VIN price Field */}
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
                  VIN
                </Typography>
                <TextField
                  placeholder="------<>------"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
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
          </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
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
              SPECIFICATIONS
            </Typography>

            {/* Length Field */}
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
                Length (feet)
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
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

            {/* Sleeps Field */}
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
                Sleeps
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
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

            {/* Fuel Type Field */}
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
                Fuel Type
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
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

            {/* Engine Field */}
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
                Engine
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
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

            {/* Slide Outs Field */}
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
                Slide Outs
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
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

            {/* Generator Field */}
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
                Generator
              </Typography>
              <TextField
                placeholder="------<>------"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default RvInformation;
