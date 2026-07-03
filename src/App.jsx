import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import Project from "./pages/Admin/Project";
import ProjectCreate from "./pages/Admin/ProjectCreate";
import Task from "./pages/Admin/Task";
import TaskAll from "./pages/Admin/TaskAll";
import Activity from "./pages/Admin/Activity";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Admin/Profile";
import Administration from "./pages/Admin/Administration";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/create" element={<ProjectCreate />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/all" element={<TaskAll />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
