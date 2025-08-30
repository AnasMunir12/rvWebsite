import {
  Box,
  Button,
  DialogActions,
  Grid,
  IconButton,
  TextField,
  Typography,
  DialogContent,
  Dialog,
  styled,
  Skeleton,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import usePagination from "@mui/material/usePagination";
import CloseIcon from "@mui/icons-material/Close";
import { createSlot, getSlotManagement } from "../../../serviceApi/fieldsApi";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function SlotManagement() {
  const [slotData, setSlotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const rowsPerPage = 9;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);

  const { items } = usePagination({
    count: totalPages,
    page: page + 1,
  });

  const durationOptions = [
    { value: 15, label: "15 Minutes" },
    { value: 30, label: "30 Minutes" },
    { value: 45, label: "45 Minutes" },
    { value: 60, label: "60 Minutes" },
    { value: 90, label: "90 Minutes" },
    { value: 120, label: "120 Minutes" },
  ];

  const [open, setOpen] = useState(false);
  const [newSlot, setNewSlot] = useState({
    date: "",
    startTime: "",
    endTime: "",
    duration: "",
  });

  // Get Slot Details
  useEffect(() => {
    const fetchslotApi = async () => {
      try {
        setLoading(true);
        const response = await getSlotManagement(page + 1, rowsPerPage);
        const slots = response.data.data.slots;

        const formattedSlots = slots.map((slot, index) => ({
          slot: `SLOT${index + 1 + page * rowsPerPage}`,
          Date: slot.date,
          Time: ` ${slot.startTime} - ${slot.endTime} `,
          Duration: slot.duration ? `${slot.duration} Minutes` : "N/A",
          Bookedby: slot.bookedBy || "Not Booked",
          Status: slot.isBooked ? "Reserved" : "Available",
        }));

        setSlotData(formattedSlots);
        setTotalPages(response.data.data.totalPages);
      } catch (error) {
        console.log("Error fetching slots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchslotApi();
  }, [page, rowsPerPage]);

  const handlePageChange = (newPage) => {
    setPage(newPage - 1); // your backend page starts from 1
  };

  const handleChange = (e) => {
    setNewSlot({
      ...newSlot,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // ✅ Validate required fields
      if (
        !newSlot.date ||
        !newSlot.startTime ||
        !newSlot.endTime ||
        !newSlot.duration
      ) {
        alert("Please fill all fields");
        return;
      }

      // ✅ Prepare payload for backend
      const payload = {
        date: newSlot.date,
        startTime: newSlot.startTime, // keep separate for backend
        endTime: newSlot.endTime, // keep separate for backend
        duration: newSlot.duration,
      };

      // ✅ Create new slot
      const res = await createSlot(payload);
      console.log("✅ Slot created:", res.data);
      alert("Slot Created Successfully!");
      setOpen(false);

      // ✅ Refresh slots after creating new one
      setLoading(true);
      const response = await getSlotManagement(page + 1, rowsPerPage);
      const slots = response.data.data.slots;

      const formattedSlots = slots.map((slot, index) => {
        return {
          slot: `SLOT${index + 1 + page * rowsPerPage}`,
          Date: slot.date,
          // ✅ Merge startTime and endTime only for display
          Time:
            slot.startTime && slot.endTime
              ? `${slot.startTime} - ${slot.endTime}`
              : "N/A",
          Duration: slot.duration ? slot.duration : "N/A",
          // Bookedby: slot.bookedBy || "Not Booked",
          // Status: slot.isBooked ? "Reserved" : "Available",
        };
      });

      setSlotData(formattedSlots);
    } catch (error) {
      console.error("❌ Error creating slot:", error);
      alert("Error creating slot. Please try again.");
    } finally {
      setLoading(false);
    }
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
                p: { xs: "5px 10px", md: "10px 20px" },
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
              px: 1.5,
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
                Time Slots
              </Typography>
              <Button
                variant="contained"
                startIcon={<CalendarMonthOutlinedIcon />}
                sx={{
                  bgcolor: "var(--icon-color)",
                  borderRadius: "8px",
                  p: "10px 15px",
                  textTransform: "capitalize",
                }}
              >
                Select Date Range
              </Button>
            </Box>

            <Grid container spacing={2}>
              {loading
                ? Array.from({ length: rowsPerPage }).map((_, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                      <Box
                        sx={{
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
                          height: "180px",
                        }}
                      >
                        <Skeleton variant="text" width="40%" height={30} />
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="30%" />
                      </Box>
                    </Grid>
                  ))
                : slotData.map((link, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                      <Box
                        sx={{
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
                          minHeight: "180px",
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
                        </Box>

                        {/* Date */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#00000080",
                              fontSize: "var(--font-sm)",
                            }}
                          >
                            Date
                          </Typography>
                          <Typography
                            sx={{
                              color: "#050F24",
                              fontSize: "var(--font-md)",
                            }}
                          >
                            {link.Date}
                          </Typography>
                        </Box>

                        {/* Time */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#00000080",
                              fontSize: "var(--font-sm)",
                            }}
                          >
                            Time
                          </Typography>
                          <Typography
                            sx={{
                              color: "#050F24",
                              fontSize: "var(--font-md)",
                            }}
                          >
                            {link.Time}
                          </Typography>
                        </Box>

                        {/* Duration */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#00000080",
                              fontSize: "var(--font-sm)",
                            }}
                          >
                            Duration
                          </Typography>
                          <Typography
                            sx={{
                              color: "#050F24",
                              fontSize: "var(--font-md)",
                            }}
                          >
                            {link.Duration}
                          </Typography>
                        </Box>

                        {/* Booked By */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#00000080",
                              fontSize: "var(--font-sm)",
                            }}
                          >
                            Booked By
                          </Typography>
                          <Typography
                            sx={{
                              color: "#050F24",
                              fontSize: "var(--font-md)",
                            }}
                          >
                            {link.Bookedby}
                          </Typography>
                        </Box>

                        {/* Status */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#00000080",
                              fontSize: "var(--font-sm)",
                            }}
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
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
                            onClick={() => handlePageChange(page)}
                            style={{ all: "unset" }}
                            disabled={disabled || loading}
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
                                cursor:
                                  disabled || loading
                                    ? "not-allowed"
                                    : "pointer",
                                opacity: disabled || loading ? 0.5 : 1,
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
                            disabled={disabled || loading}
                          >
                            <Box
                              component="span"
                              sx={{
                                color:
                                  disabled || loading ? "#CCCCCC" : "#F0A837",
                                fontWeight: "bold",
                                cursor:
                                  disabled || loading
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
            backgroundColor: "var(--white-text)",
            p: 1,
            color: "#333",
            borderRadius: "1rem",
          },
        }}
      >
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 0 }}
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

          {/* Date */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
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
              name="date"
              value={newSlot.date}
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

          {/* Start Time */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
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
              name="startTime"
              value={newSlot.startTime}
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

          {/* End Time */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
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
              name="endTime"
              value={newSlot.endTime}
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

          {/* Duration */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
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
              select
              size="small"
              name="duration"
              value={newSlot.duration}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  PaperProps: {
                    sx: {
                      maxHeight: 150,
                      overflowX: "auto",
                      "& .MuiMenuItem-root": {
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "#ffedd5",
                          color: "var(--bg-text)",
                        },
                        "&.Mui-selected": {
                          backgroundColor: "var(--icon-color) !important",
                          color: "var(--white-text)",
                        },
                      },
                    },
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #E1E1E1",
                  borderRadius: "10px",
                  "&:hover fieldset": {
                    borderColor: "var(--icon-color)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--icon-color)",
                  },
                },
              }}
            >
              {durationOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
            onClick={handleSubmit}
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
