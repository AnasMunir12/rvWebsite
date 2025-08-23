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
  styled,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import usePagination from "@mui/material/usePagination";
import CloseIcon from "@mui/icons-material/Close";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function SlotManagement() {
  const { items } = usePagination({
    count: 10,
  });

  const [timeSlots, setTimeSlots] = useState([
    {
      slot: "SLOT001",
      Date: "2024-12-20",
      Time: "9:00",
      Duration: "60 Minutes",
      Bookedby: "Amy Clark",
      Status: "Reserved",
    },
    {
      slot: "SLOT0012",
      Date: "2024-12-21",
      Time: "10:00",
      Duration: "30 Minutes",
      Bookedby: "Clark",
      Status: "Reserved",
    },
    {
      slot: "SLOT003",
      Date: "2024-12-22",
      Time: "2:00",
      Duration: "20 Minutes",
      Bookedby: "Amy Clark",
      Status: "Reserved",
    },
    {
      slot: "SLOT004",
      Date: "2024-12-23",
      Time: "8:00",
      Duration: "40 Minutes",
      Bookedby: "Jao Clerk",
      Status: "Reserved",
    },
    {
      slot: "SLOT005",
      Date: "2024-12-24",
      Time: "7:00",
      Duration: "50 Minutes",
      Bookedby: "Amy Clark",
      Status: "Reserved",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newSlot, setNewslot] = useState({
    slot: "",
    Date: " ",
    Time: " ",
    Duration: " ",
    Bookedby: " ",
    Status: " ",
  });

  const handleChange = (e) => {
    setNewslot({
      ...newSlot,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = () => {
    if (
      !newSlot.slot ||
      !newSlot.Date ||
      !newSlot.Time ||
      !newSlot.Duration ||
      !newSlot.Bookedby ||
      !newSlot.Status
    ) {
      alert("Please fill all fields");
      return;
    }
    setTimeSlots([...timeSlots, newSlot]);
    setNewslot({
      slot: "",
      Date: "",
      Time: "",
      Duration: "",
      Bookedby: "",
      Status: "",
    });
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header */}
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "var(--font-md)", md: "var(--font-standard)" },
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
                color: "#050F24",
              }}
            >
              Overview
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpen(true)}
              sx={{
                bgcolor: "var(--icon-color)",
                borderRadius: "8px",
                p: { xs: "5px 10px", md: "15px 25px" },
                textTransform: "capitalize",
              }}
            >
              Create New Slot
            </Button>
          </Box>
        </Grid>

        {/* Card Section */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 0px 4px 0px #FF8E291A",
              px: 3,
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
                Team Members
              </Typography>
              <Button
                variant="contained"
                startIcon={<CalendarMonthOutlinedIcon />}
                sx={{
                  bgcolor: "var(--icon-color)",
                  borderRadius: "8px",
                  p: "15px 25px",
                  textTransform: "capitalize",
                }}
              >
                Select Date Range
              </Button>
            </Box>

            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            > */}
            <Grid container spacing={2}>
              {timeSlots.map((link, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                    xl: 3,
                  }}
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1, // take full available width
                      boxShadow: "0px 4px 4px 0px #0000001A",
                      borderTop: "4px solid #F0A837",
                      borderRadius: "0.625rem",
                      bgcolor: "#D4D4D41A",
                      px: 2,
                      py: 2,
                      mb: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 2,
                      cursor: "pointer",
                    }}
                  >
                    {/* Slot Header */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#050F24",
                          fontSize: "var(--font-md)",
                          fontWeight: 600,
                          fontFamily: "var(--font-family-montserrat)",
                          textTransform: "uppercase",
                        }}
                      >
                        {link.slot}
                      </Typography>
                      <IconButton>
                        <MoreHorizIcon sx={{ color: "#050F24B2" }} />
                      </IconButton>
                    </Box>

                    {/* Date */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{ color: "#00000080", fontSize: "var(--font-sm)" }}
                      >
                        Date
                      </Typography>
                      <Typography
                        sx={{ color: "#050F24", fontSize: "var(--font-md)" }}
                      >
                        {link.Date}
                      </Typography>
                    </Box>

                    {/* Time */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{ color: "#00000080", fontSize: "var(--font-sm)" }}
                      >
                        Time
                      </Typography>
                      <Typography
                        sx={{ color: "#050F24", fontSize: "var(--font-md)" }}
                      >
                        {link.Time}
                      </Typography>
                    </Box>

                    {/* Duration */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{ color: "#00000080", fontSize: "var(--font-sm)" }}
                      >
                        Duration
                      </Typography>
                      <Typography
                        sx={{ color: "#050F24", fontSize: "var(--font-md)" }}
                      >
                        {link.Duration}
                      </Typography>
                    </Box>

                    {/* Booked By */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{ color: "#00000080", fontSize: "var(--font-sm)" }}
                      >
                        Booked By
                      </Typography>
                      <Typography
                        sx={{ color: "#050F24", fontSize: "var(--font-md)" }}
                      >
                        {link.Bookedby}
                      </Typography>
                    </Box>

                    {/* Status */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{ color: "#00000080", fontSize: "var(--font-sm)" }}
                      >
                        Status
                      </Typography>
                      <Typography
                        sx={{
                          color: "#FD6A6A",
                          fontSize: "var(--font-md)",
                          bgcolor: "#FD6A6A33",
                          borderRadius: "0.844rem",
                          p: "0.25rem 0.5rem",
                          gap: "0.625rem",
                        }}
                      >
                        {link.Status}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* </Box> */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: "8rem",
              }}
            >
              <nav>
                <List
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    listStyle: "none",
                    p: 0,
                    m: 0,
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
                        // Page number buttons
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
                        // Prev/Next buttons
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
          </Box>
        </Grid>
      </Grid>

      {/* Dialog for Adding Slot */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "var(--white-text)", // background color
            p: 1,
            color: "#333", // text color
            borderRadius: "1rem", // rounded corners
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
                onClick={() => setOpen(false)}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                color: "#050F24",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
              }}
            >
              Date
            </Typography>
            <TextField
              size="small"
              type="date"
              //   label="Date"
              name="Date"
              value={newSlot.Date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #E1E1E1",
                  borderRadius: "10px",
                },
                "& input[type='date']::-webkit-calendar-picker-indicator": {
                  filter:
                    "invert(62%) sepia(73%) saturate(658%) hue-rotate(356deg) brightness(101%) contrast(101%)",
                  cursor: "pointer",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                color: "#050F24",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
              }}
            >
              Start Time
            </Typography>

            <TextField
              size="small"
              type="time"
              //   label="Time"
              name="Time"
              value={newSlot.Time}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #E1E1E1",
                  borderRadius: "10px",
                },
                "& input[type='time']::-webkit-calendar-picker-indicator": {
                  filter:
                    "invert(62%) sepia(73%) saturate(658%) hue-rotate(356deg) brightness(101%) contrast(101%)",
                  cursor: "pointer",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                color: "#050F24",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
              }}
            >
              End Time
            </Typography>
            <TextField
              size="small"
              type="time"
              //   label="Booked By"
              name="Bookedby"
              value={newSlot.Bookedby}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #E1E1E1",
                  borderRadius: "10px",
                },
                "& input[type='time']::-webkit-calendar-picker-indicator": {
                  filter:
                    "invert(62%) sepia(73%) saturate(658%) hue-rotate(356deg) brightness(101%) contrast(101%)",
                  cursor: "pointer",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-sm)",
                color: "#050F24",
                fontWeight: 500,
                fontFamily: "var(--font-family-montserrat)",
              }}
            >
              Duration
            </Typography>

            <TextField
              size="small"
              //   label="Status"
              name="Status"
              value={newSlot.Status}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #E1E1E1",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
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
            variant="contained"
            onClick={handleCreate}
            sx={{
              bgcolor: "#F0A837 ",
              borderRadius: "8px",
              color: "var(--white-text)",
              p: "6px 18px",
            }}
          >
            Create Slot
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SlotManagement;
