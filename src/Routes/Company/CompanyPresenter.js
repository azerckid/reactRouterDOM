import React from "react";
import styled from "styled-components";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgb(45, 63, 81);
`;

const GreenYellow = styled.div`
  height: 1000px;
  width: 600px;
  background-color: greenyellow;
`;

const CompanyPresenter = () => {
  return (
    <Container>
      <div
        style={{
          height: "1000px",
          width: "600px",
          backgroundColor: "whitesmoke",
        }}>
        This is company
      </div>
      <GreenYellow> greenyellow</GreenYellow>
    </Container>
  );
};

export default CompanyPresenter;
