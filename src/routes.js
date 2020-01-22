import React from 'react'
import {Switch, Route} from 'react-router-dom'

//PAGES
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import SignUpSettings from './Components/SignUpSettings/SignUpSettings'
import Preferences from './Components/Preferences/Preferences'
import Swipe from './Components/Swipe/Swipe'
export default (
<Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Register} exact path='/register'/>
    <Route component={SignUpSettings} exact path='/signup-settings'/>
    <Route component={Preferences} exact path='/preferences'/>
    <Route component={Swipe} exact path='/swipe'/>

    {/* <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/> */}

</Switch>
)