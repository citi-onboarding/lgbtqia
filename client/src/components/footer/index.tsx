import { FooterContainer, FooterContent, FooterContentLogo, FooterSocialMedia, FooterContentText, FooterSignature } from './style'
import { facebookLogo, instagramLogo, lgbtLogo, verticalBar, youtubeLogo, citiLogoS, heartVector, } from "../../assets";


export const Footer = () => {
  return(
    <>
      <FooterContainer>
        <FooterContent>
          <FooterContentLogo>
            <img src={lgbtLogo} alt="LGBT Logo" />
            <img src={verticalBar} alt="Barra Vertical" />
            <FooterContentText>
              Somos uma organização sem <strong>fins lucrativos</strong> que visa gerar <br /> informação para as pessoas da comunidade LGBTQIA+.
            </FooterContentText>
          </FooterContentLogo>
          <FooterSocialMedia>
            <a href="https://www.instagram.com/" target="_blank"><img src={instagramLogo} alt="Instagram Logo" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={facebookLogo} alt="Facebook Logo" /></a>
            <a href="https://www.youtube.com/" target="_blank"><img src={youtubeLogo} alt="Youtube Logo" /></a>
            </FooterSocialMedia>
        </FooterContent>
        <FooterSignature>
          Made with &lt;&#x0002F;&gt; and&nbsp;&nbsp;&nbsp;<img src={ heartVector } alt="heart" />&nbsp;&nbsp;&nbsp;by&nbsp;&nbsp;<img src={ citiLogoS } alt="CITi" />
        </FooterSignature>
      </FooterContainer>
    </>
  )
}