import styled from "styled-components";

type ContainerProps = { mainColor: string }
type SpanProps = { mainTextColor: string }

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.mainColor};
    height: 30px;
    background-color: #FF6B00;
    height: 50px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: end;
    padding: 0 10%;
`;

export const ThemeMode = styled.div<SpanProps>`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    label {
        position: relative;
        width: 70px;
        height: 30px;
        display: flex;
        justify-content: center;

    }

    label div {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    div img {
        width: 20px;
        z-index: 1;
        filter: drop-shadow(1px 1px 2px rgba(105,105,105, 25%));
    }

    label input {
        display: none;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ECECEC;
        transition: .4s;
        border-radius: 34px;
        
    }

    span:before {
        position: absolute;
        content: "";
        height: 35px;
        width: 35px;
        left: -2.5px;
        bottom: -2.5px;
        background-color: #FFB580;
        transition: .4s;
        border-radius: 50px;
        filter: drop-shadow(1px 1px 2px rgba(105,105,105, 25%));
        z-index: 2;
    }

    input:checked + span {
        background-color: #ECECEC;
    }

    input:checked + span:before {
        background-color: #CF80FF;
        transform: translateX(40px);
    }
`;
