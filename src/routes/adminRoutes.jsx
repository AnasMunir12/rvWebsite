// src/routes/adminRoutes.js
import { Navigate, Route } from "react-router-dom";
import Layout from "../components/admin/dashboard/layout";
import AdminLayout from "../pages/admin/AdminLayout";
import Overview from "../pages/admin/Overview";
import Team from "../pages/admin/Team";
import Slot from "../pages/admin/Slot";
import Lead from "../pages/admin/Lead";

export const adminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Overview />} />
    <Route path="teamManagement" element={<Team />} />
    <Route path="slotManagement" element={<Slot />} />
    <Route path="leadManagement" element={<Lead />} />
  </Route>
);
