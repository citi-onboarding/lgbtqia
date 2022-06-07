import React from "react";
import { Container, Description } from "./styles"

export const Intro: React.ElementType = () => {
    return (
        <Container>
            <h1>Conheça a sigla <span>LGBTQQICAPF2K+</span></h1>
            <Description>
                <p>LGBTQIA+ é o movimento político e social que defende a diversidade e busca mais representatividade e direitos para essa população. A sigla demonstra a luta por mais igualdade e respeito à diversidade.
                    <br/>
                <b>Cada letra representa um grupo de pessoas.</b></p>
            </Description>
            
        </Container>
    );
}