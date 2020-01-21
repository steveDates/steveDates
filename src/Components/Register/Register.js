
import React, {useState} from 'react';
import './Register.sass'
import google_logo from '../../img/google.png'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios';
const Register = (props) => {
    // THIS IS HOW TO DO STATE WITH HOOKS //
    const [users_email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // FUNCTION THAT MAKES AXIOS REQUEST TO REGISTER NEW USER. CURRENTLY PUSHES TO THE SWIPE PAGE, BUT IT SHOULD PUSH THEM TO THE "INSERT USER INFO" PAGE SO THEY CAN SETUP THEIR PROFILE //
    const register = () => {
        axios
			.post('/api/register', {users_email, password})
            .then(()=>{
				props.history.push('/signup-settings');
            })
            .catch(()=>console.log('Register Axios request did not work'))
	};
	return (
		<div className='Register'>
			<Link to='/'>
				<i className='back-arrow fas fa-angle-left'></i>
			</Link>
			<div className='container Register-container'>
                <h1 className='Register-title'>Register</h1>
                <div className='input-container'>
                    <i className='far fa-envelope'></i>
                    <input type='text' placeholder='Email...' onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
                <div className='input-container'>
                    <i className='fas fa-unlock-alt'></i>
                    <input type='password' placeholder='Password...' onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
                <button className='Register-btn primary-btn' onClick={register}>Register</button>
                <p>Or register with</p>
                <div className='button-container'>
					<div className='social-btn google-btn'><img src={google_logo} alt="google logo"/></div>
					<div className='social-btn fb-btn'><i className="fab fa-facebook-f"></i></div>
				</div>
				{/* <div className='input-container'>
					<i className='fas fa-unlock-alt'></i>
					<input type='password' placeholder='Password...' />
				</div>
				<button className='Register-btn primary-btn'>Register</button>
				<p>Or register with</p>
				<div className='button-container'>
					<div className='social-btn google-btn'>
						<img src={google_logo} alt='google logo' />
					</div>
					<div className='social-btn fb-btn'>
						<i className='fab fa-facebook-f'></i>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default withRouter(Register);
