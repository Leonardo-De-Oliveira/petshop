import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 781px) {
        height: 500px;

    }

    @media (max-width: 780px) {
        text-align: center;
    }
`;

export const H2 = styled.h2`
    color: #3C184E;
`;

export const Brands = styled.div`
    max-width: 600px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 780px) {
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2, 150px );
    }

`;

export const Image = styled.img`
    width: 130px;
`;