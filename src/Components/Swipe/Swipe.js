import React, { useState } from 'react';
import './Swipe.sass';
import logo from '../../img/logo.png';
import data from './data';
import Slider from 'react-slick';
import ProfileOverview from '../ProfileOverview/ProfileOverview';

const Swipe = () => {
	const [heartToggle, setHeartToggle] = useState(false);
	const [friendZone, setFriendZone] = useState(false);
	const [userInfo, setUserInfo] = useState(false);

	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false,
		className: 'slides'
	};
	const overviewToggle = () => {
		setUserInfo(!userInfo);
	};
	console.log('user info', userInfo)
	const { images } = data[0];
	return (
		<div className='Swipe'>
			<div className=' Swipe-container'>
				<div className=' top-nav'>
					<i className='fas fa-ellipsis-h'></i>
					<img src={logo} alt='' />
					<i className='far fa-comment-dots'></i>
				</div>

				<div className=''>
					<div onClick={overviewToggle}>
						<Slider {...settings}>
							{images.map((image, i) => (
								<div key={i}>
									<img src={image} alt='' />
								</div>
							))}
						</Slider>
					</div>
				</div>
				<div className='user-info'>
					<div className='personal'>
						<h1>
							Kevin<span>22</span>
						</h1>
						<div className='icon-container'>
							<i className='far '></i>
							<i
								onClick={() => setFriendZone(!friendZone)}
								className={`far  ${!friendZone ? 'fa-smile' : 'fa-sad-tear'}`}
							></i>
							<i
								onClick={() => setHeartToggle(!heartToggle)}
								className={`${
									heartToggle ? 'like wow heartBeat' : 'unliked'
								} fas fa-heart `}
							></i>
							<i className='fas fa-angle-right'></i>
						</div>
					</div>
					<p>
						<i className='fas fa-map-marker-alt'></i> Lehi, Utah
					</p>
				</div>

				{userInfo ? (
					<div className={`${userInfo ? ' wow fadeInUp' : 'wow fadeOut'}  ProfileOverview`} >
						<ProfileOverview  overviewToggle={overviewToggle} />
					</div>
				) : null}
					{/* <div className={`${userInfo ? ' wow fadeInUp' : 'wow fadeOutDown'}  ProfileOverview`} >
						<ProfileOverview  overviewToggle={overviewToggle} />
					</div> */}
			</div>
		</div>
	);
};

export default Swipe;
