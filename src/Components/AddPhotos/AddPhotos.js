import React,{useState} from 'react';
import './AddPhotos.sass'
import add_photo from '../../img/add-photo.png'
import {Link} from 'react-router-dom'
import kevin_1 from '../../img/kevin_1.jpg'


const AddPhotos = () => {
    const [photo, setPhoto]= useState(add_photo)
    const data =[
        photo, photo, kevin_1, photo, photo, photo
    ]
	return (
		<div className='AddPhotos'>
			<div className='container'>
				<div className='  upper-line'>
					<Link to='/signup-settings'>
						<i className='back-arrow fas fa-angle-left'></i>
					</Link>
					<h1>Add Photos</h1>
				</div>
                <div className="grid-photos">
                    {data.map((photo, i)=>
                    
                    <div className={`${photo === add_photo? 'camera': 'pic_uploaded'} single-photo`} key={i} >
                        <img src={photo} alt="" className={`${photo === add_photo? 'camera-icon': 'uploaded-photo'}`} />
                    </div>
                    )}
                </div>
                <button className='primary-btn register-btn'>Register</button>
			</div>

		</div>
	);
};

export default AddPhotos;
