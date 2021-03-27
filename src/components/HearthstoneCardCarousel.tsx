import React, { useEffect, useState, useRef } from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../windowDimensions";
import history from "../browserHistory";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
import HearthstoneCard from "./HearthstoneCard";
import { useTransition, animated, useSpring, useChain } from "react-spring";
const timer = 3000;

interface HearthstoneCardsCarouselProps {
    cards: string[];
}
const HearthstoneCardsCarousel: React.FC<HearthstoneCardsCarouselProps> = (
    props
) => {
    const { width } = useWindowDimensions();

    const renderSlides = () => {
        return props.cards.map((card, index) => {
            return (
                <Slide
                    index={index}
                    key={index}
                    className={`hearthstoneCardSlide`}
                >
                    <div className="hearthstoneCardSlideInnerWrap">
                        <HearthstoneCard cardImage={card} />
                    </div>
                </Slide>
            );
        });
    };

    const renderHeight = () => {
        if (width < 400) {
            return 140;
        }
        if (width < SM_SCREEN_SIZE) {
            return 140;
        } else if (width < MED_SCREEN_SIZE) {
            return 150;
        } else if (width < LG_SCREEN_SIZE) {
            return 150;
        }
        return 1;
    };

    const renderCarousel = (): JSX.Element | JSX.Element[] => {
        return (
            <div>
                <CarouselProvider
                    className="hearthstoneCardCarouselProvider"
                    naturalSlideWidth={100}
                    naturalSlideHeight={renderHeight()}
                    visibleSlides={width < SM_SCREEN_SIZE ? 1 : 2}
                    totalSlides={props.cards.length}
                    infinite={true}
                    step={1}
                    // isPlaying={stopAutoplay ? false : true}
                    // interval={5000}
                >
                    <Slider className="">{renderSlides()}</Slider>
                </CarouselProvider>
            </div>
        );
    };

    return <div>{renderCarousel()}</div>;
};

export default HearthstoneCardsCarousel;
