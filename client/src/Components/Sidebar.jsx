import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import control from '../assets/control.png';
import Podprism from '../assets/Podprism.jpg';

// Static icon imports
import dashboard from '../assets/dashboard.png';
import profile from '../assets/profile.png';
import fav from '../assets/fav.png';
import upload from '../assets/upload.png';
import logout from '../assets/logout.png';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // Map icon name to imported image
  const iconMap = {
    dashboard,
    profile,
    fav,
    upload,
    logout,
  };

  const Menus = [
    { title: "Dashboard", src: "dashboard", path: "/dashboard" },
    { title: "Profile", src: "profile", path: "/profile" },
    { title: "Favourites", src: "fav", path: "/favourites", gap: true },
    { title: "Upload", src: "upload", path: "/upload" },
    { title: "Logout", src: "logout", path: "/login" },
  ];

  return (
    <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
      <img
        src={control}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="Toggle Sidebar"
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={Podprism}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          alt="Logo"
        />
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
          PodPrism
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <NavLink
            to={menu.path}
            key={index}
            className={({ isActive }) =>
              `text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${isActive ? "bg-light-white" : ""}`
            }
          >
            <img src={iconMap[menu.src]} alt={menu.title} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
