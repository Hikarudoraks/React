import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatDate(date){
  return date.toLocaleDateString();
}

function Avatar(props){
  return (
    <img className="Avatar" 
    src={props.user.AvatarUrl} 
    alt={props.user.name} 
    />
  );
}

function UserInfo(props){
  return (
    <div className="UserInfo">
        <Avatar user={props.user} /> 
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
  );
}

function Comment(props){
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "Espero que goste de aprender react",
  author:{
    name: "Ricardo",
    AvatarUrl: "https://i.pinimg.com/236x/ae/6f/0c/ae6f0c06031ec9671943bd8be104955f.jpg",
  }
}

ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author} />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
