import SideNav from "@/app/ui/sidenav/page"
import Dashboard from "@/app/ui/dashboard/page"

export default function Home() {
  return (
      <main className="flex h-screen">
          <SideNav />
          <Dashboard />
      </main>
  );
}
