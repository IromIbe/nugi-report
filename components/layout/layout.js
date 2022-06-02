import React from "react";
import { useRouter } from "next/router";
import SideNav from "../sharedComp/sideNav/sideNav";
import { LayoutCont } from "./layout.style";

function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;
  const displayPath =
    path === "/dashboard/overview" ||
    path === "/dashboard/profile" ||
    path === "/dashboard/reports" ||
    path === "/dashboard/settings" ||
    path === "/dashboard/notifications";

  return (
    <LayoutCont className=''>
      {displayPath && <SideNav />}
      {children}
    </LayoutCont>
  );
}

export default Layout;
