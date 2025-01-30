import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome size={24} />,
    cName: "nav-text",
  },

  {
    title: "Search",
    path: "/",
    icon: <FaIcons.FaSearch size={24} />,
    cName: "nav-text",
  },
  {
    title: "Create Playlist",
    path: "/",
    icon: <FaIcons.FaPlusSquare size={24} />,
    cName: "nav-text",
  },
  {
    title: "Liked Songs",
    path: "/",
    icon: <FaIcons.FaHeart size={24} />,
    cName: "nav-text",
  },
];
