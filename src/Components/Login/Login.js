import React from 'react';
import './Login.sass';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import google_logo from '../../img/google.png';
const Login = () => {
	return (
		<div className='Login'>
			<div className='container Login-container'>
				<div className='img-container'>
					<img className='logo' src={logo} alt='' />
				</div>
				<div className='input-container'>
					<i className='far fa-user'></i>
					<input type='text' placeholder='Email...' />
				</div>
				<div className='input-container'>
					<i className='fas fa-unlock-alt'></i>
					<input type='password' placeholder='Password ' />
				</div>
				<button className='primary-btn'>Login</button>
				<div className='button-container'>
					<div className='social-btn google-btn'><img src={google_logo} alt="google logo"/></div>
					<div className='social-btn fb-btn'><i className="fab fa-facebook-f"></i></div>
				</div>
				<div className='login-footer'>
					<p>Forgot Password?</p>
					<p>
						Have not an account yet? <Link to='/register'>Register</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
