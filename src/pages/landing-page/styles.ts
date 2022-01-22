import styled from "styled-components";

export const Container = styled.div`

main {
    align-items: center;
    align-content: center;
    justify-content: center;
}

.Content {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
}

.TextBox {
    display:flex;
    flex-direction: column;
    text-align: center;
}
`;
