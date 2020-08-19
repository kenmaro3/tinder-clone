import React, {useState} from 'react';

import './ChatScreen.css';
import { Avatar } from '@material-ui/core';


function ChatScreen() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://image.flaticon.com/icons/png/512/62/62806.png',
            message: 'what up ',
        },
        {
            name: 'Ellen',
            image: 'https://image.flaticon.com/icons/png/512/62/62806.png',
            message: 'hows it going',
        },  
        {

            message: 'Hi! how are you doing?',
        },  
    ]);

    const handleSend = e =>{
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">

            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div className="chatScreen__message">

                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )

            ))}

            <div>
                <form className="chatScreen__input">
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message.. " type="text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
