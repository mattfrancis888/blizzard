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
const slides = [
    {
        title: "Crash Bandicoot",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc1446fda2f87e332/60134add9d2dcf0eda34fc8c/CB4_Launch_Keyart-Bnet-Home_Banner_Desktop_Home-2500x514.webp?auto=webp&format=pjpg",
    },
    {
        title: "Warzone",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt430768244603486e/6036f8ed0b1d853be8ad56fc/CODCW_S2_Keyart-Bnet-Home_Banner_Desktop_Home-2500x514.webp?auto=webp&format=pjpg",
    },
    {
        title: "WOW",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc1312ef8fbc2b4c6/60550544c6713d4e7a4d554c/wow-bcc-beta-now-live-web-2500x514-RD01.jpg",
    },
];
// const IFillTimeOut {
//     index: number,
//     clicked:false;
// }
const HomeCarousel: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const [showSlide, setShowSlide] = useState(false);
    const [fillButton, setFillButton] = useState(0);
    const [stopAutoplay, setStopAutoplay] = useState(false);

    useEffect(() => {
        console.log("fillButton", fillButton);
        let fillTimeOut = setTimeout(() => {
            console.log(fillButton);
            if (fillButton > 2) {
                //Reset after third button
                setFillButton(0);
            } else setFillButton(fillButton + 1);
        }, 5000);

        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [fillButton]);

    const transition = useTransition(showSlide, {
        from: {
            transform: "translate3d(2% , 0px, 0px)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0% , 0px, 0px)",
            opacity: 1,
        },

        config: {
            duration: 3000,
        },
    });

    const fill = useTransition(fillButton, {
        from: {
            width: "0%",
        },
        enter: {
            width: "100%",
        },

        config: {
            duration: 3000,
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
                    {transition((style, item) => {
                        return (
                            <div className="backgroundContainer">
                                <animated.img
                                    src={slide.image}
                                    alt="game slide"
                                    style={style}
                                ></animated.img>
                            </div>
                        );
                    })}
                </Slide>
            );
        });
    };

    const renderDots = () => {
        return slides.map((slide, index) => {
            return (
                <div
                    key={index}
                    className="dotInnerWrap"
                    onMouseEnter={() => {
                        //there is a caveat with the caorusel library
                        //the first dot's onclick (the dot with an index of 0) will NOT trigger unless another dot
                        //dot is clicked. I opted out using onMouseEnter to stop the carousel instead of onclick because of this
                        setStopAutoplay(true);
                    }}
                >
                    {fill((style, item) => {
                        return (
                            <Dot
                                slide={index}
                                children={
                                    item === index ? (
                                        <animated.div
                                            className={
                                                stopAutoplay
                                                    ? "dotfillHide"
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
                    naturalSlideHeight={23}
                    visibleSlides={1}
                    totalSlides={slides.length}
                    infinite={true}
                    step={1}
                    isPlaying={stopAutoplay ? false : true}
                    interval={5000}
                >
                    <div
                        className="sliderAndDotWrap"
                        onClick={() => {
                            setStopAutoplay(true);
                        }}
                    >
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
