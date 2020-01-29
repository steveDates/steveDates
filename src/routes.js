import React from 'react';
import { Switch, Route } from 'react-router-dom';

//PAGES
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SignUpSettings from './Components/SignUpSettings/SignUpSettings';
import EditSignUpSettings from './Components/SignUpSettings/EditSignUpSettings';
import Preferences from './Components/Preferences/Preferences';
import Swipe from './Components/Swipe/Swipe';
import AddPhotos from './Components/AddPhotos/AddPhotos';
import Profile from './Components/Profile/Profile';
import Chat from './Components/Chat/Chat'
import Matches from './Components/Matches/Matches'

export default (
	<Switch>
		<Route component={Login} exact path='/' />
		<Route component={Register} exact path='/register' />
		<Route component={SignUpSettings} exact path='/signup-settings' />
        <Route component={EditSignUpSettings} exact path = '/edit-signup-settings' />
		<Route component={Preferences} exact path='/preferences' />
		<Route component={Swipe} exact path='/swipe' />
		<Route component={AddPhotos} exact path='/add-photos' />
		<Route component={Profile} exact path='/profile' />
		
		<Route component={Chat} exact path='/chat/:chat_id'/>
		<Route component={Matches} exact path='/matches'/>
		
		{/* <Route component={AllChats} exact path='/all-chats'/> */}
	</Switch>
);
