import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import ChatBot from 'react-simple-chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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
const Resultlist = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    text-decoration: underline white;
    font-weight: 600;
    color: white;
`;
class AnswerCollecter extends Component {
    constructor(props) {
        super(props);
        this.state = {
           list: '',
        }
    }
    componentWillMount() {
        const { steps } = this.props;
        const { one, two, three } = steps;
        this.setState({ one, two, three });
    }
    render() {
        const { one, two, three } = this.state;
        return (
            <SLink to={{
                pathname: "/check",
                data: one.value + " " + two.value + " " + three.value
            }}>
                <Resultlist>결과 보기</Resultlist>
            </SLink>
        );
    }
}
AnswerCollecter.propTypes = {
    steps: PropTypes.object,
};
  
AnswerCollecter.defaultProps = {
    steps: undefined,
};
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: 'Some default data',
        }
        
    }
    updateData(str) {
        var data = this.state.data;
        data += str;
        this.setState({ data : data });
    }
    render() {
        return (
            <>
                <Header>
                    <SLink to="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                    </SLink>
                    <SLink to={{
                        pathname: "/check",
                        data: AnswerCollecter.props
                    }}>
                        <FontAwesomeIcon icon={faSearch} size="2x"/>
                    </SLink>
                </Header>
                <ChatbotContainer>
                    <ThemeProvider theme={theme}>
                        <ChatBot
                            headerTitle="Corona Blue Check Test" 
                            speechSynthesis={{ enable: true, lang: 'kr' }}
                            steps={[
                                {
                                    id: '1',
                                    message: '코로나 블루 진단 테스트에 참가해주셔서 감사합니다.',
                                    trigger: '13',
                                },
                                {
                                    id: '13',
                                    message: '이름을 입력해주세요.',
                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    user: true,
                                    trigger: '3',
                                },
                                {
                                    id: '3',
                                    message: '안녕하세요. {previousValue}님, 테스트를 시작하겠습니다.',
                                    trigger: '14',
                                },
                                {
                                    id: '14',
                                    message: '답변을 길게 작성할수록 정확도가 높아집니다. 테스트를 원하시면 시작을 입력해주세요.',
                                    trigger: '4',
                                },
                                {
                                    id: '4',
                                    user: true,
                                    trigger: '5',
                                },
                                {
                                    id: '5',
                                    message: '오늘 기분은 어떠신가요?',
                                    trigger: 'one',
                                },
                                {
                                    id: 'one',
                                    user: true,
                                    trigger: '7',
                                },
                                {
                                    id: '7',
                                    message: '최근에 고민거리가 있으신가요?',
                                    trigger: 'two',
                                },
                                {
                                    id: 'two',
                                    user: true,
                                    trigger: '9',
                                },
                                {
                                    id: '9',
                                    message: '요즘 드는 안 좋은 생각들이 있으신가요?',
                                    trigger: 'three',
                                },
                                {
                                    id: 'three',
                                    user: true,
                                    trigger: '11',
                                },
                                {
                                    id: '11',
                                    delay: 3000,
                                    message: '코로나 블루 테스트를 마칩니다.',
                                    trigger: '12',
                                },
                                {
                                    id: '12',
                                    message: '소중한 시간 내주셔서 감사합니다!',
                                    trigger: 'review',
                                },
                                {
                                    id: 'review',
                                    component: <AnswerCollecter />,
                                    asMessage: true,
                                    end: true,
                                },
                            ]} 
                        />
                    </ThemeProvider>
                </ChatbotContainer>
            </>
        );
    }
}

export default Result;
