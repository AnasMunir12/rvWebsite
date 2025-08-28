import API from "./axios";

export const signupUser = (userData) =>
  API.post("/auth/register-public", userData);

export const loginUser = ({ email, password }) =>
  API.post("/auth/login", { email, password });

export const forgotPassword = (email) =>
  API.post("/auth/forgot-password", { email });

// export const resetPassword = (token, newPassword) =>
//   API.post(`/auth/reset-password/${token}`, { password });
