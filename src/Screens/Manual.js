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
    font-size: 20px;
    font-weight: 700;
    padding: 20px 0px;
`;
const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 330px;
    font-size: 24px;
    font-weight: 500;
    color: #2d3436;
    margin: 0px 0px;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    color: #2d3436;
    margin: 10px 0px;
`;
const Peoplelink = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 25px;
    font-size: 18px;
    font-weight: 700;
    color: #2d3436;
    padding: 2px 0px;
`;
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    padding: 20px;
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
            <Title>How to use CoronaBlueChecker</Title>
            <Form>
                <ol>
                    <Item><span>1. 챗봇이 말하는대로 테스트를 진행합니다. 질문과 무관한 답변을 하면 정확성이 떨어집니다.</span></Item>
                    <Item><span>2. 테스트를 진행하면서 자신의 감정에 대해 솔직하게 대답을 하면 할수록 정확한 결과를 얻을 수 있습니다.</span></Item>
                    <Item><span>3. 해당 감정지수가 높다고 해서 사용자가 마음의 병을 가지고 있는 것은 아닙니다.</span></Item>
                    <Item><span>4. 테스트를 진행하면서 자신의 감정을 알고 용기를 가졌으면 합니다.</span></Item>
                </ol>
            </Form>
            <Peoplelink href="https://github.com/blogSoul" target="_blank">
                <span></span>
                <span>개발자 설민욱</span>
            </Peoplelink>
            <Peoplelink href="https://github.com/s10th24b" target="_blank">
                <span></span>
                <span>개발자 김효주</span>
            </Peoplelink>
            <Footer>
                <SLink to="/">
                    <span>Go to first page</span>
                </SLink>
            </Footer>
        </>
    );
};

export default PreventOne;