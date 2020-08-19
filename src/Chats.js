import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey what up"
                timestamp="35 secondes ago"
                profilePic="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"

            />

            <Chat
                name="Ellen"
                message="Ola!"
                timestamp="1 munitess ago"
                profilePic="https://image.flaticon.com/icons/png/512/62/62806.png"

            />
            
        </div>
    )
}

export default Chats
