import React from "react";
import { NewsContainer, NewsCard, NewsImage, NewsLine, NewsTitle, NewsText, NewsLink } from './style';
import Foto from './photo-test/image-12.png';

type NewsProps = {
    image : string,
    title : string,
    text : string,
    link : string
}

export const News: React.ElementType = () => {
    return(
        <NewsCard>
            <NewsImage src={Foto}/>
            <NewsLine/>
            <NewsTitle>Protesto no Texas - USA</NewsTitle>
            <NewsText>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem.Lorem ipsumLorem</NewsText>
            <NewsLink>Leia mais</NewsLink>
        </NewsCard>
    );
}
