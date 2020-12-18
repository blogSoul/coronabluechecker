import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link, withRouter } from "react-router-dom";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SLink = styled(Link)`
    color: black;
`;

export default withRouter(() => (
    <Header>
        <SLink to="/">
            <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </SLink>
        <SLink to="/result">
            <FontAwesomeIcon icon={faSearch} size="2x"/>
        </SLink>
    </Header>
));
