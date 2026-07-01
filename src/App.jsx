import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
