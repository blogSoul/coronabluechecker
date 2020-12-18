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
    background-color: #00cec9;
    font-size: 20px;
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
const PreventOne = () => {
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
            <Title>우울에 대한 치유책들</Title>
            <Form href="https://www.youtube.com/watch?v=jME5_dk3mkQ" target="_blank" rel="noreferrer">
                <span>몸이 보내는 우울증 신호 3가지</span>
            </Form>
            <Form href="http://www.samsunghospital.com/dept/common/self_check01.do?DP_CODE=DEP&MENU_ID=003011" target="_blank" rel="noreferrer">
                <span>우울증 자가진단</span>
            </Form>
            <Form href="https://www.youtube.com/watch?v=yceuoXZzsKA" target="_blank" rel="noreferrer">
                <span>우울증에 대한 잘못된 오해</span>
            </Form>
            <Footer>
                <SLink to="/last">
                    <span>Go to Last page</span>
                </SLink>
            </Footer>
        </>
    );
};

export default PreventOne;