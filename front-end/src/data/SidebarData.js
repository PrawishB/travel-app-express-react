import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';

import { IoGridOutline, IoHeartOutline } from 'react-icons/io5';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiOutlineHome />
    },
    {
        title: "Home",
        path: "/discover",
        icon: <IoGridOutline />
    },
    {
        title: "Home",
        path: "/saved",
        icon: <IoHeartOutline />
    },
]