import React from "react";
import { Carousel, Intro } from "../../components"
import { Container } from "./styles"

export const Terms: React.ElementType = () => {
    return (
        <Container>
            <Intro/>
            <Carousel/>
        </Container> 
    );
}