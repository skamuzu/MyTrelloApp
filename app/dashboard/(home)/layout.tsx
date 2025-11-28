import { SidebarProvider } from "@/components/ui/sidebar";
import MainDashboardSidebar from "../_components/main-dashboard-sidebar";
import MainDashboardNavbar from "../_components/main-dashboard-navbar";

export default function MainDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <MainDashboardSidebar />
        <div className="w-full">
          <MainDashboardNavbar />
          {children}
        </div>
      </SidebarProvider>
    </>
  );
}
