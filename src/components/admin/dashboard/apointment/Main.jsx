import React from "react";
import Apointment from "./Apointment";
import SelectData from "./SelectData";
import { Box, Typography } from "@mui/material";
import SelectTime from "./SelectTime";
import Checklist from "./Checklist";

function Main() {
  return (
    <>
      <Typography
        sx={{
          color: "var(--white-text)",
          fontWeight: 500,
          fontFamily: "var(--font-family-montserrat)",
          fontSize: "var(--font-basic) ",
          mb: 2,
        }}
      >
        Overview
      </Typography>
      <Box
        sx={{
          backgroundColor: "black",
          boxShadow: "0px 0px 4px 0px #FF8E291A",
          px: 3,
          py: 2,
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Apointment />
        <SelectData />
        <SelectTime />
        <Checklist />
      </Box>
    </>
  );
}

export default Main;
