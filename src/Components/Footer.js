import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
`;

const Title = styled.div`
  margin: 20px 0px;
  font-size: 20px;
  color: white;
`;

const UnderMenuNaviContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

const SnsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const IconBoxContainer = styled.div`
  width: 20%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
`;
const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: gray;
`;

export default () => {
  return (
    <Container>
      <Title>USFCX</Title>
      <UnderMenuNaviContainer>
        <div>AAAAA</div>
        <div>BBBBB</div>
        <div>CCCCC</div>
        <div>DDDDD</div>
        <div>EEEEE</div>
      </UnderMenuNaviContainer>
      <SnsContainer>
        <IconBoxContainer>
          <IconBox></IconBox>
          <IconBox></IconBox>
          <IconBox></IconBox>
          <IconBox></IconBox>
        </IconBoxContainer>
        <span>copyright &copy;</span>
      </SnsContainer>
    </Container>
  );
};
