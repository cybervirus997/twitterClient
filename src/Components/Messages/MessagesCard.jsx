import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../App.css"


const MessagesCard = ({id,pic,fullName,username,message}) => {
    return (
        <div key={id} className="container messages">
            <img src={pic} className="picStyle" alt="dp" />
            <p style={{fontSize:"15px",fontWeight:"700"}}>{fullName}<a style={{fontSize:"15px",fontWeight:"400"}}><span>{username}</span><span style={{float:"right"}}>November 12</span><p>{message}</p></a></p>
        </div>
    )
}

export default MessagesCard
