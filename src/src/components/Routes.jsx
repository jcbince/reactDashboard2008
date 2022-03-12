import React from 'react'

import {
	BrowserRouter as Router,
	
	Route,
	
  } from "react-router-dom";

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Router>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Router>
    )
}

export default Routes
