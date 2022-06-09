import React from "react";
import { Container, PersonalityContainerText, PersonalityTitle, PersonalityText, PersonalityContainer, PersonalityCard, PersonalityImage, PersonalityName, PersonalityDdescription, PersonalityIconIg, PersonalityLink, PersonalityIconYt, PersonalityButton, ButtonText, ButtonArrow } from "./style";
import Instagram from '../../assets/PersonalityInstagram.svg';
import Youtube from '../../assets/personalityYoutube.svg';
import Email from '../../assets/personalityEmail.svg';
import Arrow from '../../assets/personalityArrow.svg';
import apiAxios from '../../services/api-axios';
import { useState, useEffect } from 'react';

type PersonalityProps = {
    image : string,
    title : string,
    description : string,
    email : string,
    youtube : string,
    instagram : string
}

export const Personality: React.ElementType = ({image, title, description, email, youtube, instagram}:PersonalityProps) => {

    const [personality, setPersonality] = useState<PersonalityProps[]>();

    function getInfo() {
        apiAxios.get(`personality`)
        .then(response => {
            setPersonality(response.data)
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        getInfo();
        console.log(personality);
    }, []);

    return(
        <>
            <Container>

                <PersonalityContainerText>
                    <PersonalityTitle>Conheça instituições e pessoas ajudantes da causa</PersonalityTitle>
                    <PersonalityText>LGBTQIA+ é o movimento político e social que defende a diversidade e busca mais representatividade e direitos para essa população. A sigla demonstra a luta por mais igualdade e respeito à diversidade.</PersonalityText>
                    <PersonalityText><strong>Cada letra representa um grupo de pessoas.</strong></PersonalityText>
                </PersonalityContainerText>

                <PersonalityContainer>
                    {personality?.map((personalityInfo) => (
                    <PersonalityCard>
                        <PersonalityImage src={personalityInfo?.image} alt={personalityInfo?.title}/>
                        <PersonalityName>{personalityInfo?.title}</PersonalityName>
                        <PersonalityDdescription>{personalityInfo?.description}</PersonalityDdescription>
                        
                        {personalityInfo.instagram && <><PersonalityIconIg src={Instagram}/>
                        <PersonalityLink>{personalityInfo.instagram}</PersonalityLink> </>}
                        
                        {personalityInfo.youtube && <><PersonalityIconYt src={Youtube}/>
                        <PersonalityLink >{personalityInfo.youtube}</PersonalityLink></>}

                        {personalityInfo.email && <><PersonalityIconYt src={Email}/>
                        <PersonalityLink>{personalityInfo.email}</PersonalityLink></>}

                    </PersonalityCard>
                    ))}

                    <PersonalityButton href="https://linktr.ee/conhecaqueer"><ButtonText>Conheça mais aliades</ButtonText><ButtonArrow src={Arrow}/></PersonalityButton>
                </PersonalityContainer>

            </Container>
        </>
    )
}
