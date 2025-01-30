import {
  Bell,
  LogOut,
  MenuIcon,
  ChevronsLeft,
  User,
  LogIn,
  User2Icon,
  Settings,
} from "lucide-react";
import { useAuth } from "../authProvider";
import { Button } from "./button";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { SidebarData } from "@/features/sidebar-menu/components/sidebar";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutSession = () => {
    handleLogout;
    navigate("/logout");
  };

  const handlePerfil = () => {
    navigate("/profile");
  };

  const handlelogin = () => {
    navigate("/login");
  };
  {
    /*For the avatar initials*/
  }

  const user_name = localStorage.getItem("user_name");

  return (
    <div className="flex">
      <div>
        <nav className="bg-black backdrop-filter backdrop-blur-sm bg-opacity-100 text-white w-full text-bold fixed top-0 left-0 z-10">
          <div className="container space-x-2 mx-auto flex justify-between ">
            <div className="flex justify-start fixed top-0 ">
              {sidebar ? (
                <>
                  <aside className="fixed top-0 left-0 w-72 bg-black backdrop-filter backdrop-blur-sm bg-opacity-100 z-0">
                    <div className="text-white h-screen p-3 pt-3 relative duration-300">
                      <ul className=" ">
                        <li>
                          <ChevronsLeft
                            className="top-0 left-0 text-white w-7 h-7"
                            onClick={showSidebar}
                          />
                        </li>
                        <br></br>
                        {SidebarData.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                <div className="flex flex-row space-x-3 mt-4 mb-4">
                                  {" "}
                                  {item.icon}
                                  <span>{item.title}</span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>
                </>
              ) : (
                <>
                  <aside className="fixed top-0 left-0 w-15 bg-black z-0">
                    <div className="flex space-y-4 text-white h-screen p-3 pt-3 relative duration-300 z-0">
                      <ul className="flex-col space-y-4 w-7 h-7">
                        <li>
                          <MenuIcon
                            className="top-0 left-0 text-white"
                            onClick={showSidebar}
                          />
                        </li>
                        <br></br>
                        {SidebarData.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>{item.icon}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>
                </>
              )}
            </div>
            <div className="flex flex-row space-x-4 text-white ml-3 mr-3">
              <div className="px-4">
                <a href="/home">
                  <span className="absolute ml-10 mt-2 text-1xl text-muted-foreground transition-colors hover:text-foreground text-bold">
                    Playlists
                  </span>
                </a>
              </div>
              <div className="px-12">
                <a href="/home">
                  <span className="absolute ml-10 mt-2 text-1xl text-muted-foreground transition-colors hover:text-foreground text-bold">
                    Artists
                  </span>
                </a>
              </div>

              <div className="px-2">
                <a href="/home">
                  <span className="absolute ml-10 mt-2 text-1xl text-muted-foreground transition-colors hover:text-foreground text-bold">
                    Albums
                  </span>
                </a>
              </div>
            </div>

            <div className="flex space-x-4 text-white">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 bg-gray-900 justify-start">
                  <p className="items-center justify-center p-6 text-center text-sm text-muted-foreground">
                    No hay notificaciones
                  </p>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 bg-gray-900 justify-start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Button
                        className="w-full text-left justify-start"
                        onClick={handlePerfil}
                      >
                        <User className="mr-3 h-4 w-4 justify-start" />
                        <span className="text-md justify-start">perfil</span>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button
                        className="w-full text-left justify-start"
                        onClick={handlelogin}
                      >
                        <LogIn className="mr-3 h-4 w-4" />
                        <span className="text-md">login</span>
                      </Button>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Button
                        className="w-full text-left justify-start"
                        onClick={handleLogoutSession}
                      >
                        <LogOut className="mr-3 h-4 w-4" />
                        <span className="text-md">Cerrar sesión</span>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Avatar className="mt-2 h-6 w-6 rounded-full object-cover shadow-md bg-gray-100 ">
                <AvatarFallback className="text-black font-semibold ">
                  <User2Icon />
                </AvatarFallback>

                {/* <AvatarImage
              className="gap-10px mb-0.5 h-20 w-20 rounded-full object-cover shadow-md"
              src={
                avatar ||
                "https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo-thumbnail.png"
              }
            />*/}
                {/*Just in case of avatar was not an image*/}
              </Avatar>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
