import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  font-family: 'Rubik';
`

export const FooterContent = styled.div`
  color: #fff;
  background-color: #1C1C1C;
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 137px;
  padding-right: 165.75px;
`

export const FooterContentLogo = styled.div`
  width: 608.19px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const FooterContentText = styled.div`
  font-size: 16px;
  line-height: 35.5px;
  width: 447.75px;
`

export const FooterSocialMedia = styled.div`
  width: 176.59px;
  display: flex;
  justify-content: space-between;
    img:hover {
      filter: invert(64%) sepia(66%) saturate(5668%) hue-rotate(309deg) brightness(99%) contrast(89%);
    }
`

export const FooterSignature = styled.div`
  display: flex;
  color: #7F7F7F;
  background-color: #121212;
  width: 100%;
  height: 62px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 166.33px;
  font-size: 18px;
`