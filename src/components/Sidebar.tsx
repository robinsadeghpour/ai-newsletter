import React from 'react';
import {
  ArrowLeftOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon, HomeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import SidebarMenuItem, {type SidebarMenuItemProps} from "lotti/components/SidebarMenuItem";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const menuItems: SidebarMenuItemProps[] = [
    {title: "Home", icon: <HomeIcon/>, link: "/"},
    {title: "Explore", icon: <QuestionMarkCircleIcon/>},
    {title: "Chats", icon: <ChatBubbleLeftEllipsisIcon/>},
    {title: "News", icon: <NewspaperIcon/>, link: "/news"},
    {title: "Profile", icon: <UserIcon/>},
  ]

  return (
    <aside className="w-64 h-full" aria-label="Sidebar">
      <div className="overflow-y-auto h-full py-8 px-6 bg-gray-50 rounded dark:bg-gray-800">
        <Link href="/" className={"flex flex-row gap-x-2"}>
          <Image width={48} height={48} src={"/granny-logo.png"} alt={"LottiAi"}/>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Lotti.ai</h2>
        </Link>
        <div className=" flex flex-col gap-y-2 border-t mt-12 py-2">
          {menuItems.map(item =>
            (<SidebarMenuItem title={item.title} icon={item.icon} link={item.link}/>)
          )}
        </div>
        <div className="flex flex-col gap-y-2 border-t mt-2 py-2">
          <SidebarMenuItem title={"Sign out"} icon={<ArrowLeftOnRectangleIcon/>}/>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
