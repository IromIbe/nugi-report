import React from "react";
import { useRouter } from "next/router";
import SideNav from "../sharedComp/sideNav/sideNav";
import { LayoutCont } from "./layout.style";
import SideImg from "../sharedComp/sideImg/sideImg";
// import SideReport from "../sharedComp/side-report/sideReport";

function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;
  const displayPath =
    path === "/dashboard/overview" ||
    path === "/dashboard/profile" ||
    path === "/dashboard/reports" ||
    path === "/dashboard/settings" ||
    path === "/dashboard/notifications" ||
    path === "/dashboard/add_report" ||
    path === "/dashboard/submit";

  const loginPath =
    path === "/" || path === "/change_password" || path === "/success";

  // const sideReport = path === "/dashboard/add_report" || path === "/dashboard/submit";

  return (
    <LayoutCont className=''>
      {displayPath && <SideNav />}
      {loginPath && <SideImg />}

      {children}
    </LayoutCont>
  );
}

export default Layout;
