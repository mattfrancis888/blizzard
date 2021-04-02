import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import useWindowDimensions from "../windowDimensions";
import Overwatch2SlideExplore from "./Overwatch2SlideExplore";
import anime from "animejs/lib/anime.es.js";
import Overwatch2Carousel from "./Overwatch2Carousel";
import { LG_SCREEN_SIZE, MED_SCREEN_SIZE } from "../constants";
import useMeasure from "../useMeasure";
import Overwatch2Accordion from "./Overwatch2Accordion";
const timer = 3000;

const content = [
    {
        title: `Action-packed story missions`,
        desc: `Play an active role in the next chapter of the Overwatch saga through a series of intense four-player missions. 
        Fight back against Null Sector, uncover the motives behind the omnic attacks, and confront a rising wave of new threats.`,
        image: `https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/co-op-missions/story-missions/story01-2560.jpg`,
    },
    {
        title: `Replayable Hero Missions`,
        desc: `The battle continues with Hero Missions. As escalating crises break out around the world,
        encounter an ever-changing array of scenarios with a range of diverse and dangerous enemies. Level up your favorite heroes and earn powerful customization options to help beat the odds.`,
        image: `https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/co-op-missions/hero-missions/hero02-2560.jpg`,
    },
    {
        title: `New Factions Arise`,
        desc: `It’s up to you and your friends to stop Null Sector, the elite forces of Talon, and other enemies of Overwatch from carrying out their plans.
        Each enemy faction features a unique mix of units with their own strategies and strengths, challenging you to adapt your approach every time you play.`,
        image: `https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/co-op-missions/enemies/enemy01-2560.jpg`,
    },
];
const Overwatch2: React.FC<{}> = () => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0);

    console.log(selectedContentIndex);

    //Does not work becuase we have multiple binds, so we create the Overwatch2Accordion
    // const showDesc = useTransition(selectedContentIndex, {
    //     from: {
    //         height: 0,
    //         overflow: "hidden",
    //     },
    //     enter: {
    //         height: height,
    //     },

    //     leave: {
    //         height: 0,
    //     },

    //     config: {
    //         duration: timer,
    //     },
    // });

    const titleClicked = useTransition(selectedContentIndex, {
        from: {
            borderLeft: "0px solid #f06414",
        },
        enter: {
            borderLeft: "8px solid #f06414",
        },
        config: {
            duration: 250,
        },
    });

    const slide = useSpring({
        from: {
            transform: "translate3d(-10%,0%,0px)",
            opacity: 0,
        },
        to: {
            transform: "translate3d(0%,0%,0px)",
            opacity: 1,
        },
        config: {
            duration: 750,
        },
    });

    const backgroundTransition = useTransition(selectedContentIndex, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        config: {
            duration: 750,
        },
    });

    const { width } = useWindowDimensions();
    return (
        <React.Fragment>
            <div className="overwatch2SlideExploreDetailsContainer">
                {width < LG_SCREEN_SIZE && (
                    <h1 className="overwatch2SlideExploreDetailsHeader">
                        Power Up And Save The World
                    </h1>
                )}
                {backgroundTransition((style, item) => {
                    return (
                        <animated.img
                            style={style}
                            className="overwatch2SlideExploreDetailsSlideImage"
                            src={content[item].image}
                            alt=""
                        />
                    );
                })}

                <animated.div
                    style={slide}
                    className="overwatch2SlideExploreDetailsTextContainer"
                >
                    {width >= LG_SCREEN_SIZE && (
                        <h1 className="overwatch2SlideExploreDetailsHeader">
                            Power Up And Save The World
                        </h1>
                    )}
                    {titleClicked((style, item) => {
                        return (
                            <animated.div
                                className={`overwatch2SlideExploreDetailsTitleWrap`}
                                style={
                                    width >= LG_SCREEN_SIZE && item === 0
                                        ? style
                                        : {}
                                }
                                onClick={() => setSelectedContentIndex(0)}
                            >
                                <div className="overwatch2SlideExploreDetailsTitleSelected"></div>
                                <h3 className="overwatch2SlideExploreDetailsTitle">
                                    {content[0].title}
                                </h3>
                            </animated.div>
                        );
                    })}

                    <Overwatch2Accordion
                        toggle={selectedContentIndex === 0 ? true : false}
                    />

                    {titleClicked((style, item) => {
                        return (
                            <animated.div
                                style={
                                    width >= LG_SCREEN_SIZE && item === 1
                                        ? style
                                        : {}
                                }
                                onClick={() => setSelectedContentIndex(1)}
                                className={`overwatch2SlideExploreDetailsTitleWrap`}
                            >
                                <div className="overwatch2SlideExploreDetailsTitleSelected"></div>
                                <h3 className="overwatch2SlideExploreDetailsTitle">
                                    {content[1].title}
                                </h3>
                            </animated.div>
                        );
                    })}
                    <Overwatch2Accordion
                        toggle={selectedContentIndex === 1 ? true : false}
                    />
                </animated.div>
            </div>
        </React.Fragment>
    );
};

export default Overwatch2;
