import React from "react";
import { NewsContainer, NewsImage, NewsTitle, NewsText, NewsLink } from './style';

type NewsProps = {
    image : string,
    title : string,
    text : string,
    link : string
}

export const News: React.ElementType = () => {
    return(
        <NewsContainer>
            <NewsImage src=""/>
            <NewsTitle>Protesto no Texas - USA</NewsTitle>
            <NewsText>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem.Lorem ipsumLorem</NewsText>
            <NewsLink>Leia mais</NewsLink>
        </NewsContainer>
    );
}
