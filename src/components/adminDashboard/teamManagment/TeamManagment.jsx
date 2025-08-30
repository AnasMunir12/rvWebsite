import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import usePagination from "@mui/material/usePagination";
import CloseIcon from "@mui/icons-material/Close";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { getTeamManagement } from "../../../serviceApi/fieldsApi";

const columns = [
  { id: "member", label: "Member", minWidth: 170, align: "left" },
  {
    id: "mail",
    label: "Mail",
    minWidth: 170,
    align: "left",
  },
  {
    id: "role",
    label: "Role",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "leadAssigned",
    label: "Lead Assigned",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function TeamManagment() {
  const [openDialog, setOpenDialog] = useState(false);

  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const [menuState, setMenuState] = useState({ anchor: null, rowIndex: null });
  const [loading, setLoading] = useState(true);

  const handleclick = (event, index) => {
    setMenuState({ anchor: event.currentTarget, rowIndex: index });
  };
  const handleclose = () => {
    setMenuState({ anchor: null, rowIndex: null });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [teamManagementData, setTeamManagmentData] = useState([]);

  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    const fetchTeamManagement = async () => {
      try {
        const response = await getTeamManagement();
        const data = response.data?.data;

        const formatted = [
          {
            totalMembers: data.stats.totalMembers,
          },
          {
            totalMembers: data.stats?.dealers,
          },
          {
            totalMembers: data.stats?.virtualAssistants,
          },
          {
            totalMembers: data.stats?.staff,
          },
        ];
        setTeamManagmentData(formatted);
      } catch (error) {
        console.error("Error fetching team management data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamManagement();
  }, []);

  const staticTeam = [
    {
      icon: "/images/admin/overview/total.svg",
      name: "Total Members",
    },
    {
      icon: "/images/admin/overview/active.svg",
      name: "Dealer Count",
    },
    {
      icon: "/images/admin/overview/process.svg",
      name: "Virtual Assistants",
    },
    {
      icon: "/images/admin/overview/schedule.svg",
      name: "Staff",
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getTeamManagement();
        const data = response.data?.data.users || [];

        const formattedData = data.map((user, index) => ({
          id: user.id ?? index,
          member: user.name ?? "N/A", // 👈 matches "member"
          mail: user.email ?? "N/A", // 👈 matches "mail"
          role: user.role ?? "N/A",
          leadAssigned: user.leadsAssigned ?? 0, // 👈 matches "leadAssigned"
          lastLogin: user.lastLogin
            ? new Date(user.lastLogin).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "Never",
          status: user.status ?? "Inactive",
          action: "", // placeholder for action column
        }));

        setAllUserData(formattedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData(); // ✅ no param
  }, []);

  const TeamManagData = [
    {
      icon: "/images/admin/overview/total.svg",
      name: "Total Members",
      qty: "01+",
    },
    {
      icon: "/images/admin/overview/active.svg",
      name: "Dealer Count",
      qty: "04+",
    },
    {
      icon: "/images/admin/overview/process.svg",
      name: "Virtual Assistants",
      qty: "02+",
    },
    {
      icon: "/images/admin/overview/schedule.svg",
      name: "Staff",
      qty: "05+",
    },
  ];

  const TeamHeading = [
    "Member",
    "Mail",
    "Role",
    "Leads Assigned",
    "Status",
    "Action",
  ];

  // ✅ Use this instead of createData + rows
  const TeamData = [
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "Sarah VA",
      email: "tom.brown@email.com",
      role: "VA",
      leads: "8",
      status: "InActive",
    },
    {
      Name: "Mike Reviewer",
      email: "amy.clark@email.com",
      role: "Staff",
      leads: "12",
      status: "Active",
    },
    {
      Name: "Lisa VA",
      email: "david.w@email.com",
      role: "Dealer",
      leads: "2",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
    {
      Name: "John Admin",
      email: "sarah.j@email.com",
      role: "Staff",
      leads: "0",
      status: "Active",
    },
  ];

  const rows = allUserData.map((item) => ({
    member: item.Name,
    mail: item.email,
    role: item.role,
    leadAssigned: item.leads,
    status: item.status,
    actions: "",
  }));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { items } = usePagination({
    count: Math.ceil(allUserData.length / rowsPerPage),
    page: page + 1, // usePagination is 1-based
    onChange: (e, value) => handleChangePage(e, value - 1),
  });

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-standard)",
                fontWeight: 500,
                fontFamily: "var(--font-family-montsercrat)",
                color: "#050F24",
              }}
            >
              Overview
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "var(--icon-color)",
                borderRadius: "8px",
                p: { xs: "5px 15px", md: "10px 25px" },
                textTransform: "capitalize",
              }}
              onClick={() => setOpenDialog(true)}
            >
              Add Team Members
            </Button>
          </Box>

          {staticTeam.map((link, index) => (
            <Grid
              size={{ xs: 12, md: 6, lg: 3 }}
              key={index}
              sx={{ pt: "1rem" }}
            >
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
                      fontSize: "var(--font-sm)",
                      fontWeight: 500,
                      fontFamily: "var(--font-family-montsercrat)",
                      color: "#050F24",
                    }}
                  >
                    {link.name}
                  </Typography>

                  {loading ? (
                    <Skeleton variant="rectangular" width="100%" height={20} />
                  ) : (
                    teamManagementData[index] && (
                      <Typography
                        sx={{
                          fontSize: "var(--font-sm)",
                          fontWeight: 500,
                          fontFamily: "var(--font-family-montserrat)",
                          color: "#6F757E",
                        }}
                      >
                        {teamManagementData[index].totalMembers}+
                      </Typography>
                    )
                  )}
                </Box>
              </Box>
            </Grid>
          ))}

          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              overflowX: { xs: "auto", md: "hidden" },
              backgroundColor: "white",
              boxShadow: "0px 0px 4px 0px #FF8E291A",
              borderRadius: "20px",
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-basic)",
                fontFamily: "var(--font-family-montserrat)",
                color: "#050F24",
                fontWeight: 500,
                mb: 2,
                px: 3.5,
                pt: 2,
              }}
            >
              Team Members
            </Typography>
            <TableContainer
              sx={{
                minHeight: 440,
                maxWidth: { xs: "100%", md: "calc(100vw - 32px)" },
                mb: 6,
              }}
            >
              <Table
                stickyHeader
                sx={{
                  borderCollapse: "separate",
                  borderSpacing: "0 8px",
                  minWidth: { xs: "max-content", md: "unset" },
                }}
              >
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
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

                <TableBody>
                  {loading ? (
                    // ✅ Show Skeleton while loading
                    [...Array(5)].map((_, index) => (
                      <TableRow key={index}>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ border: "none", py: 1.5 }}
                          >
                            <Skeleton
                              variant="rectangular"
                              width="100%"
                              height={20}
                              sx={{ borderRadius: "4px" }}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : allUserData.length > 0 ? (
                    allUserData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => (
                        <TableRow key={row.id || index} hover>
                          {columns.map((column) => (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "status" ? (
                                // same status badge code
                                <Box>{row.status}</Box>
                              ) : column.id === "action" ? (
                                // same action button code
                                <IconButton>...</IconButton>
                              ) : (
                                row[column.id] // ✅ now matches because of fixed mapping
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} align="center">
                        No records found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Menu
              anchorEl={menuState.anchor}
              open={Boolean(menuState.anchor)}
              onClose={handleclose}
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  bgcolor: "var(--white-text)",
                  mt: 1,
                  color: "#8a8f96",
                  borderRadius: "0.5rem",
                  px: 1,
                  py: 0.5,
                  boxShadow: "0px 4px 12px rgba(138, 143, 150, 0.1)",
                },
              }}
            >
              {/* View */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 1,
                  py: 0.5,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f7f7f7", borderRadius: "6px" },
                }}
                onClick={() => {
                  console.log("View clicked", menuState.rowIndex);
                  handleclose();
                }}
              >
                <VisibilityOutlinedIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    color: "var(--icon-color)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "var(--font-sm)",
                    color: "#6F757E",
                    fontWeight: 500,
                    fontFamily: "var(--font-family-montserrat)",
                  }}
                >
                  View
                </Typography>
              </Box>

              {/* Edit */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 1,
                  py: 0.5,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f7f7f7", borderRadius: "6px" },
                }}
                onClick={() => {
                  console.log("Edit clicked", menuState.rowIndex);
                  handleclose();
                }}
              >
                <BorderColorOutlinedIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    color: "var(--icon-color)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "var(--font-sm)",
                    color: "#6F757E",
                    fontWeight: 500,
                    fontFamily: "var(--font-family-montserrat)",
                  }}
                >
                  Edit
                </Typography>
              </Box>

              {/* Delete */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 1,
                  py: 0.5,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f7f7f7", borderRadius: "6px" },
                }}
                onClick={() => {
                  console.log("Delete clicked", menuState.rowIndex);
                  handleclose();
                }}
              >
                <DeleteForeverOutlinedIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    color: "var(--icon-color)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "var(--font-sm)",
                    color: "6F757E",
                    fontWeight: 500,
                    fontFamily: "var(--font-family-montserrat)",
                  }}
                >
                  Delete
                </Typography>
              </Box>
            </Menu>

            {/* ✅ Custom Pagination */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                py: 3,
                px: 2,
              }}
            >
              <nav>
                <List
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    listStyle: "none",
                    p: 1,
                    m: 1,
                  }}
                >
                  {items.map(
                    ({ page, type, selected, disabled, ...item }, index) => {
                      let children = null;

                      if (
                        type === "start-ellipsis" ||
                        type === "end-ellipsis"
                      ) {
                        children = "…";
                      } else if (type === "page") {
                        children = (
                          <button
                            type="button"
                            {...item}
                            style={{ all: "unset" }}
                          >
                            <Box
                              component="span"
                              sx={{
                                bgcolor: selected
                                  ? "var(--icon-color)"
                                  : "var(--white-text)",
                                color: selected ? "white" : "var(--icon-color)",
                                px: 2,
                                py: 1,
                                borderRadius: "8px",
                                border: "1.15px solid #F1F1F1",
                                fontWeight: selected ? "bold" : "normal",
                                cursor: "pointer",
                                transition: "0.2s",
                                "&:hover": {
                                  bgcolor: selected
                                    ? "var(--icon-color)"
                                    : "var(--white-text)",
                                },
                              }}
                            >
                              {page}
                            </Box>
                          </button>
                        );
                      } else if (type === "previous" || type === "next") {
                        children = (
                          <button
                            type="button"
                            {...item}
                            style={{ all: "unset" }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: disabled ? "#CCCCCC" : "#F0A837",
                                fontWeight: "bold",
                                cursor: disabled ? "not-allowed" : "pointer",
                                px: 1,
                              }}
                            >
                              {type === "previous" ? "Prev" : "Next"}
                            </Box>
                          </button>
                        );
                      } else {
                        children = (
                          <button type="button" {...item}>
                            {type}
                          </button>
                        );
                      }

                      return <li key={index}>{children}</li>;
                    }
                  )}
                </List>
              </nav>
            </Box>
          </Paper>

          {/* Dialog for Adding Team Members */}
          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            maxWidth="sm"
            fullWidth
            sx={{
              "& .MuiDialog-paper": {
                backgroundColor: "var(--white-text)",
                p: 1,
                color: "#333",
                borderRadius: "1rem",
              },
            }}
          >
            <DialogContent
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "var(--font-md)",
                      color: "var(--icon-color)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-family-montserrat)",
                    }}
                  >
                    Create New Time Slot
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "var(--font-xs)",
                      color: "#6F757EB2",
                      fontWeight: 500,
                      fontFamily: "var(--font-family-montserrat)",
                    }}
                  >
                    Add a new appointment time slot for customers to book
                  </Typography>
                </Box>

                <Box>
                  <IconButton
                    onClick={() => setOpenDialog(false)}
                    sx={{
                      m: 0,
                      p: 0,
                      color: "#e5e5e5",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#050F24",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* First row with two fields */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        color: "#050F24",
                        fontWeight: 500,
                        fontFamily: "var(--font-family-montserrat)",
                      }}
                    >
                      Full Name
                    </Typography>
                    <TextField
                      placeholder="Enter Full Name"
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E1E1E1",
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        color: "#050F24",
                        fontWeight: 500,
                        fontFamily: "var(--font-family-montserrat)",
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      placeholder="Enter Email Address"
                      size="small"
                      fullWidth
                      type="email"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E1E1E1",
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Second row with two fields */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        color: "#050F24",
                        fontWeight: 500,
                        fontFamily: "var(--font-family-montserrat)",
                      }}
                    >
                      Phone
                    </Typography>
                    <TextField
                      placeholder="Enter Phone Number"
                      size="small"
                      fullWidth
                      type="tel"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E1E1E1",
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        color: "#050F24",
                        fontWeight: 500,
                        fontFamily: "var(--font-family-montserrat)",
                      }}
                    >
                      Role
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      select
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            sx: {
                              minWidth: "calc(100% - 32px) !important",
                              width: "100%",
                              maxHeight: 300,
                            },
                          },
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E1E1E1",
                          borderRadius: "10px",
                        },
                        "& .MuiSelect-select": {
                          width: "100%",
                        },
                      }}
                    >
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="manager">Manager</MenuItem>
                      <MenuItem value="member">Team Member</MenuItem>
                    </TextField>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenDialog(false)}
                sx={{
                  border: " 1px solid #F0A837 ",
                  borderRadius: "8px",
                  color: "var(--icon-color)",
                  p: "6px 18px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => setOpenDialog(true)}
                variant="contained"
                sx={{
                  bgcolor: "#F0A837 ",
                  borderRadius: "8px",
                  color: "var(--white-text)",
                  p: "6px 18px",
                }}
              >
                Add Team Members
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Box>
    </>
  );
}

export default TeamManagment;
