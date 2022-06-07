import React, {Component} from "react";
import Slider from "react-slick";
import {Container, SliderContainer, StyledArrowLeft, StyledArrowRight, StyledDiv, StyledDots} from "./styles"
import {Card} from "../cards"
import {lesbian, gay, bi, trans, queer} from "../cards"

const array: any = [lesbian, gay, bi, trans, queer];

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
            <ul style={{ margin: "0px 0px 0px 0px", bottom: "auto", padding: "0px", width: "8.784773060029282vw",
                        display: "inline-flex", justifyContent: "space-between"}}> {dots} </ul>
            </StyledDiv>
        ),
        customPaging: (i: any) => (
          <StyledDots/>
        )
      };
      
      return (
        <Container>
        <button className="button" onClick={this.previous} style= {{border: "none",
                                                                    margin: "0px 7.759882869692533vw 0px 0px",
                                                                    padding: "0px",
                                                                    width: "auto",
                                                                    overflow: "visible",
                                                                    background: "transparent",}}
        >
          <StyledArrowLeft/>
        </button>
        <SliderContainer>
          <Slider {...settings} ref={c => (this.slider = c)}>
            {array.map((element: any)=> {
              return(<div>
                <Card {...element}/>
              </div>);})}
          </Slider>
        </SliderContainer>
        <button className="button" onClick={this.next} style= {{border: "none",
                                                                margin: "0px 0px 0px 7.759882869692533vw",
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