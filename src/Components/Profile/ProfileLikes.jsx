import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

import "../Home/home.css";
import circle from "../Home/images/circle.svg";
import tick from "../Home/images/tick.PNG";
import heart from "../Home/images/heart.svg";
import arrow from "../Home/images/arrow.svg";
import chat from "../Home/images/chat.svg";
import CircularProgress from '@mui/material/CircularProgress';


export const ProfileLikes = () => {

    const [profilelikeee, setprofilelikeee] = useState([])
    const [laodings, setlaodings] = useState(true)

    useEffect(() => {
        getLikes();
     }, [])
    
    const obj = useSelector((state)=>state.loggedInUser)   // calling recuder

    const getLikes = () => {
        axios.get("http://localhost:3007/tweet")
            .then(data => {

                let likeTweet = data.data.tweet.map((el) => {

                    if (el.like.includes(obj._id))     //get ronaldos(user) id redux
                    {
                        return el;
                    }
                })
                let filterData = likeTweet.filter((el) => { 
                    return el !== undefined
                })
                setprofilelikeee(filterData);
                console.log(filterData);
                console.log(profilelikeee);
                setlaodings(false);
            })
            .catch(err => { console.log(err); setlaodings(true);})
        
    }


    return laodings ?  <div style={{ position: "absolute",left:"40vw",top:"76vh" }}> <CircularProgress /> </div> : (
        <>
            {profilelikeee.length === 0 ?
                
                <div className="col-8 p-4" style={{margin:"auto"}}>
                    <img src="https://user-images.githubusercontent.com/72969348/141515994-e25f1cd0-b91d-4aa9-9b14-0e54939c61b7.png" alt="" className="col-12" />
                </div>

                :

                profilelikeee.map((el) => {
            return  <div  style={{ borderTop: "none" }} className="first">
                
                    <div>
                        <img alt="img" style={{width:"50px",height:"50px",borderRadius:"50%",float:"left"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBG4Jo7-Edr499P5EvJCghLA-_7_ISj4GRPA&usqp=CAU"/>
                        <div className="desc"> {el.userId.name}  <img style={{width:"23px",marginLeft:"3px"}} src={tick} alt="" /><span style={{color:"rgb(123,136,146)",fontWeight:"400",marginLeft:"3px",fontSize:"17.1px"}}>@{el.userId.username}</span></div>
                        <div className="description"> {el.title} </div>
                    </div>             
                        <img className="mainPic" src="" alt="image7698"/>
                    <div style={{marginLeft:"56px"}}>
                    <img style={{ width: "40px" }} src={chat} alt="" /><span style={{ fontSize: "12px" }}>{el.comment.length}</span>
                        <img  style={{ width: "44px", marginLeft: "73px" }} src={circle} alt="" /><span style={{ fontSize: "12px" }}> {el.retweet.length} </span>
                        <img  style={{ width: "44px", marginLeft: "73px" }} src={heart} alt="" /><span style={{ fontSize: "12px" }}>{el.like.length}</span>
                            <img style={{width:"44px",marginLeft:"73px"}} src={arrow}  alt="" />
                    </div>

                </div>
            })

            
            }
                
        </>   
    )
}
