import React from 'react'
import {Switch, Route} from 'react-router-dom'

//PAGES
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Swipe from './Components/Swipe/Swipe'

export default (
<Switch>
    <Route component={Login} exact path='/'/>
    <Route component={Register} exact path='/register'/>
    <Route component={Swipe} path = '/swipe'/>
    {/* <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/>
    <Route component={Login} exact path='/'/> */}

</Switch>
)