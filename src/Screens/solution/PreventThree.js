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
    background-color: #fab1a0;
    font-size: 19px;
    font-weight: 700;
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
const PreventThree = () => {
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
            <Title>자살에 대한 치유책들</Title>
            <Form href="https://www.youtube.com/watch?v=8j-K30i0OkY" target="_blank" rel="noreferrer">
                <span>자살 유가족이 직접 얘기하는 그 날</span>
            </Form>
            <Form href="http://ascc.ajou.ac.kr/ws/counsel/counsel02_03.jsp" target="_blank" rel="noreferrer">
                <span>위기자가진단</span>
            </Form>
            <Form href="https://www.youtube.com/watch?v=4-x-qHmq2A0" target="_blank" rel="noreferrer">
                <span>끊지말고 연결하세요</span>
            </Form>
            <Footer>
                <SLink to="/last">
                    <span>Go to Last page</span>
                </SLink>
            </Footer>
        </>
    );
};

export default PreventThree;