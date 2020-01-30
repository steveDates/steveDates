import React, { useState, useEffect } from 'react';
import './AddPhotos.sass';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
// import addIcon from '../../img/add-photo.png'
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
const AddPhotos = props => {
	const [profileImg, setProfileImg] = useState('');
	const [img2, setImg2] = useState('');
	const [img3, setImg3] = useState('');
	const [img4, setImg4] = useState('');
	const [img5, setImg5] = useState('');
	const [img6, setImg6] = useState('');
	const [btnActive, setBtnActive] = useState(true);
	const [alert, setAlert] = useState(false);

	let getUserPhotos = () => {
		axios
			.get('/api/user-photos')
			.then(res => {
				// console.log('DATA', res.data[0]);
				setProfileImg(res.data[0]);
				setImg2(res.data[1]);
				setImg3(res.data[2]);
				setImg4(res.data[3]);
				setImg5(res.data[4]);
				setImg6(res.data[5]);
				console.log(img2);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		getUserPhotos();
	}, []);

	useEffect(() => {
		handleBtnActive();
		console.log('image: ', img2);
	}, [profileImg,img2, img3, img4, img5, img6]);

	const addUserPhotos = () => {
		if (!btnActive) {
			props.history.push('/');
				axios
					.put('/api/photos', { profileImg, img2, img3, img4, img5, img6 })
					.then(() => {
						props.history.push('/swipe');
					});
		} else {
			setAlert(true);
		}
	};
	// === === === AMAZON S3 === === === //
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
				if (!profileImg) {
					setProfileImg(url);
					return;
				}
				if (!img2) {
					setImg2(url);
					return;
				}
				if (!img3) {
					setImg3(url);
					return;
				}
				if (!img4) {
					setImg4(url);
					return;
				}
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
	const handleNxtBtn = () => {
		// handleBtnActivation()
		props.history.push('/');
	};

	const handleBtnActive = () => {
		if (
			profileImg === '' &&
			img2 === '' &&
			img3 === '' &&
			img4 === '' &&
			img5 === '' &&
			img6 === ''
		) {
			setBtnActive(true);
		} else {
			setBtnActive(false);
		}
	};
	// console.clear();
	console.log('Alert is: ', alert);
	console.log('image', profileImg, img2, img3, img4, img5, img6);
	return (
		<div className='AddPhotos'>
			<div className='container'>
				<div className='  upper-line'>
					<Link to='/signup-settings'>
						<i className='back-arrow fas fa-angle-left'></i>
					</Link>
					<h1>Add Photos</h1>
				</div>
				{/* { ? (
					<div
						className='wow shake'
						data-wow-delay='.5s'
						// data-wow-duration='.5s'
					>
						Please enter at least a photo...
					</div>
				) : (
					<div className='wow'></div>
				)} */}

				<div className='grid-photos'>
					<div className='single-photo'>
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
										{profileImg ? (
											<img
												src={profileImg}
												alt=''
												className='photo'
												onClick={() => {
													setProfileImg(img2);
													setImg2(img3);
													setImg3(img4);
													setImg4(img5);
													setImg5(img6);
												}}
											/>
										) : (
											<div className=' camera-icon camera-container'>
												<input {...getInputProps()} />
												<i className='fas fa-camera' alt='add'></i>
											</div>
										)}
									</div>
								</div>
							)}
						</Dropzone>
					</div>
					<div className='single-photo'>
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
										{img2 ? (
											<img
												src={img2}
												alt=''
												className='photo'
												onClick={() => {
													setImg2(img3);
													setImg3(img4);
													setImg4(img5);
													setImg5(img6);
												}}
											/>
										) : (
											<div className=' camera-icon camera-container'>
												<input {...getInputProps()} />
												<i className='fas fa-camera' alt='add'></i>
											</div>
										)}
									</div>
								</div>
							)}
						</Dropzone>
					</div>
					<div className='single-photo'>
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
										{img3 ? (
											<img
												src={img3}
												alt=''
												className='photo'
												onClick={() => {
													setImg3(img4);
													setImg4(img5);
													setImg5(img6);
												}}
											/>
										) : (
											<div className=' camera-icon camera-container'>
												<input {...getInputProps()} />
												<i className='fas fa-camera' alt='add'></i>
											</div>
										)}
									</div>
								</div>
							)}
						</Dropzone>
					</div>
					<div className='single-photo'>
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
										{img4 ? (
											<img
												src={img4}
												alt=''
												className='photo'
												onClick={() => {
													setImg4(img5);
													setImg5(img6);
												}}
											/>
										) : (
											<div className=' camera-icon camera-container'>
												<input {...getInputProps()} />
												<i className='fas fa-camera' alt='add'></i>
											</div>
										)}
									</div>
								</div>
							)}
						</Dropzone>
					</div>
					<div className='single-photo'>
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
										{img5 ? (
											<img
												src={img5}
												alt=''
												className='photo'
												onClick={() => {
													setImg5('');
												}}
											/>
										) : (
											<div className=' camera-icon camera-container'>
												<input {...getInputProps()} />
												<i className='fas fa-camera' alt='add'></i>
											</div>
										)}
									</div>
								</div>
							)}
						</Dropzone>
					</div>
					<div className='single-photo'>
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
										{img6 ? (
											<img
												src={img6}
												alt=''
												className='photo'
												onClick={() => {
													setImg6('');
												}}
											/>
										) : (
											<div className=' camera-icon camera-container'>
												<input {...getInputProps()} />
												<i className='fas fa-camera' alt='add'></i>
											</div>
										)}
									</div>
								</div>
							)}
						</Dropzone>
					</div>
				</div>
				{alert ? (
					<p className='alert-error wow bounceIn' data-wow-delay='.5s'>
						Please enter at least a photo...
					</p>
				) : (
					<div className='alert-error holder'>...</div>
				)}
				<button
					// disabled={btnActive ? 'true' : 'true'}
					className='primary-btn register-btn'
					onClick={() => addUserPhotos()}
				>
					Next
				</button>
			</div>
		</div>
	);
};
export default withRouter(AddPhotos);
