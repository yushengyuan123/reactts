import React from 'react';
import './App.scss';
import Login from './component/Login/Login'
import Home from "./component/home/Home";
// @ts-ignore
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Switch>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Home' component={Home}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
