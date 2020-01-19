import React from 'react'

const Login = () => {
    return (
        <div className='Login'>
            <img className="logo" src="" alt=""/>
            <input type="text" placeholder='Email...'/>
            <input type="password" placeholder='Password '/>
            <button>Login</button>
            <p>or</p>
            <div className="button-container">
                <button className='login-btn'>Sign up</button>
                <button className='login-btn'>Sign up</button>
            </div>
            <div className="login-footer">
                <p>Have not an account yet? <span>Register</span></p>
            </div>
        </div>
    )
}

export default Login
