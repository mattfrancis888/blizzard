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
        logo:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616620195/blizzard/crash.png",
    },
    {
        title: "Warzone",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt430768244603486e/6036f8ed0b1d853be8ad56fc/CODCW_S2_Keyart-Bnet-Home_Banner_Desktop_Home-2500x514.webp?auto=webp&format=pjpg",
        logo:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616620270/blizzard/d20201211-017_CW_WZ_Logo_Lock_Up_1P_Stacked.png",
    },
    {
        title: "WOW",
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc1312ef8fbc2b4c6/60550544c6713d4e7a4d554c/wow-bcc-beta-now-live-web-2500x514-RD01.jpg",
        logo:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616620350/blizzard/WoW_C_BurningCrusade_Logo_DarkBG_MN03.png",
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
    const [fillButton, setFillButton] = useState(0);
    const [stopAutoplay, setStopAutoplay] = useState(false);

    const itemEls = useRef(new Array());
    useEffect(() => {
        let fillTimeOut: any;
        console.log(showSlide);
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
            }, 3000);
        } else {
            itemEls.current[showSlide.index].children[0].click();
        }
        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [showSlide]);

    useEffect(() => {
        // itemEls.current[1].children[0].click();
        // console.log(itemEls.current[1].children[0].click());
    }, []);

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

    const fill = useTransition(showSlide, {
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
                    <div className="backgroundContainer">
                        {transition((style, item) => {
                            return (
                                <animated.img
                                    className="slideImage"
                                    src={slide.image}
                                    alt="game slide"
                                    style={style}
                                ></animated.img>
                            );
                        })}
                        {transition((style, item) => {
                            return (
                                <animated.img
                                    className="slideImageLogo"
                                    src={slide.logo}
                                    alt="game slide"
                                    style={style}
                                ></animated.img>
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
                    key={index}
                    className="dotInnerWrap"
                    onMouseEnter={() => {
                        //there is a caveat with the caorusel library
                        //the first dot's onclick (the dot with an index of 0) will NOT trigger unless another dot
                        //dot is clicked. I opted out using onMouseEnter to stop the carousel instead of onclick because of this
                        //setStopAutoplay(true);
                    }}
                    //Because of the ref click above, using onClick would trigger this unintentionally
                    //But if we do onfocus, when a user clicks on the button, it will stop the autoplay
                    onFocus={() => {
                        // setStopAutoplay(true);
                        setShowSlide({ index: index, stopAutoplay: true });
                    }}
                    ref={(element) => (itemEls.current[index] = element)}
                >
                    {fill((style, item) => {
                        return (
                            <Dot
                                disabled={false}
                                //Must USE DISABLED, OR else when the carousel first renders..Dot's onclick won't be rendered for the first Dot because it was
                                //automatically selected by the carousel
                                // onClick={() => {
                                //     setShowSlide(index);
                                //     console.log("buttonClick", index);
                                //     setStopAutoplay(true);
                                // }}
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
