import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
  Button,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  // ✅ get registered users from redux
  const users = useSelector((state) => state.rvConsignment.users);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  // ✅ validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // ✅ onSubmit
  const handleLogin = (values, { setSubmitting, setErrors }) => {
    const foundUser = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (foundUser) {
      setOpenSnackbar(true); // ✅ show success snackbar
      setTimeout(() => {
        navigate("/dashboard"); // redirect after short delay
      }, 1500);
    } else {
      setErrors({ email: "Invalid email or password" });
    }

    setSubmitting(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              display: { xs: "none", md: "block" },
            }}
          >
            {" "}
            {/* Background Image */}{" "}
            <Box
              component="img"
              src="/images/login/bg.png"
              alt="background"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />{" "}
            {/* Centered Text */}{" "}
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
                {" "}
                Go RV{" "}
              </Typography>{" "}
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
                {" "}
                Our advanced digital process handles everything from first
                contact to RV drop-off with ease and accuracy.{" "}
              </Typography>{" "}
            </Box>{" "}
            {/* Bottom Left Image */}{" "}
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

        {/* Right Side (Form) */}
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{ width: "100%", textAlign: "center", py: { xs: 6, md: 0 } }}
          >
            <Typography sx={{ mb: 2, fontSize: "1.5rem", fontWeight: 600 }}>
              Login
            </Typography>

            {/* ✅ Formik form */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
              }) => (
                <Form>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={4}
                    mb={6}
                  >
                    {/* Email */}
                    <TextField
                      name="email"
                      size="small"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={
                        touched.email &&
                        errors.email && (
                          <FormHelperText error>
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{
                                display: "block",
                                textAlign: "start",
                                ml: -3,
                                mt: -0.5,
                              }}
                            >
                              {errors.email}
                            </Typography>
                          </FormHelperText>
                        )
                      }
                      sx={{ width: "60%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: "var(--icon-color)" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    {/* Password */}
                    <FormControl
                      sx={{ width: "60%" }}
                      size="small"
                      variant="outlined"
                      error={touched.password && Boolean(errors.password)}
                    >
                      <OutlinedInput
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        startAdornment={
                          <InputAdornment position="start">
                            <LockIcon sx={{ color: "var(--icon-color)" }} />
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {/* ✅ Correct error display */}
                      {touched.password && errors.password && (
                        <FormHelperText error>
                          <Typography
                            variant="caption"
                            color="error"
                            sx={{
                              display: "block",
                              textAlign: "start",
                              ml: -1.5,
                            }}
                          >
                            {errors.password}
                          </Typography>
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Box>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      color: "var(--white-text)",
                      bgcolor: "var(--icon-color)",
                      width: "60%",
                    }}
                  >
                    Login
                  </Button>

                  <Typography
                    onClick={() => navigate("/forgot")}
                    sx={{
                      mt: 4,
                      cursor: "pointer",
                      color: "#050F24B8",
                      textAlign: "center",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot Password
                  </Typography>

                  <Box
                    display={"flex"}
                    gap={1}
                    justifyContent={"center"}
                    mt={2}
                  >
                    <Typography
                      sx={{ color: "#050F24B8", textAlign: "center" }}
                    >
                      Don't have an account?
                    </Typography>
                    <Typography
                      onClick={() => navigate("/signup")}
                      sx={{
                        cursor: "pointer",
                        color: "var(--icon-color)",
                        textAlign: "center",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Signup
                    </Typography>
                  </Box>
                </Form>
              )}
            </Formik>

            {/* Snackbar Success Alert */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={5000}
              onClose={() => setOpenSnackbar(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={() => setOpenSnackbar(false)}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Login successful
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
