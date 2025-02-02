import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarClose } from "lucide-react";
import { SidebarData } from "../components/sidebar";
import { useState } from "react";

export default function MenuPage() {
  const [sidebar, setSidebar] = useState(true);
  const changeState = () => setSidebar(!sidebar);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-black z-0">
      <div className="flex space-y-4 text-white bg-black h-screen p-5 pt-8 relative duration-300">
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Button onClick={changeState}>
              <SidebarClose />
            </Button>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
