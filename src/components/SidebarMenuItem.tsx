"use client";

import Link from "next/link";
import React, { useMemo } from "react";

import { cn } from "lotti/util";
import { usePathname } from "next/navigation";

export interface SidebarMenuItemProps {
  title: string;
  icon: React.ReactNode;
  link?: string;
}

const SidebarMenuItem = ({ title, icon, link = "#" }: SidebarMenuItemProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (link !== "/" && pathname === link) {
      return true;
    }
    return link === "/" && pathname === "/";
  }, [pathname, link]);

  return (
    <Link
      href={link}
      className={cn(
        "group flex items-center rounded-lg p-2 text-gray-900 hover:bg-blue-100 dark:text-white dark:hover:bg-blue-700",
        { "bg-blue-50 text-blue-600": isActive },
      )}
    >
      <div className="h-6 w-6">{icon}</div>
      <span className="ms-2">{title}</span>
    </Link>
  );
};

export default SidebarMenuItem;
