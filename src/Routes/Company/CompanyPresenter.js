import React from "react";
import styled from "styled-components";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(45, 63, 81);
`;


const CompanyPresenter = () => {
  return (
    <Container>
      <div>This is company</div>
    </Container>
  );
};

export default CompanyPresenter;
