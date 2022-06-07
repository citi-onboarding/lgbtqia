import styled from 'styled-components'; 
import { theme } from '../../styles/theme';

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 216.32px;
    `;

export const NewsContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    left: -8px;
    margin-top: 0px;
    min-height: 667.36px;
    max-height: 1000000px;
`;

export const NewsUpperLine = styled.hr`
    display: flex;
    align-items: end;
    width: 592.46px;
    height: 7.32px;
    margin-top: 0px;
    border-width: 0;
    align-self: flex-end;
    background: ${theme.colors.primary_purple};
    border-radius: 14px;
`;

export const NewsContainerText = styled.p`
    display: flex;
    width: 762.42px;
    height: 43px;
    margin-left: 95px;
    margin-top: 85.07px;
    gap: 21.42px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
`;

export const NewsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 557.33px;
    height: 520px;
    margin-right: 21.69px;
    background: #FCFCFC;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-bottom: 20px;
`;

export const NewsImage = styled.img`
    width: 557.33px;
    height: 222.6px;
    border-radius: 9px 0px 0px 0px;
`;

export const NewsLine = styled.hr`
    height: 4.59px;
    background: ${theme.colors.primary_purple};
    border-width: 0;
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
    display: flex;
    align-items: center;
    gap: 12.54px;
    width: 150.12px;
    height: 36.48px;
    margin-left: 19.33px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 21.3002px;
    line-height: 47px;
    color: #222222;
`;

export const NewsIcons = styled.img`
    width: 40.8px;
    gap: 10px;
    left: 240.38px;
    top: 688.27px;
    border: 1.99689px #222222;
`;
