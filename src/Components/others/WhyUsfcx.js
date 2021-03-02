import React from "react"
import styled from "styled-components"


const Container = styled.div`
    width: 1200px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`;

const WhyBox = styled.div`

    width: 500px;
    height:500px;
    background-color:darkgoldenrod;
    margin: 20px;
`;

const Title = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    font-size: 32px;
    color:whitesmoke;
`;

export default ()=>{
    return (
        <>
        <Title>Why USFCX group</Title>
        <Container>
            <WhyBox></WhyBox>
            <WhyBox></WhyBox>
            <WhyBox></WhyBox>
            <WhyBox></WhyBox>
        </Container>
    </>
    )
}