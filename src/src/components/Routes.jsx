import React from 'react'

import { Route } from 'react-router'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'


const Routes = () => {
  return (
	<Switch>
		<Route path='/' component={Dashboard}/>
		<Route path='/customers' component={Customers}/>
	</Switch>
  )
}

export default Routes
