import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { Overlay } from './Overlay';
import { ProfileLikes } from './ProfileLikes';
import { ProfileReplies } from './ProfileReplies';
import { ProfileTweets } from './ProfileTweets';
import CircularProgress from '@mui/material/CircularProgress';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: -30%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
`;

const Backdrop = styled('div')`
  z-index: -9;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: "596px",
    height:"256px",
    backgroundColor: "white",
    borderColor:"transparent",
};


export const Profile = () => {

    const [slider, setSlider] = useState(0);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState({});

    const [loading, setLoading] = useState(true);
    const [dummy, setDummy] = useState(true);
    

     const obj = useSelector((state)=>state.loggedInUser)   // calling recuder

    useEffect(() => {
        getter();
     },[dummy])
    
    let userId = obj._id;
    const getter = () => {
         axios.get("http://localhost:3007/user/profiledata/"+userId)
            .then((res) =>
            {
                console.log(res.data)
                setData(res.data)
                setLoading(false);
            })
        .catch((err) => {
            console.log("not found any datas")
        })
    }
    




    const SecoundaryColorOption = {
        fontSize: "12px",
        color: "rgb(83, 100, 113)",
        margin: "0"
    }

    const PrimaryColorOption = {
        fontSize: "18px",
        margin: "0",
        fontWeight: "bold"
    }

    // console.log(object)
    

    return (

        loading ? <div style={{ position: "absolute",left:"40vw",top:"40vh" }}> <CircularProgress /> </div> :
        <div>

            <div className="col-12 mt-1 d-flex flex-row">
                <div className="col-1 m-3" style={{ height: '18px',width:"18px",borderRadius: '50%'}}>
                    <svg viewBox="0 0 24 39" aria-hidden="true" className="r-54znze r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
                </div>
                <div className="col-10 ms-2" >
                    <p style={PrimaryColorOption}>{data.name}</p>
                        <p style={SecoundaryColorOption}>{data.tweets.length} tweets</p>
                </div>
            </div>

            <div className="col-12" style={{height:"260px",position:"relative"}}>
                {/* jugggad */}
                    <div className="col-12 mt-1">
                        <img src="https://plchldr.co/i/250x215?&bg=b2b2b2&text=" alt="Cover_pic" className="img-fluid col-12" style={{ height: '199px' }} />   {/* edit this for covre pic issue IMPOrtabnnt */}
                    {/* <img src={ data.cover_pic==="" ? "https://plchldr.co/i/250x215?&bg=b2b2b2&text=" : data.cover_pic } alt="Cover_pic" className="img-fluid col-12" style={{ height: '199px'}} /> */}
            </div>

            <div className="col-11 d-flex flex-row" style={{ margin:"auto",justifyContent:"space-between" }}>
                <div className="col-3" >
                        <img src={data.profile_pic==="" ? "https://plchldr.co/i/250x215?&bg=b2b2b2&text=" : data.profile_pic  } className="img-fluid" alt="profile_pic" width="135px"  style={{bottom:"0px",position: 'absolute',borderRadius:"50%",border:"4px solid white",height:"135px"}}/>
                </div>
                <div className="col-3 mt-3">
                    <div style={{fontWeight: "600",fontSize: "14px",padding: "3px",borderRadius:"9999px",border:"1px solid",borderColor:"rgb(207, 217, 222)",textAlign:"center",backgroundColor:"none"}} onClick={handleOpen}>Edit profile</div>
                </div>
            </div>
                {/* jugggad */}
            </div>

            <div className="col-11 mt-2" style={{ margin:"auto" }}>
                <div>
                    <p style={{margin:"0",fontSize:"18px",fontWeight:"800"}}>{data.name}</p>
                    <p style={{ fontSize: "14px",fontWeight:"400",color: "rgb(83, 100, 113)", margin: "0" }}>@{data.username}</p>
                </div>

                <div className="" style={{ fontWeight:"400",fontSize: "14px",marginTop:"3px"}}>
                    {data.bio} 
                </div>

                <div className="col-12 d-flex flex-row" style={{height:"19px",color:"#7B8892",marginTop:"3px"}}>
                    
                    <div className="d-flex flex-row mt-1 me-3" style={{height:"16px"}}>
                        <div className="col-1 me-2 " style={{width:"15px"}} >
                        <svg viewBox="0 0 24 36" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g></svg>
                        </div>
                        <div>
                            <p style={{ fontWeight:"400",fontSize: "14px" }}>
                                {data.location}
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row mt-1 me-3" style={{height:"16px"}}>
                        <div className="col-1 me-2 mt-0" style={{width:"15px"}} >
                        <svg viewBox="0 0 24 31" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g></svg>
                        </div>
                        <div>
                            <p style={{fontWeight:"400", fontSize: "14px" }}>
                                {data.website}
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row mt-1 me-3" style={{height:"16px"}}>
                        <div className="col-1 me-2 mt-0" style={{width:"15px"}} >
                        <svg viewBox="0 4 24 30" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
                        </div>
                        <div>
                            <p style={{ fontWeight:"400",fontSize: "14px" }}>
                                Joined on {data.joinedDate}
                            </p>
                        </div>
                    </div>

                </div>

                <div className="" style={{marginTop:"10px"}}>
                    <p style={{ fontSize: "14px", color: "#7B8892" }}> <span style={{ fontWeight: "700", color: "black" }}>  {data.followers.length} </span> followers    <span style={{color:"transparent"}}>......</span> <span style={{fontWeight:"700",color:"black"}}>  {data.following.length} </span> following </p>
                </div>
            </div>

            <div className="col-12 mt-3 d-flex flex-row text-center" style={{cursor:"pointer"}}>
                <div className="col-3" onClick={() => setSlider(0)}>
                    {slider === 0 ? <span style={{ fontWeight: "700" }}>Tweets</span> : <span style={{color:"#7B8892"}}>Tweets</span>}
                    { slider===0 ? <div style={{margin:"auto",width:"40%",height:"5px",backgroundColor:"rgb(29,155,240)",borderRadius:"9999px"}}></div> : ""}
                </div>
                <div className="col-3" onClick={() => setSlider(1)}>
                    { slider===1 ? <span style={{fontWeight:"700"}}>Tweets repilies</span> : <span style={{color:"#7B8892"}}>Tweets repilies</span>}
                    { slider===1 ? <div style={{margin:"auto",width:"80%",height:"5px",backgroundColor:"rgb(29,155,240)",borderRadius:"9999px"}}></div> : ""}
                </div>
                <div className="col-3" onClick={() => setSlider(2)}>
                    { slider===2 ? <span style={{fontWeight:"700"}}>Media</span> : <span style={{color:"#7B8892"}}>Media</span>}  
                    { slider===2 ? <div style={{margin:"auto",width:"37%",height:"5px",backgroundColor:"rgb(29,155,240)",borderRadius:"9999px"}}></div> : ""}
                </div>
                <div className="col-3" onClick={() => setSlider(3)}>
                { slider===3 ? <span style={{fontWeight:"700"}}>Likes</span> : <span style={{color:"#7B8892"}}>Likes</span>}  
                    { slider===3 ? <div style={{margin:"auto",width:"40%",height:"5px",backgroundColor:"rgb(29,155,240)",borderRadius:"9999px"}}></div> : ""}
                </div>
            </div>


            {/* modaal for profike editing */}

                <StyledModal
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
                >
                <Box sx={style}>
                        <Overlay variable12={dummy} fnc={setDummy} userId={obj._id} closing={handleClose} />
                </Box>
            </StyledModal>

             {/* modaal for profike editing */}

                <div className="col-12">
                    
                { slider===0 ? <div className="col-12 m-2">
                        <ProfileTweets tweets={data.tweets} bigdata={data}  />
                </div> : slider===1 ? <div className="col-12 m-2">
                    <ProfileReplies />
                </div> : slider === 2 ? <div className="col-12" style={{ textAlign: "center" }}>
                                
                                <div className="col-8 p-4" style={{margin:"auto"}}>
                                    <img src="https://user-images.githubusercontent.com/72969348/141507106-f2ed876a-6089-49af-b3e0-cfd0a6e8fc6b.png" alt="" className="col-12" />
                                </div>

                </div> : <div className="col-12 mt-2">
                        <ProfileLikes />
                </div> }
            </div>
            
        </div>
    )
}
