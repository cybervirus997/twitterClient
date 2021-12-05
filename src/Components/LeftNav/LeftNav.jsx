import * as React from 'react';
import styles from './LeftNav.module.css';
import {NavLink, useLocation} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import {deleteToken} from "../../Redux/action";
import { useHistory } from "react-router";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from "styled-components";

const navTabs = [ 
    {
        title: "Home",
        logo: "/images/home.svg",
        activeLogo:"/images/homeActive.svg",
        path: "/home",
    },
    {
        title: "Explore",
        logo: "/images/explore.svg",
        activeLogo:"/images/exploreActive.svg",
        path: "/explore",
    },
    {
        title: "Notifications",
        logo: "/images/notifications.svg",
        activeLogo:"/images/notificationsActive.svg",
        path: "/notifications",
    },
    {
        title: "Messages",
        logo: "/images/messages.svg",
        activeLogo:"/images/messagesActive.svg",
        path: "/messages",
    },
    {
        title: "Bookmarks",
        logo: "/images/bookmarks.svg",
        activeLogo:"/images/bookmarksActive.svg",
        path: "/bookmarks",
    },
    {
        title: "Lists",
        logo: "/images/lists.svg",
        activeLogo:"/images/listsActive.svg",
        path: "/lists",
    },
    {
        title: "Profile",
        logo: "/images/profile.svg",
        activeLogo:"/images/profileActive.svg",
        path: "/profile",
    }
]

const style = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "16px",
    maxHeight: "90vh",
    maxWidth: "80vw",
    minWidth: "600px"
};

export default function LeftNav(){
    const {pathname} = useLocation();
    const user = useSelector(state=>state.loggedInUser);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [tweet, setTweet] = React.useState("");
    const [drop, setDrop] = React.useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const Button = styled.button`
        background-color: ${tweet.length>0?"#1d9bf0":"rgb(142,205,248)"};
        font-size: 16px;
        font-weight: 600;
        border: none;
        color: white;
        padding: 6px 18px;
        border-radius: 100px;
        margin-top: 5px;
        margin-right: 18px;
    `;

    const Dropbox = styled.div`
       display  : ${drop?"none":"block"};
       width : 250px;
       box-shadow: 4px 3px 8px 1px #d4d4d4;
       background-color: white;
       height: 134px;
       z-index : 100;
       position: relative;
       box-shadow: 5px;
       border-radius: 20px;       
    `;

    const handleOpen11 = ()=>{
        setDrop(!drop)
    }

    const handleChange = (e)=>{
        setTweet(e.target.value);
    }

    const handleLogout = ()=>{
        dispatch(deleteToken());
        history.push("/");
    }

    const handleCloseDropbox = ()=>{
        console.log("13213");
        setDrop(true)
    }

    

    return <div className={styles.leftNav}>
        <div>
            <img className={styles.logo} src="/images/logo.svg" alt="" width="28" height="28" />
            <ul>
                {navTabs.map((e, i)=>(
                    <li key={i}>
                        <img alt="" src={pathname===e.path?e.activeLogo:e.logo} height="22" width="22" />
                        <NavLink activeClassName={styles.active_tag} to={e.path}>{e.title}</NavLink>
                    </li>
                ))}
                <li>
                    <img alt="" src="/images/more.svg" height="22" width="22" />
                    <NavLink to="#">More</NavLink>
                </li>
            </ul>
            <button className={styles.tweetBtn} onClick={handleOpen}>Tweet</button>
        </div>
        <Dropbox>
            <div className={styles.dropbox}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <img alt="" src={user.profile_pic} height="40" width="40" />
                    <div className={styles.user}>
                        <span>{user.name}</span>
                        <br />
                        <span>@{user.username}</span>
                    </div>
                </div>
                <img alt="" src="/images/rightArrow.svg" height="13" width="12" />
            </div>
            <div className={styles.logout}>
                <p>Add an existing account</p>
                <p onClick={handleLogout}>Log out @{user.username}</p>
            </div>
        </Dropbox>
        <div className={styles.profile} onClick={handleOpen11}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                <img alt="" src={user.profile_pic} height="40" width="40" />
                <div className={styles.user}>
                    <span>{user.name}</span>
                    <br />
                    <span>@{user.username}</span>
                </div>
            </div>
            <img alt="" src="/images/logOutTab.svg" height="22" width="22"  />
        </div>
        <div>
            <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className={styles.modaldiv1}>
                        <img onClick={handleClose} style={{height:"36px"}} alt="" src="/images/cross.svg" />
                    </div>
                    <div className={styles.modaldiv2}>
                        <div>
                            <img alt="" src={user.profile_pic} />
                        </div>
                        <div style={{width: '100%'}}>
                            <input type="text" placeholder="What's happening?" value={tweet} onChange={handleChange} />
                            <div  className={styles.icons1}>
                                <img alt="" src="/images/earth.svg" />
                                <span>Everyone can reply</span>
                            </div>
                            <div className={styles.icons2}>
                                <div>
                                    <img alt="" src="/images/5.svg" />
                                    <img alt="" src="/images/4.svg" />
                                    <img alt="" src="/images/3.svg" />
                                    <img alt="" src="/images/2.svg" />
                                    <img alt="" src="/images/1.svg" />
                                </div>
                                <Button>Tweet</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    </div>
}