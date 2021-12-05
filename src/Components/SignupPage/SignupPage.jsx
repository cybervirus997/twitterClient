import React from "react";
import styled from "styled-components";
import { useState } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
let modalController = false;
function SignupPage() {
  const [toggle, setToggle] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModalSecond, setOpenModalSecond] = useState(false);
  // const HandleSignup = () => {
  //   return (
  //     <div>
  //       <Modal>
  //         <TopSection>
  //           <p>safi</p>
  //           <p>img</p>
  //         </TopSection>
  //         <Input type="text" />
  //       </Modal>
  //     </div>
  //   );
  // };

  // const createModal = function () {
  //   return (
  //     <div>
  //       <SignUpModal />
  //       {console.log("safi")}
  //     </div>
  //   );
  // };
  // const ModalHandler = () => {
  //   return (
  //     <>
  //       <h2 style={{ backgroundColor: "red" }}>Safiur Rahaman</h2>
  //     </>
  //   );
  // };
  return (
    <Wrap
      style={{
        zIndex: `${openModal ? 1 : 0}`,
        // backgroundColor: `${openModal ? "lightgray" : "white"}`,
        backgroundColor: `${openModalSecond ? "gray" : ""}`,
      }}
    >
      {/* {false && toggle ? (
        <SignUpModal setOpenModal={setOpenModal} />
      ) : (
        <SignInModal setOpenModal={setOpenModal} />
      )} */}
      {openModal && <SignUpModal setOpenModal={setOpenModal} />}
      {openModalSecond && (
        <SignInModal setOpenModalSecond={setOpenModalSecond} />
      )}
      <Container
        style={{
          visibility: `${openModalSecond ? "hidden" : ""}`,
          backgroundColor: `${openModalSecond ? "gray" : ""}`,
          backgroundColor: `${openModal ? "gray" : ""}`,
        }}
      >
        <LeftSection
          style={{
            zIndex: `${openModal ? 0 : 16}`,
            opacity: `${openModal ? 0.3 : ""}`,
          }}
        >
          <i className="bi bi-twitter"></i>
        </LeftSection>
        <RightSection>
          <i className="bi bi-twitter" style={{color:"#1A8CD8"}}></i>
          <h1>Happening now</h1>
          <h4>Join Twitter today</h4>
          <ButtonGroup>
            <Button>
              <img src="/images/google_icon.svg" alt="" />
              <span>
                {toggle ? "Sign up with Google" : "Sign in with Google"}
              </span>
            </Button>
            <Button>
              <i class="bi bi-apple"></i>
              <span style={{ fontWeight: "bold" }}>
                {toggle ? "Sign up with Apple" : "Sign in with Apple"}
              </span>
            </Button>
            <Button
            // onClick={() => {
            //   setOpenModal(true);
            //   setOpenModalSecond(true);
            // }}
            >
              {/* <span> */}
              {toggle ? (
                <p
                  style={{ fontWeight: "bold" }}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Sign up with phone or email
                </p>
              ) : (
                <p
                  style={{ fontWeight: "bold" }}
                  onClick={() => setOpenModalSecond(true)}
                >
                  Use your phone number,email add...
                </p>
              )}
              {/* </span> */}
            </Button>
            <span>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </span>
          </ButtonGroup>
          <Section>
            <p>Already have an account?</p>
            <Span onClick={() => setToggle(!toggle)}>
              {toggle ? "Sign in" : "Sign up"}
            </Span>
          </Section>
        </RightSection>
      </Container>
      <Footer>
        <p>About</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Ads info</p>

        <p>Blog</p>

        <p>Status</p>
        <p>Careers</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>Twitter for Business</p>
        <p>Developers</p>

        <p>Directory</p>

        <p>Settings</p>
        <p>© 2021 Twitter, Inc.</p>
      </Footer>
    </Wrap>
  );
}

export default SignupPage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: no-wrap;
  opacity: ${modalController ? "0.8" : ""};
`;

const LeftSection = styled.div`
  width: 55vw;
  height: 96vh;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/twitter.png");
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: white;
    z-index: 16;
    font-size: 18rem;
  }
`;
const RightSection = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  p {
    margin-top: 10px;
    font-size: 16px;
  }
  span {
    font-size: 15px;
  }
  h1 {
    margin-top: 50px;
    font-size: 4.5rem;
    font-weight: 800;
  }
  h4 {
    font-size: 2.5rem;
    margin-top: 25px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  i {
    color: blue;
    font-size: 3rem;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonGroup = styled.div``;
const Button = styled.div`
  border: 1px solid #e1e7f2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 42px;
  margin: 10px;
  padding: 15px;
  border-radius: 100px;
  cursor: pointer;
  img {
    width: 17px;
    height: 20px;
  }
  i {
    font-size: 1rem;
    color: black;
  }
  span {
    margin-left: 5px;
  }
  &:hover {
    background-color: #e6e6e6;
    transition: background-color 1000ms linear;
  }
`;
const Span = styled.div`
  color: #109afb;
  margin-bottom: 8px;
  margin-left: 5px;
  cursor: pointer;
`;
const Wrap = styled.div`
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow-x: hidden;
  background-color: ${modalController ? "rgba(0, 0, 0, 0.4)" : ""};
`;
// const Modal = styled.div`
//   position: fixed;
//   z-index: 999;
//   width: 500px;
//   height: 400px;
//   margin: auto;
//   background-color: red;
// `;
// const Input = styled.div``;
// const TopSection = styled.div``;
const Footer = styled.div`
  display: flex;
  padding: 0 2rem;
  margin-top: -20px;
  flex-wrap: wrap;
  justify-content: center;
  p {
    padding: 5px 7px;
    font-size: 13px;
    color: #586875;
    line-height: 1.8;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;
