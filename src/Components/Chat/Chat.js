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
			chat_id: 0,
			joined: true,
			sender: 0
		  };
		  this.joinRoom = this.joinRoom.bind(this);
		  this.joinSuccess = this.joinSuccess.bind(this);
		  this.sendMessage = this.sendMessage.bind(this);
		  this.updateMessages = this.updateMessages.bind(this);
          this.getChat = this.getChat.bind(this);
          this.getMessages = this.getMessages.bind(this);
          this.getMe = this.getMe.bind(this);
		};
		getChat() {
			Axios.get(`/api/chats/${this.state.chat_id}`).then(res =>{ 
                // console.log('res', res);
                // console.log('chat_id:', res.data[0].chat_id);
                this.setState({
                    chat_id: res.data[0].chat_id
                })
                console.log('new chat:', this.state.chat_id);
            })
            .catch(()=>console.log('did not get chat'))
        }
        getMe(){
            Axios
                .get('/me')
                .then(res=>
                    console.log(res.data.users_id)
                //     this.setState({
                //     sender: res.data.users_id
                // })
                ).catch(console.log('get me failed'));
                // console.log('I am:',this.state.sender)
                }
        getMessages(){
            Axios.get(`/api/messages/${this.state.chat_id}`)
                .then((res)=>this.setState({
                    messages: res.data
                }))
                .catch('get messages failed');
        }
		componentDidMount = async () => {
            await this.getMe();
            console.log('i am:', this.state.sender)
			this.socket = io();
			this.socket.on('room joined', data => {
			  this.joinSuccess(data)
			})
			this.socket.on('message dispatched', data => {
			//   console.log(data)
			  this.updateMessages(data);
			}); await 
			this.setState({
				chat_id: +(this.props.match.params.chat_id)
			})
            this.joinRoom()
            await this.getChat();
            this.getMessages();
		  }
		  joinRoom() {
              console.log('(chat.js)join room running')
			if (this.state.chat_id) {
			  this.socket.emit('join room', {
				chat_id: this.state.chat_id
			  })
			}
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
			  messages
            })
            console.log('(Chat.js87) Messages:', this.state.messages)
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
										msg.sender === 100006 ? 'receiver-msg' : 'sender-msg'
									} msg-flex`}
								>
									<p className={`${msg.sender === 77 ? 'pink' : 'grey'} msgs`}>
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