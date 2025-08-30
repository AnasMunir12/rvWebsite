import API from "./axios";

export const submitForm = (FormData) => API.post("/rv-leads", FormData);

export const getLeads = (page = 1, limit = 10) =>
  API.get(`/rv-leads?page=${page}&limit=${limit}`);

export const getQuickAction = () => API.get("/rv-leads/quick-actions");

export const getRecentLeads = () => API.get("/rv-leads/recent");

export const getTotalLead = () => API.get("/rv-leads/stats");

export const getStatistic = () => API.get("/rv-leads/monthly");

export const getTeamManagement = () => API.get("/users/all");

export const getSlotManagement = (page, limit) =>
  API.get(`/slots/available?page=${page}&limit=${limit}`);

export const createSlot = (slotData) => API.post("/slots/create", slotData);
