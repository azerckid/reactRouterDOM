import React from "react";
import styled from "styled-components";

import earth from "../../assets/img/whatIsUsfcx.jpg";

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
  margin-top: 125px;
  margin-bottom: 50px;
  font-size: 45px;
  font-weight: 600;
  color: #c39e6a;
`;

const TextBox = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 170px;
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
          <Title>What is USFCX?</Title>
          <TextBox>
            회사 미국 파운드리 암호화폐 거래소는 블록체인 기술의 선두주자다.
            통화시장의 추세가 지속적으로 성장하고 있기 때문이다. 이 회사의
            비전은 글로벌화와 함께 비즈니스 거래, 보안을 개선할 수 있는 플랫폼을
            제공하는 것이다. 수집 및 투자 채널이 구축되기 위해 필요한 데이터가
            점점 더 많아지고 있다. FXT, 비트코인, 에테르, 리테코인과 같이
            채굴되고 있는 동전의 디지털 자산에 대한 기술을 전환한다. 또한 새로운
            것의 출현과 함께 소프트웨어 엔지니어 연구팀에 자금을 지원하여
            플랫폼을 구축하고 거래 시스템의 처리를 신속히 할 수 있습니다. 가격
            상승의 재정적 돌파구는 디지털 커뮤니티에 흥미진진한 미래를
            만들어준다. 투자자들은 안전한 암호화폐 거래를 위해 홍보하고
            업그레이드하기를 원한다. 모든 고객은 가장 존경받고 가치 있는 대우를
            받는다. 그러나 가장 중요한 측면은 사물을 안전하고 단순하게 유지하는
            것이다
          </TextBox>
        </ContextContainer>
      </BackImage>
    </Container>
  );
};
