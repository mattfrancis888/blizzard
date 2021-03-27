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
import { useTransition, animated, useSpring, useChain } from "react-spring";
const timer = 3000;

const heroes = [
    {
        hero: "Hunter",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt52e4af1e33a04b38/5e271e4f486f10424527ac46/heroes_classSelect_hunter_hover.png",
    },
    {
        hero: "Warrior",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltbe6ac8d5e898b1a3/5e271e5e7c805841bb5f80c5/heroes_classSelect_warrior_hover.png",
    },
    {
        hero: "Warlock",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltb4cc0e879fcedb8a/5e271e417be0e73d40675e2a/heroes_classSelect_warlock_hover.png",
    },
    {
        hero: "Shaman",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt5b86ed089f5445dd/5e20a24871e37241baaaba09/heroes_shaman_tile_hover.png",
    },
    {
        hero: "Rogue",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltbcded2b184c91328/5e271e6ea9cce63cb6048b03/heroes_classSelect_rogue_hover.png",
    },
    {
        hero: "Mage",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt0fc0d0fef8c4b0ee/5e4f110ba9f0fb732c24c41d/heroes_classSelect_mage_hover.png",
    },
    {
        hero: "Druid",
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltce0b2647154c4b4e/5e271e317be0e73d40675e24/heroes_classSelect_druid_hover.png",
    },
];
const HearthstoneHeroesCarousel: React.FC<{}> = (props) => {
    const { width } = useWindowDimensions();

    const renderSlides = () => {
        return heroes.map((hero, index) => {
            return (
                <Slide
                    index={index}
                    key={index}
                    className={`hearthstoneHeroeslide`}
                >
                    <div className="hearthstoneHeroesSlideInnerWrap">
                        <img src={hero.image} alt="hero"></img>
                    </div>
                </Slide>
            );
        });
    };

    const renderHeight = () => {
        if (width < 400) {
            return 250;
        }
        if (width < SM_SCREEN_SIZE) {
            return 250;
        } else if (width < MED_SCREEN_SIZE) {
            return 250;
        } else if (width < LG_SCREEN_SIZE) {
            return 250;
        }
        return 150;
    };

    const renderCarousel = (): JSX.Element | JSX.Element[] => {
        return (
            <div>
                <CarouselProvider
                    className="hearthstoneHeroesCarouselProvider"
                    naturalSlideWidth={100}
                    naturalSlideHeight={renderHeight()}
                    visibleSlides={width < LG_SCREEN_SIZE ? 1 : 3}
                    totalSlides={heroes.length}
                    infinite={true}
                    step={1}
                    // isPlaying={stopAutoplay ? false : true}
                    // interval={5000}
                >
                    <Slider>{renderSlides()}</Slider>
                </CarouselProvider>
            </div>
        );
    };

    return <div>{renderCarousel()}</div>;
};

export default HearthstoneHeroesCarousel;
