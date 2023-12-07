import {
  ArrowLeftOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import SidebarMenuItem, {
  type SidebarMenuItemProps,
} from "lotti/components/SidebarMenuItem";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const menuItems: SidebarMenuItemProps[] = [
    { title: "Home", icon: <HomeIcon />, link: "/" },
    { title: "explore", icon: <QuestionMarkCircleIcon />, link: "/explore" },
    { title: "Chats", icon: <ChatBubbleLeftEllipsisIcon />, link: "/chats" },
    { title: "News", icon: <NewspaperIcon />, link: "/news" },
    { title: "Profile", icon: <UserIcon />, link: "/profile  " },
  ];

  return (
    <aside className="h-full w-64" aria-label="Sidebar">
      <div className="h-full overflow-y-auto rounded bg-gray-50 px-6 py-8 dark:bg-gray-800">
        <Link href="/" className={"flex flex-row gap-x-2"}>
          <Image
            width={48}
            height={48}
            src={"/granny-logo.png"}
            alt={"LottiAi"}
          />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Lotti.ai
          </h2>
        </Link>
        <div className=" mt-12 flex flex-col gap-y-2 border-t py-2">
          {menuItems.map((item) => (
            <SidebarMenuItem
              title={item.title}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>
        <div className="mt-2 flex flex-col gap-y-2 border-t py-2">
          <SidebarMenuItem
            title={"Sign out"}
            icon={<ArrowLeftOnRectangleIcon />}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
