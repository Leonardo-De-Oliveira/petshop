import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;

    @media (max-width: 780px) {
        height: 150px;
    }

`;

export const Box = styled.div `
    max-width: 400px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #3c184e;

    @media (max-width: 780px) {
        justify-content: center;
    }
    
    h2 {
        font-weight: lighter;
        margin-left: 5px;
    }

    p {
        font-size: 14px;
        margin: 8px 0 0 8px;
    }
`;

export const Logo = styled.img `
    width: 25px;
`;

export const Button = styled.button `
    cursor: pointer;

    font-size: 16px;
    background: transparent;
    border: none;

    margin: 0 20px 0 0;
    font-weight: bold;

    @media (max-width: 780px) {
        margin: 10px;
    }
`;