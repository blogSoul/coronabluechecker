import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons"

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SLink = styled(Link)`
    color: black;
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0px 25px 0px;
`;
const Form = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    background-color: #b2bec3;
    font-size: 18px;
    font-weight: 600;
    color: #2d3436;
    border-radius: 20px;
    margin: 10px 0px;
`;
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    color: #636e72;
`;
const PreventTwo = () => {
    return (
        <>
            <Header>
                <SLink to="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                </SLink>
                <SLink to="/result">
                    <FontAwesomeIcon icon={faSearch} size="2x"/>
                </SLink>
            </Header>
            <Title>자해에 대한 치유책들</Title>
            <Form href="https://www.youtube.com/watch?v=VNgNLtRwHxI" target="_blank" rel="noreferrer">
                <span>자해를 하는 사람들의 솔직한 생각들</span>
            </Form>
            <Form href="https://www.youtube.com/watch?v=tk8nrvmgrRA" target="_blank" rel="noreferrer">
                <span>자해를 경험했던 사람들의 이야기</span>
            </Form>
            <Form href="https://www.youtube.com/watch?v=kYY3ZXMOFuI" target="_blank" rel="noreferrer">
                <span>자해를 하는 사람의 마음 feat.Doctor</span>
            </Form>
            <Footer>
                <SLink to="/last">
                    <span>Go to Last page</span>
                </SLink>
            </Footer>
        </>
    );
};

export default PreventTwo;