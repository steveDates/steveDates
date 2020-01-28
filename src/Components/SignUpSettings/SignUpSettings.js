import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import './SignUpSettings.sass';
import { Link } from 'react-router-dom';
import pic_placeholder from '../../img/profile-placeholder.jpg';
import axios from 'axios';
import { v4 as randomString } from 'uuid';

const SignUpSettings = props => {
	const [profileImg, setProfileImg] = useState(pic_placeholder);
	const [firstName, setFirstName] = useState('');
	const [gender, setGender] = useState(true);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [birthDay, setBirthDay] = useState(0);
	const [birthMonth, setBirthMonth] = useState(0);
	const [birthYear, setBirthYear] = useState(0);
	const [age, setAge] = useState(0);
	const [working, setWorking] = useState(true);
	const [zipCode, setZipCode] = useState(0);
	const [bio, setBio] = useState('');

	const handleInfoSubmit = async e => {
		e.preventDefault();
		await calculate_age();
		axios
			.post('/api/profileInfo', {
				profileImg,
				firstName,
				gender,
				phoneNumber,
				age,
				working,
				zipCode,
				bio
			})
			.then(() => {
				//CHANGE ROUTE TO ADD-PHOTOS VIEW WHEN READY//
				props.history.push('/add-photos');
			})
			.catch(() => console.log('Shits Broke'));
	};

	/////////AGE GENERATOR//////////////

	const getBirthDay = e => {
		setBirthDay(e.target.value);
	};

	const getBirthMonth = e => {
		setBirthMonth(e.target.value);
	};

	const getBirthYear = e => {
		setBirthYear(e.target.value);
	};

	const getGenderBoolean = e => {
		setGender(e.target.value);
	};

	const today_date = new Date();
	const today_year = today_date.getFullYear();
	const today_month = today_date.getMonth();
	const today_day = today_date.getDate();

	useEffect(() => {
		calculate_age();
	});

	function calculate_age() {
		let newAge = today_year - +birthYear;
		if (today_month < +birthMonth - 1) {
			newAge--;
		}
		if (+birthMonth - 1 === today_month && today_day < +birthDay) {
			newAge--;
		}
		setAge(+newAge);
		return +newAge;
	}

	///////////AMAZON S3///////////////

	let getSignedRequest = ([file]) => {
		const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

		axios
			.get('/sign-s3', {
				params: {
					'file-name': fileName,
					'file-type': file.type
				}
			})
			.then(response => {
				const { signedRequest, url } = response.data;
				uploadFile(file, signedRequest, url);
			})
			.catch(err => {
				console.log(err);
			});
	};

	let uploadFile = (file, signedRequest, url) => {
		const options = {
			headers: {
				'Content-Type': file.type
			}
		};

		axios
			.put(signedRequest, file, options)
			.then(res => {
				setProfileImg(url);
				console.log('setProfileImg', url)
			})
			.catch(err => {
				if (err.res.status === 403) {
					alert(
						`Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`
					);
				} else {
					alert(`ERROR: ${err.status}\n ${err.stack}`);
				}
			});
	};

	/////////////////////////////////////

	return (
		<div className='SignUpSettings'>
			<div className=' container upper-line'>
				<Link to='/register'>
					<i className='back-arrow fas fa-angle-left'></i>
				</Link>
				<h1>Profile Settings</h1>
			</div>
			<div className='container SignUpSettings-container'>
				
				<div className='pic-container'>
					<img className='profile-img' src={profileImg} alt='' />
					<Dropzone
						onDropAccepted={getSignedRequest}
						accept='image/*'
						multiple={false}
						className='test'
					>
						{({ getRootProps, getInputProps }) => (
							<div className='container'>
								<div
									{...getRootProps({
										className: 'dropzone',
										onDrop: event => event.stopPropagation()
									})}
								>
									<input {...getInputProps()} />
									<div className=' camera-icon camera-container'>
										<i className='fas fa-camera'></i>
									</div>
								</div>
							</div>
						)}
					</Dropzone>
				</div>

				<form
					action=''
					onSubmit={e => {
						handleInfoSubmit(e);
					}}
				>
					<label htmlFor=''>First Name</label>
					<div className='input-container-2'>
						<input
							type='text'
							placeholder='Steve'
							onChange={event => {
								setFirstName(event.target.value);
							}}
							required
						/>
						<i className='fas fa-pen'></i>
					</div>

					<label htmlFor=''>Gender</label>
					<br />
					<select
						className='genre'
						name=''
						id=''
						onChange={e => getGenderBoolean(e)}
						required
					>
						<option value=''>Select</option>
						<option value={false}>Female</option>
						<option value={true}>Male</option>
					</select>
					<br />

					{/* <label htmlFor=''>
						Email Address <span>(Not visible to anyone)</span>
					</label>

					<div className='input-container-2'>
						<input type='email' placeholder='hi@steveDate.com' 
						onChange={(event)=>{setEmail(event.target.value)}}/>
						<i className='fas fa-pen'></i>
					</div> */}

					<label htmlFor=''>
						Phone number <span>(Not visible to anyone)</span>
					</label>

					<div className='input-container-2'>
						<input
							type='number'
							placeholder='(123) 600-7000'
							onChange={event => {
								setPhoneNumber(event.target.value);
							}}
							required
						/>
						<i className='fas fa-pen'></i>
					</div>

					<h2>
						Optional<i className='fas fa-sort-down'></i>
					</h2>
					<label htmlFor=''>Date Of Birth</label>
					<br />
					<select name='DD' onChange={e => getBirthDay(e)} required>
						<option>DD</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
						<option value='11'>11</option>
						<option value='12'>12</option>
						<option value='13'>13</option>
						<option value='14'>14</option>
						<option value='15'>15</option>
						<option value='16'>16</option>
						<option value='17'>17</option>
						<option value='18'>18</option>
						<option value='19'>19</option>
						<option value='20'>20</option>
						<option value='21'>21</option>
						<option value='22'>22</option>
						<option value='23'>23</option>
						<option value='24'>24</option>
						<option value='25'>25</option>
						<option value='26'>26</option>
						<option value='27'>27</option>
						<option value='28'>28</option>
						<option value='29'>29</option>
						<option value='30'>30</option>
						<option value='31'>31</option>
					</select>
					<select name='MM' onChange={e => getBirthMonth(e)} required>
						<option>MM</option>
						<option value={0}>January</option>
						<option value={1}>Febuary</option>
						<option value={2}>March</option>
						<option value={3}>April</option>
						<option value={4}>May</option>
						<option value={5}>June</option>
						<option value={6}>July</option>
						<option value={7}>August</option>
						<option value={8}>September</option>
						<option value={9}>October</option>
						<option value={10}>November</option>
						<option value={11}>December</option>
					</select>
					<select name='YY' onChange={e => getBirthYear(e)} required>
						<option>YY</option>

						<option value='2002'>2002</option>
						<option value='2001'>2001</option>
						<option value='2000'>2000</option>
						<option value='1999'>1999</option>
						<option value='1998'>1998</option>
						<option value='1997'>1997</option>
						<option value='1996'>1996</option>
						<option value='1995'>1995</option>
						<option value='1994'>1994</option>
						<option value='1993'>1993</option>
						<option value='1992'>1992</option>
						<option value='1991'>1991</option>
						<option value='1990'>1990</option>
						<option value='1989'>1989</option>
						<option value='1988'>1988</option>
						<option value='1987'>1987</option>
						<option value='1986'>1986</option>
						<option value='1985'>1985</option>
						<option value='1984'>1984</option>
						<option value='1983'>1983</option>
						<option value='1982'>1982</option>
						<option value='1981'>1981</option>
						<option value='1980'>1980</option>
						<option value='1979'>1979</option>
						<option value='1978'>1978</option>
						<option value='1977'>1977</option>
						<option value='1976'>1976</option>
						<option value='1975'>1975</option>
						<option value='1974'>1974</option>
						<option value='1973'>1973</option>
						<option value='1972'>1972</option>
						<option value='1971'>1971</option>
						<option value='1970'>1970</option>
						<option value='1969'>1969</option>
						<option value='1968'>1968</option>
						<option value='1967'>1967</option>
						<option value='1966'>1966</option>
						<option value='1965'>1965</option>
						<option value='1964'>1964</option>
						<option value='1963'>1963</option>
						<option value='1962'>1962</option>
						<option value='1961'>1961</option>
						<option value='1960'>1960</option>
						<option value='1959'>1959</option>
						<option value='1958'>1958</option>
						<option value='1957'>1957</option>
						<option value='1956'>1956</option>
						<option value='1955'>1955</option>
						<option value='1954'>1954</option>
						<option value='1953'>1953</option>
						<option value='1952'>1952</option>
						<option value='1951'>1951</option>
						<option value='1950'>1950</option>
						<option value='1949'>1949</option>
						<option value='1948'>1948</option>
						<option value='1947'>1947</option>
						<option value='1946'>1946</option>
						<option value='1945'>1945</option>
						<option value='1944'>1944</option>
						<option value='1943'>1943</option>
						<option value='1942'>1942</option>
						<option value='1941'>1941</option>
						<option value='1940'>1940</option>
						<option value='1939'>1939</option>
						<option value='1938'>1938</option>
						<option value='1937'>1937</option>
						<option value='1936'>1936</option>
						<option value='1935'>1935</option>
						<option value='1934'>1934</option>
						<option value='1933'>1933</option>
						<option value='1932'>1932</option>
						<option value='1931'>1931</option>
						<option value='1930'>1930</option>
					</select>
					<label htmlFor=''>What are you doing?</label>
					<div className='radio-container'>
						<div className='radio-input'>
							<input
								type='radio'
								name='genre'
								checked='checked'
								onChange={e => {
									setWorking(true);
								}}
							/>
							<p>Working</p>
						</div>
						<div className='radio-input'>
							<input
								type='radio'
								name='genre'
								onChange={e => {
									setWorking(false);
								}}
							/>
							<p>Studying</p>
						</div>
					</div>
					<label htmlFor=''>Where?</label>
					<div className='input-container-2'>
						<input
							type='number'
							placeholder='Zip Code'
							onChange={e => {
								setZipCode(e.target.value);
							}}
							required
						/>
						<i className='fas fa-pen'></i>
					</div>
					<label htmlFor=''>Bio</label>
					<div className='input-container-2'>
						<input
							type='text'
							placeholder='Something About You'
							onChange={e => setBio(e.target.value)}
							required
						/>
						<i className='fas fa-pen'></i>
					</div>
					<button type='submit' className='primary-btn next-btn'>
						Next
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUpSettings;
