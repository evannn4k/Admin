import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";

export default function AdminLayout() {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden bg-[#FAFAFA]">
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
