import React, { Component } from 'react';
import receiver_pic from '../../img/kevin_1.jpg';
// import sender_pic from '../../img/kevin_2.jpg';
import { Link, withRouter } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.sass';
import Axios from 'axios';
//HARD CODED MATCH_ID 4 INTO GET_CHAT_HISTORY.SQL AND THIS.STATE, ROOM. NEED TO SET SENDER TO USER_ID, CURRENTLY HAVE HARD CODED IN STATE AND MESSAGE SENT SOCKET.
class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			messages: [],
			// room: '',
			// joined: false
			room: this.props.location.pathname.split('/')[2],
			joined: true,
			sender: global.user.users_id,
			receiver: ''
		};
		//   console.clear()
		console.log('state', this.state);
		console.log('globaluser', global.user);
		this.joinRoom = this.joinRoom.bind(this);
		this.joinSuccess = this.joinSuccess.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.updateMessages = this.updateMessages.bind(this);
	}
	componentDidMount() {
		const users_id = this.props.match.params.users_id;
		this.getNameOnChat(users_id);
		this.socket = io();
		this.joinRoom();
		this.socket.on('room joined', data => {
			this.joinSuccess(data);
		});
		this.socket.on('message dispatched', data => {
			console.log('update messges dispatched', data);
			this.updateMessages(data);
		});
		console.log('ROOM:', this.state.room);
	}
	joinRoom() {
		// if (this.state.room) {
		this.socket.emit('join room', {
			room: this.state.room
		});
		// }
	}
	componentWillUnmount() {
		this.socket.disconnect();
	}
	sendMessage() {
		this.socket.emit('message sent', {
			message: this.state.input,
			room: this.state.room,
			sender: this.state.sender
		});
		this.setState({
			input: ''
		});
	}
	updateMessages(messages) {
		this.setState({
			messages: [...this.state.messages, messages]
		});
	}
	joinSuccess(messages) {
		this.setState({
			joined: true,
			messages
		});
	}
	getNameOnChat(users_id) {
		Axios.get(`/api/currentReceiver/${users_id}`).then(res =>
			this.setState({ receiver: res.data[0] })
		);
	}
	render() {
		console.clear();
		// console.log('receiver name is' ,this.state.name.users_first_name)
		console.log('global user', global.user);
		console.log('params', this.state.receiver)
		return (
			<div className='Chat'>
				<div className='Chat-container'>
					<div className='Chat-nav'>
						<div className='user'>
							<Link to='/matches'>
								<i className='back-arrow fas fa-angle-left'></i>
							</Link>
							<img src={this.state.receiver.users_image} alt='' />
							<p className='receiver-name'>
								{this.state.receiver.users_first_name}
							</p>
						</div>
						<i className='fas fa-flag'></i>
					</div>
					<div className='shadow-control '>
						{/* MESSAGE DISPLAY START */}
						<div className='chat-section'>
							{/**{chat_id: 9, users_message: "is it really working?", sender: 89} */
							this.state.messages.map((msg, i) => (
								<div
									key={i}
									className={`${
										msg.sender !== global.user.users_id
											? 'receiver-msg'
											: 'sender-msg'
									} msg-flex`}
								>
									<p
										className={`${
											msg.sender !== global.user.users_id ? 'pink' : 'grey'
										} msgs`}
									>
										{msg.users_message}
									</p>
								</div>
							))}
						</div>
						{/* MESSAGE DISPLAY END */}
						<div className='send-message-section'>
							<input
								value={this.state.input}
								onChange={e => {
									this.setState({
										input: e.target.value
									});
								}}
								type='text'
								placeholder='Type a message...'
							/>
							<i className='fas fa-paper-plane' onClick={this.sendMessage}></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Chat);
