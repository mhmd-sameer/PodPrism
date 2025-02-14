import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
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
                src="./src/assets/control.png"
                className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} 
            />
            <div className="flex gap-x-4 items-center">
                <img 
                    src="./src/assets/Podprism.jpg" 
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} 
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
                            `text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${isActive && 'bg-light-white'}`}
                    >
                        <img src={`./src/assets/${menu.src}.png`} />
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
