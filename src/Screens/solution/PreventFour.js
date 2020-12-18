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
    background-color: #55efc4;
    font-size: 20px;
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
const PreventFour = () => {
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
            <Title>폭력에 대한 치유책들</Title>
            <Form href="http://www.cyber1388.kr/new_/school/school_01_1.asp" target="_blank" rel="noreferrer">
                <span>학교폭력을 당하고 있다면...</span>
            </Form>
            <Form href="http://www.mogef.go.kr/sp/hrp/sp_hrp_f004.do" target="_blank" rel="noreferrer">
                <span>가정폭력을 당하고 있다면...</span>
            </Form>
            <Form href="https://www.youtube.com/watch?v=hDvTURYX2BU" target="_blank" rel="noreferrer">
                <span>아빠 왜 나를 때리나요?</span>
            </Form>
            <Footer>
                <SLink to="/last">
                    <span>Go to Last page</span>
                </SLink>
            </Footer>
        </>
    );
};

export default PreventFour;