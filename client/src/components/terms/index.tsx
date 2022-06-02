import React, {Component} from "react";
import Slider from "react-slick";
import {StyledCard, Container, Filho, StyledArrowLeft, StyledArrowRight, StyledDiv} from "./styles"
import {Card} from "../cards"
import {lesbian} from "../cards"
import {gay} from "../cards"
import {bi} from "../cards"
import {trans} from "../cards"
import {queer} from "../cards"


export default class Carousel extends Component {
    slider: any;

    constructor(props:any) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        appendDots: (dots: any) => (
            <StyledDiv>
            <ul style={{ margin: "100px 0px 0px 0px", bottom: "auto", padding: "0px", width: "120px",
                        display: "inline-flex", justifyContent: "space-between"}}> {dots} </ul>
            </StyledDiv>
        ),
        customPaging: (i: any) => (
            <div
            style={{
                width: "30px",
                height: "30px",
                color: "blue",
                border: "1px blue solid"
            }}
            >
            </div>
        )
      };
      
      return (
        <Container>
        <button className="button" onClick={this.previous} style= {{border: "none",
                                                                margin: "0px 106px 0px 0px",
                                                                padding: "0px",
                                                                width: "auto",
                                                                overflow: "visible",
                                                                background: "transparent",}}
        >
          <StyledArrowLeft/>
        </button>
        <Filho>
          <Slider {...settings} ref={c => (this.slider = c)}>
            <div>
              <StyledCard>
                <Card
                {...lesbian}
                />
              </StyledCard>
            </div>
            <div>
              <StyledCard>
                <Card
                  {...gay}
                  />
              </StyledCard>
            </div>
            <div>
              <StyledCard>
              <Card
                {...bi}
                />
              </StyledCard>
            </div>
            <div>
              <StyledCard>
              <Card
                {...trans}
                />
              </StyledCard>
            </div>
            <div>
              <StyledCard>
              <Card
                {...queer}
                />
              </StyledCard>
            </div>
          </Slider>
        </Filho>
        <button className="button" onClick={this.next} style= {{border: "none",
                                                                margin: "0px 0px 0px 106px",
                                                                padding: "0px",
                                                                width: "auto",
                                                                overflow: "visible",
                                                                background: "transparent",}}
        >
          <StyledArrowRight/>
        </button>
      </Container>
      );
    }
  }