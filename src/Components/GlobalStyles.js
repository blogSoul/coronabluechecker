import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    body{
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 15px;
        background-color: #dfe6e9;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    article{
        padding: 20px;
        background-color: white;
        width: 360px;
        height: 600px;
        border-radius: 15px;
        border: 2px solid black;
    }
`;

export default globalStyles;