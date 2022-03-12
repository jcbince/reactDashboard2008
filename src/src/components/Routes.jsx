import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'

import Cart from '../pages/Cart'
import Statistics from '../pages/Statistics'
import Lists from '../pages/Lists'
import Shop from '../pages/Shop'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
           
            <Route path='/cart' component={Cart}/>
            <Route path='/statistics' component={Statistics}/>
            <Route path='/lists' component={Lists}/>
            <Route path='/shop' component={Shop}/>
        </Switch>
    )
}

export default Routes
