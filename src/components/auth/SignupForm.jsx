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
  Snackbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupUser } from "../../store/slices/AuthSlice";
function SignupForm() {
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.rvConsignment);

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
          "Password must contain at least 8 characters, including uppercase letter, lowercase letter, number, and special character (@$!%*?&)"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const resultAction = await dispatch(signupUser(values));
        if (signupUser.fulfilled.match(resultAction)) {
          setSuccess(true);
          resetForm();
          setTimeout(() => navigate("/login"), 2000);
        }
      } catch (err) {
        console.error("Signup failed:", err);
      }
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      {/* Show loading */}
      {loading && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Creating account...
        </Alert>
      )}

      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "sticky", // or "fixed" if you want it always on screen
              top: 0,
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
          sx={{
            height: "100vh",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              py: { xs: 6, md: 10 },
            }}
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
                  fontSize: {
                    xs: "var(--font-standard)",
                    md: "var(--font-xl)",
                  },
                  fontWeight: 500,
                  fontFamily: "var(--font-family-montserrat)",
                  lineHeight: "14px",
                }}
              >
                Create Account
              </Typography>
              <Typography
                sx={{
                  color: "#050F24B8",
                  fontSize: { xs: "var(--font-sm)", md: "var(--font-basic)" },
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
                error={formik.touched.name && Boolean(formik.errors.name)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentityIcon sx={{ color: "var(--icon-color)" }} />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.name && formik.errors.name && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{
                    mt: -3.5,
                    display: "block",
                    textAlign: "start",
                    width: "60%",
                  }}
                >
                  {formik.errors.name}
                </Typography>
              )}

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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "var(--icon-color)" }} />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.email && formik.errors.email && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{
                    mt: -3.5,
                    textAlign: "start",
                    width: "60%",
                  }}
                >
                  {formik.errors.email}
                </Typography>
              )}

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
                disabled={loading}
                sx={{
                  color: "var(--white-text)",
                  bgcolor: "var(--icon-color)",
                  width: "60%",
                }}
              >
                {loading ? "Signing up..." : "Signup"}
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
            {/* Snackbar for success */}

            {/* Snackbar for error
            <Snackbar
              open={!!error}
              autoHideDuration={3000}
              onClose={() => {}} // keep error open until new action
            >
              <Alert severity="error" sx={{ mb: 2 }}>
                {typeof error === "string"
                  ? error
                  : error?.message || error?.error || "Signup failed!"}
              </Alert>
            </Snackbar> */}
          </Box>
        </Grid>

        <Snackbar
          open={!!success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
        >
          <Alert
            severity="success"
            onClose={() => setSuccess(false)}
            sx={{ mb: 2 }}
          >
            {typeof success === "string"
              ? success
              : "Signup successful! Redirecting to login..."}
          </Alert>
        </Snackbar>
      </Grid>
    </Box>
  );
}

export default SignupForm;

// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   InputAdornment,
//   IconButton,
//   Button,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import LockIcon from "@mui/icons-material/Lock";
// import PersonIcon from "@mui/icons-material/Person";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { signupUser } from "../../store/slices/RvConsignment";

// function SignupForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.rvConsignment);

//   const [showPassword, setShowPassword] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Name is required"),
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const resultAction = await dispatch(signupUser(values));
//         if (signupUser.fulfilled.match(resultAction)) {
//           setSuccess(true);
//           resetForm();
//           setTimeout(() => navigate("/login"), 2000);
//         }
//       } catch (err) {
//         console.error("Signup failed:", err);
//       }
//     },
//   });

//   return (
//     <Box
//       sx={{
//         bgcolor: "#fff",
//         p: 4,
//         borderRadius: 2,
//         boxShadow: 3,
//         maxWidth: 500,
//         mx: "auto",
//         mt: 8,
//       }}
//     >
//       <Typography variant="h5" fontWeight="bold" mb={3} align="center">
//         Signup
//       </Typography>

//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={2}>
//           {/* Name */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               name="name"
//               label="Full Name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               name="email"
//               label="Email"
//               type="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <EmailIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Password */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? "text" : "password"}
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockIcon />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               disabled={loading}
//             >
//               {loading ? "Signing up..." : "Signup"}
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       {/* Snackbar for success */}
//       <Snackbar
//         open={success}
//         autoHideDuration={3000}
//         onClose={() => setSuccess(false)}
//       >
//         <Alert severity="success" onClose={() => setSuccess(false)}>
//           Signup successful! Redirecting to login...
//         </Alert>
//       </Snackbar>

//       {/* Snackbar for error */}
//       <Snackbar
//         open={!!error}
//         autoHideDuration={3000}
//         onClose={() => {}} // keep error open until new action
//       >
//         <Alert severity="error">
//           {typeof error === "string"
//             ? error
//             : error?.message || error?.error || "Signup failed!"}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

// export default SignupForm;
