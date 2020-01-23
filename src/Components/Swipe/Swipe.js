import React from 'react';
import './Swipe.sass';
import kevin_1 from '../../img/kevin_2.jpg';
import logo from '../../img/logo.png';
import data from './data';
import Slider from 'react-slick';

const Swipe = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false,
		className: 'slides'
	};
	// SwiperCarousel();
	console.log(data[0].images);
	return (
		<div className='Swipe'>
			<div className='container top-nav'>
				<i className='fas fa-ellipsis-h'></i>
				<img src={logo} alt='' />
				<i className='far fa-comment-dots'></i>
			</div>
			<div className='swiper-container'>
				{/* <Wrapper> */}
				{/* <img src={data[0].images[0]} alt='' /> */}
				<div>
					<h2> Single Item</h2>
					<Slider {...settings}>
						{}
					</Slider>
				</div>
				<div className='swiper-pagination'></div>
			</div>
			<div className='user-info'>
				<h1>
					Kevin Montero <span>22</span>
				</h1>
				<p>
					<i className='fas fa-map-marker-alt'></i> Lehi, Utah
				</p>
			</div>
		</div>
	);
};

export default Swipe;
