import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addRvDetails } from "../../../store/slices/RvConsignment";

import YesCheckedImg from "../../../../public/images/sellrv/checked.svg";
import YesUncheckedImg from "../../../../public/images/sellrv/unChecked.svg";
import NoCheckedImg from "../../../../public/images/sellrv/checked.svg";
import NoUncheckedImg from "../../../../public/images/sellrv/unChecked.svg";

// ✅ Custom Checkbox (unchanged)
const CustomCheckbox = ({ value, selected, onChange }) => (
  <Checkbox
    checked={selected === value}
    onChange={() => onChange(value)}
    icon={
      <img
        src="/images/sellrv/unChecked.svg"
        alt="unchecked"
        style={{ width: 24, height: 24 }}
      />
    }
    checkedIcon={
      <img
        src="/images/sellrv/checked.svg"
        alt="checked"
        style={{ width: 24, height: 24 }}
      />
    }
    disabled={selected !== null && selected !== value}
  />
);

function Banner() {
  const dispatch = useDispatch();

  // ✅ Dropdown Options
  const rv = [
    { value: "Class A", label: "Class A" },
    { value: "Class B", label: "Class B" },
    { value: "Travel Trailer", label: "Travel Trailer" },
    { value: "Pop-up", label: "Pop-up" },
  ];

  const years = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const condition = [
    { value: "Excellent", label: "Excellent" },
    { value: "Good", label: "Good" },
    { value: "Fair", label: "Fair" },
  ];

  // ✅ Formik Initial Values
  const initialValues = {
    rvType: "",
    year: "",
    make: "",
    model: "",
    mileage: "",
    conditionValue: "",
    salePrice: "",
    owner: "yes",
    lien: "yes",
    fullName: "",
    email: "",
    phone: "",
  };

  // ✅ Yup Validation Schema
  const validationSchema = Yup.object({
    rvType: Yup.string().required("RV Type is required"),
    year: Yup.string().required("Year is required"),
    make: Yup.string().required("Make is required"),
    model: Yup.string().required("Model is required"),
    mileage: Yup.string().required("Mileage is required"),
    conditionValue: Yup.string().required("Condition is required"),
    salePrice: Yup.string().required("Sale price is required"),
    owner: Yup.string().required("Owner info is required"),
    lien: Yup.string().required("Lien info is required"),
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  // ✅ On Submit
  const HandleSubmit = (values, { resetForm }) => {
    dispatch(addRvDetails(values));
    console.log("Submitted Data:", values);
    resetForm();
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(/images/background.png)",
        width: "100%",
        minHeight: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        py: 18,
        gap: 6,
      }}
    >
      {/* Header */}
      <Box textAlign="center" gap={2}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "var(--font-1xl)" },
            fontWeight: 500,
            fontFamily: "var(--font-family-montserrat)",
            color: "var(--white-text)",
          }}
        >
          RV Consignment
        </Typography>
      </Box>

      {/* ✅ Full Formik Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={HandleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Box
              sx={{
                bgcolor: "#3333335E",
                border: " 1px solid #FFFFFF38",
                borderRadius: "20px",
                width: "90%",
                px: 3,
                py: 6,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {/* RV Details */}
              <Box sx={{ bgcolor: "#000", borderRadius: "10px", p: 4 }}>
                <Typography
                  sx={{ color: "var(--icon-color)", mb: 2, fontWeight: 600 }}
                >
                  RV Details
                </Typography>

                <Grid container spacing={4}>
                  {/* RV Type */}
                  <Grid item xs={12} sm={6}>
                    <Typography>RV Type*</Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      name="rvType"
                      value={values.rvType}
                      onChange={handleChange}
                      error={touched.rvType && Boolean(errors.rvType)}
                      helperText={touched.rvType && errors.rvType}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    >
                      {rv.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Year */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Year*</Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      name="year"
                      value={values.year}
                      onChange={handleChange}
                      error={touched.year && Boolean(errors.year)}
                      helperText={touched.year && errors.year}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    >
                      {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Make */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Make*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="make"
                      placeholder="E.g. Winnebago"
                      value={values.make}
                      onChange={handleChange}
                      error={touched.make && Boolean(errors.make)}
                      helperText={touched.make && errors.make}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>

                  {/* Model */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Model*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="model"
                      placeholder="E.g. View, Flying Cloud"
                      value={values.model}
                      onChange={handleChange}
                      error={touched.model && Boolean(errors.model)}
                      helperText={touched.model && errors.model}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>

                  {/* Mileage */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Mileage*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="mileage"
                      placeholder="E.g. 24500 Miles"
                      value={values.mileage}
                      onChange={handleChange}
                      error={touched.mileage && Boolean(errors.mileage)}
                      helperText={touched.mileage && errors.mileage}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>

                  {/* Condition */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Condition*</Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      name="conditionValue"
                      value={values.conditionValue}
                      onChange={handleChange}
                      error={
                        touched.conditionValue && Boolean(errors.conditionValue)
                      }
                      helperText={
                        touched.conditionValue && errors.conditionValue
                      }
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    >
                      {condition.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Sale Price */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Desired Sale Price*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="salePrice"
                      placeholder="E.g. $34999.00"
                      value={values.salePrice}
                      onChange={handleChange}
                      error={touched.salePrice && Boolean(errors.salePrice)}
                      helperText={touched.salePrice && errors.salePrice}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Ownership Information */}
              <Box sx={{ bgcolor: "#000", borderRadius: "10px", p: 4 }}>
                <Typography sx={{ color: "var(--icon-color)", mb: 2 }}>
                  Ownership Information
                </Typography>
                <Grid container spacing={4}>
                  {/* Owner */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Are you the owner?*</Typography>
                    <RadioGroup
                      row
                      name="owner"
                      value={values.owner}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={
                          <Radio
                            icon={
                              <img src={YesUncheckedImg} alt="Yes" width={15} />
                            }
                            checkedIcon={
                              <img
                                src={YesCheckedImg}
                                alt="Yes Checked"
                                width={20}
                              />
                            }
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={
                          <Radio
                            icon={
                              <img src={NoUncheckedImg} alt="No" width={15} />
                            }
                            checkedIcon={
                              <img
                                src={NoCheckedImg}
                                alt="No Checked"
                                width={20}
                              />
                            }
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                    <ErrorMessage name="owner">
                      {(msg) => <Typography color="error">{msg}</Typography>}
                    </ErrorMessage>
                  </Grid>

                  {/* Lien */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Do you have a lien on the RV?*</Typography>
                    <RadioGroup
                      row
                      name="lien"
                      value={values.lien}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={
                          <Radio
                            icon={
                              <img src={YesUncheckedImg} alt="Yes" width={15} />
                            }
                            checkedIcon={
                              <img
                                src={YesCheckedImg}
                                alt="Yes Checked"
                                width={20}
                              />
                            }
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={
                          <Radio
                            icon={
                              <img src={NoUncheckedImg} alt="No" width={15} />
                            }
                            checkedIcon={
                              <img
                                src={NoCheckedImg}
                                alt="No Checked"
                                width={20}
                              />
                            }
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                    <ErrorMessage name="lien">
                      {(msg) => <Typography color="error">{msg}</Typography>}
                    </ErrorMessage>
                  </Grid>
                </Grid>
              </Box>

              {/* Contact Information */}
              <Box sx={{ bgcolor: "#000", borderRadius: "10px", p: 4 }}>
                <Typography sx={{ color: "var(--icon-color)", mb: 2 }}>
                  Contact Information
                </Typography>
                <Grid container spacing={4}>
                  {/* Full Name */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Full Name*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Email*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6}>
                    <Typography>Phone Number*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                      sx={{ "& .MuiInputBase-input": { color: "white" } }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Submit Button */}
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: "5px",
                    fontFamily: "var(--font-family-montserrat)",
                    bgcolor: "var(--icon-color)",
                    color: "#000000",
                    fontWeight: 500,
                    width: "140px",
                    py: 1.7,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Banner;
