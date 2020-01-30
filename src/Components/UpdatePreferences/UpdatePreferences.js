// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../Preferences/Preferences.sass';
// import axios from 'axios';


// const UpdatePreferences = (props) => {
// 	const [maxDistance, setMaxDistance] = useState(10);
// 	const [minAge, setMinAge] = useState(18);
// 	const [maxAge, setMaxAge] = useState(100);
//     const [activities, setActivities] = useState([]);
//     const [myActivity1, setMyActivity1] = useState({});
//     const [myActivity2, setMyActivity2] = useState({});
//     const [myActivity3, setMyActivity3] = useState({});
//     const [myActivity4, setMyActivity4] = useState({});
//     const [myActivities, setMyActivities] = useState([]);
    
//     useEffect(()=>{
//         getActivities()}, [])

//     useEffect(() => {
//         if(minAge >= maxAge){
//             setMinAge(maxAge)
//         }
//         if(maxAge<=minAge){
//             setMaxAge(minAge)
//         }
//     })

//     const getActivities = () => {
//         axios
//             .get('/api/activities')
//             .then((res)=>{
//                 setActivities(res.data.activities)
//                 setMyActivity1(res.data.myActivities[0]);
//                 setMyActivity2(res.data.myActivities[1]);
//                 setMyActivity3(res.data.myActivities[2]);
//                 setMyActivity4(res.data.myActivities[3]);
//             })
//         }
//         console.log('MaxDist:', maxDistance)
//         console.log('MaxAge:', maxAge)
//         console.log('MinAge:', minAge)
//     console.log('1:', myActivity1)
//     console.log('2:', myActivity2)
//     console.log('3:', myActivity3)
//     console.log('4:', myActivity4)

//     const saveActivities = () => {
//         const id1 = myActivity1.activity_id
//         axios
//             .post('/api/activities', {myActivity1, myActivity2, myActivity3, myActivity4, maxDistance, maxAge, minAge})
//             .then(()=>{
// 				props.history.push('/swipe');
//             })
//     }
    
// 	return (
// 		<div className='Preferences'>
// 			<div className='container'>
// 				<div className='  upper-line'>
// 					<Link to='/signup-settings'>
// 						<i className='back-arrow fas fa-angle-left'></i>
// 					</Link>
// 					<h1>Preferences</h1>
// 				</div>
// 				<div className='Preferences-container '>
// 					<div className='max-distance-container'>
// 						<p>Maximum Distance</p>
// 						<p>{maxDistance} mi</p>
// 					</div>
// 					<input
// 						type='range'
// 						value={maxDistance}
// 						min='10'
// 						max='100'
// 						className='slider'
// 						onChange={e => setMaxDistance(e.target.value)}
// 					/>
// 				</div>
// 				<h3>Range Age</h3>
// 				<div className='Preferences-container '>
// 					<div className='max-distance-container'>
// 						<p>min {minAge}</p>
// 						<p>max {maxAge}</p>
// 					</div>
// 					<input
// 						type='range'
// 						value={minAge}
// 						min='18'
// 						max='100'
// 						name='ageRange'
// 						className='slider'
// 						onChange={e => setMinAge(e.target.value)}
// 						multiple
// 					/>
// 					<br />
// 					<input
// 						type='range'
// 						name='ageRange'
// 						value={maxAge}
// 						min='18'
// 						max='100'
// 						multiple
// 						className='slider'
// 						onChange={e => setMaxAge(e.target.value)}
// 					/>
// 				</div>

// 				<div className='subtitle'>
// 					<div></div>
// 					<h1>Interests</h1> <div></div>
// 				</div>

// 				<div className='interest-container'>
//                     {myActivity1?<div className = 'activated interest' onClick={()=>{setMyActivity1(myActivity2); setMyActivity2(myActivity3); setMyActivity3(myActivity4); setMyActivity4();}}>{myActivity1.activity_name}</div>:null}
//                     {myActivity2?<div className = 'activated interest' onClick={()=>{setMyActivity2(myActivity3); setMyActivity3(myActivity4); setMyActivity4();}}>{myActivity2.activity_name}</div>:null}
//                     {myActivity3?<div className = 'activated interest' onClick={()=>{setMyActivity3(myActivity4); setMyActivity4();}}>{myActivity3.activity_name}</div>:null}
//                     {myActivity4?<div className = 'activated interest' onClick={()=>{setMyActivity4()}}>{myActivity4.activity_name}</div>:null}
// 					{activities.map((activity, i) => (
//                         (myActivity1 && myActivity1.activity_id === activity.activity_id) 
//                         || (myActivity2 && myActivity2.activity_id === activity.activity_id) 
//                         || (myActivity3 && myActivity3.activity_id === activity.activity_id)
//                         || (myActivity4 && myActivity4.activity_id === activity.activity_id) ? null:
//                         <div
// 							className='deactivated interest'
// 							onClick={() =>{ 
//                                 if(!myActivity1){setMyActivity1(activity); return};
//                                 if(!myActivity2){setMyActivity2(activity); return};
//                                 if(!myActivity3){setMyActivity3(activity); return};
//                                 if(!myActivity4){setMyActivity4(activity); return};
//                             }} 
//                             key={i}
// 						>
// 							{activity.activity_name}
// 						</div>
// 					))}
// 				</div>
// 			<button className='primary-btn next-btn' onClick={()=>saveActivities()}>Next</button>
// 			</div>
// 		</div>
// 	);
// };

// export default UpdatePreferences;