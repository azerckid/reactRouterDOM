import React from "react";
import styled from "styled-components";

import earth from "../../assets/img/overseasBranches.jpg";

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
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 45px;
  font-weight: 500;
  color: #c39e6a;
`;

export default () => {
  return (
    <Container>
      <BackImage img={earth}>
        <ContextContainer>
          <Title>Overseas Branches and Partner Companies</Title>
        </ContextContainer>
      </BackImage>
    </Container>
  );
};
