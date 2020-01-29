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
	const [phoneNumber, setPhoneNumber] = useState('');
	const [working, setWorking] = useState(true);
	const [zipCode, setZipCode] = useState(0);
    const [bio, setBio] = useState('');
    
    console.log('PIC:', profileImg)

    useEffect(()=>{
        getUser()
    }, []);

    const getUser = () => {
        axios
            .get('/me')
            .then((res)=>{
                setProfileImg(res.data.users_image);
                setFirstName(res.data.users_first_name);
                setPhoneNumber(res.data.users_phone_number_current);
                setZipCode(res.data.users_zipcode);
                setBio(res.data.users_bio);
                setWorking(res.data.users_working);
            })
    }

	const handleInfoSubmit = async e => {
		e.preventDefault();
		axios
			.put('/api/profileInfo', {
				profileImg,
				firstName,
				phoneNumber,
				working,
				zipCode,
				bio
			})
			.then(() => {
				props.history.push('/profile');
			})
			.catch(() => console.log('Shits Broke'));
	};

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
				<Link to='/profile'>
					<i className='back-arrow fas fa-angle-left'></i>
				</Link>
				<h1>Edit Settings</h1>
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
							value={firstName}
							onChange={event => {
								setFirstName(event.target.value);
							}}
							required
						/>
						<i className='fas fa-pen'></i>
					</div>


					<label htmlFor=''>
						Phone number <span>(Not visible to anyone)</span>
					</label>

					<div className='input-container-2'>
						<input
							type='number'
							value={phoneNumber}
							onChange={event => {
								setPhoneNumber(event.target.value);
							}}
							required
						/>
						<i className='fas fa-pen'></i>
					</div>

					<label>What are you doing?</label>
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
							value={zipCode}
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
							value={bio}
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
