import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: red;
}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
`;
