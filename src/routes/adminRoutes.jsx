// src/routes/adminRoutes.js
import { Navigate, Route } from "react-router-dom";
import Layout from "../components/admin/dashboard/layout";
import AdminLayout from "../pages/admin/AdminLayout";
import Overview from "../pages/admin/Overview";
import Team from "../pages/admin/Team";
import Slot from "../pages/admin/Slot";
import Lead from "../pages/admin/Lead";
import ProtectedRoute from "../utils/ProtectedRoute";

export const adminRoutes = (
  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Overview />} />
    <Route path="teamManagement" element={<Team />} />
    <Route path="slotManagement" element={<Slot />} />
    <Route path="leadManagement" element={<Lead />} />
  </Route>
);
