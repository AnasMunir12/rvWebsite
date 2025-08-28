import API from "./axios";

export const submitForm = (FormData) => API.post("/rv-leads", FormData);

export const getLeads = (page = 1, limit = 10) =>
  API.get(`/rv-leads?page=${page}&limit=${limit}`);
