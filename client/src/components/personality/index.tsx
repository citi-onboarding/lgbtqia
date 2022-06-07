import React from "react";
import { PersonalityContainerText, PersonalityTitle, PernalityText, PersonalityContainer, PeronalityCard, PersonalityImage } from "./style";
import Photo from './img/lorelay.png';

export const Personality: React.ElementType = () => {

    return(
        <>
            <PersonalityContainerText>
                <PersonalityTitle>Conheça instituições e pessoas ajudantes da causa</PersonalityTitle>
                <PernalityText>LGBTQIA+ é o movimento político e social que defende a diversidade e busca mais representatividade e direitos para essa população. A sigla demonstra a luta por mais igualdade e respeito à diversidade.</PernalityText>
                <PernalityText><strong>Cada letra representa um grupo de pessoas.</strong></PernalityText>
            </PersonalityContainerText>

            <PersonalityContainer>
                <PeronalityCard>
                    <PersonalityImage src={Photo} alt='lorelayfox'/>
                </PeronalityCard>
                <PeronalityCard></PeronalityCard>
            </PersonalityContainer>
        </>

    )
}