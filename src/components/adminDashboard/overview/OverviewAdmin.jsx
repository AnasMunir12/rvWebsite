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
  Skeleton,
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
import {
  getQuickAction,
  getRecentLeads,
  getTotalLead,
  getStatistic,
} from "../../../serviceApi/fieldsApi";

function OverviewAdmin() {
  const isMobile = useMediaQuery("(max-width:900px)"); // Tablet breakpoint

  const [quickActions, setQuickActions] = useState([]);
  const [rows, setrows] = useState([]);
  const [statistic, setStatistic] = useState([]);
  const [loading, setLoading] = useState(false);

  const [leadManag, setleadManag] = useState([]);
  const [totalLeads, setTotalLeads] = useState([]);

  // Skeleton for all sections
  const [loadingQuick, setLoadingQuick] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);
  const [loadingTotal, setLoadingTotal] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  //   Get Data for Quick  Actions
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getQuickAction();
        const data = response.data.data;

        const formated = [
          {
            icon: "/images/admin/overview/pending.svg",
            action: "Pending Leads",
            status: "Review",
            task: data.pendingLeads ?? 0,
          },
          {
            icon: "/images/admin/overview/pending.svg",
            action: "Documents",
            status: "Review",
            task: data.documents ?? 0,
          },
          {
            icon: "/images/admin/overview/today.svg",
            action: "Today's Appointment",
            status: "Review",
            task: data.todaysAppointments ?? 0,
          },
          {
            icon: "/images/admin/overview/manage.svg",
            action: "Manage Time Slots",
            status: "See",
            task: data.totalSlots ?? 0,
          },
        ];

        setQuickActions(formated);
      } catch (error) {
        console.error("Error fetching quick actions:", error);
      } finally {
        setLoadingQuick(false);
      }
    };

    fetchApi();
  }, []);

  // Get Data for Recent Leads
  useEffect(() => {
    const fetchRecentLeads = async () => {
      try {
        const response = await getRecentLeads();
        const data = response.data?.data || [];

        const formated = data.map((lead, index) => ({
          id: index,
          name: lead.name ?? "N/A",
          rvModel: lead.rvModel ?? "N/A",
          submitted: new Date(lead.submitted).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          status: lead.status ?? "Pending",
        }));
        setrows(formated);
      } catch (error) {
        console.log("Error fetching recent leads:", error);
      } finally {
        setLoadingRecent(false);
      }
    };

    fetchRecentLeads();
  }, []);

  // Get Data for Total Leads
  useEffect(() => {
    const fetchTotalLeads = async () => {
      try {
        const response = await getTotalLead();
        const data = response.data?.data;

        const totalLeadsFormat = [
          // Overview Menu
          {
            value: data.totalLeads?.count,
          },
          {
            value: data.activeConversations?.count,
          },
          {
            value: data.rvInProcess?.count,
          },
          {
            value: data.scheduledInspections?.count,
          },
          // Total Leads
          {
            value: data.totalLeads?.count,
          },
          {
            value: data.approvedLeads?.count,
          },
          {
            value: data.pendingLeads?.count,
          },
          {
            value: data.rejectedLeads?.count,
          },
        ];

        setleadManag(totalLeadsFormat.slice(0, 4));
        setTotalLeads(totalLeadsFormat.slice(4, 8));
      } catch (error) {
        console.log("Error fetching total leads:", error);
      } finally {
        setLoadingTotal(false);
      }
    };

    fetchTotalLeads();
  }, []);

  // Get Data for Statistics
  useEffect(() => {
    const fetchStatistic = async () => {
      try {
        setLoadingStats(false);
        const response = await getStatistic();
        const data = response.data?.data || [];

        const formated = data.map((item) => {
          return { name: item.month, count: item.count };
        });
        setStatistic(formated);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoadingStats(false);
      }
    };
    fetchStatistic();
  }, []);

  const COLORS = ["#ff8e29", "#00C49F", "#FFBB28", "#f54f5f"];

  const columns = [
    { id: "name", label: "Name", minWidth: 150, align: "left" },
    { id: "rvModel", label: "Rv Model", minWidth: 150, align: "center" },
    { id: "submitted", label: "Submitted", minWidth: 150, align: "center" },
    { id: "status", label: "Status", minWidth: 150, align: "right" },
  ];

  const LeadsData = [
    { icon: "/images/admin/overview/total.svg", name: "Total Leads" },
    { icon: "/images/admin/overview/active.svg", name: "Active Conversation" },
    { icon: "/images/admin/overview/process.svg", name: "Rv in Process" },
    {
      icon: "/images/admin/overview/schedule.svg",
      name: "Scheduled Inspections",
    },
  ];

  const totalLeadsData = [
    { name: "Total Leads" },
    { name: "Approved Leads" },
    { name: "Pending Leads" },
    { name: "Rejected Leads" },
  ];

  return (
    <Grid container spacing={2}>
      {/* Overview Cards */}
      {LeadsData.map((link, index) => (
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
              <Typography sx={{ fontSize: "var(--font-xs)", fontWeight: 500 }}>
                {link.name}
              </Typography>

              {/* ✅ Only show value for current index */}
              {loadingTotal ? (
                <Skeleton variant="text" width={50} height={30} />
              ) : (
                <Typography
                  sx={{
                    fontSize: "var(--font-sm)",
                    fontWeight: 500,
                    color: "#6F757E",
                  }}
                >
                  {leadManag[index]?.value ?? 0}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      ))}

      {/* Bar chart */}
      <Grid size={{ xs: 12, lg: 8 }}>
        {loadingStats ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={300}
            sx={{ borderRadius: "20px" }}
          />
        ) : (
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
                fontFamily: "var(--font-family-basic)",
                color: "#050F24",
                mb: 2,
              }}
            >
              Statistics
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={statistic}
                margin={{ top: 10, right: 10, left: -10, bottom: 15 }}
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
                  dataKey="count"
                  fill="var(--icon-color)"
                  barSize={5}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Grid>

      {/* Pie Chart */}
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
                data={totalLeads} // ✅ use totalLeads
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
                cornerRadius={10}
              >
                {totalLeads.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                {loadingStats
                  ? "..."
                  : totalLeads.reduce((sum, item) => sum + item.value, 0)}
              </text>
            </PieChart>
          </ResponsiveContainer>

          {/* Percentage Labels */}
          <Box display="flex" flexDirection="column" gap={2}>
            {totalLeadsData.map((entry, index) => {
              const value = totalLeads[index]?.value || 0; // dynamic value from backend

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
                      {entry.name} {/* static name */}
                    </Typography>
                  </Box>

                  {/* Value with skeleton while loading */}
                  {loadingStats ? (
                    <Skeleton variant="text" width={40} />
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        fontWeight: 400,
                        fontFamily: "var(--font-family-montserrat)",
                        color: "#050F24",
                      }}
                    >
                      {value}
                    </Typography>
                  )}
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
              maxHeight: 350,
              overflow: "auto",
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none", // IE & Edge
              scrollbarWidth: "none", // Firefox
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
                {rows.map((row) => (
                  <TableRow
                    hover
                    key={row.id}
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
                        // gap: 1,
                        px: 3,
                        py: 1.5,
                        "&:first-of-type": {
                          pl: 4,
                          borderTopLeftRadius: "8px",
                          borderBottomLeftRadius: "8px",
                        },
                      }}
                    >
                      {/* <Box
                        component="img"
                        src={row.icon}
                        sx={{ width: 25, height: 25 }}
                      /> */}
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
                      {row.rvModel}
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
                      {row.submitted}
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
                          fontSize: "var(--font-xs)",
                          fontFamily: "var(--font-family-montserrat)",
                          fontWeight: 500,
                          borderRadius: "1.709rem",
                          textAlign: "center",
                          p: "0.2rem 0.2rem",
                          width: "100%",
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
            {quickActions.map((data, index) => (
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
