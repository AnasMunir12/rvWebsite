import {
  Box,
  Grid,
  IconButton,
  Typography,
  Rating,
  useMediaQuery,
  Button,
} from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Banner() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.rvConsignment.users);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Grid container sx={{ position: "relative" }} alignItems={"stretch"}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                bgcolor: "var(--bg-color)",
                height: { xs: "auto", md: "100%" },
                width: { xs: "100%", md: "40%", lg: "45%", xl: "50%" },
                position: { xs: "revert", md: "absolute" },
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                pl: { xs: 2, sm: 10 },
                pr: 4,
                gap: 1,
                py: { xs: 10, md: 8, lg: 30 },
              }}
            >
              <Box
                display="flex"
                justifyContent={{ xs: "center", md: "start" }}
                gap={1}
              >
                <IconButton disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/icons/bannerline.svg" />
                </IconButton>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "var(--font-xs)", lg: "var(--font-sm)" },
                    fontFamily: "var(--font-family-montserrat)",
                    color: "var(--white-text)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Digitally Streamlined Consignment Process
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "var(--font-lg)",
                      lg: "var(--font-1xl)",
                    },
                    fontFamily: "var(--font-family-montserrat)",
                    color: "var(--white-text)",
                    fontWeight: 600,
                    lineHeight: "59px",
                  }}
                >
                  Sell Your RV
                  <br />
                  <span style={{ fontWeight: 400 }}> with Zero Hassle </span>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "var(--font-sn)", lg: "var(--font-md)" },
                    color: "var(--white-text)",
                    fontWeight: 400,
                    lineHeight: "26px",
                    fontFamily: "var(--font-family-lato)",
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  Our advanced digital process handles everything from first
                  contact to RV drop-off with ease and accuracy.
                </Typography>
              </Box>
              <Box
                onClick={() => navigate("/RVsell")}
                sx={{
                  width: "160px",
                  height: "50px",
                  backgroundColor: "var(--icon-color)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid var(--bg-color)",
                  borderRadius: "3px",
                  mt: 3,
                  mx: { xs: "auto", sm: 0 },
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "var(--white-text)",
                    borderColor: "var(--icon-color)",
                    "& .hover-text": {
                      color: "var(--icon-color)",
                    },
                  },
                }}
              >
                <Typography
                  className="hover-text"
                  sx={{
                    fontSize: "var(--font-sm)",
                    fontFamily: "var(--font-family-montserrat)",
                    fontWeight: 600,
                    color: "var(--white-text)",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Sell Your RV
                </Typography>
              </Box>

              {/* main box */}
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent={{ md: "center", lg: "start" }}
                alignItems={"center"}
                gap={3}
                mt={4}
              >
                <Box>
                  <AvatarGroup
                    max={3}
                    sx={{
                      "& .MuiAvatar-root": {
                        width: { xs: 30, lg: 40 }, // custom size
                        height: { xs: 30, lg: 40 },
                        fontSize: "14px",
                        border: "2px solid white", // border around each avatar
                        backgroundColor: "var(--icon-color)",
                      },
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/landingpage/avator1.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                  </AvatarGroup>
                </Box>

                <Box display={"flex"} flexDirection={"row"} gap={1}>
                  {/* ratings */}
                  <Box
                    display={"flex"}
                    flexDirection={{ xs: "row", sm: "column" }}
                    alignItems={"center"}
                    gap={{ xs: 1, sm: 0 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        fontWeight: 500,
                        color: "var(--white-text)",
                      }}
                    >
                      4.9 / 5.0
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "var(--font-sm)",
                          sm: "var(--font-sm)",
                        },
                        fontFamily: "var(--font-family-montserrat)",
                        fontWeight: 500,
                        color: "var(--white-text)",
                      }}
                    >
                      RATINGS
                    </Typography>
                  </Box>
                  <Box>
                    <Rating name="size-medium" defaultValue={5} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "500px", sm: "100%" },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src="/images/landingpage/banner.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Button Overlay */}
              {isMobile && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    pt: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "var(--icon-color)",
                      color: "white",
                      "&:hover": { bgcolor: "var(--icon-color)" },
                    }}
                    onClick={() => navigate(users ? "/dashboard" : "/login")}
                  >
                    {users ? "Dashboard" : "Login"}
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Banner;
