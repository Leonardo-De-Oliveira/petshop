import styled from "styled-components";

export const ContainerContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    iframe {
        @media (max-width: 780px) {
            width: 320px;
            height: 400px;
        }
    }
`;

export const Networks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
    gap: 30px;

    .icons {
        width: 30px;
        height: 30px;
        color: #3C184E;
    }
`;