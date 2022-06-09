import React from 'react';
import { FooterContainer, FooterContent, FooterContentLogo, FooterSocialMedia, FooterContentText, FooterSignature } from './style'
import { LgbtLogo, VerticalBar, CitiLogoS, HeartVector } from "../../assets";


export const Footer: React.ElementType = () => {
  return(
    <>
      <FooterContainer>
        <FooterContent>
          <FooterContentLogo>
            <img src={LgbtLogo} alt="LGBT Logo" />
            <img src={VerticalBar} alt="Barra Vertical" />
            <FooterContentText>
              Somos uma organização sem <strong>fins lucrativos</strong> que visa gerar <br /> informação para as pessoas da comunidade LGBTQIA+.
            </FooterContentText>
          </FooterContentLogo>
        </FooterContent>
        <FooterSignature>
          Made with &lt;&#x0002F;&gt; and&nbsp;&nbsp;&nbsp;<img src={ HeartVector } alt="heart" />&nbsp;&nbsp;&nbsp;by&nbsp;&nbsp;<img src={ CitiLogoS } alt="CITi" />
        </FooterSignature>
      </FooterContainer>
    </>
  )
}