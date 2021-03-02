import React from "react"
import styled from "styled-components"


const Container = styled.div`
    width: 1200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`;


const Title = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    font-size: 32px;
    color:whitesmoke;
`;

const RoadMapDiagram = styled.div`
    width: 1120px;
    height: 200px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    background-color:yellowgreen;    
`;

const PageButton = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 25px;
    background-color: gold;
    margin-left:10px;
    font-size: 20px;
    text-align:center;
    padding-top: 15px;
    cursor: pointer;
`;
export default ()=>{
    return (
        <Container>
            <Title>Road Map</Title>
            <RoadMapDiagram>
                <PageButton>before</PageButton>
                <PageButton>next</PageButton>
            </RoadMapDiagram>
        </Container>
    )
}