import React, { useState } from 'react';
import './Swipe.sass';
import logo from '../../img/logo.png';
import data from './data';
import Slider from 'react-slick';

const Swipe = () => {
	const [heartToggle, setHeartToggle] = useState(false);
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false,
		className: 'slides'
	};

	const { images } = data[0];
	console.log(heartToggle);
	return (
		<div className='Swipe'>
			<div className=' Swipe-container'>
			<div className=' top-nav'>
				<i className='fas fa-ellipsis-h'></i>
				<img src={logo} alt='' />
				<i className='far fa-comment-dots'></i>
			</div>
			
				<div className=''>
					<div>
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
							<i
								onClick={() => setHeartToggle(!heartToggle)}
								className={`${heartToggle ? 'like' : 'unliked'} fas fa-heart`}
							></i>
							<i className='fas fa-angle-right'></i>
						</div>
					</div>
					<p>
						<i className='fas fa-map-marker-alt'></i> Lehi, Utah
					</p>
				</div>
			</div>
		</div>
	);
};

export default Swipe;
