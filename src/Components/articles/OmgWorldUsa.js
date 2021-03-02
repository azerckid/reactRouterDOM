import React from "react";
import styled from "styled-components";

import intro from "../../assets/img/intro.jpg";

const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BackImage = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1260px;
  height: 690px;
  margin: -5px;

  @media (max-width: 1280px) {
    background-size: cover;
  }
`;

const ContextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 430px;
  margin-bottom: 20px;
  font-size: 45px;
  font-weight: 600;
  color: whitesmoke;
`;

const TextBox = styled.div`
  width: 600px;
  height: 200px;
  margin-top: 0px;
  line-height: 35px;
  font-family: Helvetica;
  font-weight: 100;
  color: gray;
  font-size: 30px;
  text-align: center;
`;

export default () => {
  return (
    <Container>
      <BackImage img={intro}>
        <ContextContainer>
          <Title>OMG WORLD USA, COPORATION</Title>
          <TextBox>
            He was a linebacker for the Chicago Bears before he turned to
            another kind of a contact sport
          </TextBox>
        </ContextContainer>
      </BackImage>
    </Container>
  );
};
