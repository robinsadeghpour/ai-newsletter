"use client"

import React, {useMemo} from 'react';
import Link from "next/link";

import {cn} from "lotti/util";
import {usePathname} from 'next/navigation';

export interface SidebarMenuItemProps {
  title: string
  icon: React.ReactNode,
  link?: string,
}

const SidebarMenuItem = ({title, icon, link = "#"}: SidebarMenuItemProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => pathname.includes(link), [pathname, link]);

  return (
    <Link href={link}
          className={cn("flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group", {"text-blue-600 bg-blue-50": isActive})}>
      <div className="w-6 h-6">
        {icon}
      </div>
      <span className="ms-2">{title}</span>
    </Link>
  );
};

export default SidebarMenuItem;