import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <div className="relative flex">
                <div className="z-50 absolute"><Sidebar /></div>
                <div className="w-screen h-screen ml-16">
                    <div className="bg-black text-white w-full h-full overflow-hidden relative">
                        <img className="object-cover opacity-40 absolute" src="https://images.unsplash.com/photo-1453373961529-1ab415c544c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1564&q=80" alt="background"/>
                        <div className="">
                            <Switch>
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
