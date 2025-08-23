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
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../store/slices/RvConsignment";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(4, "Name should be at least 4 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Please Confirm Your Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userData = {
        id: Date.now(),
        name: values.name,
        email: values.email,
        password: values.password,
        createdAt: new Date().toISOString(),
      };
      dispatch(registerUser(userData));
      setSuccess(true);

      // Reset form
      formik.resetForm();

      // Redirect after a delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
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
              alt="Background"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
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
              alt="Bottom Decoration"
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

        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{ width: "100%", textAlign: "center", py: { xs: 6, md: 0 } }}
          >
            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Account created successfully! Redirecting to login...
              </Alert>
            )}
            <Box display="flex" flexDirection="column" gap={4}>
              <Typography
                sx={{
                  color: "var(--bg-color)",
                  fontSize: { xs: "var(--font-basic)", md: "var(--font-xl)" },
                  fontWeight: 400,
                  fontFamily: "var(--font-family-montserrat)",
                  lineHeight: "14px",
                }}
              >
                Create Account
              </Typography>
              <Typography
                sx={{
                  color: "#050F24B8",
                  fontSize: {
                    xs: "var(--font-sm)",
                    md: "var(--font-basic)",
                  },
                  fontWeight: 400,
                  fontFamily: "var(--font-family-montserrat)",
                  lineHeight: "14px",
                  mb: 6,
                }}
              >
                Sign up to get started
              </Typography>
            </Box>

            <Box
              component="form"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
              mb={6}
              onSubmit={formik.handleSubmit}
            >
              <TextField
                size="small"
                id="name"
                name="name"
                placeholder="Name Field"
                sx={{ width: "60%" }}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.name && formik.errors.name ? (
                    <span style={{ color: "#f73f64ff", fontWeight: 500 }}>
                      {formik.errors.name}
                    </span>
                  ) : null
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentityIcon sx={{ color: "var(--icon-color)" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                size="small"
                id="email"
                name="email"
                placeholder="Email Address"
                sx={{ width: "60%" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "var(--icon-color)" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl
                sx={{ width: "60%" }}
                size="small"
                variant="outlined"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              >
                <OutlinedInput
                  id="password"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formik.touched.password && formik.errors.password && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 0.5, display: "block", textAlign: "start" }}
                  >
                    {formik.errors.password}
                  </Typography>
                )}
              </FormControl>

              <FormControl
                sx={{ width: "60%" }}
                size="small"
                variant="outlined"
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
              >
                <OutlinedInput
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, display: "block", textAlign: "start" }}
                    >
                      {formik.errors.confirmPassword}
                    </Typography>
                  )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "var(--white-text)",
                  bgcolor: "var(--icon-color)",
                  width: "60%",
                }}
                disabled={formik.isSubmitting}
              >
                Signup
              </Button>
            </Box>

            <Box display="flex" gap={1} justifyContent="center">
              <Typography sx={{ color: "#050F24B8", textAlign: "center" }}>
                Already have an account?
              </Typography>
              <Typography
                onClick={() => navigate("/login")}
                sx={{
                  cursor: "pointer",
                  color: "var(--icon-color)",
                  textAlign: "center",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Login
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignupForm;
