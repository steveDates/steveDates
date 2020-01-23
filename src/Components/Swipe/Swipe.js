import React from 'react';
import './Swipe.sass';
// import kevin_1 from '../../img/kevin_2.jpg';
// import logo from '../../img/logo.png';
// // import SwiperCarousel from './SwipeCarousel';
// // import data from './data';
// import Slider from 'react-slick';
// // import styled from 'styled-components';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Swipe = () => {
	// const Wrapper = styled.div`
	// 	width: 100%;
	// `;

	// const Page = styled.div`
	// 	width: 100%;
	// `;
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
	// console.log(data[0].images[0].image_1);
	return (
		<div className='Swipe'>
			{/* <div className='container top-nav'>
				<i className='fas fa-ellipsis-h'></i>
				<img src={logo} alt='' />
				<i className='far fa-comment-dots'></i>
			</div>
			<div className='swiper-container'>
				{/* <Wrapper> */}
				{/* <img src={data[0].images[0]} alt=""/> */}
				{/* <Slider {...settings}> */}
					{/* {data[0].images.map((image, i) => (
						<div key={i}>
							<img src={image} alt='user-pic' />
						</div>
					))} */}
					{/* <Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
					</Slider> */}
				{/* </Slider> */}
				{/* </Wrapper> */}
				{/* <div className='swiper-pagination'></div> */}
			{/* </div>
			<div className='user-info'>
				<h1>
					Kevin Montero <span>22</span>
				</h1>
				<p>
					<i className='fas fa-map-marker-alt'></i> Lehi, Utah
				</p>
			</div> */} */}
		</div>
	);
};

export default Swipe;
