import React from 'react';
import './Matches.sass';
import kevin_1 from '../../img/kevin_1.jpg';
import kevin_2 from '../../img/kevin_2.jpg';
import kevin_3 from '../../img/kevin_3.jpg';

const Matches = () => {
	const users = [
		{
			id: 1,
			name: 'Angela',
			picture: kevin_1,
			type: 'dating',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 2,
			name: 'Paola',
			picture: kevin_2,
			type: 'friendzone',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 3,
			name: 'Crystal',
			picture: kevin_3,
			type: 'friendzone',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 4,
			name: 'Glennys',
			picture: kevin_1,
			type: 'dating',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 1,
			name: 'Angela',
			picture: kevin_1,
			type: 'dating',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 2,
			name: 'Paola',
			picture: kevin_2,
			type: 'friendzone',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 3,
			name: 'Crystal',
			picture: kevin_3,
			type: 'friendzone',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 4,
			name: 'Glennys',
			picture: kevin_1,
			type: 'dating',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 1,
			name: 'Angela',
			picture: kevin_1,
			type: 'dating',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 2,
			name: 'Paola',
			picture: kevin_2,
			type: 'friendzone',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 3,
			name: 'Crystal',
			picture: kevin_3,
			type: 'friendzone',
			message: 'Lorem ipsum dolor sit amet...'
		},
		{
			id: 4,
			name: 'Glennys',
			picture: kevin_1,
			type: 'dating',
			message: 'Lorem ipsum dolor sit amet...'
		}
	];
	
	return (
		<div className='Matches'>
			<div className=''>
				<div className='nav-top'>
					<i className='fas fa-angle-left'></i>
					<p>Matches</p>
					<div></div>
				</div>
			</div>
			<div className='lg-container'>
				{users.map(user => (
					<div className='Matched-user'>
						<div className='user'>
							<img className={`${user.type === 'dating'? 'red' : 'blue'}`}src={user.picture} alt={user.name} />
							<div className='user-info'>
								<p className='name'>{user.name}</p>
								<p className='message'>{user.message}</p>
							</div>
						</div>
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

export default Matches;
