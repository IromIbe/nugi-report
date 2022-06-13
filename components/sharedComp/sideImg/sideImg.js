/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SideImgCont } from "./sideImg.style";
function SideImg({ width }) {
  return (
    <SideImgCont>
      <img src='/assets/logo.svg' className='logo' alt='' />

      <h1>
        REPORT <br />
        MANAGEMENT <br />
        SYSTEM
      </h1>
    </SideImgCont>
  );
}

export default SideImg;
