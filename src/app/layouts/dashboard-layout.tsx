import { Outlet, Link, useLocation } from "react-router";
import { Brain, LayoutDashboard, Dumbbell, Calendar, Target, MessageSquare, BarChart3 } from "lucide-react";
import { cn } from "../components/ui/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/app" },
  { icon: Dumbbell, label: "Exercises", path: "/app/exercises" },
  { icon: Calendar, label: "Routine", path: "/app/routine" },
  { icon: Target, label: "Motivation", path: "/app/motivation" },
  { icon: MessageSquare, label: "AI Coach", path: "/app/ai-coach" },
  { icon: BarChart3, label: "Summary", path: "/app/summary" },
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link to="/app" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1E3A8A] rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#1F2937]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              AXEN
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                      isActive
                        ? "bg-[#1E3A8A] text-white"
                        : "text-[#6B7280] hover:bg-[#F3F4F6]"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-[#34D399] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-[#1F2937]">Athlete</p>
              <p className="text-sm text-[#6B7280]">athlete@axen.app</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
