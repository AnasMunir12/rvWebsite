import { Box, MenuItem, Select, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function Navbar({ heading, isMobile, onMenuClick }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              onClick={onMenuClick}
              sx={{
                color: "#858282ff",
                width: "36px",
                height: "36px",
                "&:hover": { bgcolor: "#d98e20" },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          )}
          <Typography
            sx={{
              fontSize: {
                xs: "var(--font-xs)",
                sm: "var(--font-sm)",
                md: "var(--font-basic)",
              },
              fontWeight: 500,
              fontFamily: "var(--font-family-montserrat)",
              color: "#050F24",
            }}
          >
            {heading}
          </Typography>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 1, md: 1.5 },
          }}
        >
          <Box
            component="img"
            src="/images/admin/avator.svg"
            sx={{
              width: { xs: "35px", md: "45px" },
              height: { xs: "35px", md: "45px" },
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: "var(--font-xs)",
                sm: "var(--font-sm)",
                md: "var(--font-basic)",
              },
            }}
          >
            Aiden Max
          </Typography>
          {/* <Select
            variant="standard"
            disableUnderline
            value=""
            onChange={(e) => console.log(e.target.value)}
            sx={{
              "& .MuiSelect-select": { padding: 0 },
              "& .MuiSelect-icon": { marginRight: 0 },
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="profile">Profile</MenuItem>
            <MenuItem value="logout">Logout</MenuItem>
          </Select> */}
        </Box>
      </Box>

      <Box sx={{ border: "1px solid #0000000A", mt: 1 }}></Box>
    </Box>
  );
}

export default Navbar;
