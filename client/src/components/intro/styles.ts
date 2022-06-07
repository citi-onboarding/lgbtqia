import styled from 'styled-components';
import {theme} from "../../styles/theme"

export const Container = styled.div`
  height: 27.71888726207906vw;
  /* height: 378.64px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    /* width: 100%; */
    height: 3.1478770131771596vw;
    /* height: 43px; */

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 2.635431918008785vw;
    line-height: 3.1478770131771596vw;
    /* font-size: 36px;
    line-height: 43px; */

    /* identical to box height */
    text-align: center;

    color: #000000;

    margin: 10.870424597364568vw 0px 1.7276720351390924vw 0px;
    /* margin: 148.49px 0px 23.6px 0px; */
  }

  span {
    font-weight: 700;
    color: ${theme.colors.primary_pink};
  }
`;

export const Description = styled.div`
  width: 59.6683748169839vw;
  height: 8.455344070278185vw;
  /* width: 815.07px;
  height: 115.5px; */
  
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 1.171303074670571vw;
  line-height: 3.001464128843338vw;
  /* font-size: 16px;
  line-height: 41px; */

  /* or 256% */
  text-align: center;

  color: #222222;

  b {
    font-weight: 500;
  }
`;