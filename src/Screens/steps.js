const steps = [
    {
        id: '1',
        message: '코로나 블루 진단 테스트에 참가해주셔서 감사합니다.',
        trigger: '13',
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
        id: '4',
        user: true,
        trigger: '5',
    },
    {
        id: '5',
        message: '오늘 기분은 어떠신가요?',
        trigger: '6',
    },
    {
        id: '6',
        user: true,
        trigger: '7',
    },
    {
        id: '7',
        message: '최근에 고민거리가 있으신가요?',
        trigger: '8',
    },
    {
        id: '8',
        user: true,
        trigger: '9',
    },
    {
        id: '9',
        message: '요즘 드는 안 좋은 생각들이 있으신가요?',
        trigger: '10',
    },
    {
        id: '10',
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
        end: true,
    },
    {
        id: '13',
        message: '이름을 입력해주세요.',
        trigger: '2',
    },
    {
        id: '14',
        message: '답변을 길게 작성할수록 정확도가 높아집니다. 테스트를 원하시면 시작을 입력해주세요.',
        trigger: '4',
    },
];

export default steps;