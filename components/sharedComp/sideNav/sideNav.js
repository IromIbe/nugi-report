import React, { useState } from "react";
import { SideNavCont, Color } from "./sideNav.style";
import Image from "next/image";
import {
  Profile,
  Notification,
  Logout,
  Setting,
  Report,
  Overview,
} from "./icon";
import Link from "next/link";

function SideNav() {
  const [activePage, setActivePage] = useState("Overview");
  const navItems = [
    {
      name: "Overview",
      icon: <Overview color={activePage === "Overview"} />,
      link: "/dashboard/overview",
    },
    {
      name: "My Profile",
      icon: <Profile color={activePage === "My Profile"} />,
      link: "/dashboard/profile",
    },
    {
      name: "My Reports",
      icon: <Report color={activePage === "My Reports"} />,
      link: "/dashboard/reports",
    },
    {
      name: "Settings",
      icon: <Setting color={activePage === "Settings"} />,
      link: "/dashboard/settings",
    },
    {
      name: "Notifications",
      icon: <Notification color={activePage === "Notifications"} />,
      link: "/dashboard/notifications",
    },
    {
      name: "Logout",
      icon: <Logout color={activePage === "Logout"} />,
      link: "/",
    },
  ];
  console.log(navItems.length > 4);
  const topLinks = navItems.slice(0, 5);
  const bottomLinks = navItems.slice(5, 6);

  const handleClick = (name) => setActivePage(name);
  return (
    <SideNavCont>
      <div className='links flex flex-col justify-between h-full pt-11 pl-0.5 sm:pl-1 md:pl-2 lg:pl-4'>
        <div className='sm:pl-1 md:pl-2 lg:pl-3'>
          {topLinks.map((navLink, idx) => (
            <>
              <div
                key={idx}
                className='nav-link flex  items-center py-4 cursor-pointer'
                onClick={() => handleClick(navLink.name)}
              >
                {navLink.icon}
                <Link href={navLink.link}>
                  <Color
                    className='sm:pl-1 md:pl-2 lg:pl-3  sm:text-xs md:text-sm lg:text-tiny text-xs'
                    active={activePage === navLink.name}
                  >
                    {" "}
                    {navLink.name}
                  </Color>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div className='pb-12 sm:pl-1 md:pl-2 lg:pl-3'>
          {bottomLinks.map((navLink, idx) => (
            <>
              <div
                key={idx}
                className='nav-link flex  items-center py-3 cursor-pointer'
                onClick={() => handleClick(navLink.name)}
              >
                {navLink.icon}
                <Link href={navLink.link}>
                  <Color
                    className='sm:pl-1 md:pl-2 lg:pl-3 sm:text-xs md:text-sm text-xs'
                    active={activePage === navLink.name}
                  >
                    {" "}
                    {navLink.name}
                  </Color>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </SideNavCont>
  );
}

export default SideNav;
