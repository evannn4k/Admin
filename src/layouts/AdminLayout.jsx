import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";
import { Toaster } from "sonner";

export default function AdminLayout() {
  return (
    <>
      <Toaster richColors position="top-right"/>
      <div className="flex flex-col h-screen overflow-hidden bg-brand-300">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <main className="flex flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
