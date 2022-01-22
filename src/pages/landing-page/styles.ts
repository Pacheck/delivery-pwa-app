import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const TextBox = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;

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
        text-align: center;
        width: clamp(270px, 80vw, 400px);
        height: 25px;
        border-radius: 10px;
    }

    input::placeholder {
        text-align: center;
        letter-spacing: 1px;
    }
`;

export const CTA = styled.div`
    button {
        color: white;
        letter-spacing: 3px;
        font-weight: 700;
        width: clamp(100px, 40vw, 140px);
        height: 25px;
        background-color: red;
        border: 0px;
        border-radius: 10px;
    }
`;
