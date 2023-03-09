import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home'
import Cart from '../pages/cart'

const Routers = () => {
    
    return(
        <Router>
            <Switch>
            <Route path='/cart' component={Cart} />
            <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
 }

 export default Routers;