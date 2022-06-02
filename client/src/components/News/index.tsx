import React from "react";
import { NewsUpperLine, NewsContainerCard, NewsContainer, NewsContainerText, NewsCard, NewsImage, NewsLine, NewsTitle, NewsText, NewsLink, NewsIcons } from './style';
// this photo is just a test to see how it looks like -> REMEMBER TO DELETE IT
import Foto from './photo-test/image-12.png';
// put these icons in a folder.
import Arrow from '../../assets/arrow.svg';
import Siren from '../../assets/siren.svg';
// import axios to back connection
import axios from 'axios';
import { useState, useEffect } from "react";
import apiAxios from '../../services/api-axios';

type NewsProps = {
    image : string,
    title : string,
    text : string,
    link : string
}

export const News: React.ElementType = ({image, title, text, link}:NewsProps) => {
    
    const [news, setNews] = useState<NewsProps[]>();
    const [news2, setNews2] = useState([]);

    const url = apiAxios;

    function getImage() {
        axios.get('http://localhost:3001/news')
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
                    <NewsImage src={newsInfo?.image}/>
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
