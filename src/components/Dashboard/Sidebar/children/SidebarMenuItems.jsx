import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TbNote } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { BiFolderOpen } from "react-icons/bi";
import { Tooltip } from "antd";

export const MenuItems = () => {
  const location = useLocation();

  return (
    <nav className="sidebar__menu">
      <Tooltip placement="left" title="Notes">
        <Link
          className={`sidebar__item ${
            location.pathname === "/" ? "sidebar__active" : ""
          } `}
          to="/"
        >
          <TbNote />
        </Link>
      </Tooltip>

      <Tooltip placement="left" title="featured">
        <Link
          className={`sidebar__item ${
            location.pathname === "/featured" ? "sidebar__active" : ""
          } `}
          to="/featured"
        >
          <AiOutlineStar />
        </Link>
      </Tooltip>

      <Tooltip placement="left" title="archived">
        <Link
          className={`sidebar__item ${
            location.pathname === "/archived" ? "sidebar__active" : ""
          } `}
          to="/archived"
        >
          <BiFolderOpen />
        </Link>
      </Tooltip>
    </nav>
  );
};
