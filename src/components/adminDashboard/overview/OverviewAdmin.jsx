"use client";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Cell, Pie, PieChart } from "recharts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useMediaQuery } from "@mui/material";

function OverviewAdmin() {
  const isMobile = useMediaQuery("(max-width:900px)"); // Tablet breakpoint

  const data = [
    { name: "Jan", uv: 140 },
    { name: "Feb", uv: 135 },
    { name: "Mar", uv: 125 },
    { name: "Apr", uv: 110 },
    { name: "May", uv: 105 },
    { name: "Jun", uv: 95 },
    { name: "Jul", uv: 90 },
    { name: "Aug", uv: 85 },
    { name: "Sep", uv: 70 },
    { name: "Oct", uv: 55 },
    { name: "Nov", uv: 35 },
    { name: "Dec", uv: 0 },
  ];

  const OverviewData = [
    { icon: "/images/admin/overview/total.svg", name: "Total Lead", qty: 280 },
    {
      icon: "/images/admin/overview/active.svg",
      name: "Active Conversation",
      qty: 170,
    },
    {
      icon: "/images/admin/overview/process.svg",
      name: "RV in Process",
      qty: 180,
    },
    {
      icon: "/images/admin/overview/schedule.svg",
      name: "Scheduled Inspection",
      qty: 130,
    },
  ];

  const piedata = [
    { name: "Total Leads", value: 600 },
    { name: "Approved Leads", value: 100 },
    { name: "Pending Leads", value: 300 },
    { name: "Rejected Leads", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const lead = [
    { name: "Name", icon: <ArrowDropDownIcon /> },
    { name: "Rv Model", icon: <ArrowDropDownIcon /> },
    { name: "Submitted", icon: <ArrowDropDownIcon /> },
    { name: "Status", icon: <ArrowDropDownIcon /> },
  ];

  const leadData = [
    {
      icon: "/images/admin/overview/1.svg",
      name: "Robert Bacins",
      model: "Class A Motorhome",
      time: "2 hours Ago",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/2.svg",
      name: "John Deo",
      model: "Travel Trailer",
      time: "2 hours Ago",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/3.svg",
      name: "Robert Bacins",
      model: "Fifth Wheel",
      time: "2 hours Ago",
      status: "Docs Approved",
    },
    {
      icon: "/images/admin/overview/4.svg",
      name: "John Carilo",
      model: "Class A Motorhome",
      time: "2 hours Ago",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/5.svg",
      name: "Adriene Watson",
      model: "Robert Bacins",
      time: "2 hours Ago",
      status: "Completed",
    },
  ];

  const quickAction = [
    {
      icon: "/images/admin/overview/pending.svg",
      action: "Pending Leads",
      status: "Review",
      task: "12",
    },
    {
      icon: "/images/admin/overview/today.svg",
      action: "Today's Appointment",
      status: "Review",
      task: "5",
    },
    {
      icon: "/images/admin/overview/manage.svg",
      action: "Manage Time Slots",
      status: "See",
      task: "8",
    },
    {
      icon: "/images/admin/overview/pending.svg",
      action: "Yesterday Appointment",
      status: "Review",
      task: "20",
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {OverviewData.map((link, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "var(--white-text)",
                boxShadow: "0px 0px 4px 0px #FF8E291A",
                gap: 2,
                padding: 2,
                borderRadius: "20px",
              }}
            >
              <Box
                component="img"
                src={link.icon}
                sx={{
                  width: { xs: "50px", xl: "59px" },
                  height: { xs: "50px", xl: "59px" },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography
                  sx={{
                    fontSize: "var(--font-xs)",
                    fontWeight: 500,
                    fontFamily: "var(--font-family-montsercrat)",
                    color: "#050F24",
                  }}
                >
                  {link.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "var(--font-sm)",
                    fontWeight: 500,
                    fontFamily: "var(--font-family-montserrat)",
                    color: "#6F757E",
                  }}
                >
                  {link.qty}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}

        {/* Bar chart */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 0px 4px 0px #FF8E291A",
              px: 2,
              py: 3,
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-standard)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                color: "#050F24",
                mb: 2,
              }}
            >
              Statistics
            </Typography>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
              >
                <XAxis dataKey="name" stroke="#6F757E" axisLine={false} />
                <YAxis axisLine={false} />

                <Tooltip />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="5 5"
                  vertical={false}
                />
                <Bar
                  dataKey="uv"
                  fill="var(--icon-color)"
                  barSize={5}
                  radius={[10, 10, 0, 0]} // rounded top corners
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        {/*  Pie Chart */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 0px 4px 0px #FF8E291A",
              px: 2,
              py: 3,
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-standard)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                color: "#050F24",
              }}
            >
              Total Leads
            </Typography>

            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={piedata}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                >
                  {piedata.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Add percentage labels below the pie chart */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {piedata.map((entry, index) => {
                const total = piedata.reduce(
                  (sum, item) => sum + item.value,
                  0
                );
                const percentage = Math.round((entry.value / total) * 100);

                return (
                  <Box
                    key={`label-${index}`}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          backgroundColor: COLORS[index % COLORS.length],
                          display: "inline-block",
                          mr: 1,
                          borderRadius: "50%",
                        }}
                      />
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "var(--font-sm)",
                          fontWeight: 400,
                          fontFamily: "var(--font-family-montserrat)",
                          color: "#050F24",
                        }}
                      >
                        {entry.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "var(--font-sm)",
                          fontWeight: 400,
                          fontFamily: "var(--font-family-montserrat)",
                          color: "#050F24",
                        }}
                      >
                        {percentage}%
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>

        {/* Recent Leads */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 0px 4px 0px #FF8E291A",
              px: 2,
              py: 3,
              borderRadius: "20px",
              overflow: isMobile ? "auto" : "visible",
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-basic)",
                fontFamily: "var(--font-family-montserrat)",
                color: "#050F24",
                fontWeight: 500,
                ml: 2,
                mb: 4,
              }}
            >
              Recent Leads
            </Typography>

            {/* Container for horizontal scrolling on mobile */}
            <Box
              sx={{
                width: isMobile ? "max-content" : "100%",
                minWidth: isMobile ? "600px" : "auto",
              }}
            >
              {/* Heading */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "150px 150px 150px 150px"
                    : "1fr 1fr 1fr 1fr",
                  gap: 2,
                  alignItems: "center",
                  mb: 2,
                  pb: 1,
                }}
              >
                {lead.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "#050F24",
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{
                        "&:hover": {
                          background: "transparent",
                          color: "inherit",
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </Box>
                ))}
              </Box>

              {/* Data */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                {leadData.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: isMobile
                        ? "150px 150px 150px 150px"
                        : "1fr 1fr 1fr 1fr",
                      gap: 2,
                      alignItems: "center",
                      py: 2,
                      "&:hover": {
                        boxShadow: "0.83px 14.09px 36.47px 0px #03022912",
                        bgcolor: "var(--white-text)",
                        borderRadius: "8px",
                        cursor: "pointer",
                        mx: isMobile ? 0 : -2,
                        px: isMobile ? 0 : 2,
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        component="img"
                        src={item.icon}
                        sx={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "var(--font-sm)",
                          fontFamily: "var(--font-family-montserrat)",
                          color: "var(--admin-txt)",
                          fontWeight: 500,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "var(--admin-txt)",
                        fontWeight: 500,
                      }}
                    >
                      {item.model}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "var(--admin-txt)",
                        fontWeight: 500,
                      }}
                    >
                      {item.time}
                    </Typography>
                    <Typography
                      sx={{
                        color:
                          item.status === "Completed"
                            ? "#28803D"
                            : item.status === "Pending review"
                            ? "var(--icon-color)"
                            : item.status === "Docs Approved"
                            ? "#28803D"
                            : "inherit",
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        fontWeight: 500,
                      }}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Quick Actions */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 0px 4px 0px #FF8E291A",
              px: 2,
              py: 3,
              borderRadius: "20px",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "var(--font-basic)",
                  fontFamily: "var(--font-family-montserrat)",
                  color: "#050F24",
                  fontWeight: 500,
                  ml: 2,
                }}
              >
                Quick Actions
              </Typography>
              <IconButton>
                <MoreHorizIcon
                  sx={{
                    color: "#6F757E",
                    "&:hover": {
                      background: "transparent",
                      color: "inherit",
                    },
                  }}
                />
              </IconButton>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={5}>
              {quickAction.map((data, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box component="img" src={data.icon} />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "var(--font-sm)",
                          fontWeight: 400,
                          fontFamily: "var(--font-family-montserrat)",
                          color: "#050F24",
                        }}
                      >
                        {data.action}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "var(--font-xs)",
                          fontWeight: 400,
                          fontFamily: "var(--font-family-montserrat)",
                          color: "#6F757E",
                        }}
                      >
                        {data.status}
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        bgcolor: "#F5F5F5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: "var(--font-sm)",
                        fontWeight: 400,
                        fontFamily: "var(--font-family-montserrat)",
                        color: "#050F24",
                      }}
                    >
                      {data.task}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default OverviewAdmin;
