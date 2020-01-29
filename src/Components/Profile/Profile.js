import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Profile.sass';
import kevin_2 from '../../img/kevin_1.jpg';
import logo from '../../img/logo.png';
import axios from 'axios';
const Profile = (props) => {

    const [me, setMe] = useState({});

    useEffect(()=>{
        getUser()
    }, []);

    const getUser = () => {
        axios
            .get('/me')
            .then((res)=>setMe(res.data))
    }

    console.log('I AM:', me);

	return (
		<div className='Profile'>
            <div className="circle"></div>
			<div className='container'>
				<div className='Profile-nav'>
					<div style={{ width: '35px', height: '5' }}></div>
					<i className='fas fa-user'></i>
					<img src={logo} alt='logo' className='profile-logo' onClick={()=>props.history.push('/swipe')}/>
				</div>
				<div className='Profile-personal-info'>
					<img src={me.users_image} alt='' />
					<p>{me.users_first_name}, {me.users_age}</p>
				</div>

				<div className='btn-container'>
					<div className='icon-container'>
						<div className='icon-box'>
							<i className='fas fa-cog'></i>
						</div>
						<p>settings</p>
					</div>
					<div className='icon-container'>
						<div className='camera-box icon-box'>
							<i className='fas fa-camera'></i>
						</div>
						<Link to='/add-photos'><p>add media</p></Link>
					</div>
					<div className='icon-container'>
						<div className='icon-box'
                            onClick={()=>props.history.push('/edit-signup-settings')}>
							<i className='fas fa-pen'></i>
						</div>
						<p>Edit Settings</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
