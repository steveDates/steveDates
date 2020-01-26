import React from 'react';
import receiver_pic from '../../img/kevin_1.jpg';
import sender_pic from '../../img/kevin_2.jpg';
import './Chat.sass';
const Chat = () => {
	// const [userPic, setUserPic] = useState(kevin_1);

	// PLEASE, GET RID OF DUMMY DATA BELOW THIS LINE AFTER THIS COMPONENT IS WORKING WITH THE BACKEND
	const messages = [
		{
			user: 1,
			user_picture: receiver_pic,
			message_id: 0,
			message_content: 'Hi, how are doing?'
		},
		{
			user: 2,
			user_picture: sender_pic,
			message_id: 1,
			message_content: 'I am doing great and you?'
		},
		{
			user: 2,
			user_picture: sender_pic,
			message_id: 2,
			message_content: 'what are you up to?'
		},
		{
			user: 1,
			user_picture: receiver_pic,
			message_id: 3,
			message_content: 'I am fine thank you for asking !'
		},
		{
			user: 2,
			user_picture: sender_pic,
			message_id: 4,
			message_content: 'awesome!'
		},
		{
			user: 1,
			user_picture: receiver_pic,
			message_id: 5,
			message_content: 'Como esta RD?'
		},
		{
			user: 2,
			user_picture: sender_pic,
			message_id: 6,
			message_content: 'Todo bien por aca comiendome un sancocho ahora :D'
		}
	];
	//DUMMY DATA ENDS

	return (
		<div className='Chat'>
			<div className='Chat-container'>
				<div className='Chat-nav'>
					<div className='user'>
						<i className='back-arrow fas fa-angle-left'></i>
						<img src={receiver_pic} alt='' />
						<p className='receiver-name'>Kevin</p>
					</div>
					<i className='fas fa-flag'></i>
				</div>
				<div className='shadow-control '>
					<div className='chat-section'>
						{messages.map((msg, i) => (
							<div
								key={i}
								className={`${
									msg.user === 1 ? 'receiver-msg' : 'sender-msg'
								} msg-flex`}
							>
								<p className={`${msg.user === 1 ? 'pink' : 'grey'} msgs`}>
									{msg.message_content}
								</p>
							</div>
						))}
					</div>
					<div className='send-message-section'>
						<input type='text' placeholder='Type a message...' />
						<i className='fas fa-paper-plane'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;
