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
    padding: 70px 0px;
`;
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
`;
const Btn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #81ecec;
    border: 2px solid black;
    font-size: 30px;
    font-weight: 700;
    color: #2d3436;
    text-decoration: none;
`;
const Map = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-bottom: 2px solid black;
    margin: 50px 20px 30px 20px;
    font-size: 20px;
    font-weight: 500;
`;
const Find = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #6c5ce7;
    font-weight: 600;
`;
const home = () => {
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
            <Title>Corona Blue Checker</Title>
            <Form>
                <Btn to="/result">CHECK</Btn>
            </Form>
            <Map>find depression state in korea</Map>
            <Find>사용법 확인</Find>
        </>
    );
};

export default home;