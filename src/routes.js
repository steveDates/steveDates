import React from 'react'
import {Switch, Route} from 'react-router-dom'

//PAGES
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import SignUpSettings from './Components/SignUpSettings/SignUpSettings'

export default (
<Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Register} path='/register'/>
    <Route component={SignUpSettings} path='/signup-settings'/>
    {/* <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/> */}

</Switch>
)