import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import ChatBot from 'react-simple-chatbot';
import steps from './steps';
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
const ChatbotContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
`;
const theme = {
    background: '#f5f8fb',
    headerBgColor: '#74b9ff',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#74b9ff',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    width: '300px'
};
const list = ['asd'];
function result(){
    return (
        <>
            <Header>
                <SLink to="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                </SLink>
                <SLink to={{
                    pathname: "/check",
                    data: list
                }}>
                    <FontAwesomeIcon icon={faSearch} size="2x"/>
                </SLink>
            </Header>
            <ChatbotContainer>
                <ThemeProvider theme={theme}>
                    <ChatBot
                        headerTitle="Corona Blue Check Test" 
                        speechSynthesis={{ enable: true, lang: 'kr' }}
                        steps={steps} 
                    />
                </ThemeProvider>
            </ChatbotContainer>
        </>
    );
};

export default result;
