import React, {Component} from 'react';
import receiver_pic from '../../img/kevin_1.jpg';
// import sender_pic from '../../img/kevin_2.jpg';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import Axios from 'axios'
import './Chat.sass';
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
			sender: global.user.users_id
		  };
		  console.log('state', this.state)
		  console.log('globaluser', global.user)
		  this.joinRoom = this.joinRoom.bind(this);
		  this.joinSuccess = this.joinSuccess.bind(this);
		  this.sendMessage = this.sendMessage.bind(this);
		  this.updateMessages = this.updateMessages.bind(this);
          this.getChat = this.getChat.bind(this);
          this.getMessages = this.getMessages.bind(this);
          this.getMe = this.getMe.bind(this);
		};
		componentDidMount() {
			this.socket = io();
			this.joinRoom();
			this.socket.on('room joined', data => {
			  this.joinSuccess(data)
			})
			this.socket.on('message dispatched', data => {
			  console.log('update messges dispatched', data)
			  this.updateMessages(data);
			})
            console.log('ROOM:', this.state.room);
		  }
		  joinRoom() {
			// if (this.state.room) {
			  this.socket.emit('join room', {
				chat_id: this.state.chat_id
			  })
			// }
		  }
		  componentWillUnmount() {
			this.socket.disconnect();
		  }
		  sendMessage () {
			this.socket.emit("message sent", {
			  message: this.state.input,
			  chat_id: this.state.chat_id,
			  sender: this.state.sender
			})
			this.setState({
			  input: ''
			})
		  }
		  updateMessages(messages) {
			this.setState({
			  messages: [...this.state.messages, messages]
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
							{ /**{chat_id: 9, users_message: "is it really working?", sender: 89} */
							this.state.messages.map((msg, i) => (
								<div
									key={i}
									className={`${
										msg.sender !== global.user.users_id ? 'receiver-msg' : 'sender-msg'
									} msg-flex`}
								>
									<p className={`${msg.sender !== global.user.users_id ? 'pink' : 'grey'} msgs`}>
										{msg.users_message}
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