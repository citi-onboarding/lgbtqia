import React from "react";
import { Container, PersonalityContainerText, PersonalityTitle, PernalityText, PersonalityContainer, PeronalityCard, PersonalityImage, PersonalityName, PersonalityDdescription, PersonalityIconIg, PersonalityLink, PersonalityIconYt, PersonalityButton, ButtonText, ButtonArrow } from "./style";
import Photo from './img/lorelay.png';
import Instagram from '../../assets/PersonalityInstagram.svg'
import Youtube from '../../assets/personalityYoutube.svg'
import Arrow from '../../assets/personalityArrow.svg'

export const Personality: React.ElementType = () => {

    return(
        <>
            <Container>
                <PersonalityContainerText>
                    <PersonalityTitle>Conheça instituições e pessoas ajudantes da causa</PersonalityTitle>
                    <PernalityText>LGBTQIA+ é o movimento político e social que defende a diversidade e busca mais representatividade e direitos para essa população. A sigla demonstra a luta por mais igualdade e respeito à diversidade.</PernalityText>
                    <PernalityText><strong>Cada letra representa um grupo de pessoas.</strong></PernalityText>
                </PersonalityContainerText>

                <PersonalityContainer>
                    <PeronalityCard>
                        <PersonalityImage src={Photo} alt='lorelayfox'/>
                        <PersonalityName>Lorelay Fox</PersonalityName>
                        <PersonalityDdescription>Youtuber, palestrante e dragqueen, Lorelay Fox busca compartilhar conteúdos com base em pesquisa e muita vivência.</PersonalityDdescription>
                        <PersonalityIconIg src={Instagram}/>
                        <PersonalityLink href="https://www.instagram.com/lorelay_fox/" target='blank'>@lorelay_fox</PersonalityLink>
                        <PersonalityIconYt src={Youtube}/>
                        <PersonalityLink href="https://www.youtube.com/c/lorelayfox" target='blank'>lorelayfox</PersonalityLink>
                    </PeronalityCard>
                    <PeronalityCard>
                    <PersonalityImage src={Photo} alt='lorelayfox'/>
                        <PersonalityName>Lorelay Fox</PersonalityName>
                        <PersonalityDdescription>Youtuber, palestrante e dragqueen, Lorelay Fox busca compartilhar conteúdos com base em pesquisa e muita vivência.</PersonalityDdescription>
                        <PersonalityIconIg src={Instagram}/>
                        <PersonalityLink href="https://www.instagram.com/lorelay_fox/" target='blank'>@lorelay_fox</PersonalityLink>
                        <PersonalityIconYt src={Youtube}/>
                        <PersonalityLink href="https://www.youtube.com/c/lorelayfox" target='blank'>lorelayfox</PersonalityLink>    
                    </PeronalityCard>
                    <PeronalityCard>
                        <PersonalityImage src={Photo} alt='lorelayfox'/>
                        <PersonalityName>Lorelay Fox</PersonalityName>
                        <PersonalityDdescription>Youtuber, palestrante e dragqueen, Lorelay Fox busca compartilhar conteúdos com base em pesquisa e muita vivência.</PersonalityDdescription>
                        <PersonalityIconIg src={Instagram}/>
                        <PersonalityLink href="https://www.instagram.com/lorelay_fox/" target='blank'>@lorelay_fox</PersonalityLink>
                        <PersonalityIconYt src={Youtube}/>
                        <PersonalityLink href="https://www.youtube.com/c/lorelayfox" target='blank'>lorelayfox</PersonalityLink>
                    </PeronalityCard>
                    <PeronalityCard>
                        <PersonalityImage src={Photo} alt='lorelayfox'/>
                        <PersonalityName>Lorelay Fox</PersonalityName>
                        <PersonalityDdescription>Youtuber, palestrante e dragqueen, Lorelay Fox busca compartilhar conteúdos com base em pesquisa e muita vivência.</PersonalityDdescription>
                        <PersonalityIconIg src={Instagram}/>
                        <PersonalityLink href="https://www.instagram.com/lorelay_fox/" target='blank'>@lorelay_fox</PersonalityLink>
                        <PersonalityIconYt src={Youtube}/>
                        <PersonalityLink href="https://www.youtube.com/c/lorelayfox" target='blank'>lorelayfox</PersonalityLink>    
                    </PeronalityCard>

                    <PersonalityButton><ButtonText>Conheça mais aliades</ButtonText><ButtonArrow src={Arrow}/></PersonalityButton>

                </PersonalityContainer>
            </Container>
        </>
    )
}
