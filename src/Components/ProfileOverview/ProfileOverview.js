import React from 'react';
import './ProfileOverview.sass';
const ProfileOverview = props => {
	const user = {
		name: 'Kevin',
		age: 22,
		education: 'Utah valley University',
		location: 'Salt Lake City',
		distance: 4,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, a? Accusamus quos eos, debitis suscipit doloremque illo quis quod quo blanditiis iusto. Est repellat eos iste commodi quo eius aperiam.'
	};
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
					{user.name} <span>{user.age}</span>
				</h1>
				<p className='education'>
					<i className='fas fa-graduation-cap'></i>
					{user.education}
				</p>
				<p className='location'>
					<i className='fas fa-home'></i> Lives in {user.location}
				</p>
				<p className='distance'>
					<i className='fas fa-map-marker-alt'></i>
					{user.distance} miles away
				</p>
				<hr />
				<p className='description'>{user.description}</p>
				<div className='icon-container'></div>
			</div>
		</div>
	);
};

export default ProfileOverview;
