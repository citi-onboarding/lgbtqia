import styled from 'styled-components'; 

export const CardContainer = styled.div `
    width: 54.9289897510981vw;
    height: 23.2796486090776vw;
    /* width: 750.33px;
    height: 318px; */

    display: flex;
    justify-content: flex-start;
`;

export const Info = styled.div `
    width: 37.1398243045388vw;
    /* width: 507.33px; */
    display: flex;
    flex-direction: column;
    p{
        width: 37.1398243045388vw;
        height: 10.092972181551977vw;
        /* width: 507.33px;
        height: 137.87px; */

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 1.171303074670571vw;
        line-height: 2.635431918008785vw;
        /* font-size: 16px;
        line-height: 36px; */

        color: #222222;
    }
`;

export const Letter = styled.div `
    width: 10.802342606149342vw;
    height: 13.20497803806735vw;
    margin: 4.638360175695461vw 7.03294289897511vw 5.436310395314789vw 0px;
    /* width: 147.56px;
    height: 180.38px;
    margin: 63.36px 96.07px 74.26px 0px; */
`;

export const TermFlag = styled.div `
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    height: 2.1961932650073206vw;
    margin: 4.38579795021962vw 0px 2.218155197657394vw 0px;
    /* height: 30px;
    margin: 59.91px 0px 30.3px 0px; */
    h1 {
        height: 2.1961932650073206vw;
        /* height: 30px; */

        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.342606149341142vw;
        line-height: 2.781844802342606vw;
        /* font-size: 32px;
        line-height: 38px; */

        color: #101010;
        margin-right: 1.170571010248902vw;
        /* margin-right: 15.99px; */
    }
    img {
        width: 2.5563689604685216vw;
        height: 1.534407027818448vw;
        /* width: 34.92px;
        height: 20.96px; */
    }
`;

export const Description = styled.p `
        width: 37.1398243045388vw;
        height: 7.054172767203514vw !important;
        margin-bottom: 1.8528550512445094vw;
        /* width: 507.33px;
        height: 96.36px !important;
        margin-bottom: 25.31px; */

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 1.171303074670571vw;
        line-height: 2.635431918008785vw;
        /* font-size: 16px;
        line-height: 36px; */

        color: #222222;
`;

export const TermFlag2 = styled.div `
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    height: 2.1961932650073206vw;
    margin: 5.1046852122986826vw 0px 1.5vw 0px;
    /* height: 30px;
    margin: 69.73px 0px 20.49px 0px; */
    h1 {
        width: 33.10541727672vw;
        height: 2.1961932650073206vw;
        /* width: 452.22px;
        height: 30px; */

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        font-size: 1.7569546120058566vw;
        /* font-size: 24px; */

        color: #101010;
        margin-right: 0px !important;
    }
    img {
        width: 2.5563689604685216vw;
        height: 1.534407027818448vw;
        /* width: 34.92px;
        height: 20.96px; */
        align-self: flex-start;
    }
`;

export const MoreInfo = styled.div `
    width: 100%;
    height: 2.005856515373353vw;
    /* height: 27.4px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    p {
        width: 15.675695461200586vw;
        height: 2.005856515373353vw;
        /* width: 214.13px;
        height: 27.4px; */

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 1.171303074670571vw;
        line-height: 2.635431918008785vw;
        /* font-size: 16px;
        line-height: 36px; */

        /* or 222% */

        color: #222222;
    }
    img {
        width: 1.2284040995607615vw;
        margin-top: 0.7320644216691069vw;
        /* width: 16.78px;
        margin-top: 10px; */
    }
`;