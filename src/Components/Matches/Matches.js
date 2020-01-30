import React, { useState, useEffect } from "react";
import "./Matches.sass";
import { Link } from "react-router-dom";
import Axios from "axios";

const Matches = props => {
  console.log("global user is", global.user);
  const [users, setUsers] = useState([]);

  const getMatches = () => {
    Axios.get("/api/matches").then(res => {
      console.log("res.data", res.data);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const goToChat = id => {
    props.history.push(`/chat/${id}`);
  };

  // id: 1,
  // name: 'Angela',
  // picture: kevin_1,
  // type: 'dating',
  // message: 'Lorem ipsum dolor sit amet...'

  console.log(users);
  return (
    <div className="Matches">
      <div className="">
        <div className="nav-top">
          <Link to="/swipe">
            <i className="fas fa-angle-left"></i>
          </Link>
          <p>Matches</p>
          <div></div>
        </div>
      </div>
      <div className="lg-container">
        {users.map(user => (
          <div onClick={() => goToChat(user.chat_id)} className="Matched-user">
            <div className="user">
              <img
                className={`${user.friend_zone ? "blue" : "red"}`}
                src={user.users_image}
                alt={user.users_first_name}
              />
              <div className="user-info">
                <p className="name">{user.users_first_name}</p>
                {/* <p className='message'>{user.message}</p> */}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
