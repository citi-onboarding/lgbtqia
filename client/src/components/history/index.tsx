import { Circle, Base, Date, Description, HistoryContainer, HistoryIntro, HistoryFirstCard, HistorySecondCard, HistoryDescriptionRight, HistoryDescriptionLeft, ImageContainer, ImageContainer2, SideBorder, SideBorder2, StyledDiv } from './style';
import { PeoplePicture, Protest, HistoryArrow } from '../../assets';

export const History = () => {
    return(
      <>
        <HistoryContainer>
          <HistoryIntro>
            <h1 id="História"><b>História e evolução</b> do movimento</h1>
            <h3>LGBTQIA+ é o movimento político e social que defende a diversidade e busca mais representatividade e direitos para essa população. A sigla demonstra a luta por mais igualdade e respeito à diversidade. <br/> <b>Cada letra representa um grupo de pessoas.</b></h3>
          </HistoryIntro>
          <HistoryFirstCard>
            <ImageContainer>
              <SideBorder/>
              <img src={PeoplePicture} alt="A group of people smiling"/>
            </ImageContainer>
            <HistoryDescriptionRight>
              <Date>
                <h3>28 de Junho de 1969</h3>
                <Circle/>
              </Date>
              <Description>
                <p>Conhecido como a Rebelião de Stonewall &#40;ou Stonewall Riot, em inglês&#41;, o episódio durou seis dias seguidos como uma resposta contra a ação arbitrária e preconceituosa do efetivo policial, que tinha como rotina a promoção de batidas e revistas de cunho humilhante nos bares e boates gays da cidade de Nova York.</p>
              </Description>
            </HistoryDescriptionRight>
          </HistoryFirstCard>
          <StyledDiv>
            <HistorySecondCard>
                <HistoryDescriptionLeft>
                  <h2>Stonewall</h2>
                  <h3>28 de Junho de 1969</h3>
                  <p>Conhecido como a Rebelião de Stonewall &#40;ou Stonewall Riot, em inglês&#41;, o episódio durou seis dias seguidos como uma resposta contra a ação arbitrária e preconceituosa do efetivo policial, que tinha como rotina a promoção de batidas e revistas de cunho humilhante nos bares e boates gays da cidade de Nova York.</p>
                </HistoryDescriptionLeft>
                <ImageContainer2>
                  <img src={Protest} alt="People at the Stonewall Riot (1969)"/>
                  <SideBorder2/>
                </ImageContainer2>
            </HistorySecondCard>
            <Base/>
          </StyledDiv>
          <a href="">Saiba mais sobre a história do movimento <img src={HistoryArrow} alt="Arrow Button"/></a>
        </HistoryContainer>
      </>
    )
  }