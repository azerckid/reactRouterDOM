import React from "react";
import styled from "styled-components";

import earth from "../../assets/img/vision.jpg";

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
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 45px;
  font-weight: 600;
  color: #9f7943;
`;

const SubTitle = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 36px;
  font-weight: 600;
  color: #9f7943;
`;

const TextBox = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 20px;
  line-height: 25px;
  color: white;
  font-size: 16px;
  text-align: center;
`;

export default () => {
  return (
    <Container>
      <BackImage img={earth}>
        <ContextContainer>
          <Title>VISION</Title>
          <SubTitle>"Vision 2024 - Lead the Next"</SubTitle>
          <TextBox>
            제시된 제품이나 서비스는 많은 유틸리티 잠재력을 가져야 한다. USFCX는
            실제 산업 문제를 해결하는 해결책을 찾고 있다. 블록체인 기술을
            활용하여 경쟁우위를 창출한다. 제품 개발이 진행될수록 고객이 더욱
            활발해집니다 비즈니스 프로세스에 대한 정보를 더 많이 제공하는 관련
            파트너가 많을수록 법적 프레임워크가 개선됩니다 설계됨 - 일반
            비즈니스 제안 중에서 보석을 식별하는 것이 더 쉽습니다. 백서는 ...로
            발전했다 업계 표준과 백서의 품질은 우리의 검토 과정에서 많은 비중을
            두고 있다. 백서는 많은 정보를 압축하고, 실제 고객 문제를 해결하는
            팀임을 나타내며, 활용된 기술을 설명할 수 있으며, 충분히 소통되어
            대중의 매력을 얻을 수 있는 제안이다.
          </TextBox>
          <Title style={{ marginTop: "50px" }}>MISSION</Title>
          <TextBox style={{ marginTop: "0px" }}>
            USFCX에서 우리는 고객들이 우리와의 금융 정점에 도달하기 위해 우선
            순위를 매기고 싶다. 어떻게 해야 하는지의 과정을 바꿀 수 있게 디지털
            트랜잭션은 글로벌 방식으로 처리됩니다.
          </TextBox>
        </ContextContainer>
      </BackImage>
    </Container>
  );
};
