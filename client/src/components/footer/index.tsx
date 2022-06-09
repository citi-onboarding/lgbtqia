import React from 'react';
import { FooterContainer, FooterContent, FooterContentLogo, FooterSocialMedia, FooterContentText, FooterSignature } from './style'
import { FacebookLogo, InstagramLogo, LgbtLogo, VerticalBar, YoutubeLogo, CitiLogoS, HeartVector, } from "../../assets";


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
          <FooterSocialMedia>
            <a href="https://www.instagram.com/" target="_blank"><img src={InstagramLogo} alt="Instagram Logo" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={FacebookLogo} alt="Facebook Logo" /></a>
            <a href="https://www.youtube.com/" target="_blank"><img src={YoutubeLogo} alt="Youtube Logo" /></a>
            </FooterSocialMedia>
        </FooterContent>
        <FooterSignature>
          Made with &lt;&#x0002F;&gt; and&nbsp;&nbsp;&nbsp;<img src={ HeartVector } alt="heart" />&nbsp;&nbsp;&nbsp;by&nbsp;&nbsp;<img src={ CitiLogoS } alt="CITi" />
        </FooterSignature>
      </FooterContainer>
    </>
  )
}