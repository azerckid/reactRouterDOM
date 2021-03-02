import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 1200px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`;

const Press = styled.div`
    width: 250px;
    height:250px;
    background-color:teal;
    margin: 20px;
`;

const Title = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    font-size: 32px;
    color:whitesmoke;
`;

const PressMore = styled.div`
    width: 1120px;
    height: 300px;
    display:flex;
    justify-content:center;
    align-items: flex-end;
    background-color:teal;
`;

const KnowMore = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 25px;
    background-color: gold;

    font-size: 20px;
    text-align:center;
    padding-top: 15px;
    cursor: pointer;
`;

export default ()=>{
    return (
        <>
            <Title>Press Release</Title>
            <PressMore>            
                <KnowMore> Know More</KnowMore>
            </PressMore>
            <Container>
                <Press></Press>
                <Press></Press>
                <Press></Press>
                <Press></Press>
                <Press></Press>
                <Press></Press>
                <Press></Press>
                <Press></Press>      
            </Container>
        </>
    )
}