import React from 'react'
import {Switch, Route} from 'react-router-dom'

//PAGES
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

export default (
<Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Register} exact path='/register'/>
    {/* <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/> */}

</Switch>
)