import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SidebarData } from '../data/SidebarData';

import {
    IoMenu,
    IoClose,  
    IoMoonOutline,
    IoSunnyOutline,
} from 'react-icons/io5';

import { CgProfile } from 'react-icons/cg';

const Sidebar = ({ darkMode ,setDarkMode }) => {

    const [open, setOpen] = useState(false);

    const location = useLocation();

    const showSidebar = () => {
        setOpen(!open);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    const changeTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark:text-white text-black fixed outline-none">
            <div className={ open ? "active transition-width w-screen h-16" : "transition-width w-screen h-16" }>
                <ul className="dark:bg-gray-900 bg-gray-200 h-full flex justify-between pl-4 pr-8 py-4">
                    <li className="text-3xl hover:text-blue-700" onClick={showSidebar}>{ open ? <IoClose /> : <IoMenu />}</li>
                    <li className="space-x-4 flex">
                        {SidebarData.map((data, index) => {
                            return (
                                <Link to={data.path}>
                                    <div className={ data.path === location.pathname ? "text-blue-900" : "" } key={index}>
                                    <div className="flex space-x-4 items-center cursor-pointer group" onClick={closeSidebar}>
                                        <div className="text-3xl group-hover:text-blue-700">{data.icon}</div>
                                        <div className={ open ? "text-xl group-hover:text-blue-700" : "hidden"}>{data.title}</div>
                                    </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </li>
                    <div className="space-x-4 flex">
                        <li className="text-3xl" onClick={changeTheme}>{ darkMode ? <IoMoonOutline /> : <IoSunnyOutline /> }</li>
                        <Link to="/signup"><li className="text-3xl"><CgProfile /></li></Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
