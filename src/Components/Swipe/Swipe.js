import React, { useState, useEffect } from 'react';
import './Swipe.sass';
import logo from '../../img/logo.png';
import Slider from 'react-slick';
import axios from 'axios';
import ProfileOverview from '../ProfileOverview/ProfileOverview';

const Swipe = (props) => {
    const [zipcodes, setZipcodes] = useState([]);
    const [potentials, setPotentials] = useState([]);
	const [heartToggle, setHeartToggle] = useState(false);
    const [friendZone, setFriendZone] = useState(false);
    let [i, setI] = useState(0);
	const [userInfo, setUserInfo] = useState(false);

    console.log('potentials:',potentials);

	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false,
		className: 'slides'
    };

    const handleClick = (e) => {
        let their_id = potentials[i].users_id;
        let interest_level = e;

        axios
            .post('/api/swipe', {their_id, interest_level})
            .then(()=>{
                console.log('MOVE ON, JAY-Z!!')
                if (i===potentials.length-1) {
                    setI(0);
                    console.log('OUT OF PEOPLE');
                } else {
                    setI(i+1);
                }
            })
            .catch(console.log('swipe did not work'))
        // console.log('their id:', their_id)
        // console.log('swipe value:', interest_level);

        // REMOVE THIS AT SOME POINT
        
    }
    
    useEffect(()=>{
        getPotentials();
    },[])
    
    const getPotentials = () => {
        console.log('axios is running')
            axios
                .get('/api/potentials')
                .then((res)=>{
                    console.log(res.data);
                    setPotentials(res.data.penUltimateMatches);
                    setZipcodes(res.data.data);
                })
        }
    
    const photos = [potentials[i] && potentials[i].users_image, potentials[i] && potentials[i].users_image2, potentials[i] && potentials[i].users_image3, potentials[i] && potentials[i].users_image4, potentials[i] && potentials[i].users_image5, potentials[i] && potentials[i].users_image6];
    // console.log('PHOTOS', photos);

	const overviewToggle = () => {
		setUserInfo(!userInfo);
	};
	console.log('potentials', potentials)
	return (
		<div className='Swipe'>
			<div className=' Swipe-container'>
				<div className=' top-nav'>
					<i className='fas fa-ellipsis-h'
                        onClick={()=>props.history.push('/profile')}></i>
					<img src={logo} alt='' />
					<i className='far fa-comment-dots'></i>
				</div>

				<div className=''>
					<div onClick={overviewToggle}>
						<Slider {...settings}>
							{photos.filter(el=>el!==null).map((image, i) => (
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
							{potentials[i] && potentials[i].users_first_name}<span>{potentials[i] && potentials[i].users_age}</span>
						</h1>
						<div className='icon-container'>
							<i className='far '></i>
							<i
								onClick={()=>{setFriendZone(!friendZone); handleClick(2); console.log('i:', i)}}
                                className={`far  ${!friendZone ? 'fa-smile' : 'fa-sad-tear'}`}
                                name = 'friend'
							></i>
							<i
								onClick={() => {setHeartToggle(!heartToggle); handleClick(1); console.log('i:',i)}}
                                className={`${heartToggle ? 'like' : 'unliked'} fas fa-heart`}
							></i>
                            <i className='fas fa-angle-right' 
                                onClick={()=>handleClick(3)}></i>
						</div>
					</div>

                    {zipcodes.filter((el)=>+el.zip_code === potentials[i].users_zipcode).map((el)=>
                        <p>
						    <i className='fas fa-map-marker-alt'></i> {el.city}, {el.state}
					    </p>
                    )}
					
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
