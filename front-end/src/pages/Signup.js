import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="dark:text-white text-black w-full h-screen flex flex-col justify-center items-center">
            <span className="text-4xl font-bold mb-2">Sign Up</span>
            <div className="w-96 h-96 border px-2">
                <form className="space-y-4 py-2" action="">
                    <div className="flex w-full space-x-4">
                        <div className="w-6/12 h-12 border focus:ring">
                            <input className="w-full h-full outline-none bg-transparent p-2" type="text" placeholder="First Name"/>
                        </div>
                        <div className="w-6/12 h-12 border">
                            <input className="w-full h-full outline-none bg-transparent p-2" type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="w-full h-12 border">
                        <input className="w-full h-full outline-none bg-transparent p-2" type="email" placeholder="Email"/>
                    </div>
                    <div className="w-full h-12 border">
                        <input className="w-full h-full outline-none bg-transparent p-2" type="password" placeholder="Password"/>
                    </div>
                    <div className="w-full h-12 border">
                        <input className="w-full h-full outline-none bg-transparent p-2" type="password" placeholder="Confirm password"/>
                    </div>
                    <button className="w-full h-12 bg-blue-600 hover:bg-blue-500">Sign Up</button>
                </form>
                <div className="my-4 text-right">
                    <span className="mr-2">Already got an account?</span>
                    <Link to="/signin">
                        <span className="text-bold text-blue-600">Sign in!</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
