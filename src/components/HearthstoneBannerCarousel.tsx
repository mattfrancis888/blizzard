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
import anime from "animejs/lib/anime.es.js";
const timer = 3000;
const slides = [
    {
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt9aa5402bd2364d7c/603d5c7ac484333be943e53f/01_28_HS_ClassicBundle_PlayHS_Homepage_Desktop_1600x500_JY_v01.jpg?format=webp",
        description: "Get a jump on The New Classic Format",
    },
    {
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltdcda7b9ef0acc809/603d5bb802ccfb4d0f672543/02_18_HS_Classic_Launch_LoginReward_PlayHS_Homepage_Desktop_1600x500_JY_v01.jpg?format=webp",
        description: "A Golden Gift!",
    },
    {
        image:
            "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt0b5997ac49a51fad/6026e8320b1d853be8ad4fe8/20p0_Mega_Bundle_Homepage_20p0_Mega_Bundle_PHS_desktop_1600x500.jpg?format=webp",
        description: "Prepare for the barrens with a Mega Bundle",
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

        //There is a reason why I used anime.js, look at renderSlides()
        if (width > SM_SCREEN_SIZE)
            anime({
                targets: `.hearthstoneBannerCarouselImageWrap`,
                // Properties
                // Animation Parameters

                opacity: [
                    {
                        value: [0, 1],
                        duration: timer,
                        easing: "easeOutQuad",
                    },
                ],
                scale: [
                    {
                        value: [1.5, 1],
                        duration: timer,
                        easing: "easeOutQuad",
                    },
                ],
            });
        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [showSlide]);

    const transitionRef = useRef();
    const transition = useTransition(showSlide, {
        //transitionRef,
        from: {
            transform: "translate3d(0px , 50%, 0px)",

            opacity: 0,
        },
        enter: {
            transform: "translate3d(0px , 0px, 0px)",
            opacity: 1,
        },

        config: {
            duration: timer / 2,
        },
    });

    const transitionOutRef = useRef();
    const transitionOut = useSpring({
        transitionOutRef,
        from: {
            transform: "translate3d(0px , 0px, 0px)",
            opacity: 1,
        },
        to: {
            transform: "translate3d(0px , -50%, 0px)",
            opacity: 0,
        },
        config: {
            duration: timer / 2,
        },
    });

    //NOTE:Currently broken in this version, come back to it later when new version releases
    // useChain([transitionRef, transitionOutRef]);

    const scale = useTransition(showSlide, {
        from: {
            transform: "scale(1.5)",
            opacity: 0,
        },
        enter: {
            transform: "scale(1)",
            opacity: 1,
        },

        config: {
            duration: timer,
        },
    });

    const renderSlides = () => {
        return slides.map((slide, index) => {
            return (
                <Slide index={index} key={index} className={`hearthstoneSlide`}>
                    <div className="hearthstoneBannerBackgroundContainer">
                        {/* 
                         Whenever the slide gets clicked, it makes a network request for the image becasue of
                        the hook this is bad.
                        Issue on: https://github.com/pmndrs/react-spring/discussions/1377
                        I solved this by using animejs to animate it;
                        // it will NOT make a new network request call when we re-render 
                        // with a hook's setStatd - 
                        //we are manipulating button onclick instead of using it to render a
                        //image with a new src :)
                        {scale((style, item, key) => {
                            return (
                                <animated.div
                                    className="hearthstoneBannerCarouselImageWrap"
                                    style={width > SM_SCREEN_SIZE ? style : {}}
                                >
                                    <img src={slide.image} alt="project" />
                                </animated.div>
                            );
                        })} */}
                        <div className="hearthstoneBannerCarouselImageWrap">
                            <img src={slide.image} alt="project" />
                        </div>
                        {transition((style, item) => {
                            return (
                                <div
                                    className={`hearthstoneSlideImageLogoAndDescWrap
                                    `}
                                >
                                    <animated.div
                                        style={
                                            width > SM_SCREEN_SIZE ? style : {}
                                        }
                                    >
                                        <h1 className="hearthstoneSlideDesc">
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
                    <React.Fragment>
                        <Dot
                            disabled={false}
                            //Must USE DISABLED, OR else when the carousel first renders..Dot's onclick won't be rendered
                            // for the first Dot because it was automatically selected by the carousel
                            slide={index}
                            className="hearthstoneBannerCarouselDot"
                        />
                    </React.Fragment>
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
            <div>
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
                    <Slider className="hearthstoneBannerSliderContainer">
                        {renderSlides()}
                    </Slider>

                    <div className="hearthstoneBannerCarouselDotWrap">
                        {renderDots()}
                    </div>
                </CarouselProvider>
            </div>
        );
    };

    return <div>{renderCarousel()}</div>;
};

export default HearthstoneBannerCarousel;
