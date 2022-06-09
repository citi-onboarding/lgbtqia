import { HistoryContainer, HistoryIntro, HistoryFirstCard, HistorySecondCard, HistoryDescriptionRight, HistoryDescriptionLeft } from './style';
import { PeoplePicture, Protest, HistoryArrow } from '../../assets';

export const History = () => {
    return(
      <>
        <HistoryContainer>
          <HistoryIntro>
            <h1><b>História e evolução</b> do movimento</h1>
            <h3>LGBTQIA+ é o movimento político e social que defende a diversidade e busca mais representatividade e direitos para essa população. A sigla demonstra a luta por mais igualdade e respeito à diversidade. <br/> <b>Cada letra representa um grupo de pessoas.</b></h3>
          </HistoryIntro>
          <HistoryFirstCard>
            <img src={PeoplePicture} alt="A group of people smiling"/>
            <HistoryDescriptionRight>
              <h3>28 de Junho de 1969</h3>
              <p>Conhecido como a Rebelião de Stonewall &#40;ou Stonewall Riot, em inglês&#41;, o episódio durou seis dias seguidos como uma resposta contra a ação arbitrária e preconceituosa do efetivo policial, que tinha como rotina a promoção de batidas e revistas de cunho humilhante nos bares e boates gays da cidade de Nova York.</p>
            </HistoryDescriptionRight>
          </HistoryFirstCard>
          <HistorySecondCard>
            <HistoryDescriptionLeft>
              <h2>Stonewall</h2>
              <h3>28 de Junho de 1969</h3>
              <p>Conhecido como a Rebelião de Stonewall &#40;ou Stonewall Riot, em inglês&#41;, o episódio durou seis dias seguidos como uma resposta contra a ação arbitrária e preconceituosa do efetivo policial, que tinha como rotina a promoção de batidas e revistas de cunho humilhante nos bares e boates gays da cidade de Nova York.</p>
            </HistoryDescriptionLeft>
            <img src={Protest} alt="People at the Stonewall Riot (1969)"/>
          </HistorySecondCard>
          <a href="">Saiba mais sobre a história do movimento <img src={HistoryArrow} alt="Arrow Button"/></a>
        </HistoryContainer>
      </>
    )
  }