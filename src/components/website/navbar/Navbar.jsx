import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/slices/RvConsignment";

function Navbar() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.rvConsignment.users);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Sell Your RV", path: "/RVsell" },
    { name: "Faq", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            height: 40,
            bgcolor: "var(--bg-color)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { md: 10, lg: 15 },
            py: 0.5,
            zIndex: 1200,
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/images/icons/callIcon.svg"
                alt="Call"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hind)",
                }}
              >
                Call on : (+62) 134 567 891
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/images/icons/mailIcon.svg"
                alt="Email"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hind)",
                }}
              >
                kamperven@domain.com
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            gap={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#fff" }}
              />
            }
          >
            <Box
              component="img"
              src="/images/icons/facebook.svg"
              alt="Facebook"
              sx={{ width: 25, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/twitter.svg"
              alt="Twitter"
              sx={{ width: 25, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/youtube.svg"
              alt="YouTube"
              sx={{ width: 18, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/instagram.svg"
              alt="Instagram"
              sx={{ width: 18, cursor: "pointer" }}
            />
          </Stack>
        </Box>
      )}

      {/* Main Navbar */}
      <Box
        sx={{
          width: "100%",
          height: 72,
          position: "absolute",
          top: { md: 40 },
          left: 0,
          px: { xs: 2, lg: 2 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1100,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "800px", md: "100%", lg: "100%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center" flex={1}></Box>

          {isMobile ? (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon
                sx={{
                  fontSize: 30,
                  color: "var(--bg-color)",
                  bgcolor: "#F0A837",
                  borderRadius: "5px",
                }}
              />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center" gap={{ md: 5, xl: 10 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: isActive
                          ? "var(--icon-color)"
                          : "var(--white-text)",
                        fontSize: "var(--font-sm)",
                        fontWeight: isActive ? 700 : 400,
                        fontFamily: "var(--font-family-montserrat)",
                        lineHeight: "22px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "var(--icon-color)",
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                );
              })}

              {/* Login/Dashboard Button */}
              <Box
                onClick={() => {
                  navigate(users ? "/dashboard/overview" : "/login");
                  setOpenDrawer(false);
                }}
                sx={{
                  px: 2.5,
                  py: 1,
                  border: "1px solid var(--icon-color)",
                  borderRadius: "3px",
                  backgroundColor: users
                    ? "var(--icon-color)"
                    : "var(--white-text)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: users
                      ? "var(--white-text)"
                      : "var(--icon-color)",
                    borderColor: "var(--icon-color)",
                    "& .hover-text": {
                      color: users ? "var(--icon-color)" : "var(--white-text)",
                    },
                  },
                }}
              >
                <Typography
                  className="hover-text"
                  sx={{
                    fontSize: "var(--font-sm)",
                    fontWeight: 600,
                    fontFamily: "var(--font-family-montserrat)",
                    color: users ? "var(--white-text)" : "var(--bg-color)",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {users ? "Dashboard" : "Login Now"}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: "100%",
            height: 40,
            bgcolor: "var(--bg-color)",
            display: {
              "@media (max-width:760px)": {
                display: "none",
              },
              sm: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
            px: { sm: 4, md: 10, lg: 15 },
            py: 0.5,
            zIndex: 1200,
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/images/icons/callIcon.svg"
                alt="Call"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hind)",
                }}
              >
                Call on : (+62) 134 567 891
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                component="img"
                src="/images/icons/mailIcon.svg"
                alt="Email"
              />
              <Typography
                sx={{
                  color: "var(--white-text)",
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hind)",
                }}
              >
                kamperven@domain.com
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            gap={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#fff" }}
              />
            }
          >
            <Box
              component="img"
              src="/images/icons/facebook.svg"
              alt="Facebook"
              sx={{ width: 25, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/twitter.svg"
              alt="Twitter"
              sx={{ width: 25, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/youtube.svg"
              alt="YouTube"
              sx={{ width: 18, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/images/icons/instagram.svg"
              alt="Instagram"
              sx={{ width: 18, cursor: "pointer" }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "#1a1a1a",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography
              sx={{
                color: "var(--icon-color)",
                fontSize: "var(--font-basic)",
                fontWeight: 700,
                fontFamily: "var(--font-family-montserrat)",
                textTransform: "uppercase",
              }}
            >
              RV
            </Typography>
            <IconButton onClick={() => setOpenDrawer(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* <Box
            onClick={() => {
              navigate(users ? "/dashboard/overview" : "/login");
              setOpenDrawer(false);
            }}
            sx={{
              width: "100%",
              py: 1.5,
              backgroundColor: "var(--white-text)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid var(--icon-color)",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                fontWeight: 600,
                fontFamily: "var(--font-family-montserrat)",
                color: "var(--bg-color)",
              }}
            >
              {users ? "Dashboard" : "Login Now"}
            </Typography>
          </Box> */}

          <Stack direction="column" spacing={3} mt={2}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{ textDecoration: "none" }}
                  onClick={() => setOpenDrawer(false)}
                >
                  <Typography
                    sx={{
                      color: isActive
                        ? "var(--icon-color)"
                        : "var(--white-text)",
                      fontWeight: isActive ? 700 : 400,
                      fontSize: "var(--font-md)",
                      fontFamily: "var(--font-family-montserrat)",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import {
//   Box,
//   Divider,
//   IconButton,
//   Stack,
//   Typography,
//   Drawer,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useTheme } from "@mui/material/styles";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const users = useSelector((state) => state.rvConsignment.users);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Sell Your RV", path: "/RVsell" },
//     { name: "Faq", path: "/faq" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const theme = useTheme();
//   const isMobile = useMediaQuery("(max-width:1000px)"); // ✅ custom mobile
//   const [openDrawer, setOpenDrawer] = useState(false);

//   return (
//     <>
//       {/* Top Contact Bar */}
//       {!isMobile && (
//         <Box
//           sx={{
//             width: "100%",
//             height: 40,
//             bgcolor: "var(--bg-color)",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             px: { md: 10, lg: 15 },
//             py: 0.5,
//             zIndex: 1200,
//           }}
//         >
//           <Box display="flex" alignItems="center" gap={2}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <Box component="img" src="/images/icons/callIcon.svg" />
//               <Typography
//                 sx={{
//                   color: "var(--white-text)",
//                   fontSize: "14px",
//                   fontFamily: "var(--font-family-hind)",
//                 }}
//               >
//                 Call on : (+62) 134 567 891
//               </Typography>
//             </Box>
//             <Box display="flex" alignItems="center" gap={1}>
//               <Box component="img" src="/images/icons/mailIcon.svg" />
//               <Typography
//                 sx={{
//                   color: "var(--white-text)",
//                   fontSize: "14px",
//                   fontFamily: "var(--font-family-hind)",
//                 }}
//               >
//                 kamperven@domain.com
//               </Typography>
//             </Box>
//           </Box>

//           <Stack
//             direction="row"
//             gap={2}
//             divider={
//               <Divider
//                 orientation="vertical"
//                 flexItem
//                 sx={{ borderColor: "#fff" }}
//               />
//             }
//           >
//             <Box
//               component="img"
//               src="/images/icons/facebook.svg"
//               sx={{ width: 25, cursor: "pointer" }}
//             />
//             <Box
//               component="img"
//               src="/images/icons/twitter.svg"
//               sx={{ width: 25, cursor: "pointer" }}
//             />
//             <Box
//               component="img"
//               src="/images/icons/youtube.svg"
//               sx={{ width: 18, cursor: "pointer" }}
//             />
//             <Box
//               component="img"
//               src="/images/icons/instagram.svg"
//               sx={{ width: 18, cursor: "pointer" }}
//             />
//           </Stack>
//         </Box>
//       )}

//       {/* Main Navbar */}
//       <Box
//         sx={{
//           width: "100%",
//           height: 72,
//           position: "absolute",
//           top: { md: 40 },
//           left: 0,
//           zIndex: 1100,
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "flex-end", // ✅ Always right side
//             alignItems: "center",
//             px: { md: 4, lg: 6 },
//           }}
//         >
//           {isMobile ? (
//             <IconButton
//               onClick={() => setOpenDrawer(true)}
//               sx={{
//                 color: "var(--bg-color)",
//                 bgcolor: "#F0A837",
//                 borderRadius: "5px",
//                 "&:hover": { bgcolor: "#e09927" },
//               }}
//             >
//               <MenuIcon sx={{ fontSize: 30 }} />
//             </IconButton>
//           ) : (
//             <Box
//               display="flex"
//               alignItems="center"
//               justifyContent="flex-end"
//               gap={{ md: 3, lg: 5, xl: 6 }}
//               sx={{ flexWrap: "wrap" }} // ✅ shrink instead of overlap
//             >
//               {navLinks.map((link) => {
//                 const isActive = location.pathname === link.path;
//                 return (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Typography
//                       sx={{
//                         color: isActive
//                           ? "var(--icon-color)"
//                           : "var(--white-text)",
//                         fontSize: "var(--font-sm)",
//                         fontWeight: isActive ? 700 : 400,
//                         fontFamily: "var(--font-family-montserrat)",
//                         cursor: "pointer",
//                         transition: "all 0.3s ease",
//                         whiteSpace: "nowrap",
//                         "&:hover": { color: "var(--icon-color)" },
//                       }}
//                     >
//                       {link.name}
//                     </Typography>
//                   </Link>
//                 );
//               })}

//               {/* Login / Dashboard */}
//               <Box
//                 onClick={() =>
//                   navigate(users ? "/dashboard/overview" : "/login")
//                 }
//                 sx={{
//                   px: 2.5,
//                   py: 1,
//                   border: "1px solid var(--icon-color)",
//                   borderRadius: "3px",
//                   backgroundColor: users
//                     ? "var(--icon-color)"
//                     : "var(--white-text)",
//                   cursor: "pointer",
//                   "&:hover": {
//                     backgroundColor: users
//                       ? "var(--white-text)"
//                       : "var(--icon-color)",
//                     "& .hover-text": {
//                       color: users ? "var(--icon-color)" : "var(--white-text)",
//                     },
//                   },
//                 }}
//               >
//                 <Typography
//                   className="hover-text"
//                   sx={{
//                     fontSize: "var(--font-sm)",
//                     fontWeight: 600,
//                     fontFamily: "var(--font-family-montserrat)",
//                     color: users ? "var(--white-text)" : "var(--bg-color)",
//                   }}
//                 >
//                   {users ? "Dashboard" : "Login Now"}
//                 </Typography>
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </Box>

//       {/* Drawer for mobile */}
//       <Drawer
//         anchor="right"
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         sx={{
//           "& .MuiDrawer-paper": {
//             width: "100%",
//             maxWidth: 300,
//             bgcolor: "#1a1a1a",
//           },
//         }}
//       >
//         <Box
//           sx={{
//             p: 3,
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//           }}
//         >
//           <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//             <IconButton
//               onClick={() => setOpenDrawer(false)}
//               sx={{ color: "white" }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Stack spacing={3} mt={3}>
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 style={{ textDecoration: "none" }}
//                 onClick={() => setOpenDrawer(false)}
//               >
//                 <Typography
//                   sx={{
//                     color:
//                       location.pathname === link.path
//                         ? "var(--icon-color)"
//                         : "var(--white-text)",
//                     fontWeight: location.pathname === link.path ? 700 : 400,
//                     fontSize: "var(--font-md)",
//                     fontFamily: "var(--font-family-montserrat)",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {link.name}
//                 </Typography>
//               </Link>
//             ))}
//           </Stack>

//           <Box
//             onClick={() => {
//               navigate(users ? "/dashboard/overview" : "/login");
//               setOpenDrawer(false);
//             }}
//             sx={{
//               mt: "auto",
//               py: 1.5,
//               backgroundColor: "var(--white-text)",
//               border: "1px solid var(--icon-color)",
//               borderRadius: 3,
//               cursor: "pointer",
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: "var(--font-sm)",
//                 fontWeight: 600,
//                 fontFamily: "var(--font-family-montserrat)",
//                 color: "var(--bg-color)",
//               }}
//             >
//               {users ? "Dashboard" : "Login Now"}
//             </Typography>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;
