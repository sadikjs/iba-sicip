"use client";
import { BookOpen } from "lucide-react";
import { School } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { BookCheck } from "lucide-react";
import { Newspaper } from "lucide-react";
const routes = [
  
  {
    icon: BookOpen,
    label: "All Document",
    href: "/dashboard/all-document",
  },
  {
    icon: School,
    label: "Exam Center",
    href: "/dashboard/exam-center/post",
  },
  {
    icon: Newspaper,
    label: "Seat Plan",
    href: "/dashboard/exam-center/get",
  },
  {
    icon: BookCheck,
    label: "Attendance Sheet",
    href: "/dashboard/exam-center/attendance",
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
