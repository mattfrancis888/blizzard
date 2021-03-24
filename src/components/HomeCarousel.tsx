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
const HomeCarousel: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const itemEls = useRef(new Array());
    const [showSlide, setShowSlide] = useState(false);
    const [fillButton, setFillButton] = useState(-1);
    const [timer, setTimer] = useState(0);
    // const handleStart = () => {
    //     increment.current = setInterval(() => {
    //         setTimer((timer) => timer + 1);
    //     }, 5000);
    // };

    useEffect(() => {
        // console.log(itemEls.current[1].focus());
    }, []);
    setTimeout(() => {
        console.log(fillButton);
        if (fillButton > 1) {
            //Reset after third button
            setFillButton(0);
        } else setFillButton(fillButton + 1);
    }, 1000);
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
            width: "50%",
        },

        config: {
            duration: 1000,
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
                            <div key={index} className="backgroundContainer">
                                <animated.img
                                    src={slide.image}
                                    alt="game slide"
                                    style={style}
                                ></animated.img>
                            </div>
                        );
                    })}

                    {/* <animated.div
                        key={index}
                        style={transition}
                    >
                        <img src={slide.image} alt="game slide"></img>
                    </animated.div> */}
                </Slide>
            );
        });
    };

    const renderDots = () => {
        return slides.map((slide, index) => {
            return fill((style, item) => {
                return (
                    <div
                        key={index}
                        ref={(element) => (itemEls.current[index] = element)}
                    >
                        <Dot
                            slide={index}
                            onClick={() => {
                                setFillButton(index);
                                // setShowSlide(true);
                            }}
                            children={
                                item === index ? (
                                    <animated.div
                                        className="dotFill"
                                        style={style}
                                    ></animated.div>
                                ) : (
                                    ""
                                )
                            }
                        />
                    </div>
                );
            });
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
                    // isPlaying={true}
                    // interval={3000}
                >
                    <div className="sliderAndDotWrap">
                        <Slider>{renderSlides()}</Slider>
                        <div className="dotWrap">
                            {renderDots()}

                            {/* {fill((style, item) => {
                                return (
                                    <Dot
                                        slide={0}
                                        onClick={() => {
                                            setShowSlide(!showSlide);
                                            // setShowSlide(true);
                                        }}
                                        children={
                                            <animated.div
                                                className="dotFill"
                                                style={style}
                                            ></animated.div>
                                        }
                                    />
                                );
                            })} */}
                        </div>
                    </div>
                </CarouselProvider>
            </div>
        );
    };

    return <div>{renderCarousel()}</div>;
};

export default HomeCarousel;
