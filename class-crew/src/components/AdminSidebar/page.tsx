"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { phenomena } from "@/app/font";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  {
    name: "MainPage",
    href: "/admin/mainpage",
    icon: LayoutDashboard,
    children: [
      { name: "Course Detail ", href: "/admin/mainpage/course-detail" },
      { name: "Manage Banner ", href: "/admin/mainpage/manage-banner" },
    ],
  },
  {
    name: "CoursePage",
    href: "/admin/coursepage",
    icon: Users,
    children: [
      { name: "Manage Courses", href: "/admin/coursepage/manage-course" },
    ],
  },
  {
    name: "Calender",
    href: "/admin/settings",
    icon: Settings,
    children: [
      { name: "Set Leacture", href: "/admin/calender/set-lect" },
    ],
  },
   {
    name: "Store",
    href: "/admin/store ",
    icon: Settings,
    children: [
      { name: "Details of Store Items ", href: "/admin/store/detail" },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  // Auto-open menu if current route matches its child
  useEffect(() => {
    navItems.forEach((item) => {
      if (item.children?.some((child) => pathname.startsWith(child.href))) {
        setOpenMenus((prev) => ({ ...prev, [item.name]: true }));
      }
    });
  }, [pathname]);

  const toggleMenu = (itemName: string) => {
    setOpenMenus((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  return (
    <aside className="w-64 h-full border-r border-black bg-black text-white flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-between px-6 py-5 border-white">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            className={`text-2xl md:text-3xl font-normal tracking-widest ${phenomena.className}`}
          >
            CLASS
          </motion.span>
          <motion.div className="rounded-md mb-1 flex items-center justify-center shadow-md">
            <Image
              src="/Vector.png"
              alt="Logo"
              width={42}
              height={20}
              className="object-contain"
            />
          </motion.div>
        </Link>
      </div>

      {/* Sidebar Title */}
      <div className="px-6 py-4 border-b border-white">
        <span className={`text-2xl font-bold md:text-3xl tracking-wide`}>
          Admin Panel
        </span>
      </div>

      {/* Nav Section */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              item.children?.some((c) => pathname.startsWith(c.href));
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-md font-medium cursor-pointer transition ${
                    active
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  }`}
                  onClick={() => item.children && toggleMenu(item.name)}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    {item.name}
                  </div>
                  {item.children && (
                    openMenus[item.name] ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )
                  )}
                </div>

                {/* Submenu */}
                {item.children && openMenus[item.name] && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-3 py-2 rounded-md text-sm transition ${
                              childActive
                                ? "bg-white text-black"
                                : "text-gray-300 hover:bg-white hover:text-black"
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white text-sm text-gray-400">
        CLASS CREW ADMIN
      </div>
    </aside>
  );
}
