import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
// import MonthPicker from '@mui/lab/MonthPicker';
import MonthPicker from "./MonthPicker";
import DayPicker from "./DayPicker";
import YearPicker from "./YearPicker";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, storeToken } from "../../Redux/action";

function SignUpModal({ setOpenModal }) {
  const [data, setData] = useState({});
  const [dob, setDob] = useState({})
  const loggedIn = useSelector(state => state.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (loggedIn) {
      history.push("/home");
    }
  },[])

  const handleChange = (e)=>{
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
  }

  const handleSignup = ()=>{
    const months = ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const temp = new Date();
    const month = temp.getMonth();
    const year = temp.getFullYear();

    const joinedDate = months[month] + " " + year;
    const dobString = `${dob.month} ${dob.day}, ${dob.year}` 

    const detail = {...data,
      dob: dobString,
      joinedDate,
    }

    const config = {
      method: "post",
      data: detail,
      url: `https://twitterrrr-serverrrr.herokuapp.com/signup`
    };

    axios(config)
        .then((data) => {
            // console.log(data);
            dispatch(storeToken(data.data));
            dispatch(setLoggedInUser(data.data.user));
          history.push("/home");
          //setLoading(false);
        })
        .catch((err) => {
            alert(err);
        })
  }

  return isLoading ? "" :(
    <MiddleModal>
      <Nav>
        <CustomClearIcon onClick={() => setOpenModal(false)} />
        <CustomTwitter style={{color:"#1A8CD8"}} fontSize="large" />
      </Nav>
      <Container>
        <h3>Create your account</h3>
        <InputGroup>
          <input type="text" name="name" onChange={handleChange} placeholder="Name" />
          <input type="text" name="username" onChange={handleChange} placeholder="User Name" />
          <input type="email" name="email" onChange={handleChange} placeholder="Email" />
          <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        </InputGroup>
        <p>Use email instead</p>
        <Section>
          <SpanFirst>Date of birth</SpanFirst>
          <SpanSecond>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </SpanSecond>
        </Section>

        <DatePicker>
          <MonthPicker dob={dob} setDob={setDob} />
          <DayPicker dob={dob} setDob={setDob} />
          <YearPicker dob={dob} setDob={setDob} />
        </DatePicker>
      </Container>
      <GroupButton>
        <Button onClick={handleSignup}>Sign Up</Button>
      </GroupButton>
    </MiddleModal>
  );
}

export default SignUpModal;

const MiddleModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  width: 600px;
  height: 550px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  overflow-y: auto;
  height: 75%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  p {
    color: #1d9bf0;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
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
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpanFirst = styled.span`
  font-weight: bold;
`;
const SpanSecond = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;
const GroupButton = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #87898c;
  padding: 10px 30px;
  border-radius: 100px;
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const DatePicker = styled.div`
  display: flex;
`;