import React from 'react';
import './Register.sass';
import google_logo from '../../img/google.png';
import { Link, withRouter } from 'react-router-dom';
const Register = (props) => {
    const handleRegister = () => {
        props.history.push('/signup-settings')
    };
    console.log('props from setting', props )
	return (
		<div className='Register'>
			<Link to='/'>
				<i className='back-arrow fas fa-angle-left'></i>
			</Link>
			<div className='container Register-container'>
				<h1 className='Register-title'>Register</h1>
				<div className='input-container'>
					<i className='far fa-envelope'></i>
					<input type='text' placeholder='Email...' />
				</div>
				<div className='input-container'>
					<i className='fas fa-unlock-alt'></i>
					<input type='password' placeholder='Password...' />
				</div>
				<button className='Register-btn primary-btn' onClick={handleRegister}>Register</button>
				<p>Or register with</p>
				<div className='button-container'>
					<div className='social-btn google-btn'>
						<img src={google_logo} alt='google logo' />
					</div>
					<div className='social-btn fb-btn'>
						<i className='fab fa-facebook-f'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Register);
