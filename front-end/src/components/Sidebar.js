import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SidebarData } from '../data/SidebarData';

import {
    IoMenu,
    IoClose,  
} from 'react-icons/io5';

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const location = useLocation();

    const showSidebar = () => {
        setOpen(!open);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <div className="text-white fixed outline-none">
            <div className={ open ? "active transition-width w-64 h-screen" : "transition-width w-14 h-screen" }>
                <ul className="bg-gray-900 h-full space-y-5 flex flex-col pl-3">
                    <li className="text-3xl pt-4 hover:text-blue-700" onClick={showSidebar}>{ open ? <IoClose /> : <IoMenu />}</li>
                    {SidebarData.map((data, index) => {
                        return (
                            <Link to={data.path}>
                                <div className={ data.path === location.pathname ? "text-blue-900" : "" } key={index}>
                                <li className="flex space-x-4 items-center cursor-pointer group" onClick={closeSidebar}>
                                    <div className="text-3xl group-hover:text-blue-700">{data.icon}</div>
                                    <div className={ open ? "text-xl group-hover:text-blue-700" : "hidden"}>{data.title}</div>
                                </li>
                                </div>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
