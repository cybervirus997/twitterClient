import React from 'react'
import {messageData} from "./messageData"
import MessagesCard from "./MessagesCard"
import SearchBar from "../Explore/SearchBar"
const displayMessages = () => {
    return (
        <div>
            <a href="https://icons8.com/icon/364/settings"></a>
            <p style={{fontWeight:"700",fontSize:"20px",marginLeft:"50px",marginTop:"20px"}}>
            Messages
            <img src="https://img.icons8.com/dotty/80/000000/new-message.png" className="messageIcons" alt="message-icon"/>
            <img src="https://img.icons8.com/ios/50/000000/settings--v1.png" className="settingIcons" alt="settings-icon"/>
            </p>
            <SearchBar />
            {messageData.map(item => {
                return <MessagesCard {...item} />
            })}
        </div>
    )
}

export default displayMessages
