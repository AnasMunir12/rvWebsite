import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        {/* Left Side Image */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box
              component="img"
              src="/images/login/bg.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "45%",
                left: "8%",
                transform: "translateY(-50%)",
                color: "white",
                px: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#050F24",
                  fontFamily: "var(--font-family-montserrat)",
                }}
              >
                Go RV
              </Typography>

              <Typography
                sx={{
                  maxWidth: "400px",
                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: "#050F24B8",
                  fontFamily: "var(--font-family-montserrat)",
                  textAlign: { xs: "center", sm: "start" },
                }}
              >
                Our advanced digital process handles everything from first
                contact to RV drop-off with ease and accuracy.
              </Typography>
            </Box>

            <Box
              component="img"
              src="/images/login/line.png"
              alt="Bottom Left Icon"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "220px",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
        {/* Right Side Form */}
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{ width: "100%", textAlign: "center", py: { xs: 6, md: 0 } }}
          >
            <Box display="flex" flexDirection="column" gap={4}>
              <Typography
                sx={{
                  color: "var(--bg-color)",
                  fontSize: { xs: "var(--font-basic)", md: "var(--font-1xl)" },
                  fontWeight: 400,
                  fontFamily: "var(--font-family-montserrat)",
                  lineHeight: "14px",
                }}
              >
                Forgot Password?
              </Typography>
              <Typography
                sx={{
                  color: "#050F24B8",
                  fontSize: {
                    xs: "var(--font-sm)",
                    md: "var(--font-md)",
                  },
                  fontWeight: 400,
                  fontFamily: "var(--font-family-montserrat)",
                  lineHeight: "14px",
                  mb: 6,
                }}
              >
                No worries, we’ll send you the reset instructions.
              </Typography>
            </Box>

            {/* Email Input */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={6}
              mb={6}
            >
              <TextField
                size="small"
                id="email-address"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: "60%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--icon-color)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "var(--icon-color)",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "var(--icon-color)" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Reset Button */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Button
                variant="contained"
                sx={{
                  color: "var(--white-text)",
                  bgcolor: "var(--icon-color)",
                  width: "60%",
                }}
              >
                Reset Password
              </Button>
            </Box>

            {/* Back Link */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={4}
            >
              <IconButton
                disableRipple
                disableFocusRipple
                sx={{
                  padding: 0,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ReplyOutlinedIcon sx={{ color: "var(--icon-color)" }} />
              </IconButton>

              <Typography
                onClick={() => navigate("/login")}
                sx={{
                  cursor: "pointer",
                  color: "#050F24B8",
                  textAlign: "center",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Back
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ForgotPassword;
