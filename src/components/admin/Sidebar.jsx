import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/RvConsignment";

function Sidebar({
  isCollapsed,
  handleCollapseToggle,
  isMobile,
  handleDrawerToggle,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isTablet = useMediaQuery("(max-width:1200px) and (min-width:900px)");

  const data = [
    {
      icon: "/images/sidebar/homeicon.svg",
      text: "Overview",
      path: "/dashboard/overview",
    },
    {
      icon: "/images/sidebar/infoicon.svg",
      text: "Rv Information",
      path: "/dashboard/rvinformation", // lowercase
    },
    {
      icon: "/images/sidebar/docicon.svg",
      text: "Documents",
      path: "/dashboard/documents",
    },
    {
      icon: "/images/sidebar/appointicon.svg",
      text: "Appointments",
      path: "/dashboard/appointment", // fix typo
    },
    {
      icon: "/images/sidebar/logouticon.svg",
      text: "Logout",
      path: "/dashboard/logout",
      isLogout: true,
    },
  ];

  const [image, setImage] = useState("/images/faqs/faqsimg.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser()); // clear redux state
    localStorage.removeItem("auth"); // if you store token/user in localStorage
    if (isMobile) handleDrawerToggle();
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "black",
        boxShadow: "0px 15px 40px -5px #0000001A",
        borderRadius: "10px",
        width: isCollapsed ? "100%" : "15rem",
        height: "100%",
        position: "relative",
        px: isCollapsed ? 2 : 2,
        py: 3,
        alignItems: isCollapsed ? "center" : isTablet ? "center" : "flex-start",
        transition: "width 0.3s ease",
      }}
    >
      {/* Mobile Header with Close Icon */}
      {isMobile && (
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              bgcolor: "#F0A837",
              color: "#fff",
              width: "32px",
              height: "32px",
              m: 1,
              "&:hover": { bgcolor: "#d98e20" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      {/* Collapse Toggle (Desktop Only)
      {!isMobile && (
        <IconButton
          onClick={handleCollapseToggle}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-15px",
            transform: "translateY(-50%)",
            bgcolor: "#F0A837",
            color: "#fff",
            width: "28px",
            height: "28px",
            minWidth: "unset",
            padding: "0",
            borderRadius: "50%",
            zIndex: 2000,
            "&:hover": { bgcolor: "#d98e20" },
          }}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      )} */}
      {/* Profile Image */}
      <Box
        sx={{
          position: "relative",
          width: isCollapsed ? "50px" : isTablet ? "70px" : "100px",
          height: isCollapsed ? "50px" : isTablet ? "70px" : "100px",
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Profile"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid #ccc",
          }}
        />
        {!isCollapsed && (
          <IconButton
            component="label"
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              backgroundColor: "#F0A837",
              width: "28px",
              height: "28px",
              p: 0.5,
              "&:hover": { backgroundColor: "#d98e20" },
            }}
          >
            <Box
              component="img"
              src="/images/sidebar/icon.svg"
              alt="Edit"
              sx={{ width: "16px", height: "16px" }}
            />
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
          </IconButton>
        )}
      </Box>
      {/* User Name */}
      {!isCollapsed && (
        <Typography
          sx={{
            color: "var(--white-text)",
            fontSize: isTablet ? "12px" : "var(--font-sm)",
            fontWeight: 400,
            textAlign: "center",
            mt: 2,
          }}
        >
          Donald Hansen
        </Typography>
      )}
      <Divider sx={{ width: "100%", borderTop: "1px dashed gray", my: 2 }} />
      {/* Navigation Links */}
      {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "200px",
        }}
      >
        {/* Top links (except Logout) */}
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          sx={{
            width: isCollapsed ? "100px" : "100%",
          }}
        >
          {data
            .filter((link) => !link.isLogout)
            .map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: isCollapsed ? 0 : 2,
                    p: "13px",
                    borderRadius: "8px",
                    backgroundColor: isActive
                      ? "var(--icon-color)"
                      : "transparent",
                    justifyContent: isCollapsed ? "center" : "flex-start",
                    "&:hover": {
                      backgroundColor: isActive
                        ? "var(--icon-color)"
                        : "#282828",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    },
                  }}
                  onClick={() => {
                    if (isMobile) handleDrawerToggle();
                    navigate(link.path);
                  }}
                >
                  <Box
                    component="img"
                    src={link.icon}
                    alt={link.text}
                    sx={{ width: "18px", height: "18px" }}
                  />
                  {!isCollapsed && (
                    <Typography
                      sx={{
                        color: "var(--white-text)",
                        fontSize: "var(--font-sm)",
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

        {/* Logout button in the last*/}
        <Box sx={{ mt: "auto" }}>
          {data
            .filter((link) => link.isLogout) // sirf logout
            .map((link, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: isCollapsed ? 0 : 2,
                  p: "13px",
                  borderRadius: "8px",
                  justifyContent: isCollapsed ? "center" : "flex-start",
                  "&:hover": {
                    backgroundColor: "#282828",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  },
                }}
                onClick={handleLogout}
              >
                <Box
                  component="img"
                  src={link.icon}
                  alt={link.text}
                  sx={{ width: "18px", height: "18px" }}
                />
                {!isCollapsed && (
                  <Typography
                    sx={{
                      color: "var(--white-text)",
                      fontSize: "var(--font-sm)",
                      fontWeight: 500,
                    }}
                  >
                    {link.text}
                  </Typography>
                )}
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
