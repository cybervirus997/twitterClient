import React, { useState,useEffect,useRef } from 'react'
import axios from 'axios'


const SaveBtn =
{
    borderRadius: "9999px",
    backgroundColor: "black",
    color: "white",
    width: "70px",
    height: "30px",
    textAlign: "center"
}


export const Overlay = ({variable12,fnc,userId,closing}) => {

    
    //  Custom css states only starts here
    const [customName, setCustomName] = useState("")
    const [customBio, setCustomBio] = useState("")
    const [customLocation, setCustomLocation] = useState("");
    const [customWeb, setCustomWeb] = useState("")

    const [color, setColor] = useState("#CFD9DE")
    const [color1, setColor1] = useState("#CFD9DE")
    const [color2, setColor2] = useState("#CFD9DE")
    const [color3, setColor3] = useState("#CFD9DE")

    const [occur, setOccur] = useState("none")
    const [occur1, setOccur1] = useState("none")
    const [occur2, setOccur2] = useState("none")
    const [occur3,setOccur3]= useState("none")
    
    const handleColor = () =>
    {
        setColor("#1D9BF0")
        setOccur("block")
    }
    const handleColor1 = () =>
    {
        setColor1("#1D9BF0")
        setOccur1("block")
    }
    const handleColor2 = () =>
    {
        setColor2("#1D9BF0")
        setOccur2("block")
    }
    const handleColor3 = () =>
    {
        setColor3("#1D9BF0")
        setOccur3("block")
    }
    //  Custom css states only starts ends


    const [coverBtn, setCoverBtn] = useState("block")
    
    const handleIcon = () => {
        setCoverBtn("none")
        console.log(coverBtn)
    }


    // Image uploading starts
    const picRef = useRef();
    const dpRef = useRef();


     useEffect(() => {
         document.getElementById('coverPic').style.display = "none";
         document.getElementById('profile_pic').style.display = "none";
    }, [])

    
    const [wholeData, setWholeData] = useState({});


    const handleInput = (e) => {
        const { name, value } = e.target;
        setWholeData({...wholeData,[name]:value})
    }


    // var loadFile = function (event) {
    //     var output = document.getElementById('coverPic');
    //     output.style.display = "block";
    //     output.src = URL.createObjectURL(event.target.files[0]);
    //     output.onload = function() {
    //         URL.revokeObjectURL(output.src) // free memory
    //     }
    //     console.log(output.src);
    // };

    // var loadFile1 = function (event) {
    //     var output1 = document.getElementById('profile_pic');
    //     output1.style.display = "block";
    //     output1.src = URL.createObjectURL(event.target.files[0]);
    //     output1.onload = function() {
    //         URL.revokeObjectURL(output1.src) // free memory
    //     }
    // };

    //  const handlePublish = () => {
    //     let formData = new FormData();
    //      formData.append('cover_pic', picRef.current.files[0]);
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
    // }

    // Image uploading ends



    const handlePublish = () => {
        let usered = userId;
        axios.patch("http://localhost:3007/user/" + usered, wholeData)
            .then(data => {
                fnc(!variable12);
                closing();
                console.log(data)
            })
        .catch(err => console.log(err))
    }


    const customInputBox = {
        position: 'absolute',
        width: '60px',
        height: '40px',
        backgroundColor:"transparent",
        borderRadius: "50%",
        fontSize: "00px",
        left: "46%",
        top:"45%"
    }

    const customInputBox2 = {
        position: 'absolute',
        width: '40px',
        height: '40px',
        borderRadius: "50%",
        backgroundColor:"transparent",
        fontSize: "0px",
        left: "28%",
        top:"28%"
    }


    return (
        <div style={{border:"1px solid transparent"}}>
            <div >
             <div className="col-12 mt-2 d-flex flex-row" style={{ height:"38px",justifyContent: 'space-between' }}>
                <div className=" col-3 ms-2 d-flex flex-row" style={{ justifyContent: 'space-between' }}>
                    <img src="https://user-images.githubusercontent.com/72969348/140471535-f729df6c-ebcd-4a19-9720-907f6c3cc9b8.png" alt="cross" height="18px" className="m-1" />
                    <p style={{fontSize:"18px",fontWeight:"600",marginRight:"13px"}}>Edit profile</p>
                </div>
                
                <div className=" me-3" style={SaveBtn} onClick={handlePublish} >
                    <p style={{fontSize:"16px",fontWeight:"600",color:"white",paddingTop:"2.5px"}}>
                        Save
                    </p>
                </div>
            </div>
        </div>
        <div style={{backgroundColor: 'white',height:"60vh",overflowY:"scroll"}}>

            <div className="col-12" style={{ position: "relative",height:"250px",backgroundColor:"white"}}>
                {/* cover pic */}
                <div className="col-12" style={{ position: "relative", height: "198px", backgroundColor: "grey" }}>
                    
                        <input ref={picRef} id="ubtn" type="file" accept="image/*" style={customInputBox}  />  {/* onChange={(event) => loadFile(event)}*/}
                        
                        <div style={{ position:"absolute",width:"20px",top:"45%",left:"49%"}}>
                            <svg fill= "white" viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je"><g><path d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"></path><path d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"></path></g></svg>
                        </div>

                    <img id="coverPic" style={{position:"absolute",objectFit: "cover",top:"0",left:"0",width: "100%", height: "100%"}} />

                    {/* className={styles.upl} className={styles.uplDiv}*/}

                </div>
                {/* cover pic */}
                {/* display pic */}
                <div style={{position:"absolute",bottom:"0%",left:"3%",height:"104px",width:"104px",borderRadius:"50%",backgroundColor:"grey",border:"4px solid white"}}>

                        <input ref={dpRef} id="ubtn" type="file" accept="image/*" style={customInputBox2} />   {/* onChange={(e) =>  loadFile1(e)} */}
                        
                        <div style={{ position:"absolute",width:"20px",top:"35%",left:"38%",}}>
                            <svg fill= "white" viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je"><g><path d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"></path><path d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"></path></g></svg>
                        </div>

                    <img id="profile_pic" style={{position:"absolute",objectFit: "cover",top:"0",left:"0",height:"94px",width:"94px",borderRadius:"50%"}} />


                </div>
                {/* display pic */}
            </div>

            
            <div className="col-12">
                
                <div className="col-11 m-4" style={{margin:"auto",border:`2px solid ${color}`,borderRadius:"8px"}}>
                    <div className="col-12 ps-3 d-flex flex-row" style={{justifyContent:"space-between"}}>
                        <p style={{display:`${occur}`,fontSize:"13px",marginTop:"5px",color:"#1D9BF0",marginBottom:"0px"}}>Name</p>   <p style={{display:`${occur}`,fontSize:"13px",marginTop:"5px",color:"#7B8892",marginBottom:"0px",paddingRight:"19px"}}>{customName.length}/60</p>
                    </div>
                        <textarea type="text" placeholder="Name" name="name" rows="1" cols="1" maxLength="60" className="col-11 ps-3" onChange={(e) => { handleInput(e); setCustomName(e.target.value); handleColor(e) }} style={{resize:"none",border:"none",outline:"none"}}/>
                </div>

                <div className="col-11 m-4" style={{margin:"auto",border:`2px solid ${color1}`,borderRadius:"8px"}}>
                    <div className="col-12 ps-3 d-flex flex-row" style={{justifyContent:"space-between"}}>
                        <p style={{display:`${occur1}`,fontSize:"13px",marginTop:"5px",color:"#1D9BF0",marginBottom:"0px"}}>Bio</p>   <p style={{display:`${occur1}`,fontSize:"13px",marginTop:"5px",color:"#7B8892",marginBottom:"0px",paddingRight:"19px"}}>{customBio.length}/160</p>
                    </div>
                    <textarea type="text" placeholder="Bio" name="bio" rows="1" cols="1" maxLength="160" className="col-11 ps-3" onChange={(e) => { handleInput(e); setCustomBio(e.target.value); handleColor1(e) }} style={{resize:"none",border:"none",outline:"none"}}/>
                </div>

                <div className="col-11 m-4" style={{margin:"auto",border:`2px solid ${color2}`,borderRadius:"8px"}}>
                    <div className="col-12 ps-3 d-flex flex-row" style={{justifyContent:"space-between"}}>
                        <p style={{display:`${occur2}`,fontSize:"13px",marginTop:"5px",color:"#1D9BF0",marginBottom:"0px"}}>Location</p>   <p style={{display:`${occur2}`,fontSize:"13px",marginTop:"5px",color:"#7B8892",marginBottom:"0px",paddingRight:"19px"}}>{customName.length}/30</p>
                    </div>
                    <textarea type="text" placeholder="Location" name="location" rows="1" cols="1" maxLength="30" className="col-11 ps-3" onChange={(e) => {handleInput(e); setCustomLocation(e.target.value); handleColor2(e) }} style={{resize:"none",border:"none",outline:"none"}}/>
                </div>

                <div className="col-11 m-4" style={{margin:"auto",border:`2px solid ${color3}`,borderRadius:"8px"}}>
                    <div className="col-12 ps-3 d-flex flex-row" style={{justifyContent:"space-between"}}>
                        <p style={{display:`${occur3}`,fontSize:"13px",marginTop:"5px",color:"#1D9BF0",marginBottom:"0px"}}>Website</p>   <p style={{display:`${occur3}`,fontSize:"13px",marginTop:"5px",color:"#7B8892",marginBottom:"0px",paddingRight:"19px"}}>{customName.length}/100</p>
                    </div>
                    <textarea type="text" placeholder="Website" name="website" id="" rows="1" cols="1" maxLength="100" className="col-11 ps-3" onChange={(e) => { handleInput(e); setCustomWeb(e.target.value); handleColor3(e) }} style={{resize:"none",border:"none",outline:"none"}}/>
                </div>
                    
                    <div className="col-11 m-4 d-flex flex-row" style={{ margin: "auto",justifyContent:"space-between"}}>
                        <p style={{ fontSize: "18px" }}>Switch to professional </p>
                        <div className="col-1 me-2 mt-0" style={{width:"15px"}} >
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-1j3zfw3 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"></path></g></svg>
                        </div>
                    </div>

            </div>



            </div>
            
            </div>
    )
}





// var loadFile = function (event) {
//         setPicDisp(true);
//         var output = document.getElementById('output');
//         output.style.display = "block";
//         output.src = URL.createObjectURL(event.target.files[0]);
//         output.onload = function() {
//             URL.revokeObjectURL(output.src);
//         }
//     };

    // const handlePublish = () => {
    //     console.log(picRef.current.files[0]);
    //     let formData = new FormData();
    //     formData.append('title', inpData.title);
    //     formData.append('body', inpData.body);
    //     formData.append('author', loggedInUser._id);
    //     formData.append('image', picRef.current.files[0]);
    //         const config = {     
    //             headers: { 'content-type': 'multipart/form-data' }
    //     }
    //     // console.log(formData, inpData);
    //         axios.post(`${url}/posts`, formData, config)
    //             .then(response => {
    //                 console.log(response.data);
    //                 setOpen(true);
    //                 setTimeout(() => {
    //                     history.push(`/users/${loggedInUser.username}`)
    //                 }, 2300)
    //             })
    //             .catch(error => {
    //                 alert(error);
    //             });
    // }


    // const handlePublish = () => {
    //     console.log(picRef.current.files[0]);
    //     let formData = new FormData();
    //     formData.append('title', inpData.title);
    //     formData.append('body', inpData.body);
    //     formData.append('author', loggedInUser._id);
    //     formData.append('image', picRef.current.files[0]);
    //         const config = {     
    //             headers: { 'content-type': 'multipart/form-data' }
    //     }
    //     // console.log(formData, inpData);
    //         axios.post(`${url}/posts`, formData, config)
    //             .then(response => {
    //                 console.log(response.data);
    //                 setOpen(true);
    //                 setTimeout(() => {
    //                     history.push(`/users/${loggedInUser.username}`)
    //                 }, 2300)
    //             })
    //             .catch(error => {
    //                 alert(error);
    //             });
    // }

//  <input ref={picRef} id="ubtn" hidden type="file" accept="image/*" onChange={(event)=> loadFile(event)}/>