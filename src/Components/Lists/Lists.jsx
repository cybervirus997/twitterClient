import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Lists() {
  return (
    <Container>
      <Nav>
        <LeftSection>
          <CustomArrow style={{ fontSize: "2.3rem", padding: "5px" }} />
          <UserSection>
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>Lists</span>
            <span
              style={{ color: "#C9BB9D", fontSize: "18px", marginTop: "-5px" }}
            >
              <span style={{ fontSize: "12px" }}>@</span>safiurrahaman
            </span>
          </UserSection>
        </LeftSection>
        <RightSection>
          <p>
            <i className="bi bi-card-list" style={{ fontSize: "1.3rem" }}></i>
          </p>
          <p>
            <i className="bi bi-three-dots" style={{ fontSize: "1.3rem" }}></i>
          </p>
        </RightSection>
      </Nav>
      <PinnedList>
        <p>PinnedList</p>
        <span>
          Nothing to see here yet — pin your favorite Lists to access them
          quickly.
        </span>
      </PinnedList>
      <RecomendedList>
        <h1>Discover new Lists</h1>
        <Content>
          <Follow>
            <LeftFollow>
              <span style={{ width: "50px" }}>
                <i
                  class="bi bi-card-list"
                  style={{ fontSize: "1.5rem", color: "white", opacity: 0.5 }}
                ></i>
              </span>
              <NextSpan>
                <Top styled={{}}>westbengal</Top>
                <Down>Safiur @safi</Down>
              </NextSpan>
            </LeftFollow>
            <RightFollow>
              <span>Follow</span>
            </RightFollow>
          </Follow>
          <Follow>
            <LeftFollow>
              <span style={{ width: "50px", backgroundColor: "#5E7BB7" }}>
                <i
                  class="bi bi-card-list"
                  style={{ fontSize: "1.5rem", color: "white", opacity: 0.5 }}
                ></i>
              </span>
              <NextSpan>
                <Top styled={{}}>westbengal</Top>
                <Down>Safiur @safi</Down>
              </NextSpan>
            </LeftFollow>
            <RightFollow>
              <span>Follow</span>
            </RightFollow>
          </Follow>
          <Follow>
            <LeftFollow>
              <span style={{ width: "50px", backgroundColor: "#97E2FC" }}>
                <i
                  class="bi bi-card-list"
                  style={{ fontSize: "1.5rem", color: "white", opacity: 0.5 }}
                ></i>
              </span>
              <NextSpan>
                <Top styled={{}}>westbengal</Top>
                <Down>Safiur @safi</Down>
              </NextSpan>
            </LeftFollow>
            <RightFollow>
              <span>Follow</span>
            </RightFollow>
          </Follow>
          <Follow
            style={{ color: "#3CA4F1", fontSize: "14px", fontWeight: "600" }}
          >
            Show More
          </Follow>
        </Content>
      </RecomendedList>
      <YourLists>
        <h3>Your List</h3>
        <p style={{ marginTop: "80px", fontSize: "14px", color: "#586871" }}>
          You haven't created or followed any Lists. When you do, they'll show
          up here.
        </p>
      </YourLists>
    </Container>
  );
}

export default Lists;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Nav = styled.div`
  height: 60px;
  border-bottom: 1px solid #c9bb9d;
  border-right: 1px solid #c9bb9d;
  position: fixed;
  width: 41.6%;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;
const PinnedList = styled.div`
  height: 160px;
  border-bottom: 1px solid #c9bb9d;
  margin-top: 4rem;
  p {
    font-weight: bold;
    padding: 10px;
    font-size: 22px;
  }
  span {
    padding: 50px 30px;
    padding-top: 50px;
    font-size: 14px;
    margin-bottom: -10px;
    color: #836475;
  }
`;
const RecomendedList = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c9bb9d;
  h1 {
    font-size: 22px;
    padding: 10px;
    font-weight: bold;
  }
`;

const YourLists = styled.div`
  padding: 20px;
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomArrow = styled(ArrowBackIcon)`
  margin-left: 10px;
  margin-right: -5px;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    border-radius: 100px;
    background-color: #e6e7e7;
  }
`;
const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5px 30px;
  &:hover {
    cursor: pointer;
  }
`;
const RightSection = styled.div`
  display: flex;
  width: 90px;
  align-items: center;
  margin-top: 5px;
  margin-right: 5px;
  justify-content: space-between;
  padding: 7px 2px;
  p {
    margin-top: 10px;
    text-align: center;
    width: 40px;
    padding: 5px 2px;
    &:hover {
      border-radius: 100px;
      background-color: #e6e7e7;
      cursor: pointer;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Follow = styled.div`
  width: 100%;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  aligin-items: center;
  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }
`;
const LeftFollow = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  span {
    width: 70px;
    background-color: #fecd78;
    text-align: center;
    padding: 5px 0px;
    border-radius: 10px;
  }
`;
const NextSpan = styled.div`
  margin-left: 5px;
`;
const Top = styled.div`
  font-size: 16px;
`;
const Down = styled.div`
  font-size: 14px;
`;
const RightFollow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-weight: bold;
  width: 100px;
  border-radius: 100px;
`;