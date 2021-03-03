import React from 'react';

import { IoHeartOutline } from 'react-icons/io5';

const Card = () => {
    return (
        <div className="w-80 h-96 border-1 border-gray-400 bg-white text-black relative rounded-xl shadow-md">
            <button className="text-white text-3xl absolute right-5 top-5"><IoHeartOutline /></button>
            <img className="rounded-xl pointer-events-none" src="https://source.unsplash.com/km74CLco7qs/400x350" alt="img"/>
            <div className="px-4 flex flex-col">
                <span className="text-xl mx-auto font-bold">Mountain near Piburger See</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, consequatur officiis reprehenderit delectus corporis odit voluptate? Aperiam iste natus sequi?</span>
                <span className="mx-auto">See more -></span>
            </div>
        </div>
    )
}

export default Card;
