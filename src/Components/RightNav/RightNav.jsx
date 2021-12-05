import styles from "./RightNav.module.css";
import styled from "styled-components";
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";

export default function RightNav(){
    const [input, setInput] = useState(true);
    const [follow, setFollow] = useState([]);
    const Search = styled.div`
        background-color:${input?"#eff3f4":"white"};
        border: ${input?"none":"1px solid #1d9bf0"};
        padding: 10px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        margin-top: 5px;
        /* position: fixed;
        top: 0.2px; */
    `;

    const handleSearch = ()=>{
        setInput(!input)
    }

    const data = [
        {
            type:"Entertainment . LIVE",
            title:"Fans wish Juhi Chawla a happy birthday Party popper",
            tweets: "Trending with #JuhiChawla"
        },
        {
            type:"Sport . Trending",
            title:"#IND vs AFG",
            tweets: "7800 Tweets"
        },
        {
            type:"Entertainment . Trending",
            title:"#Happy Birthday SRK",
            tweets: "10051 Tweets"
        },
        {
            type:"Cricket . Trending",
            title:"#ViratKholi",
            tweets: "11051 Tweets"
        }
    ]

    function allUser(){
        axios.get("http://localhost:3007/user").then((data)=>{
            // console.log(data.data);
            const user = data.data.filter((e, i)=>i<3);
            setFollow(user);
        })
    }
    
    useEffect(() => {
        allUser();
    },[]);
    
    return (

        <div className={styles.rightNav}>
            <Search>
                <img src={input?"/images/searchLogo.svg":"/images/searchLogoT.svg"} height="15" width="15" alt=""/>
                <input type="text" placeholder="Search Twitter" onClick={handleSearch} onMouseLeave={handleSearch}/>  
            </Search>
            <div className={styles.whats}>
                <p>What's happening</p>
                {data.map((e)=>(
                    <div className={styles.trends}>
                        <span>{e.type}</span>
                        <br/>
                        <span>{e.title}</span>
                        <br/>
                        <span>{e.tweets}</span>
                    </div>
                ))}
                <div className={styles.showMore}>
                    <Link to="/explore">Show more</Link>
                </div>
            </div>
            <div className={styles.whats}>
                <p>Who to follow</p>
                {follow.map((e)=>(
                    <div className={styles.perFollow}>
                        <div className={styles.tweetsData}>
                            <img src={e.profile_pic} alt="" height="24" width="24" />
                            <div style={{padding:"0px 12px"}}>
                                <span>{e.name}</span>
                                <br />
                                <span>@{e.username}</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <div className={styles.showMore}>
                    <Link to="/explore">Show more</Link>
                </div>
            </div>
            <div className={styles.footer}>
                <span onClick={()=>{window.open("https://twitter.com/en/tos")}}>Terms of Service</span>
                <span onClick={()=>{window.open("https://twitter.com/en/privacy")}}>Privacy Policy</span>
                <span onClick={()=>{window.open("https://help.twitter.com/en/rules-and-policies/twitter-cookies")}}>Cookie Policy</span>
                <span onClick={()=>{window.open("https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo")}}>Ads info</span>
                <span onClick={()=>{}}>More...</span>
                <span>© 2021 Twitter, Inc.</span>
            </div>
        </div>
    )
}