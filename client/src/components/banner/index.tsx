import React from "react";
import { Container, Info, ScrollDown, ScrollText, } from "./styles"
import axios from 'axios';
import { useState, useEffect } from "react";
import api from '../../services/api-axios';
import { BannerImg, Mouse } from "../../assets"

type BannerProps = {
    title : string,
    description: string
}

export const Banner: React.ElementType = () => {

    const [banner, setBanner] = useState<BannerProps>(); // it's not an array, because I'm getting response.data[0]

    function getInfo() {
        api.get(`banner`) // both /banner and banner work
        .then(response => {
            setBanner(response.data[0]) // get the first element from the array
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        getInfo();
        console.log(banner);
    }, []);

    let result = banner?.description.split("`")
    
    let count = -1

    return(
    <>
        <Container>
            <Info>
                <h1>
                    {banner?.title}
                </h1>
                <h2>
                    <p>
                        {result && result.map((element)=>
                            {count++;
                            if (count%2==0) return(element);
                            else return(<b>{element}</b>)
                            })
                        }
                    </p>
                </h2>
                <ScrollDown>
                    <img src={Mouse} alt="mouse com seta para baixo" style={{margin: "10px 0px 0px 0px"}}/>
                    <ScrollText>
                        <h3>Role para baixo</h3>
                        <p>Scroll down</p>
                    </ScrollText>
                </ScrollDown>
            </Info>
            <img src={BannerImg} alt="mão segurando uma bandeira branca e mão segurando um megafone" width="603.27px"/>
        </Container>
   </>
    );
}