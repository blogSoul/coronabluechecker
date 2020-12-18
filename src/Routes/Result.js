import React from 'react';
import styled from "styled-components";
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    padding: 70px 0px;
`;
const result = () => {
    return (
        <article>
            <Title>Result</Title>
        </article>
    );
};

export default result;