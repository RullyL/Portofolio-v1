import React, { useState } from "react";
import {
  UserOutlined,
  ExperimentOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

interface SideBarProps {
  setCurrentPage: (page: string) => void;
}

export default function Sidebar({ setCurrentPage }: SideBarProps) {
  const [activePage, setActivePage] = useState("About");

  const items = [
    { name: "About", icon: <UserOutlined />, page: "About" },
    { name: "EXP", icon: <ExperimentOutlined />, page: "EXP" },
    { name: "Skills", icon: <AppstoreOutlined />, page: "Skills" },
    { name: "Contact", icon: <PhoneOutlined />, page: "Contact" },
  ];

  const handleClick = (page: string) => {
    setActivePage(page);
    setCurrentPage(page);
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rounded-lg md:duration-0 duration-1000 flex flex-col bg-[#CDE8E5] dark:bg-[#1e293b] px-2 shadow-xl shadow-gray-600 dark:shadow-black fixed bottom-0 left-0 right-0 lg:static h-[85px] lg:h-[422px] lg:w-[98px] transition-colors duration-300">
      <div
        className="flex gap-[40px] py-3 justify-between flex-row lg:flex-col px-1 lg:my-0"
        onClick={toTop}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.page)}
            className={`transition-all duration-200 w-[65px] h-[65px] lg:w-[76px] rounded-full lg:rounded-lg cursor-pointer flex flex-col justify-center items-center gap-1 lg:h-[70px]
              ${
                activePage === item.page
                  ? "text-black dark:text-white bg-white dark:bg-[#334155] shadow-lg shadow-gray-500 dark:shadow-black"
                  : "hover:-translate-y-4 hover:text-white hover:bg-[#689b9b] hover:shadow-lg hover:shadow-gray-500 bg-[#7AB2B2] dark:bg-[#334155] dark:hover:bg-[#47687a]"
              }`}
          >
            {item.icon}
            <h3 className="text-xs lg:text-base hidden lg:block">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
