import { Routes, Route } from "react-router-dom";

import { websiteRoutes } from "./routes/websiteRoutes";
import { authRoutes } from "./routes/authRoutes";
import { dashboardRoutes } from "./routes/dashboardRoutes";
import { adminRoutes } from "./routes/adminRoutes";

function App() {
  return (
    <Routes>
      {websiteRoutes}
      {authRoutes}
      {dashboardRoutes}
      {adminRoutes}
    </Routes>
  );
}

export default App;
