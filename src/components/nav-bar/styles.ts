import styled from "styled-components";

type ContainerProps = { mainColor: string }
type SpanProps = { mainTextColor: string }

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.mainColor};
    height: 30px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: end;
    padding: 0 10%;
`;

export const ThemeMode = styled.div<SpanProps>`
    display: flex;

    label {
        color: white;
        display: flex;
        gap: 10px;
        align-items: center;

        span { 
            color: ${props => props.mainTextColor}
        }
    }

`;
