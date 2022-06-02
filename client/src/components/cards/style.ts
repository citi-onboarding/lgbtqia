import styled from 'styled-components'; 

export const CardContainer = styled.div `
    width: 750.33px;
    height: 318px;

    /* background: #FCFCFC;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
    border-radius: 24px; */

    display: flex;
    justify-content: flex-start;
`;

export const Info = styled.div `
    width: 507.33px;
    display: flex;
    flex-direction: column;
    p{
        width: 507.33px;
        height: 137.87px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 36px;

        color: #222222;
    }
`;

export const TermFlag = styled.div `
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    height: 30px;
    margin: 59.91px 0px 30.3px 0px;
    h1 {
        /* width: 98.43px; */
        height: 30px;

        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;

        color: #101010;
        margin-right: 15.99px;
    }
    img {
        width: 34.92px;
        height: 20.96px;
    }
`;

export const Description = styled.p `
        width: 507.33px;
        height: 137.87px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 36px;

        color: #222222;
`;

export const TermFlag2 = styled.div `
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    height: 30px;
    margin: 69.73px 0px 30.3px 0px;
    h1 {
        width: 452.22px;
        height: 30px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;

        color: #101010;
        margin-right: 15.99px;
    }
    img {
        width: 34.92px;
        height: 20.96px;
        align-self: flex-start;
    }
`;