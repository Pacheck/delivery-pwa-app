import styled from "styled-components";

export const Container = styled.div<{ bgColor: string }>`
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.bgColor};

    transition: all 0.6s;
`;

export const Content = styled.div`
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const TextBox = styled.div<{ txtColor: string }>`
    display:flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    color: ${props => props.txtColor};

    h1 {
        font-size: 1.8rem;
        letter-spacing: 1px;
        font-weight: 700;
    }

    h2 {
        font-size: 1.2rem;
        letter-spacing: 1px;
        font-weight: 500;
    }
`;

export const InputCEP = styled.div`
    input {
        color: #803600;
        text-align: center;
        width: clamp(270px, 80vw, 400px);
        height: 25px;
        border-radius: 10px;
        border-color: #803600;
    }

    input::placeholder {
        color: #803600;
        text-align: center;
        letter-spacing: 1px;
    }
`;

export const CTA = styled.div<{ btnColor: string }>`
    button {
        color: white;
        letter-spacing: 3px;
        font-weight: 700;
        width: clamp(100px, 40vw, 140px);
        height: 25px;
        background-color: ${props => props.btnColor};
        border: 0px;
        border-radius: 10px;
    }
`;
