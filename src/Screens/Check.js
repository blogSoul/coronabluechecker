import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

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
    padding: 20px 0px;
`;
const check = () => {
    return (
        <>
            <Header>
                <SLink to="/result">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                </SLink>
                <SLink to="/end">
                    <FontAwesomeIcon icon={faSearch} size="2x"/>
                </SLink>
            </Header>
            <Title>Test result</Title>
        </>
    );
};

export default check;