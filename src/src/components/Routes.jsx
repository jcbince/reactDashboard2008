import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const Routes = () => {
    return (
        <Router>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Router>
    )
}

export default Routes

