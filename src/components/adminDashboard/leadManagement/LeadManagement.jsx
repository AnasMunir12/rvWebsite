import {
  Box,
  Button,
  DialogActions,
  Grid,
  IconButton,
  TextField,
  Typography,
  DialogContent,
  DialogTitle,
  Dialog,
  InputAdornment,
  Menu,
  MenuItem,
  List,
} from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import usePagination from "@mui/material/usePagination";

const columns = [
  {
    id: "lead",
    label: "Lead ID",
    minWidth: 170,
    align: "left",
  },
  {
    id: "mail",
    label: "Mail",
    minWidth: 100,
    align: "left",
  },
  {
    id: "submitDate",
    label: "Submitted Date",
    minWidth: 170,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "center",
  },
];

function LeadManagement() {
  // Setup pagination hook

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleclick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleclose = () => {
    setAnchor(null);
  };

  const leadData = [
    {
      icon: "/images/admin/overview/1.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/2.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },

    {
      icon: "/images/admin/overview/3.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/4.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/1.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Completed",
    },
    {
      icon: "/images/admin/overview/2.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/3.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/4.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/1.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/2.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/3.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
    {
      icon: "/images/admin/overview/4.svg",
      name: "L-2024",
      mail: "john.smith@email.com",
      submitDate: "23-Nov-25 (9:00)",
      status: "Pending review",
    },
  ];

  const rows = leadData.map((lead) => ({
    lead: { icon: lead.icon, name: lead.name }, // Combined object
    mail: lead.mail,
    submitDate: lead.submitDate,
    status: lead.status,
    actions: "",
  }));

  // Now that rows is defined, we can use it in usePagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { items } = usePagination({
    count: Math.ceil(rows.length / rowsPerPage),
    page: page + 1, // usePagination is 1-based
    onChange: (e, value) => handleChangePage(e, value - 1),
  });

  return (
    <>
      <Box sx={{ width: "100%" }}>
        {/* Header */}
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {/* Card Section */}
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 0px 4px 0px #FF8E291A",
                py: 3,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "var(--font-basic)",
                    fontFamily: "var(--font-family-montserrat)",
                    color: "#050F24",
                    fontWeight: 500,
                    mb: 4,
                  }}
                >
                  All Leads
                </Typography>

                <Box
                  display={"flex"}
                  flexDirection={{ xs: "column", md: "row" }}
                  gap={2}
                >
                  <TextField
                    size="small"
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlinedIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <TuneOutlinedIcon
                            sx={{
                              color: "#F0A837",
                              cursor: "pointer",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        border: "1px solid #E1E1E1",
                        borderRadius: "8px",
                        py: { xs: 0, md: "0.2rem" },
                        px: "0.8rem",
                      },
                    }}
                  >
                    Search
                  </TextField>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      bgcolor: "var(--icon-color)",
                      borderRadius: "8px",
                      p: { xs: "5px 15px", md: "5px 30px" },
                      textTransform: "capitalize",
                      gap: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/admin/leadlogo.svg"
                      sx={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                    Export Leads
                  </Button>
                </Box>
              </Box>
              <Paper
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  boxShadow: "none",
                  overflowX: { xs: "auto", md: "hidden" },
                }}
              >
                <TableContainer
                  sx={{
                    minHeight: 440,
                    maxWidth: { xs: "100%", md: "calc(100vw - 32px)" },
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
                              py: 1.5,
                              px: 3,
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:hover": {
                                backgroundColor: "transparent !important",
                                boxShadow:
                                  "0.83px 14.09px 36.47px 0px #03022912",
                                cursor: "pointer",
                              },
                            }}
                          >
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                sx={{
                                  border: "none",
                                  fontSize: "var(--font-sm)",
                                  fontFamily: "var(--font-family-montserrat)",
                                  color: "#6F757E",
                                  py: 1.5,
                                  "&:hover": {
                                    backgroundColor: "inherit",
                                  },
                                  "&:first-of-type": {
                                    borderTopLeftRadius: "0.518rem",
                                    borderBottomLeftRadius: "0.518rem",
                                  },
                                  "&:last-of-type": {
                                    borderTopRightRadius: "0.518rem",
                                    borderBottomRightRadius: "0.518rem",
                                  },
                                }}
                              >
                                {column.id === "lead" ? (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <img
                                      src={row.lead.icon}
                                      width={25}
                                      height={25}
                                      alt=""
                                    />
                                    <Typography>{row.lead.name}</Typography>
                                  </Box>
                                ) : column.id === "status" ? (
                                  <Box
                                    sx={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: 0.5,
                                      border:
                                        row.status === "Pending review"
                                          ? "0.5px solid #F0A837"
                                          : row.status === "Completed"
                                          ? "0.5px solid #28803D"
                                          : "0.5px solid #ccc",
                                      borderRadius: "5px",
                                      px: 1,
                                      py: 0.5,
                                    }}
                                  >
                                    <ArrowDropDownOutlinedIcon
                                      sx={{
                                        fontSize: "1rem",
                                        color:
                                          row.status === "Pending review"
                                            ? "#F0A837"
                                            : row.status === "Completed"
                                            ? "#28803D"
                                            : "#ccc",
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        color:
                                          row.status === "Pending review"
                                            ? "#F0A837"
                                            : row.status === "Completed"
                                            ? "#28803D"
                                            : "#ccc",
                                        fontSize: "var(--font-sm)",
                                        fontFamily:
                                          "var(--font-family-montserrat)",
                                        fontWeight: 500,
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {row.status}
                                    </Typography>
                                  </Box>
                                ) : column.id === "actions" ? (
                                  <IconButton
                                    onClick={handleclick}
                                    size="small"
                                    sx={{
                                      "&:hover": {
                                        bgcolor: "var(--icon-color)",
                                        color: "black",
                                        borderRadius: "0.5rem",
                                      },
                                    }}
                                  >
                                    <MoreHorizOutlinedIcon />
                                  </IconButton>
                                ) : (
                                  row[column.id]
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                {/* ✅ Custom Pagination */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 3,
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
                        (
                          { page, type, selected, disabled, ...item },
                          index
                        ) => {
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
                                    color: selected
                                      ? "white"
                                      : "var(--icon-color)",
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
                                    cursor: disabled
                                      ? "not-allowed"
                                      : "pointer",
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

              <Menu
                anchorEl={anchor}
                open={open}
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
                    // boxShadow: "0px 4px 12px rgba(138, 143, 150, 0.1)", // custom shadow with #8a8f96
                    bgcolor: "var(--white-text)", // your custom bg
                    mt: 1, // optional spacing
                    color: "#8a8f96",
                    borderRadius: "0.5rem",
                    px: 2,
                  },
                }}
                // MenuListProps={{
                //   disablePadding: true, // remove default padding
                // }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    pr: 2,
                  }}
                >
                  <IconButton sx={{}}>
                    <VisibilityOutlinedIcon
                      sx={{
                        width: "1rem",
                        heigh: "1rem",
                        color: "var(--icon-color)",
                      }}
                    />
                  </IconButton>
                  <MenuItem
                    onClick={handleclose}
                    sx={{
                      m: 0,
                      p: 0,
                      fontSize: "var(--font-sm)",
                      color: "#6F757E",
                      fontWeight: 500,
                      fontFamily: "var(--font-family-montserrat)",
                    }}
                  >
                    View
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LeadManagement;
