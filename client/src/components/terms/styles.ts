import styled from 'styled-components';
import ArrowLeft from "../../assets/arrowLeft.svg"
import ArrowRight from "../../assets/arrowRight.svg"


export const StyledDiv = styled.div`
  color: green;
  display: flex;
  justify-content: center;
`;

export const StyledUl = styled.ul`
  margin: "0px";
  width: "90px" !important;
  display: "inline";
`;

export const Container = styled.div`
  width: 1134.66px;
  height: 318px;

  background: #FCFCFC;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Filho = styled.div`
    width: 750.33px; 
    /* width: 962.83px; */
    height: 318px;
    /* background-color: pink; */
    ul .slick-active div {
        border: thick double red !important;
    }
    .slick-prev img, .slick-next img{

    }
`;

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750.33px;
    height: 318px;
    margin-left: 40px;
    margin: auto;
    /* background-color: yellow; */
`;


export const StyledArrowLeft = styled.img`
    content: url(${ArrowRight});
    width: 19px;
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
    width: 19px;

    &:hover {
      content: url(${ArrowLeft});
      transition: none;
      transform: rotate(180deg);
    }
`;