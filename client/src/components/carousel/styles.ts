import styled from 'styled-components';
import {ArrowLeft, ArrowRight} from "../../assets"
import { theme } from "../../styles/theme"



export const Container = styled.div`
  width: 83.0644vw;
  height: 23.27964vw;
  /* width: 1134.66px;
  height: 318px; */

  /* margin: 50px 0px 0px 50px; */

  background: #FCFCFC;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 1.7569546120058566vw;
  /* border-radius: 24px; */
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const SliderContainer = styled.div`
    width: 54.9289897510981vw; 
    height: 23.2796486090776vw;
    /* width: 750.33px; 
    height: 318px; */
    ul .slick-active div {
      width: 0.8543191800878478vw !important;
      height: 0.8543191800878478vw !important;
      margin-top: 2.70vw !important;
      /* width: 11.67px !important;
      height: 11.67px !important;
      margin-top: 38.33px !important; */

      background: ${theme.colors.primary_pink} !important;
      transition: none;
    }
    /* .slick-prev img, .slick-next img{

    } */
`;


export const StyledArrowLeft = styled.img`
    content: url(${ArrowRight});
    width: 1.390922401171303vw;
    /* width: 19px; */
    transform: rotate(180deg);
    padding-right: 0px;

    &:hover {
      transition: none;
      transform: none;
      content: url(${ArrowLeft});
    }
`;

export const StyledArrowRight = styled.img`
    content: url(${ArrowRight});
    width: 1.390922401171303vw;
    /* width: 19px; */

    &:hover {
      content: url(${ArrowLeft});
      transition: none;
      transform: rotate(180deg);
    }
`;

export const StyledDiv = styled.div`
  color: green;
  display: flex;
  justify-content: center;
`;

export const StyledDots = styled.div`
    width: 1.390922401171303vw;
    height: 0.8052708638360175vw;
    /* width: 19px;
    height: 11px; */

    background: ${theme.colors.grayscale3};
    border-radius: 0.40263543191800877vw;
    margin-top: 2.781844802342606vw;
    /* border-radius: 5.5px;
    margin-top: 38px; */
`;

