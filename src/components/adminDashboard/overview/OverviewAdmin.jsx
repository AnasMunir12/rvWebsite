"use client";
import {
  Box,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useMediaQuery } from "@mui/material";

function OverviewAdmin() {
  const isMobile = useMediaQuery("(max-width:900px)"); // Tablet breakpoint

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLeads = async () => {
      try {
        setLoading(true);
        const res = await fetchLeads(1, 10); // page=1, limit=10
        setLeads(res.data.data.leads); // API returns { data: { leads: [] } }
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };

    getLeads();
  }, []);

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

  const columns = [
    { id: "name", label: "Name", minWidth: 150, align: "left" },
    { id: "rvModel", label: "Rv Model", minWidth: 150, align: "center" },
    { id: "submitted", label: "Submitted", minWidth: 150, align: "center" },
    { id: "status", label: "Status", minWidth: 150, align: "right" },
  ];

  return (
    <Grid container spacing={2}>
      {/* Overview Cards */}
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
            <Box display="flex" flexDirection="column" gap={1}>
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
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>

      {/* Pie Chart */}
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

          {/* Percentage Labels */}
          <Box display="flex" flexDirection="column" gap={2}>
            {piedata.map((entry, index) => {
              const total = piedata.reduce((sum, item) => sum + item.value, 0);
              const percentage = Math.round((entry.value / total) * 100);
              return (
                <Box
                  key={`label-${index}`}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        backgroundColor: COLORS[index % COLORS.length],
                        borderRadius: "50%",
                        mr: 1,
                      }}
                    />
                    <Typography
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
                  <Typography
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
            // px: 2,
            py: 3,
            borderRadius: "20px",
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

          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "12px",
            }}
          >
            <Table
              stickyHeader
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0 8px",
                minWidth: "100%",
              }}
            >
              {/* Headings */}
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                      sx={{
                        border: "none",
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "#050F24",
                        fontWeight: 500,
                        px: 3,
                        py: 1.5,
                        "&:first-of-type": { pl: 4 },
                        "&:last-of-type": { pr: 4 },
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Rows */}
              <TableBody>
                {leadData.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent !important",
                        boxShadow: "0.83px 14.09px 36.47px 0px #03022912",
                        cursor: "pointer",
                        borderRadius: "20px",
                      },
                    }}
                  >
                    {/* Name with Icon */}
                    <TableCell
                      sx={{
                        border: "none",
                        fontSize: "var(--font-xs)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "var(--admin-txt)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 3,
                        py: 1.5,
                        "&:first-of-type": {
                          pl: 4,
                          borderTopLeftRadius: "8px",
                          borderBottomLeftRadius: "8px",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={row.icon}
                        sx={{ width: 25, height: 25 }}
                      />
                      {row.name}
                    </TableCell>

                    {/* Model */}
                    <TableCell
                      sx={{
                        border: "none",
                        fontSize: "var(--font-xs)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "var(--admin-txt)",
                        px: 3,
                        py: 1.5,
                      }}
                    >
                      {row.model}
                    </TableCell>

                    {/* Time */}
                    <TableCell
                      sx={{
                        border: "none",
                        fontSize: "var(--font-xs)",
                        fontFamily: "var(--font-family-montserrat)",
                        color: "var(--admin-txt)",
                        px: 3,
                        py: 1.5,
                      }}
                    >
                      {row.time}
                    </TableCell>

                    {/* Status */}
                    <TableCell
                      sx={{
                        border: "none",
                        fontSize: "var(--font-xs)",
                        fontFamily: "var(--font-family-montserrat)",
                        px: 3,
                        py: 1.5,
                        "&:last-of-type": {
                          pr: 2,
                          borderTopRightRadius: "8px",
                          borderBottomRightRadius: "8px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color:
                            row.status === "Completed"
                              ? "#28803D"
                              : row.status === "Pending review"
                              ? "var(--icon-color)"
                              : row.status === "Docs Approved"
                              ? "#28803D"
                              : "inherit",
                          bgcolor:
                            row.status === "Completed"
                              ? "#28803D1A"
                              : row.status === "Pending review"
                              ? "#F0A8371A"
                              : row.status === "Docs Approved"
                              ? "#28803D1A"
                              : "transparent",
                          fontSize: "var(--font-sm)",
                          fontFamily: "var(--font-family-montserrat)",
                          fontWeight: 500,
                          borderRadius: "1.709rem",
                          textAlign: "center",
                          p: "0.3rem 0.1rem",
                          width: "80%",
                          display: "inline-block",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
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
              <MoreHorizIcon sx={{ color: "#6F757E" }} />
            </IconButton>
          </Box>

          <Box display="flex" flexDirection="column" gap={5}>
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
                <Box display="flex" alignItems="center" gap={2}>
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
                <Typography
                  sx={{
                    bgcolor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    fontSize: "var(--font-sm)",
                    fontWeight: 400,
                    fontFamily: "var(--font-family-montserrat)",
                    color: "#050F24",
                  }}
                >
                  {data.task}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default OverviewAdmin;
