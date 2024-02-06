import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
`;

export const H2 = styled.h2`
    color: #3c184e;
    font-weight: 300;
    margin: 30px 0;
    text-align: center;
`;

export const Card = styled.div`
    width: 250px;
    height: 520px;
    margin: 25px;
    padding: 10px;
    border: 2px solid #ccc;
    transition: 0.3s;
    text-align: center;
    color: #3c184e;

    @media (max-width: 780px) {
        width: 310px;
        height: 700px;
    }

    img {
        width: 90%;
        border-radius: 5px;
        box-shadow: 0 1px 10px #ccc;

        @media (max-width: 780px) {
        width: 270px;
    }
    }

    h3 {
        font-size: 24px;
        margin: 10px 0;
    }
    p {
        margin-top: 10px;
        font-size: 16px;
    }

    &:hover {
        border-color: transparent;
        box-shadow: 0 1px 10px #ccc;
    }
`;


