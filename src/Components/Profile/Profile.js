import React from 'react';
import './Profile.sass';
import kevin_2 from '../../img/kevin_1.jpg';
import logo from '../../img/logo.png';
const Profile = () => {
	return (
		<div className='Profile'>
			<div className='circle'></div>
			<div className='container'>
				<div className='Profile-nav'>
					<div style={{ width: '35px', height: '5' }}></div>
					<i className='fas fa-user'></i>
					<img src={logo} alt='logo' className='profile-logo' />
				</div>
				<div className='Profile-personal-info'>
					<img src={kevin_2} alt='' />
					<p>Kevin, 22</p>
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
						<p>add media</p>
					</div>
					<div className='icon-container'>
						<div className='icon-box'>
							<i className='fas fa-pen'></i>
						</div>
						<p>edit info</p>
					</div>
				</div>
				<div className='logout-btn-container'>
					<p><i className='logout-btn fas fa-power-off'></i></p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
