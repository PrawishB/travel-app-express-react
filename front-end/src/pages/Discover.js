import React from 'react';

import { IoSearchOutline } from 'react-icons/io5';

import Card from '../components/Card';

const Discover = () => {
    return (
        <div className="w-full">
            <div className="relative">
                <div className="flex flex-col">
                    <div className="bg-transparent w-96 h-12 flex mx-auto mt-10 border-b border-gray-400">
                        <div className="text-3xl flex items-center"><IoSearchOutline /></div>
                        <input className="outline-none w-full h-full p-5 bg-transparent" type="text" placeholder="Search Country, City ..."/>
                    </div>
                    <div className="w-10/12 mx-auto mb-20 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;
