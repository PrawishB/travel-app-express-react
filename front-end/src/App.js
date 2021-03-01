import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <div className="relative flex">
                <div className="z-50 absolute"><Sidebar /></div>
                <div className="ml-14 z-0 w-screen">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default App;
