import styled from "styled-components";

export const Contato = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`; 

export const H2 = styled.h2`
    color: #3C184E;
    font-size: 38px;
    font-weight: 100;

    span {
        font-weight: bold;
    }

    @media (max-width: 780px) {
        font-size: 30px;
    }
`;

