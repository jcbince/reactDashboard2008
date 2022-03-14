import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
//             <Route path='/' exact elements={Dashboard}/>
//             <Route path='/customers' elements={Customers}/>
//             <Route path='/products' elements={Products}/>
           
//             <Route path='/cart' elements={Cart}/>
//             <Route path='/statistics' elements={Statistics}/>
//             <Route path='/lists' elements={Lists}/>
//             <Route path='/shop' elements={Shop}/>
//         </Router>
//     )
// }

// export default Routes
