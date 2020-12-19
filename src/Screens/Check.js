import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import Feelingdata from '../Data/Datalist';
import Loader from '../Components/Loader';

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
    font-size: 50px;
    font-weight: 700;
    padding: 40px 0px 40px;
`;
const Datalist = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 500;
    padding: 30px 20px 30px 25px;
`;
const Errortitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    padding: 40px 0px 40px 10px;
    margin-bottom: 40px;
`;
const Errordiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 500;
    padding: 20px 0px 40px 10px;
`;
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    padding: 20px 0px 20px 10px;
    text-decoration: underline black;
`;
const Checkbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
`;
const DLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 150px;
    border-radius: 20%;
    background-color: #81ecec;
    border: 2px solid black;
    font-size: 25px;
    font-weight: 700;
    color: #2d3436;
    text-decoration: none;
`;
const Strong = styled.span`
    font-weight: 600;
    color: #0984e3;
    font-size: 25px;
`;
class Check extends Component {
    render() {
        //console.log(this.props);
        var { data } = this.props.location;
        try{
            var words = data.split(' ');
        } catch(e){
            return (
                <>
                    <Header>
                        <SLink to="/result">
                            <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                        </SLink>
                        <SLink to="/result">
                            <FontAwesomeIcon icon={faSearch} size="2x"/>
                        </SLink>
                    </Header>
                    <Errortitle>잘못된 페이지입니다.</Errortitle>
                    <Errordiv>
                        <Loader />
                    </Errordiv>
                    <Errordiv>왼쪽 상단 화살표를 눌러 첫화면으로 이동하세요!</Errordiv>
                    <Footer>
                        <SLink to="/">
                            <span>Go to first page</span>
                        </SLink>
                    </Footer>
                </>
            );
        }
        var feelingstate = [0, 0, 0, 0, 0];
        for(var word of words){
            for(var step = 0; step < 5; step++){
                for(var element of Feelingdata[step]){
                    if(word.includes(element)){
                        feelingstate[step]++;
                    }
                }
            }
        }
        var max = 0, max_index = 0;
        for(var i in feelingstate){
            max_index = (max < feelingstate[i]) ? i : max_index;
            max = (max < feelingstate[i]) ? feelingstate[i] : max;
        }
        var feelingword = Feelingdata[max_index][0];
        var url = "/check/"+ max_index;
        console.log(feelingstate);
        console.log(max_index);
        if(max === 0){
            return (
                <>
                    <Header>
                        <SLink to="/result">
                            <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                        </SLink>
                        <SLink to="/result">
                            <FontAwesomeIcon icon={faSearch} size="2x"/>
                        </SLink>
                    </Header>
                    <Errortitle>Test result</Errortitle>
                    <Errordiv>
                    </Errordiv>
                    <Errordiv>
                        <p><Strong>나쁜 감정에 대한 감성지수가 나타나지 않았습니다!</Strong> 왼쪽 상단 화살표를 눌러 첫화면으로 이동하세요!</p>
                    </Errordiv>
                    <Footer>
                        <SLink to="/">
                            <span>Go to first page</span>
                        </SLink>
                    </Footer>
                </>
            );
        }
        return (
            <>
                <Header>
                    <SLink to="/result">
                        <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                    </SLink>
                    <SLink to="/result">
                        <FontAwesomeIcon icon={faSearch} size="2x"/>
                    </SLink>
                </Header>
                <Title>Test result</Title>
                <Datalist>
                    <p>테스트를 보신 분께서는 <Strong>{feelingword}</Strong>에 대한 감성지수가 높게 나왔습니다.</p>
                </Datalist>
                <Checkbox>
                    <DLink to={url}>
                        <span>치유책 알아보기</span>
                    </DLink>
                </Checkbox>
                <Checkbox>
                    <SLink to="/">
                        <span>Go to first page</span>
                    </SLink>
                </Checkbox>
            </>
        );
    }
}

export default Check;