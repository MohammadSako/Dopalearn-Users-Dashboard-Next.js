import SideNav from "@/components/dashboard/sidenav";
import { Separator } from "@/components/ui/separator";
import DashboardSkeleton from "@/components/ui/skeletons";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="hidden lg:block">
          <Separator orientation="vertical" />
        </div>
        <div className="flex-grow md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}
