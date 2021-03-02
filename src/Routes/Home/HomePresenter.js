import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import shakeHands from "../../assets/img/shakeHands.jpg";
import OmgWorldUsa from "Components/articles/OmgWorldUsa";
import WhatIs from "Components/articles/WhatIs";
import Vision from "Components/articles/Vision";
import OverseasBranches from "Components/articles/OverseasBranches";
import Footer from "Components/Footer";

const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LoginButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: 10;
`;

const HomePresenter = () => {
  return (
    <Container>
      <OmgWorldUsa></OmgWorldUsa>
      <WhatIs></WhatIs>
      <Vision></Vision>
      <OverseasBranches></OverseasBranches>
      <Footer></Footer>
      <Link to="/Company">
        <LoginButton img={shakeHands}></LoginButton>
      </Link>
    </Container>
  );
};

export default HomePresenter;
