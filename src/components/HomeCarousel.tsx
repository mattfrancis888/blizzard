import React, { useEffect, useState, useRef } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    Dot,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import LazyLoad from "react-lazyload";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../windowDimensions";
import history from "../browserHistory";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
import { useTransition, animated, useSpring, useTrail } from "react-spring";
const timer = 3000;
const slides = [
    {
        title: "Crash Bandicoot",
        mobileImage:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616678348/blizzard/CB4_Launch_Keyart-Bnet-Home_Banner_Mobile_Home-1536x1536.jpg",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc1446fda2f87e332/60134add9d2dcf0eda34fc8c/CB4_Launch_Keyart-Bnet-Home_Banner_Desktop_Home-2500x514.webp?auto=webp&format=pjpg",
        logo:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616620195/blizzard/crash.png",
        description: "Coming Soon!",
    },
    {
        title: "Warzone",
        mobileImage:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616678520/blizzard/CODCW_S2_Keyart-Bnet-Home_Banner_Mobile_Home-1536x1536.jpg",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt430768244603486e/6036f8ed0b1d853be8ad56fc/CODCW_S2_Keyart-Bnet-Home_Banner_Desktop_Home-2500x514.webp?auto=webp&format=pjpg",
        logo:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616620270/blizzard/d20201211-017_CW_WZ_Logo_Lock_Up_1P_Stacked.png",
        description: "Season 2  now live",
    },
    {
        title: "WOW",
        mobileImage:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616678431/blizzard/wow-bcc-beta-now-live-web-1536x1536-RD01.jpg",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc1312ef8fbc2b4c6/60550544c6713d4e7a4d554c/wow-bcc-beta-now-live-web-2500x514-RD01.jpg",
        logo:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616620350/blizzard/WoW_C_BurningCrusade_Logo_DarkBG_MN03.png",
        description: "Beta is now live",
    },
];
interface IShowSlide {
    index: number;
    stopAutoplay: boolean;
}
const HomeCarousel: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const [showSlide, setShowSlide] = useState<IShowSlide>({
        index: 0,
        stopAutoplay: false,
    });

    const itemEls = useRef(new Array());
    useEffect(() => {
        let fillTimeOut: any;
        if (!showSlide.stopAutoplay) {
            itemEls.current[showSlide.index].children[0].click();
            fillTimeOut = setTimeout(() => {
                //Note: dont put  itemEls.current[showSlide].children[0].click();
                //here, for some reason it acts weird
                if (showSlide.index > 1) {
                    //Reset after third button
                    setShowSlide({
                        index: 0,
                        stopAutoplay: false,
                    });
                } else
                    setShowSlide({
                        index: showSlide.index + 1,
                        stopAutoplay: false,
                    });
            }, timer);
        } else {
            itemEls.current[showSlide.index].children[0].click();
        }
        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [showSlide]);

    const transition = useTransition(showSlide, {
        from: {
            transform: "translate3d(2% , 0px, 0px)",

            opacity: 0,
        },
        enter: {
            transform: "translate3d(0px , 0px, 0px)",
            opacity: 1,
        },

        config: {
            duration: timer,
        },
    });

    const fill = useTransition(showSlide, {
        from: {
            width: "0%",
        },
        enter: {
            width: "100%",
        },

        config: {
            duration: timer,
        },
    });

    const renderSlides = () => {
        return slides.map((slide, index) => {
            return (
                <Slide
                    index={index}
                    key={index}
                    className={`homeCarouselContainer`}
                >
                    <div className="backgroundContainer">
                        {transition((style, item) => {
                            return (
                                <animated.picture className="pictureImageWrap">
                                    <source
                                        media={`(min-width:${MED_SCREEN_SIZE}px)`}
                                        srcSet={slide.image}
                                    />
                                    <source
                                        media={`(min-width:320px`}
                                        srcSet={slide.mobileImage}
                                    />

                                    <img src={slide.image} alt="project" />
                                </animated.picture>
                            );
                        })}
                        {transition((style, item) => {
                            return (
                                <div
                                    className={`slideImageLogoAndDescWrap
                                    `}
                                >
                                    <animated.div style={style}>
                                        <img
                                            className="slideImageLogo"
                                            src={slide.logo}
                                            alt="game slide"
                                        ></img>
                                        <h1 className="slideDesc">
                                            {slide.description}
                                        </h1>
                                    </animated.div>
                                </div>
                            );
                        })}
                    </div>
                </Slide>
            );
        });
    };

    const renderDots = () => {
        return slides.map((slide, index) => {
            return (
                <div
                    className="dotInnerWrap"
                    key={index}
                    //Because of the ref click above, using onClick={..} would trigger this unintentionally
                    //But if we do onfocus, when a user clicks on the button, it will stop the autoplay
                    onFocus={() => {
                        //If we don't use the setHook below, the animation for slide changing won't be rendered.
                        setShowSlide({ index: index, stopAutoplay: true });
                    }}
                    ref={(element) => (itemEls.current[index] = element)}
                >
                    {fill((style, item) => {
                        return (
                            <Dot
                                disabled={false}
                                //Must USE DISABLED, OR else when the carousel first renders..Dot's onclick won't be rendered
                                // for the first Dot because it was automatically selected by the carousel
                                slide={index}
                                children={
                                    item.index === index ? (
                                        <animated.div
                                            className={
                                                item.stopAutoplay
                                                    ? "dotFillHide"
                                                    : "dotFill"
                                            }
                                            style={style}
                                        ></animated.div>
                                    ) : (
                                        ""
                                    )
                                }
                            />
                        );
                    })}
                </div>
            );
        });
    };

    const renderHeight = () => {
        if (width < SM_SCREEN_SIZE) {
            return 90;
        } else if (width < MED_SCREEN_SIZE) {
            return 70;
        } else if (width < LG_SCREEN_SIZE) {
            return 50;
        } else if (width < XL_SCREEN_SIZE) {
            return 50;
        } else if (width >= XL_SCREEN_SIZE) {
            return 40;
        }
        return 1;
    };

    const renderCarousel = (): JSX.Element | JSX.Element[] => {
        return (
            <div
                onMouseEnter={(e) => {
                    // setStyle({ opacity: "1" });
                }}
                onMouseLeave={(e) => {
                    // setStyle({ opacity: "0" });
                }}
            >
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={renderHeight()}
                    visibleSlides={1}
                    totalSlides={slides.length}
                    infinite={true}
                    step={1}
                    // isPlaying={stopAutoplay ? false : true}
                    // interval={5000}
                >
                    <div className="sliderAndDotWrap">
                        <Slider>{renderSlides()}</Slider>
                        <div className="dotWrap">{renderDots()}</div>
                    </div>
                </CarouselProvider>
            </div>
        );
    };

    return <div>{renderCarousel()}</div>;
};

export default HomeCarousel;
