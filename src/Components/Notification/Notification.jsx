import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AllContent from "./AllContent";
import MentionContent from "./MentionContent";
function Notification() {
  const [showContent, setShowContent] = useState();
  return (
    <Container>
      <Nav>
        <Left> Notifications</Left>
        <SettingIcon>
          <i class="bi bi-gear"></i>
        </SettingIcon>
      </Nav>
      <TabSection>
        <All onClick={() => setShowContent(true)}>
          <span> All</span>
        </All>
        <Mention onClick={() => setShowContent(false)}>
          <span> Mentions </span>
        </Mention>
      </TabSection>
      <Content>{showContent ? <AllContent /> : <MentionContent />}</Content>
    </Container>
  );
}

export default Notification;

const Container = styled.div`
  width: 100%;
`;
const Nav = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 17px;
`;
const SettingIcon = styled.div`
  cursor: pointer;
`;
const TabSection = styled.div`
  display: flex;
`;
const All = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 100px;
  span {
    position: relative;
    &:before {
      display: flex;
      background-color: #1D9BF0;
      border-radius: 100px;
      bottom: -6px;
      content: "";
      height: 4px;
      opacity: 0;
      transform: scaleX(0);
      position: absolute;
      left: -15px;
      right: 0px;

      bottom: 200;
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: 50px;
    }
  }
  &:hover {
    background-color: #e6e7e7;
    font-weigh: bold;
    color: black;
    span:before {
      visibility: visible;
      transform: scaleX(1);
      opacity: 1 !important;
      color: "";
    }
  }
`;
const Mention = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 100px;
  span {
    position: relative;
    &:before {
      display: flex;
      background-color: #1D9BF0;
      border-radius: 100px;
      bottom: -6px;
      content: "";
      height: 4px;
      opacity: 0;
      transform: scaleX(0);
      position: absolute;
      left: -16px;
      right: 0px;

      bottom: 200;
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: 100px;
    }
  }
  &:hover {
    background-color: #e6e7e7;
    font-weigh: bold;
    color: black;
    span:before {
      visibility: visible;
      transform: scaleX(1);
      opacity: 1 !important;
      color: blue;
    }
  }
`;
const Content = styled.div``;
