import React from "react"
import styled from "styled-components"
import chairMan from "../assets/img/face/tessaTomson.jpg"

const Title=styled.div`
    margin-top:50px;
    font-size: 32px;
    color:whitesmoke;
`;

const LeadersContainer=styled.div`
    width:1200px;
    margin-top: 50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:wrap;
`;

const LeaderGroup = styled.div`
    width:600px;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top: 20px;
`;

const LeaderFace = styled.div`
    background-image: url(${(props)=> props.img});
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
    width:300px;
    height:300px;
    margin-bottom: 20px;
    /* background-color: cyan; */
`;

const LeaderSpeak = styled.div`
    width: 300px;
    line-height: 20px;
    font-size:16px;
    color:whitesmoke;
    margin-bottom: 40px;
    /* background-color: brown; */
    margin-right:20px;
    
`;

export default ()=>{
return (
<>
<Title>PARTNERS</Title>
<LeadersContainer>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    <LeaderGroup>
        <LeaderFace img={chairMan}></LeaderFace>
        <LeaderSpeak>
            <span>JON 'DRJ' NAJARIAN</span><br></br>
            <span>CHAIRMAN</span><br></br>
            <p style={{marginTop:'20px'}}>
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </p>
        </LeaderSpeak>
    </LeaderGroup>
    
</LeadersContainer>
</>)}