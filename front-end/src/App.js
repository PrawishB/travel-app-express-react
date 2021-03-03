import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Discover from './pages/Discover';
import Saved from './pages/Saved';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {

    const [darkMode, setDarkMode] = useState("true");

    return (
        <div className={ darkMode ? "dark" : ""}>
            <div className="relative flex">
                <div className="absolute z-50"><Sidebar darkMode={darkMode} setDarkMode={setDarkMode} /></div>
                <div className="w-screen h-auto pt-16">
                    <div className="dark:bg-gray-800 bg-gray-100 dark:text-white text-black w-full h-full relative">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/discover" component={Discover} />
                            <Route path="/saved" component={Saved} />
                            <Route path="/signin" component={Signin} />
                            <Route path="/signup" component={Signup} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
