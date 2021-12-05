import React, {useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import chat from "./images/chat.svg";
import styles from './modal.module.css';
import "./home.css";
import tick from "./images/tick.PNG";
import { useSelector } from 'react-redux';

import axios from "axios";

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

export const TransitionsModal = ({allComment,rerenderVar,rerenderfnc})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
    const [comment, setComment] = useState("");
    const obj = useSelector((state)=>state.loggedInUser)   // calling recuder

    console.log("obj",obj);

    const handlePostComment = () => {
        axios.post("http://localhost:3007/comment", {
          tweetId: allComment._id,
          commentTitle: comment,
          commentPic: "",
          userId: obj._id,                // fetch from redux important 
          userName: obj.name,
          userImage: "https://i.imgur.com/nRhKKpR.png",
          userUserName : obj.username
            
        })
          .then((data) => {
            rerenderfnc(!rerenderVar);
          })
  }
  


  const handleChange = (e) => {
    setComment(e.target.value);
  }

    return (
      
      <div>
            <div className="d-flex flex-row" style={{margin:"auto"}}>
              <img style={{ width: "40px" }} onClick={handleOpen} src={chat} /><p style={{ fontSize: "12px",alignSelf:"center",margin:"auto" }}>{allComment.comment.length}</p>
            </div>
            
            
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
                    <Box sx={style}>
                    {/* {allComment.userId.name}.....blue tick......{allComment.userId.username}....time <br />
                    {allComment.title}                                                               <br />
                        Replying to {allComment.userId.username}

                        <textarea onChange={(e) => { setComment(e.target.value) }} cols="30" rows="10"></textarea> <br />
                        
                        <button onClick={handlePostComment}>Post</button> */}
              
                        <div className={styles.modaldiv1}>
                        <img onClick={handleClose} style={{height:"36px"}} alt="" src="/images/cross.svg" />
              </div>

              <div >
                      <div className={styles.modaldiv2}>
                        <div>
                            <img alt="" src={obj.profile_pic}  />
                        </div>
                    <div className="d-flex flex-column" style={{justifyContent: 'space-between'}}>
                    <div className="mt-2"> <span style={{fontWeight: 'bold',fontSize:"14px"}}>{allComment.userId.name}</span> <img style={{ width: "23px", marginLeft: "3px" }} src={tick} alt="" /><span style={{ color: "rgb(123,136,146)", fontWeight: "400", marginLeft: "3px", fontSize: "17.1px" }}>@{allComment.userId.username}</span></div>
                              <div className="mb-3">
                      <span style={{fontSize:"14px",color:"#798690"}}>{allComment.title} </span>  <br />
                          <span style={{fontSize:"14px",color:"#798690"}}> Replying to   <span style={{fontSize:"14px",color:"#6ABDF5"}}> @{allComment.userId.username} </span>  </span>
                            </div>
                        </div>
                    </div> 
              </div>

                    <div className={styles.modaldiv2}>
                        <div>
                            <img alt="" src="" />
                        </div>
                <div style={{ width: '100%' }}>
                  <textarea placeholder="What's happening?" onChange={(e) => { setComment(e.target.value) }} cols="60" style={{border: '1px solid transparent'}} rows="3"></textarea>
                            {/* <input type="text" placeholder="What's happening?" value={comment} onChange={handleChange} /> */}
                            <div className={styles.icons2}>
                                <div>
                                    <img alt="" src="/images/5.svg" />
                                    <img alt="" src="/images/4.svg" />
                                    <img alt="" src="/images/3.svg" />
                                    <img alt="" src="/images/2.svg" />
                                    <img alt="" src="/images/1.svg" />
                                </div>
                    <button style={{backgroundColor:"#1D9BF0",color:"white",outline:"none",border:"0px",marginRight:"19px",borderRadius:"9999px",padding:"10px 15px" }} onClick={handlePostComment} > Comment</button>
                            </div>
                        </div>
                    </div>





          </Box>
        </Fade>
      </Modal>
    </div>
  );
}






// <Modal
//              open={open}
//              onClose={handleClose}
//              aria-labelledby="modal-modal-title"
//              aria-describedby="modal-modal-description">
//                 <Box sx={style}>
//                     <div className={styles.modaldiv1}>
//                         <img onClick={handleClose} style={{height:"36px"}} alt="" src="/images/cross.svg" />
//                     </div>
//                     <div className={styles.modaldiv2}>
//                         <div>
//                             <img alt="" src={user.profile_pic} />
//                         </div>
//                         <div style={{width: '100%'}}>
//                             <input type="text" placeholder="What's happening?" value={tweet} onChange={handleChange} />
//                             <div  className={styles.icons1}>
//                                 <img alt="" src="/images/earth.svg" />
//                                 <span>Everyone can reply</span>
//                             </div>
//                             <div className={styles.icons2}>
//                                 <div>
//                                     <img alt="" src="/images/5.svg" />
//                                     <img alt="" src="/images/4.svg" />
//                                     <img alt="" src="/images/3.svg" />
//                                     <img alt="" src="/images/2.svg" />
//                                     <img alt="" src="/images/1.svg" />
//                                 </div>
//                                 <Button>Tweet</Button>
//                             </div>
//                         </div>
//                     </div>
//                 </Box>
//             </Modal>