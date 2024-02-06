import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const Container = styled.div`
    width: 100%;
`;

export const BoxContainer = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 780px) {
        background-position: right;
    }
`;

export const Box = styled.div`
    width: 700px;
    height: 220px;
    padding: 0 30px;
    background-color: #ffffff6e;
    text-align: center;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 10px;

    box-shadow: 0px 0px 10px  #3c184e;
`;

export const H1 = styled.h1`
    color: #3c184e;
    font-size: 38px;
    font-weight: 900;

    @media (max-width: 780px) {
        font-size: 30px;
    }
`; 

export const Button = styled.button`
    padding: 5px 10px;
    background-color: #3C184E;
    color: #fff;
    border-radius: 5px;

    cursor: pointer;

    margin: 10px 0 0 0;
    font-size: 16px;

    display: flex;
    gap: 5px;
`;