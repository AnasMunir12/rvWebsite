// src/routes/authRoutes.js
import { Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Forgot from "../pages/auth/Forgot";

export const authRoutes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgot" element={<Forgot />} />
  </>
);
