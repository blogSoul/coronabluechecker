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
    font-size: 22px;
    font-weight: 700;
    padding: 40px 0px 0px 0px;
`;
const Form = styled.a`
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
            <Title>당신은 정말 소중한 사람입니다!</Title>
            <Form href="https://www.youtube.com/watch?v=5kbP23jYsNs" target="_blank">
                <span>여러분은 하나하나 귀중한 사람이고 하나하나 소중한 사람들입니다. 이 테스트에 솔직하게 답변하신 당신은 용감합니다. 이 기회를 잡은 당신은 앞으로의 미래를 나아갈 수 있습니다. 짧았다면 짧았을 테스트지만, 이 기회를 빌어 더 앞으로 나아갈수 있는 당신이 되길 기도하겠습니다. </span>
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