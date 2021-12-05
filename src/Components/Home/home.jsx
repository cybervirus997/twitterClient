import React, { useState, useEffect } from 'react';
import axios from "axios";
import { TransitionsModal } from './modal';
import { useSelector } from 'react-redux';

import "./home.css";
import img1 from "./images/1.svg";
import img2 from "./images/2.svg";
import img3 from "./images/3.svg";
import img4 from "./images/4.svg";
import img5 from "./images/5.svg";
import chat from "./images/chat.svg";
import circle from "./images/circle.svg";
import tick from "./images/tick.PNG";
import heart from "./images/heart.svg";
import arrow from "./images/arrow.svg";
import cross from "./images/cross.svg";
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [homeData, setHomeData] = useState([]);
    const [dummy, setDummy] = useState(true);
    
    const obj = useSelector((state) => state.loggedInUser)   // calling recuder
    console.log("main hun :",obj);

    useEffect(() => {
        handleTweetData();
    }, [dummy])
    
    const handleTweetData = () => {
        setLoading(true);
        axios.get("http://localhost:3007/tweet")
            .then((data) => {
                let xi = data.data.tweet;
                xi = xi.reverse();
                console.log(xi);
                setHomeData(xi);
                setLoading(false);
            })
            .catch(err => { setError(true);  console.log(err)})
    }


    const [inp,setInp] = useState("")
    const [src, setSrc] = useState("")

    const handlePostTweeet = () => {
        axios.post("http://localhost:3007/tweet", {
            userId: obj._id,                                    // i used dummy userId(ronaldo),use that ID who is logged-in
            title: inp
        })
            .then((data) => { console.log(data); setDummy(!dummy) })
        .catch(err => console.log("handleposterr:",err))
    }
    

    const handleChange = (e)=>{
        setInp(e.target.value);
        let change = document.getElementById("tweet");
        
        if(!e.target.value && !src){
            change.style.backgroundColor = "rgb(142,205,248)"
        }
        else{
            change.style.backgroundColor = "rgb(29,155,240)"
        }
    }

    function cut(){
        let change = document.getElementById("tweet")
        if(!inp){
            change.style.backgroundColor = "rgb(142,205,248)"
        }

        document.getElementById("upload").src = "";
        setSrc("")
        document.getElementById("up").style.display = "none"
    }

    const handleMouse = (e)=>{
        let change = document.getElementById("tweet")
        
        if(String(change.style.backgroundColor) !== "rgb(142, 205, 248)"){
            change.style.backgroundColor = "rgb(18, 142, 224)"
        }
        console.log(change.style.backgroundColor,"Aaa")
        
    }

    const handleMouse1 = ()=>{
        let change = document.getElementById("tweet")
        if(String(change.style.backgroundColor) === "rgb(18, 142, 224)"){
            change.style.backgroundColor = "rgb(29,155,240)"
        }
    }



    // loading image starts


    //  var loadFile = function (event) {
    //     var output = document.getElementById('coverPic');
    //     output.style.display = "block";
    //     output.src = URL.createObjectURL(event.target.files[0]);
    //     output.onload = function() {
    //         URL.revokeObjectURL(output.src) // free memory
    //     }
    //     console.log(output.src);
    // };

    const loadFile = async function(evt) {
        let change = document.getElementById("tweet");
        //console.log(evt.target.files[0] ,"aaaa")
        if(evt.target.files[0]){
            document.getElementById("upload").src = URL.createObjectURL(evt.target.files[0]);
            setSrc(document.getElementById("upload").src);
            document.getElementById("up").style.display = "block"
        }
        else{
            console.log(evt.target.files[0],"aaa")
            document.getElementById("up").style.display = "none"
            setSrc(document.getElementById("upload").src)
        }

        document.getElementById("show").style.display = "block"
        change.style.backgroundColor = "rgb(29,155,240)"
    }

    // const handlePublish = () => {
    //     let formData = new FormData();
    //      formData.append('image', picRef.current.files[0]);
    //     //  formData.append('profile_pic', dpRef.current.files[0]);

    //         const config = {     
    //             headers: { 'content-type': 'multipart/form-data'}
    //     }
    //      axios.patch(`http://localhost:3007/user/cr7`, formData, config)
    //             .then(response => {
    //                 console.log(response.data);
    //             })
    //             .catch(error => {
    //                 alert(error);
    //             });

    // loading image ends

    // handle liking post start here
    let userId = obj._id;                // use Redux
    const handleLIkePost = (tweeetId) => {
        axios.post("http://localhost:3007/tweet/"+tweeetId+"/"+userId+"/like")
            .then((data) => { console.log(data); setDummy(!dummy); })
        .catch(err => { console.log(err)})
    }

    const handleDisLIkePost = (tweeetId) => {
        axios.post("http://localhost:3007/tweet/"+tweeetId+"/"+userId+"/dislike")
            .then((data) => { console.log(data); setDummy(!dummy); })
        .catch(err => { console.log(err)})
    }
    // handle liking post ends here

    //handle retweet post start here
    const handleRetweet = (tweeetId) => {
        axios.post("http://localhost:3007/tweet/"+tweeetId+"/"+userId+"/retweetadd")
            .then((data) => { console.log(data); setDummy(!dummy);  })
        .catch(err => { console.log(err)})
    }

    //handle retweet post ends here

    return loading ? <div style={{ position: "absolute",left:"45vw",top:"40vh" }}> <CircularProgress /> </div> : error ? "error..."  : <div>

        <div className="firstBorder home" style={{height: "45px",position:"fixed",top:"0.2px",borderBottom: "none"}}>
            <span style={{marginLeft:"1px"}}>Home</span>
            <img alt="" style={{width:"20px",float:"right",marginTop:"1%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOruPY6oYEC6iG3ZEQRf2fM5uXk4EYEIQUYxFuJyTuY-lRLvtLCyzQ6xFE9lb6FyL1XVs&usqp=CAU"/>
        </div>
        <div style={{borderTop:"none",paddingBottom:"20px",marginTop:"50px"}} className="firstBorder">
            <div>
                <img alt="img" style={{width:"50px",height:"50px",borderRadius:"50%",float:"left"}} src={obj.profile_pic}/>
                <input onChange={handleChange} onClick={()=>{document.getElementById("show").style.display = "block"}} style={{margin:"11px 0px 0px 13px",border:"none",height:"40px",fontSize:"20px"}} placeholder="What's happening?" type="text"/>
                <div id="up" style={{display:"none"}}>
                   <img id="upload" alt="" className="mainPic"/>
                   <img onClick={cut} alt="" style={{width:"30px",borderRadius:"50%",position:"absolute",top:"130px",left:"485px"}} src={cross}/>
                </div>
                <div id="show" style={{margin:"5px 0px 0px 60px",display:"none"}}>
                    <img alt="img" style={{width:"22px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzplmqIDtypwvhcctX75fFFYMhpBi650NwxO1xhC9f3ZJrCHXpuN0c58fM6Hzv9E7BFjA&usqp=CAU"/>
                    <span style={{fontSize:"13.5px",fontFamily:"sans-serif",color:"rgb(29,155,240)"}}>Everyone can reply</span>
                </div>
            </div>
            <div className="divProfile">
                <label style={{width:"35px"}} htmlFor="files" className="btn"><img alt="img" style={{width:"18.5px"}} src={img5}/></label>
                <input alt="img" id="files" style={{ color: "transparent", visibility: "hidden", width: "1px" }} type='file' accept="image/*" onChange={loadFile} />
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img4}/></label>
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img3}/></label>
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img2}/></label>
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img1}/></label>
                <button onMouseOver={handleMouse} onMouseLeave={handleMouse1} onClick={handlePostTweeet} id="tweet" style={{backgroundColor:"rgb(142,205,248)"}} className="btn1">Tweet</button>
            </div>
            {/* {console.log(homeData.reverse())} */}
              {/* <div style={{display: open ? "block" : "none"}}> <TransitionsModal open={open} fnc={handleClose} allComment={el} id={el._id}/></div> */}
        </div>
        {
            
            homeData.reverse().map((el) => {
                return <div key={el._id} style={{ borderTop: "none" }} className="first">
                    {console.log("image::::",el)}
                
                    <div>
                        <img alt="img" style={{width:"50px",height:"50px",borderRadius:"50%",float:"left"}} src={el.userId.profile_pic}/>
                        <div className="desc">{el.userId.name}<img style={{width:"23px",marginLeft:"3px"}} src={tick} alt="" /><span style={{color:"rgb(123,136,146)",fontWeight:"400",marginLeft:"3px",fontSize:"17.1px"}}>@{el.userId.username}</span></div>
                        <div className="description">{el.title}</div>
                    </div>
                        {el.image!=="" || el.image!==undefined ? "" : <img className="mainPic" src={el.image} alt="image7698"/>} 
                    <div className="d-flex flex-row" style={{ marginLeft: "56px" }}>
                        
                        <div>
                            <TransitionsModal allComment={el} id={el._id} rerenderVar={dummy} rerenderfnc={setDummy} />
                        </div>
                        <div className="d-flex flex-row" style={{margin:"auto"}} >
                            <img onClick={() => { handleRetweet(el._id) }} style={{ width: "44px", marginLeft: "73px" }} src={circle} alt="" /><p style={{ fontSize: "12px",alignSelf:"center",margin:"auto" }}> {el.retweet.length} </p>
                        </div>
                        <div className="d-flex flex-row" style={{margin:"auto"}}>
                            <img onClick={() => { handleLIkePost(el._id); }} style={{ width: "44px", marginLeft: "73px" }} src={heart} alt="" /><span style={{ fontSize: "12px",alignSelf:"center",margin:"auto" }}>{el.like.length}</span>
                        </div>
                        <div className="d-flex flex-row" style={{margin:"auto"}}>
                            <img onClick={() => { handleDisLIkePost(el._id); }} style={{ width: "44px", marginLeft: "73px" }} src={heart} alt="" /><span style={{ fontSize: "12px",alignSelf:"center",margin:"auto" }}>{el.like.length}</span>
                        </div>
                        <div className="d-flex flex-row" style={{margin:"auto"}}>
                            <img style={{width:"44px",marginLeft:"73px"}} src={arrow}  alt="" />
                        </div>
                        
                        
                        
                        
                            
                    </div>
                    

                {/* reply ui starts from here */}
                    
                    <div>
                        {/* <h1>Tweets reply</h1> */}
                        {el.comment.map((el2) => {
                            return <div key={el2._id} style={{ borderTop: "none"}} >
                                    <div>
                                        <img alt="img" style={{width:"50px",height:"50px",borderRadius:"50%",float:"left"}} src={obj.profile_pic}/>
                                        <div className="desc">{el2.userName}<img style={{width:"23px",marginLeft:"3px"}} alt="" src={tick}/><span style={{color:"rgb(123,136,146)",fontWeight:"400",marginLeft:"3px",fontSize:"17.1px"}}>@{el2.userUserName}</span></div>
                                    <div style={{marginLeft:"64px"}}>  Replying to @{el.userId.username} </div>
                                    <br />
                                        <div className="description">{el2.commentTitle}</div>
                                </div>

                                {el2.image!=="" ? "" : <img className="mainPic" src={el2.image} alt="image7698"/>} 
                                        <div style={{marginLeft:"56px"}}>
                                            <img style={{ width: "40px" }} src={chat} alt="" /><span style={{ fontSize: "12px" }}>0</span>
                                            <img style={{width:"44px",marginLeft:"73px"}} alt="" src={circle}/><span style={{fontSize:"12px"}}>0</span>
                                            <img  style={{ width: "44px", marginLeft: "73px" }} alt="" src={heart} /><span style={{ fontSize: "12px" }}>0</span>
                                            <img style={{width:"44px",marginLeft:"73px"}} alt="" src={arrow}/><span style={{ fontSize: "12px" }}>0</span>
                                        </div>
                                </div>
                        })}
                    </div>

                {/* reply ui ends from here */}

                </div>
    
            })
        }
    </div>
}


export {Home}