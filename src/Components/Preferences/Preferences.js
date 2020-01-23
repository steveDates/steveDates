import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Preferences.sass';
const Preferences = () => {
	const [maxDistance, setMaxDistance] = useState(0);
	const [minAge, setMinAge] = useState(18);
	const [maxAge, setMaxAge] = useState(100);
	const [value, setValue] = useState(false);

	// const SetInterest = () => {};
	// useEffect(()=>{
	// 	$(function() {
	// 		$('#slider-range').slider({
	// 			range: true,
	// 			min: 0,
	// 			max: 500,
	// 			values: [75, 300],
	// 			slide: function(event, ui) {
	// 				$('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
	// 			}
	// 		});
	// 		$('#amount').val(
	// 			'$' +
	// 				$('#slider-range').slider('values', 0) +
	// 				' - $' +
	// 				$('#slider-range').slider('values', 1)
	// 		);
	// 	});
	// },[])
	const interests = [
		{
			id: 1,
			interest: 'Dancing',
			value: false
		},
		{
			id: 2,
			interest: 'Art',
			value: true
		},
		{
			id: 3,
			interest: 'Travel',
			value: false
		},
		{
			id: 4,
			interest: 'Politics',
			value: false
		},
		{
			id: 1,
			interest: 'Dancing',
			value: false
		},
		{
			id: 2,
			interest: 'Art',
			value: true
		},
		{
			id: 3,
			interest: 'Travel',
			value: false
		},
		{
			id: 4,
			interest: 'Politics',
			value: true
		},
		{
			id: 1,
			interest: 'Dancing',
			value: false
		},
		{
			id: 2,
			interest: 'Art',
			value: true
		},
		{
			id: 3,
			interest: 'Travel',
			value: true
		},
		{
			id: 4,
			interest: 'Politics',
			value: false
		}
	];

	// const interest_bg = value ? 'activated' : 'deactivated';
	return (
		<div className='Preferences'>
			<div className='container'>
				<div className='  upper-line'>
					<Link to='/signup-settings'>
						<i className='back-arrow fas fa-angle-left'></i>
					</Link>
					<h1>Preferences</h1>
				</div>
				<div className='Preferences-container '>
					<div className='max-distance-container'>
						<p>Maximum Distance</p>
						<p>{maxDistance} mi</p>
					</div>
					<input
						type='range'
						value={maxDistance}
						min='0'
						max='100'
						className='slider'
						onChange={e => setMaxDistance(e.target.value)}
					/>
				</div>
				<h3>Range Age</h3>
				<div className='Preferences-container '>
					<div className='max-distance-container'>
						<p>min {minAge}</p>
						<p>max {maxAge}</p>
					</div>
					<input
						type='range'
						value={minAge}
						min='18'
						max='100'
						name='ageRange'
						className='slider'
						onChange={e => setMinAge(e.target.value)}
						multiple
					/>
					<br />
					<input
						type='range'
						name='ageRange'
						value={maxAge}
						min='18'
						max='100'
						multiple
						className='slider'
						onChange={e => setMaxAge(e.target.value)}
					/>
				</div>

				<div className='subtitle'>
					<div></div>
					<h1>Interests</h1> <div></div>
				</div>

				<div className='interest-container'>
					{interests.map((interest, i) => (
						<div
							className={`${
								interest.value ? 'activated' : 'deactivated'
							} interest`}
							onClick={() => setValue(!value)}
							key={i}
						>
							{interest.interest}
							{interest.value ? (
								<i className='fas fa-check'></i>
							) : (
								<i className='far fa-circle'></i>
							)}
						</div>
					))}
				</div>
			<button className='primary-btn next-btn'>Next</button>
			</div>
		</div>
	);
};

export default Preferences;
