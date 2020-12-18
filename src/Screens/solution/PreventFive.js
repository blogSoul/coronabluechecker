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
    font-size: 27px;
    font-weight: 700;
    padding: 30px 0px 25px 0px;
`;
const Form = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    background-color: #00b894;
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
            <Title>인간관계에 대한 치유책들</Title>
            <Form href="https://www.youtube.com/watch?v=xPXr5oBwUyk" target="_blank" rel="noreferrer">
                <span>자유롭고 행복한 인간 관계</span>
            </Form>
            <Form href="https://brunch.co.kr/@othinkerbell/70" target="_blank" rel="noreferrer">
                <span>인간관계 정리, 그 후 달라진 일상</span>
            </Form>
            <Form href="https://www.youtube.com/watch?v=jkf2vaX-M3Q" target="_blank" rel="noreferrer">
                <span>인간관계론에 대하여</span>
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