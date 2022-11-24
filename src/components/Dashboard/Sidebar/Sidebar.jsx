import React from "react";
import { MenuItems, SidebarBtn } from "./children";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { sidebarShow } = useSelector(state => state.dashboard);
  return (
    <aside className={`sidebar ${sidebarShow ? "sidebar__show" : ""}`}>
      <SidebarBtn />
      <MenuItems />
    </aside>
  );
};
