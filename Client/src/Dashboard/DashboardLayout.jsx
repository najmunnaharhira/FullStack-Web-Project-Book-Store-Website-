import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <div>
        <SideBar />
      </div>
      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
