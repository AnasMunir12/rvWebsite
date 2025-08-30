import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { logoutUser } from "../../store/slices/AuthSlice";
import { useDispatch } from "react-redux";

export function Sidebar({
  isCollapsed,
  handleCollapseToggle,
  isMobile,
  handleDrawerToggle,
  setHeading,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isTablet = useMediaQuery("(max-width:1200px) and (min-width:900px)");

  const Admindata = [
    { icon: HomeOutlinedIcon, text: "Overview", path: "/admin/overview" },
    {
      icon: GroupsOutlinedIcon,
      text: "Team Management",
      path: "/admin/teamManagement",
    },
    {
      icon: ManageAccountsOutlinedIcon,
      text: "Lead Management",
      path: "/admin/leadManagement",
    },
    {
      icon: DateRangeOutlinedIcon,
      text: "Slot Management",
      path: "/admin/slotManagement",
    },
  ];

  const HandleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    if (isMobile) handleDrawerToggle();
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: "0px 0px 4px 0px #FF8E291A",
        bgcolor: "var(--white-text)",
        borderRadius: "20px",
        px: 1.5,
        py: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Logo */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          mb={2}
        >
          <Box
            component="img"
            src="/images/admin/logo.svg"
            sx={{ width: "35px", height: "20px" }}
          />
          <Typography
            sx={{
              fontFamily: "var(--font-family-inter)",
              fontSize: "var(--font-basic)",
              fontWeight: 700,
              color: "#050F24",
            }}
          >
            Logoipsms
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box display="flex" flexDirection="column" gap={1} width="100%">
          {Admindata.map((link, index) => {
            const isActive = location.pathname === link.path;
            const IconComponent = link.icon; // store the icon as a component

            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: isCollapsed ? 0 : 2,
                  p: "0.625rem",
                  borderRadius: "5px",
                  backgroundColor: isActive
                    ? "var(--icon-color)"
                    : "transparent",
                  justifyContent: isCollapsed ? "center" : "flex-start",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  setHeading(link.text);
                  if (isMobile) handleDrawerToggle();
                  navigate(link.path);
                }}
              >
                <IconButton
                  sx={{
                    color: isActive ? "var(--white-text)" : "#6F757E",
                    p: 0,
                  }}
                >
                  <IconComponent />
                </IconButton>

                {!isCollapsed && (
                  <Typography
                    className="menu-text"
                    sx={{
                      color: isActive ? "#fff" : "#6F757E",
                      fontSize: { md: "var(--font-xs)", lg: "var(--font-sm)" },
                      fontWeight: 500,
                    }}
                  >
                    {link.text}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "var(--icon-color)",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s",
            "& .MuiSvgIcon-root": {
              color: "var(--white-text)", // change icon color
            },
            "& .menu-text": {
              color: "var(--white-text)", // change text color
            },
          },
          px: 1.5,
          py: 0.5,
        }}
      >
        <IconButton
          sx={{
            color: "var(--icon-color)",
            p: 0,
          }}
        >
          <LoginRoundedIcon
            sx={{
              width: "18px",
              height: "18px",
            }}
          />
        </IconButton>
        <Button
          className="menu-text"
          onClick={HandleLogout}
          sx={{
            fontFamily: "var(--font-family-montserrat)",
            fontSize: "var(--font-md)",
            fontWeight: 600,
            color: "var(--icon-color)",
            textTransform: "capitalize",
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
