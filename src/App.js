import React, { Component } from 'react';
import './App.sass';
import routes from './routes';
import WOW from 'wowjs';

class App extends Component {
	componentDidMount() {
		new WOW.WOW().init();
		console.log('app updated');
	}
	render() {
		return <div className='App'>{routes}</div>;
	}
}

export default App;
