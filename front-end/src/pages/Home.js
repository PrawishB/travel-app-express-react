import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
    return (
        <div className="w-full h-screen">
            <div className="relative flex flex-col justify-center items-center h-full">
                <div className="flex flex-col">
                    <span className="text-3xl">Discover and travel the whole world</span>
                    <span className="text-3xl">in one place</span>
                    <span>- Find out all about your new vacation</span>
                    <Link to="/discover">
                        <button className="bg-blue-600 mt-5 w-32 h-10 flex justify-center items-center space-x-2 rounded">
                            <span>Go now</span>
                            <div className="text-2xl items-center"><AiOutlineArrowRight /></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
