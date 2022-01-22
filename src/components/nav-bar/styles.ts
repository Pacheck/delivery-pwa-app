import styled from "styled-components";

export const Container = styled.div`
    background-color: red;
    height: 30px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: end;
    padding: 0 10%;

`;

export const ThemeMode = styled.div`
    display: flex;

    label {
        color: white;
        display: flex;
        gap: 10px;
        align-items: center;
    }

`;
