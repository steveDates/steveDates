import React, {useState, useEffect} from 'react';
import './ProfileOverview.sass';
const ProfileOverview = props => {
    const [zipcodes, setZipcodes] = useState([]);

    useEffect(()=>{
        setZipcodes(props.zipcodes)
        console.log(zipcodes);
    },[props.zipcodes, zipcodes])
	const user = {
		name: 'Kevin',
		age: 22,
		education: 'Utah valley University',
		location: 'Salt Lake City',
		distance: 4,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, a? Accusamus quos eos, debitis suscipit doloremque illo quis quod quo blanditiis iusto. Est repellat eos iste commodi quo eius aperiam.'
    };
    console.log(props);
	return (
		<div className='ProfileOverview'>
			<div className='ProfileOverview-container'>
				<div className='close-btn'>
					<i
						onClick={props.overviewToggle}
						className='fas fa-arrow-circle-down'
					></i>
				</div>
				<h1 className='name '>
					{props.currentUser.users_first_name} <span>{props.currentUser.users_age}</span>
				</h1>
				<p className='education'>
					<i className='fas fa-graduation-cap'></i>
					{user.education}
				</p>
                {zipcodes.filter((el)=>+el.zip_code === props.currentUser.users_zipcode).map((el)=>
                    <p className='location'>
                <i className='fas fa-home'></i> Lives in {el.city}, {el.state}
                    </p>
                )}
                {zipcodes.filter((el)=>+el.zip_code === props.currentUser.users_zipcode).map((el)=>
                    <p className='distance'>
                <i className='fas fa-map-marker-alt'></i> {Math.round(el.distance)} miles away
                    </p>
                )}
				
				{/* <p className='distance'>
					<i className='fas fa-map-marker-alt'></i>
					{user.distance} miles away
				</p> */}
				<hr />
				<p className='description'>{props.currentUser.users_bio}</p>
				<div className='icon-container'></div>
			</div>
		</div>
	);
};

export default ProfileOverview;
