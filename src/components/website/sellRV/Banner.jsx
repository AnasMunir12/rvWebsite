import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Fields from "./Fields";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import YesCheckedImg from "../../../../public/images/sellrv/checked.svg";
import YesUncheckedImg from "../../../../public/images/sellrv/unChecked.svg";
import NoCheckedImg from "../../../../public/images/sellrv/checked.svg";
import NoUncheckedImg from "../../../../public/images/sellrv/unChecked.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitForm } from "../../../store/slices/RvConsignment";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, error } = useSelector((state) => state.rvConsignment);

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

  const initialValues = {
    rvType: "",
    year: "",
    make: "",
    model: "",
    mileage: "",
    condition: "",
    desiredPrice: "",
    ownership: {
      isOwner: false,
      hasLien: false,
    },
    contact: {
      name: "",
      email: "",
      phone: "",
    },
  };

  const validationSchema = Yup.object({
    rvType: Yup.string().required("RV Type is required"),
    year: Yup.string().required("Year is required"),
    make: Yup.string().required("Make is required"),
    model: Yup.string().required("Model is required"),
    mileage: Yup.string().required("Mileage is required"),
    condition: Yup.string().required("Condition is required"),
    desiredPrice: Yup.string().required("Sale price is required"),
    owner: Yup.string().required("Owner info is required"),
    lien: Yup.string().required("Lien info is required"),
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "Enter a valid phone number (e.g., 1234567890 or +1 1234567890)"
      )
      .required("Phone number is required"),
  });

  const HandleSubmit = (values, { resetForm }) => {
    const formatedValues = {
      ...values,
      ownership: {
        isOwner: values.ownership.isOwner === "yes",
        hasLien: values.ownership.hasLien === "yes",
      },
      mileage: parseInt(values.mileage),
      year: parseInt(values.year),
      desiredPrice: parseInt(values.desiredPrice),
    };
    dispatch(submitForm(formatedValues));
    console.log("Submitted Data:", formatedValues);
    resetForm();
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Box
              component="img"
              src="/images/about/line.svg"
              sx={{
                width: "25px",
                height: "4px",
              }}
            />
            <Typography
              sx={{
                fontSize: "var(--font-xs)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                color: "var(--white-text)",
                textTransform: "uppercase",
              }}
            >
              Start Consign Now
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "var(--font-1xl)" },
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              color: "var(--white-text)",
              lineHeight: "59px",
            }}
          >
            RV Consignment
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "var(--font-sm)", md: "var(--font-md)" },
              fontWeight: 300,
              fontFamily: "var(--font-family-lato)",
              color: "var(--white-text)",
              lineHeight: "26px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Our revolutionary AI and virtual assistant technology handles
            everything from first contact to RV drop-off.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
          }}
        >
          {/* Fields */}
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
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={HandleSubmit}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form
                  noValidate // <-- prevent browser "Please fill in this field"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    gap: "inherit",
                  }}
                >
                  {/* RV Details */}
                  <Box
                    sx={{
                      bgcolor: "#000000",
                      borderRadius: "10px",
                      p: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src="/images/sellrv/icon.svg"
                        sx={{ width: 24, height: 24 }} // optional: control size
                      />
                      <Typography
                        sx={{
                          color: "var(--icon-color)",
                          fontSize: "var(--font-basic)",
                          fontFamily: "var(--font-family-montserrat)",
                        }}
                      >
                        RV Details
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {/* RV Type */}
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          RV Type*
                        </Typography>
                        <TextField
                          size="small"
                          fullWidth
                          select
                          name="rvType"
                          value={values.rvType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          helperText={
                            touched.rvType && errors.rvType ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.rvType}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {
                                color: "var(--white-text)",
                              },
                              // "&:hover .MuiSelect-icon, &.Mui-focused .MuiSelect-icon":
                              //   {
                              //     color: "var(--icon-color)",
                              //   },
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                              "&::placeholder": {
                                color: "var(--white-text)",
                                opacity: 1,
                              },
                            },
                            "& .MuiFormHelperText-root": {
                              color: "var(--white-text)",
                              opacity: 0.7,
                            },
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          SelectProps={{
                            displayEmpty: true,
                            renderValue: (selected) =>
                              selected ? (
                                selected
                              ) : (
                                <span style={{ color: "#aaa" }}>Select RV</span>
                              ),
                            MenuProps: {
                              PaperProps: {
                                sx: {
                                  bgcolor: "#333333",
                                  color: "var(--white-text)",
                                  "& .MuiMenuItem-root": {
                                    color: "var(--white-text)",
                                    "&:hover": {
                                      backgroundColor: "var(--icon-color)",
                                      color: "#222222",
                                    },
                                  },
                                },
                              },
                            },
                          }}
                        >
                          {rv.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      {/* Year */}
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Year*
                        </Typography>
                        <TextField
                          size="small"
                          required
                          fullWidth
                          select
                          name="year"
                          value={values.year}
                          onChange={handleChange}
                          helperText={
                            touched.year && errors.year ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.year}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {
                                color: "var(--white-text)",
                              },
                              // "&:hover .MuiSelect-icon, &.Mui-focused .MuiSelect-icon":
                              //   {
                              //     color: "var(--icon-color)",
                              //   },
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                              "&::placeholder": {
                                color: "var(--white-text)",
                                opacity: 1,
                              },
                            },
                            "& .MuiFormHelperText-root": {
                              color: "var(--white-text)",
                              opacity: 0.7,
                            },
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          SelectProps={{
                            displayEmpty: "true",
                            renderValue: (selected) =>
                              selected ? (
                                selected
                              ) : (
                                <span style={{ color: "#aaa" }}>
                                  Select Year
                                </span>
                              ),
                            MenuProps: {
                              PaperProps: {
                                sx: {
                                  bgcolor: "#333333",
                                  color: "var(--white-text)",
                                  "& .MuiMenuItem-root": {
                                    color: "var(--white-text)",
                                    "&:hover": {
                                      backgroundColor: "var(--icon-color)",
                                      color: "#222222",
                                    },
                                  },
                                },
                              },
                            },
                          }}
                        >
                          {years.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      {/* Make */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Make*
                        </Typography>

                        <TextField
                          size="small"
                          required
                          fullWidth
                          name="make"
                          placeholder="E.g. Winnebago"
                          value={values.make}
                          onChange={handleChange}
                          helperText={
                            touched.make && errors.make ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.make}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>

                      {/* Model */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Model*
                        </Typography>

                        <TextField
                          size="small"
                          required
                          fullWidth
                          name="model"
                          placeholder="E.g. View, Flying Cloud"
                          value={values.model}
                          onChange={handleChange}
                          helperText={
                            touched.model && errors.model ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.model}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>

                      {/* Milleage/Hours */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Milleage/Hours*
                        </Typography>

                        <TextField
                          size="small"
                          required
                          fullWidth
                          type="number"
                          name="mileage"
                          placeholder="E.g. 24500 Miles"
                          value={values.mileage}
                          onChange={handleChange}
                          helperText={
                            touched.mileage && errors.mileage ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.mileage}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>

                      {/* Conditions */}
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Condition*
                        </Typography>
                        <TextField
                          size="small"
                          required
                          fullWidth
                          select
                          name="condition"
                          value={values.condition}
                          onChange={handleChange}
                          helperText={
                            touched.condition && errors.condition ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.condition}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {
                                color: "var(--white-text)",
                              },
                              // "&:hover .MuiSelect-icon, &.Mui-focused .MuiSelect-icon":
                              //   {
                              //     color: "var(--icon-color)",
                              //   },
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                              "&::placeholder": {
                                color: "var(--white-text)",
                                opacity: 1,
                              },
                            },
                            "& .MuiFormHelperText-root": {
                              color: "var(--white-text)",
                              opacity: 0.7,
                            },
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          SelectProps={{
                            displayEmpty: "true",
                            renderValue: (selected) =>
                              selected ? (
                                selected
                              ) : (
                                <span style={{ color: "#aaa" }}>
                                  Select Condition
                                </span>
                              ),
                            MenuProps: {
                              PaperProps: {
                                sx: {
                                  bgcolor: "#333333",
                                  color: "var(--white-text)",
                                  "& .MuiMenuItem-root": {
                                    color: "var(--white-text)",
                                    "&:hover": {
                                      backgroundColor: "var(--icon-color)",
                                      color: "#222222",
                                    },
                                    // "&.Mui-selected": {
                                    //   backgroundColor: "transparent",
                                    //   "&:hover": {
                                    //     backgroundColor: "var(--icon-color)",
                                    //   },
                                    // },
                                  },
                                },
                              },
                            },
                          }}
                        >
                          {condition.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      {/* Desired Sale Price */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Desired Sale Price*
                        </Typography>

                        <TextField
                          size="small"
                          required
                          fullWidth
                          name="desiredPrice"
                          placeholder="E.g. $34999.00"
                          value={values.desiredPrice}
                          onChange={handleChange}
                          helperText={
                            touched.desiredPrice && errors.desiredPrice ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.desiredPrice}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Ownership Info */}
                  <Box
                    sx={{
                      bgcolor: "#000000",
                      borderRadius: "10px",
                      p: 4,
                      mt: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src="/images/sellrv/icon.svg"
                        sx={{ width: 24, height: 24 }} // optional: control size
                      />
                      <Typography
                        sx={{
                          color: "var(--icon-color)",
                          fontSize: "var(--font-basic)",
                          fontFamily: "var(--font-family-montserrat)",
                        }}
                      >
                        Ownership Information
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {/* Question 1 */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "var(--font-family-montserrat)",
                              color: "var(--white-text)",
                              fontWeight: 500,
                              fontSize: "var(--font-md)",
                              lineHeight: "26px",
                            }}
                          >
                            Are you the owner?
                          </Typography>
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
                                    <img
                                      src={YesUncheckedImg}
                                      alt="Yes"
                                      width={15}
                                    />
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
                              label={
                                <Typography
                                  sx={{
                                    fontFamily: "var(--font-family-lato)",
                                    color: "#FFFFFF8A",
                                    fontWeight: 400,
                                    fontSize: "var(--font-sm)",
                                  }}
                                >
                                  Yes
                                </Typography>
                              }
                            />

                            <FormControlLabel
                              value="no"
                              control={
                                <Radio
                                  icon={
                                    <img
                                      src={NoUncheckedImg}
                                      alt="No"
                                      width={15}
                                    />
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
                              label={
                                <Typography
                                  sx={{
                                    fontFamily: "var(--font-family-lato)",
                                    color: "#FFFFFF8A",
                                    fontWeight: 400,
                                    fontSize: "var(--font-sm)",
                                  }}
                                >
                                  No
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </Box>
                      </Grid>

                      {/* Question 2 */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "var(--font-family-montserrat)",
                              color: "var(--white-text)",
                              fontWeight: 500,
                              fontSize: "var(--font-md)",
                              lineHeight: "26px",
                            }}
                          >
                            Do you have a lien on the RV?
                          </Typography>
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
                                    <img
                                      src={YesUncheckedImg}
                                      alt="Yes"
                                      width={15}
                                    />
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
                              label={
                                <Typography
                                  sx={{
                                    fontFamily: "var(--font-family-lato)",
                                    color: "#FFFFFF8A",
                                    fontWeight: 400,
                                    fontSize: "var(--font-sm)",
                                  }}
                                >
                                  Yes
                                </Typography>
                              }
                            />

                            <FormControlLabel
                              value="no"
                              control={
                                <Radio
                                  icon={
                                    <img
                                      src={NoUncheckedImg}
                                      alt="No"
                                      width={15}
                                    />
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
                              label={
                                <Typography
                                  sx={{
                                    fontFamily: "var(--font-family-lato)",
                                    color: "#FFFFFF8A",
                                    fontWeight: 400,
                                    fontSize: "var(--font-sm)",
                                  }}
                                >
                                  No
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* {" Contact Information "} */}
                  <Box
                    sx={{
                      bgcolor: "#000000",
                      borderRadius: "10px",
                      p: 4,
                      mt: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src="/images/sellrv/icon.svg"
                        sx={{ width: 24, height: 24 }} // optional: control size
                      />
                      <Typography
                        sx={{
                          color: "var(--icon-color)",
                          fontSize: "var(--font-basic)",
                          fontFamily: "var(--font-family-montserrat)",
                        }}
                      >
                        Contact Information
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {/* Full Name */}

                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Full Name*
                        </Typography>

                        <TextField
                          size="small"
                          required
                          fullWidth
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          helperText={
                            touched.name && errors.name ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.name}
                              </span>
                            ) : null
                          }
                          placeholder="Enter Full Name"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>

                      {/* Email */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Email*
                        </Typography>

                        <TextField
                          size="small"
                          fullWidth
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          helperText={
                            touched.email && errors.email ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.email}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>

                      {/* Phones */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                          sx={{
                            fontSize: "var(--font-sm)",
                            color: "var(--white-text)",
                            fontFamily: "var(--font-family-montserat)",
                            fontWeight: 500,
                            lineHeight: "1.625rem",
                          }}
                        >
                          Phone Number*
                        </Typography>

                        <TextField
                          size="small"
                          required
                          fullWidth
                          placeholder="Enter Phone Number"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          helperText={
                            touched.phone && errors.phone ? (
                              <span
                                style={{ color: "#ff0015ff", fontWeight: 500 }}
                              >
                                {errors.phone}
                              </span>
                            ) : null
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "var(--white-text)",
                              "& fieldset": {
                                border: "1.02px solid #E1E1E63D",
                              },
                              "&:hover fieldset": {
                                border:
                                  "2px solid var(--icon-color) !important",
                              },
                              "&.Mui-focused fieldset": {
                                border: "none",
                                boxShadow: "0 0 0 2px rgba(225, 225, 230, 0.2)",
                              },
                              "& .MuiSelect-icon": {},
                            },
                            "& .MuiInputBase-input": {
                              color: "var(--white-text)",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        borderRadius: "5px",
                        fontFamily: "var(--font-family-montserrat)",
                        bgcolor: "var(--icon-color)",
                        color: "#000000",
                        fontWeight: 500,
                        width: "140px",
                        py: 1.7,
                        mt: 4,
                      }}
                    >
                      Submit
                    </Button>
                  </Box>

                  {status === "loading" && <p>Submitting...</p>}
                  {status === "succeeded" && <p>Lead saved successfully!</p>}
                  {status === "failed" && <p>Error: {error}</p>}
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Banner;
