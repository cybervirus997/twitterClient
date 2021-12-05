import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, storeToken } from "../../Redux/action";

function SignInModal({ setOpenModalSecond }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const loggedIn = useSelector(state => state.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      history.push("/home");
    }
  },[])
  
  const HandleChange = () => {

    const loginData = {
      email,
      password
    }
      
    const config = {
      method: "post",
      data: loginData,
      url: `http://localhost:3007/login`
    };
    axios(config)
        .then((data) => {
            // console.log(data);
            dispatch(storeToken(data.data));
            dispatch(setLoggedInUser(data.data.user));
            history.push("/home");
        })
        .catch((err) => {
            alert(err);
        })
  };


  return (
    <MiddleModal>
      <Nav>
        <CustomClearIcon onClick={() => setOpenModalSecond(false)} />
        <CustomTwitter style={{color:"#1A8CD8"}} fontSize="large" />
      </Nav>
      <p>To get started, first enter your phone, email address or @username</p>
      <Container>
        <InputGroup>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <GroupButton>
          <Button
            onClick={HandleChange}
            style={{ backgroundColor: `${email && password ? "black" : ""}` }}
          >
            {email && password ? (
              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Next
              </div>
            ) : (
              <span style={{ borderBottom: "2px solid black" }}>
                Forget-password?
              </span>
            )}
          </Button>
        </GroupButton>
      </Container>
    </MiddleModal>
  );
}

export default SignInModal;

const MiddleModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  width: 630px;
  height: 580px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    padding: 2px 25px;
    font-size: 25px;
    margin-bottom: 0px;
    font-weight: bold;
  }
`;
const Nav = styled.div`
  position: relative;
  padding: 20px;
`;
const CustomClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
const CustomTwitter = styled(TwitterIcon)`
  position: absolute;
  left: 50%;
  color: blue;
`;
const Container = styled.div`
  height: 75%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  p {
    color: #1d9bf0;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  input {
    width: 100%;
    height: 55px;
    padding: 10px;
    border: 0px;
    margin-bottom: 23px;
    font-size: 12px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(211, 211, 211);
    font-size: 17px;
    &:focus {
      border: 2px solid #1d9bf0;
    }
  }
`;

const GroupButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  width: 97%;
  display: flext;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 100px;
  color: black;
  margin-bottom: 20px;
  font-weight: 600px;
  &:hover {
    cursor: pointer;
    background-color: #e6e7e7;
    transition: background-color 1000ms linear;
  }
`;