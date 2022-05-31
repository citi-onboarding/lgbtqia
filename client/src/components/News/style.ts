import styled from 'styled-components'; 


export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;

    // position: absolute;
    width: 557.33px;
    height: 520px;
    margin-left: 114.73px;
    margin-top: 223.64px;

    background: #FCFCFC;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

export const NewsImage = styled.img`
    width: 557.33px;
    height: 222.6px;
    border-radius: 9px 0px 0px 0px;
`;

export const NewsTitle = styled.h1`
    width: 475.4px;
    height: 32.13px;
    margin-left: 19.33px;
    margin-bottom: 24.76px;
    margin-top: 26.59px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    color: #101010;
`;

export const NewsText = styled.p`
    width: 528.67px;
    height: 98.61px;
    margin-left: 19.33px;
    margin-bottom: 31.18px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;

    color: #222222;
`;

export const NewsLink = styled.a`
    width: 86.77px;
    height: 36.48px;
    margin-left: 19.33px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 21.3002px;
    line-height: 47px;

    color: #222222;
`;
