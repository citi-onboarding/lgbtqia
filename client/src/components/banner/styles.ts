import styled from 'styled-components'; 


export const Container = styled.div`
    width: 100%;
    height: 45.387994143484626vw;
    /* height: 620px; */

    display: flex;
    justify-content: space-between;
`;

export const Info = styled.div`
    width: 40.020497803806734vw;

    margin-top: 8.299414348462665vw;
    margin-left: 5.830893118594437vw;

    /* width: 546.68px;
    margin-top: 113.37px;
    margin-left: 79.65px; */

    h1{
        width: 100%;
        height: 9.66325036603221vw;
        /* height: 132px; */

        font-style: normal;
        font-weight: 600;
        font-size: 4.099560761347vw;
        line-height: 4.831625183016105vw;
        
        margin-bottom: 3.074670571010249vw;

        /* margin-bottom: 42px;
        font-size: 56px;
        line-height: 66px; */

        color: #000000;
    }

    h2 {
        width: 41.50732064421669vw;
        height: 10.190336749633968vw;
        /* width: 566.99px;
        height: 139.2px; */

        font-style: normal;
        font-weight: 400;
        font-size: 1.4641288433382138vw;
        line-height: 2.635431918008785vw;

        margin-bottom: 5.142020497803807vw;

        /* font-size: 20px;
        line-height: 36px;
        margin-bottom: 70.24px; */
        /* or 178% */


        color: #000000;
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 9.66325036603221vw;
    /* height: 132px; */

    font-style: normal;
    font-weight: 600;
    font-size: 4.099560761347vw;
    line-height: 4.831625183016105vw;
    
    margin-bottom: 3.074670571010249vw;

    /* margin-bottom: 42px;
    font-size: 56px;
    line-height: 66px; */

    color: #000000;
`;

export const Description = styled.div`
    width: 41.50732064421669vw;
    height: 10.190336749633968vw;
    /* width: 566.99px;
    height: 139.2px; */

    font-style: normal;
    font-weight: 400;
    font-size: 1.4641288433382138vw;
    line-height: 2.635431918008785vw;

    margin-bottom: 5.142020497803807vw;

    /* font-size: 20px;
    line-height: 36px;
    margin-bottom: 70.24px; */
    /* or 178% */


    color: #000000;
`;

export const ScrollDown = styled.div`
    display: flex;
`;



export const ScrollText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.9970717423133237vw;
    /* margin-left: 27.28px; */
    h3 {
        width: 10.726207906295755vw;
        height: 2.7298682284040994vw;
        /* width: 146.52px;
        height: 37.29px; */

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 1.171303074670571vw;
        line-height: 2.635431918008785vw;
        /* font-size: 16px;
        line-height: 36px; */
        /* or 222% */


        color: #000000;

        opacity: 0.55;
    }

    p {
        font-family: 'Rubik';
        font-style: italic;
        font-weight: 300;
        font-size: 1.0248901903367496vw;
        /* font-size: 14px; */
        /* or 254% */


        color: #000000;

        opacity: 0.55;
    }
`;