import React from "react";
import { NewsUpperLine, NewsContainerCard, NewsContainer, NewsContainerText, NewsCard, NewsImage, NewsLine, NewsTitle, NewsText, NewsLink, NewsIcons } from './style';
import Arrow from '../../assets/arrow.svg';
import Siren from '../../assets/siren.svg';
// import axios to back connection
import axios from 'axios';
import { useState, useEffect } from "react";
import apiAxios from '../../services/api-axios';

type NewsProps = {
    image : string,
    alt : string,
    title : string,
    text : string,
    link : string
}

export const News: React.ElementType = ({image, alt, title, text, link}:NewsProps) => {
    
    const [news, setNews] = useState<NewsProps[]>();

    const url = apiAxios;

    function getImage() {
        apiAxios.get(`news`)
        .then(response => {
            setNews(response.data)
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        getImage();
        console.log(news);
    }, []);


    return(
        <>
            <NewsContainer>
                <NewsUpperLine/>
                <NewsContainerText><NewsIcons src={Siren}/>Notícias importantes sobre a comunidade</NewsContainerText>    
            </NewsContainer>

            <NewsContainerCard>
                {news?.map((newsInfo) => (
                <NewsCard>
                    <NewsImage src={newsInfo?.image} alt={newsInfo?.alt}/>
                    <NewsLine/>
                    <NewsTitle>{newsInfo?.title}</NewsTitle>
                    <NewsText>
                        {newsInfo?.text}
                    </NewsText>
                    <NewsLink href={newsInfo?.link} target='blank'>Ler mais <NewsIcons src={Arrow}/></NewsLink>
                </NewsCard>
                ))}
    
            </NewsContainerCard>
        </>
    );
}
