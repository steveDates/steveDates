import React, {Component} from 'react';
import receiver_pic from '../../img/kevin_1.jpg';
// import sender_pic from '../../img/kevin_2.jpg';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.sass';

//HARD CODED MATCH_ID 4 INTO GET_CHAT_HISTORY.SQL AND THIS.STATE, ROOM. NEED TO SET SENDER TO USER_ID, CURRENTLY HAVE HARD CODED IN STATE AND MESSAGE SENT SOCKET.

class Chat extends Component {
		constructor() {
		super();

		this.state = {
			input: '',
			messages: [],
			room: '',
			// joined: false
			// room: 0,
			joined: true,
			sender: 57
		  };
		  this.joinRoom = this.joinRoom.bind(this);
		  this.joinSuccess = this.joinSuccess.bind(this);
		  this.sendMessage = this.sendMessage.bind(this);
		  this.updateMessages = this.updateMessages.bind(this);
		};

		// const messages
		// user: 1,
		// user_picture: receiver_pic,
		// message_id: 0,
		// message_content: 'Hi, how are doing?'

		componentDidMount() {
			this.socket = io();
			this.socket.on('room joined', data => {
			  this.joinSuccess(data)
			})
			this.socket.on('message dispatched', data => {
			  console.log(data)
			  this.updateMessages(data);
			})
		  }
		  
		  joinRoom() {
			if (this.state.room) {
			  this.socket.emit('join room', {
				room: this.state.room
			  })
			}
		  }
		
		  componentWillUnmount() {
			this.socket.disconnect();
		  }
		
		  sendMessage () {
			this.socket.emit("message sent", {
			  message: this.state.input,
			  room: this.state.room,
			  sender: this.state.sender
			})
			this.setState({
			  input: ''
			})
		  }
		
		  updateMessages(messages) {
			this.setState({
			  messages
			})
		  }
		
		  joinSuccess(messages) {
			this.setState({
			  joined: true,
			  messages
			})
		  }

		render(){
			return(
			<div className='Chat'>
				<div className='Chat-container'>
					<div className='Chat-nav' >
						<div className='user'>
							<Link to='/matches'><i className='back-arrow fas fa-angle-left'></i></Link>
							<img src={receiver_pic} alt=''/>
							<p className='receiver-name'>Kevin</p>
						</div>
						<i className='fas fa-flag'></i>
					</div>
					<div className='shadow-control '>
						{/* MESSAGE DISPLAY START */}
						<div className='chat-section'>
							{this.state.messages.map((msg, i) => (
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
						{/* MESSAGE DISPLAY END */}
						<div className='send-message-section'>
							<input value={this.state.input} onChange={e => {
								this.setState({
									input: e.target.value
								})
							}} type='text' placeholder='Type a message...' />
							<i className='fas fa-paper-plane' onClick={this.sendMessage}></i>
						</div>
					</div>
				</div>
			</div>
			)
		};
};

export default Chat;
