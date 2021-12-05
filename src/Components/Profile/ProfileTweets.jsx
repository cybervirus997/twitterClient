import React, {useEffect,useState} from 'react'
import axios from 'axios';

import "../Home/home.css";
import circle from "../Home/images/circle.svg";
import tick from "../Home/images/tick.PNG";
import heart from "../Home/images/heart.svg";
import arrow from "../Home/images/arrow.svg";
import chat from "../Home/images/chat.svg";


export const ProfileTweets = ({tweets,bigdata}) => {

    return (

        <>

            {tweets.length === 0 ? 
                
                <div className="col-8 p-4" style={{margin:"auto"}}>
                                    <img src="https://user-images.githubusercontent.com/72969348/141507106-f2ed876a-6089-49af-b3e0-cfd0a6e8fc6b.png" alt="" className="col-12" />
                </div>

                :

                tweets.map((el) => {
                return <div style={{ borderTop: "none" }} className="first">
                
                    <div>
                        <img alt="img" style={{ width: "50px", height: "50px", borderRadius: "50%", float: "left" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBG4Jo7-Edr499P5EvJCghLA-_7_ISj4GRPA&usqp=CAU" />
                        <div className="desc"> {bigdata.name}  <img style={{ width: "23px", marginLeft: "3px" }} src={tick} alt="" /><span style={{ color: "rgb(123,136,146)", fontWeight: "400", marginLeft: "3px", fontSize: "17.1px" }}>@{bigdata.username}</span></div>
                        <div className="description"> {el.title} </div>
                    </div>
                    <img className="mainPic" src="" alt="image7698" />
                    <div style={{ marginLeft: "56px" }}>
                        <img style={{ width: "40px" }} src={chat} alt="" /><span style={{ fontSize: "12px" }}>{el.comment.length}</span>
                        <img style={{ width: "44px", marginLeft: "73px" }} src={circle} alt="" /><span style={{ fontSize: "12px" }}> {el.retweet.length} </span>
                        <img style={{ width: "44px", marginLeft: "73px" }} src={heart} alt="" /><span style={{ fontSize: "12px" }}>{el.like.length}</span>
                        <img style={{ width: "44px", marginLeft: "73px" }} src={arrow} alt="" />
                    </div>

                </div>
                })
                
                

            }            
    </>
    )
}
