import React from "react";
import { Outlet } from "react-router-dom";
import NewIndex from "../Navbar/NewIndex";

function NewServiceInnerContent() {
  return (
    <div className="inner-content">
      <NewIndex />
      <main className="main_content">
        <Outlet />
      </main>
    </div>
  );
}

export default NewServiceInnerContent;
