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
import { useTransition, animated, useSpring, useTrail } from "react-spring";
const timer = 3000;
const slides = [
    {
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt9aa5402bd2364d7c/603d5c7ac484333be943e53f/01_28_HS_ClassicBundle_PlayHS_Homepage_Desktop_1600x500_JY_v01.jpg?format=webp",
        description: "Coming Soon!",
    },
    {
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt0b5997ac49a51fad/6026e8320b1d853be8ad4fe8/20p0_Mega_Bundle_Homepage_20p0_Mega_Bundle_PHS_desktop_1600x500.jpg?format=webp",
        description: "Season 2  now live",
    },
];
interface IShowSlide {
    index: number;
    stopAutoplay: boolean;
}
const HearthstoneBannerCarousel: React.FC<{}> = () => {
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
                if (showSlide.index > 0) {
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
                                <animated.div
                                    className="pictureImageWrap"
                                    style={style}
                                >
                                    <picture>
                                        <source
                                            media={`(min-width:${MED_SCREEN_SIZE}px)`}
                                            srcSet={slide.image}
                                        />
                                        {/* <source
                                            media={`(min-width:320px`}
                                            srcSet={slide.mobileImage}
                                        /> */}

                                        <img src={slide.image} alt="project" />
                                    </picture>
                                </animated.div>
                            );
                        })}
                        {transition((style, item) => {
                            return (
                                <div
                                    className={`slideImageLogoAndDescWrap
                                    `}
                                >
                                    <animated.div style={style}>
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
                            <React.Fragment>
                                <Dot
                                    disabled={false}
                                    //Must USE DISABLED, OR else when the carousel first renders..Dot's onclick won't be rendered
                                    // for the first Dot because it was automatically selected by the carousel
                                    slide={index}
                                    className="hearthstoneBannerCarouselDot"
                                />
                            </React.Fragment>
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
                    className="hearthstoneBannerCarouselContainer"
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
                        <div className="hearthstoneBannerCarouselDotWrap">
                            {renderDots()}
                        </div>
                    </div>
                </CarouselProvider>
            </div>
        );
    };

    return <div>{renderCarousel()}</div>;
};

export default HearthstoneBannerCarousel;