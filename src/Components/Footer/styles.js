import styled from "styled-components";

export const Container = styled.footer `
    width: 100%;
    height: 60px;

    background-color: #3C184E;
    color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        border-bottom: 1px solid #fff;
    }

    a {
        text-decoration: none;
        color: #fff;
        margin-left: 8px;
    }

    @media (max-width: 780px) {
        font-size: 14px;
    }

`;