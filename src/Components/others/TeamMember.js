import React from "react";
import styled from "styled-components";
import chairMan from "../../assets/img/face/tessaTomson.jpg";

const Title = styled.div`
  margin-top: 50px;
  font-size: 32px;
  color: whitesmoke;
`;

const LeadersContainer = styled.div`
  width: 1200px;
  margin-top: 50px;
`;

const LeaderGroup = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const LeaderFace = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
`;

const LeaderSpeak = styled.div`
  width: 900px;
  line-height: 20px;
  font-size: 16px;
  color: whitesmoke;
`;

export default () => {
  return (
    <>
      <Title>Leadership</Title>
      <LeadersContainer>
        <LeaderGroup>
          <LeaderFace img={chairMan}></LeaderFace>
          <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span>
            <br></br>
            <span>CHAIRMAN</span>
            <br></br>
            <p style={{ marginTop: "20px" }}>
              Jon is the Non-Executive Chairman of TNC IT Group. He was a
              linebacker for the Chicago Bears before he turned to another kind
              of a contact sport – trading on the Chicago Board Options
              Exchange. He became a member of the CBOE, NYSE, CME, and CBOT and
              worked as a floor trader for 25 years. In 1990, he founded Mercury
              Trading, a market-making firm at the Chicago Board Options
              Exchange (CBOE), which he sold in 2004 to Citadel, one of the
              world’s largest hedge funds. In 2005 Jon co-founded optionMONSTER
              and tradeMONSTER, sold a majority stake to private equity firm
              General Atlantic Partners in 2014 & two years later sold the firm
              to E*Trade for $750M. Today, he is a host on CNBC, a professional
              investor, money manager, stock & crypto markets analyst. Jon
              developed HeatSeeker Technologies, a patented trading application,
              and algorithms used to identify unusual activity in stock,
              options, futures, and crypto markets. Jon publishes his market
              observations, trade recommendations on MarketRebellion.com, his
              subscription and education website. Jon and his brother Pete
              co-founded Najarian Advisors & Najarian Alternatives, companies
              that advise & or trade for institutional investors as well as
              manage money for wealthy investors.
            </p>
          </LeaderSpeak>
        </LeaderGroup>
        <LeaderGroup>
          <LeaderFace img={chairMan}></LeaderFace>
          <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span>
            <br></br>
            <span>CHAIRMAN</span>
            <br></br>
            <p style={{ marginTop: "20px" }}>
              Jon is the Non-Executive Chairman of TNC IT Group. He was a
              linebacker for the Chicago Bears before he turned to another kind
              of a contact sport – trading on the Chicago Board Options
              Exchange. He became a member of the CBOE, NYSE, CME, and CBOT and
              worked as a floor trader for 25 years. In 1990, he founded Mercury
              Trading, a market-making firm at the Chicago Board Options
              Exchange (CBOE), which he sold in 2004 to Citadel, one of the
              world’s largest hedge funds. In 2005 Jon co-founded optionMONSTER
              and tradeMONSTER, sold a majority stake to private equity firm
              General Atlantic Partners in 2014 & two years later sold the firm
              to E*Trade for $750M. Today, he is a host on CNBC, a professional
              investor, money manager, stock & crypto markets analyst. Jon
              developed HeatSeeker Technologies, a patented trading application,
              and algorithms used to identify unusual activity in stock,
              options, futures, and crypto markets. Jon publishes his market
              observations, trade recommendations on MarketRebellion.com, his
              subscription and education website. Jon and his brother Pete
              co-founded Najarian Advisors & Najarian Alternatives, companies
              that advise & or trade for institutional investors as well as
              manage money for wealthy investors.
            </p>
          </LeaderSpeak>
        </LeaderGroup>
        <LeaderGroup>
          <LeaderFace img={chairMan}></LeaderFace>
          <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span>
            <br></br>
            <span>CHAIRMAN</span>
            <br></br>
            <p style={{ marginTop: "20px" }}>
              Jon is the Non-Executive Chairman of TNC IT Group. He was a
              linebacker for the Chicago Bears before he turned to another kind
              of a contact sport – trading on the Chicago Board Options
              Exchange. He became a member of the CBOE, NYSE, CME, and CBOT and
              worked as a floor trader for 25 years. In 1990, he founded Mercury
              Trading, a market-making firm at the Chicago Board Options
              Exchange (CBOE), which he sold in 2004 to Citadel, one of the
              world’s largest hedge funds. In 2005 Jon co-founded optionMONSTER
              and tradeMONSTER, sold a majority stake to private equity firm
              General Atlantic Partners in 2014 & two years later sold the firm
              to E*Trade for $750M. Today, he is a host on CNBC, a professional
              investor, money manager, stock & crypto markets analyst. Jon
              developed HeatSeeker Technologies, a patented trading application,
              and algorithms used to identify unusual activity in stock,
              options, futures, and crypto markets. Jon publishes his market
              observations, trade recommendations on MarketRebellion.com, his
              subscription and education website. Jon and his brother Pete
              co-founded Najarian Advisors & Najarian Alternatives, companies
              that advise & or trade for institutional investors as well as
              manage money for wealthy investors.
            </p>
          </LeaderSpeak>
        </LeaderGroup>
      </LeadersContainer>
    </>
  );
};
