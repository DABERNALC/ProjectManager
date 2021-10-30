import React from "react";
import SideBarStyle from "./SideBarStyle.module.css";
import { RiTeamFill } from "react-icons/ri";
import { BsFolderFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={SideBarStyle.container}>
      <div className={SideBarStyle.leftMenu}>
        <hr></hr>
        <ul className={SideBarStyle.list}>
          <Link style={{ color: "white" }} to="/app/teams">
            <li className={SideBarStyle.ListName}>
              <RiTeamFill className={SideBarStyle.ListIcon} /> Equipos{" "}
            </li>
          </Link>
          <Link style={{ color: "white" }} to="/app/projects">
            <li className={SideBarStyle.ListName}>
              <BsFolderFill className={SideBarStyle.ListIcon} />
              Proyectos
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
