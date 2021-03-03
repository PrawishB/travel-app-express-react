import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="dark:text-white text-black w-full h-screen flex flex-col justify-center items-center">
            <span className="text-4xl font-bold mb-2">Sign In</span>
            <div className="w-96 border px-2">
                <form className="space-y-4 py-2" action="">
                    <div className="w-full h-12 border">
                        <input className="w-full h-full outline-none bg-transparent p-2" type="email" placeholder="Email"/>
                    </div>
                    <div className="w-full h-12 border">
                        <input className="w-full h-full outline-none bg-transparent p-2" type="password" placeholder="Password"/>
                    </div>
                    <button className="w-full h-12 bg-blue-600 hover:bg-blue-500">Sign Up</button>
                </form>
                <div className="my-4 text-right">
                    <span className="mr-2">Don't have an account?</span>
                    <Link to="/signup">
                        <span className="text-bold text-blue-600">Sign up!</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;
