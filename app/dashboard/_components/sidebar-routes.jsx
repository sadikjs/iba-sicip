"use client";
import { BarChart } from "lucide-react";
import { BookOpen } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: BarChart,
    label: "Analytics",
    href: "/dashboard",
  },
  {
    icon: BookOpen,
    label: "All Document",
    href: "/dashboard/all-document",
  },
  {
    icon: BookOpen,
    label: "Add Course",
    href: "/dashboard/courses/add",
  },
];

export const SidebarRoutes = () => {
  // const pathname = usePathname();

  // const isTeacherPage = pathname?.includes("/teacher");

  // const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
