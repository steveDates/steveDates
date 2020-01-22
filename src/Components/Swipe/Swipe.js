import React from 'react';
import './Swipe.sass';
// import kevin_1 from '../../img/kevin_2.jpg';
import logo from '../../img/logo.png';
import SwiperCarousel from './SwipeCarousel';
import data from './data'

const Swipe = (props) => {
	SwiperCarousel();
	console.log(data[0].images[0].image_1)
	return (
		<div className='Swipe'>
			<div className='container top-nav'>
				<i className='fas fa-ellipsis-h'></i>
				<img src={logo} alt='' />
				<i className='far fa-comment-dots'></i>
			</div>
			<div className='swiper-container'>
				<div className='swiper-wrapper'>
					{/* <img src={data[0].images[0]} alt=""/> */}
					{data[0].images.map((curr, i)=>  
						<div className='swiper-slide Swipe-container' key={i}>
							<img src={curr} alt='user-pic' />
						</div>
					)}
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
