// src/routes/dashboardRoutes.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Overview from "../pages/dashboard/OverviewLayout";
import Documents from "../pages/dashboard/DocumentLayout";
import RVInfo from "../pages/dashboard/RvinfoLayout";
import Appointment from "../pages/dashboard/ApointmentLayout";
import ProtectedRoute from "../utils/ProtectedRoute";

// Dashboard Routes with Layout
export const dashboardRoutes = (
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Overview />} />
    <Route path="documents" element={<Documents />} />
    <Route path="rvinformation" element={<RVInfo />} /> {/* lowercase */}
    <Route path="appointment" element={<Appointment />} /> {/* typo fix */}
  </Route>
);
