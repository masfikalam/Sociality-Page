import React from "react";
import "../Styles/Sidebar.css";
import Menus from "./Menus";
import Tabs from "./Tabs";

const Sidebar = () => {
  return (
    <aside className="p-0">
      <h3 className="m-0 p-3 text-center">
        <b>sociality</b>.io
      </h3>

      <div className="d-flex">
        <Tabs />
        <Menus />
      </div>
    </aside>
  );
};

export default Sidebar;
