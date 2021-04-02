import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import useWindowDimensions from "../windowDimensions";
const timer = 1000;

const stories = [
    {
        image:
            "https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/2560/omnic-crisis.jpg",
    },
    {
        image:
            "https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/2560/overwatch-established.jpg",
    },
];

const Overwatch2SlideStory: React.FC<{}> = () => {
    const [progress, setProgress] = useState({
        percentage: 0,
        controlImage: "",
    });

    const fadeBackground = useTransition(progress, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },

        config: {
            duration: timer,
        },
    });

    const fadeControlImages = useTransition(progress.percentage, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },

        config: {
            duration: timer,
        },
    });

    const fill = useSpring({
        from: {
            width: "0%",
        },
        to: {
            width: `${progress.percentage}%`,
        },

        config: {
            duration: timer,
        },
    });

    const renderBackground = () => {
        if (progress.percentage === 25 && !progress.controlImage) {
            return stories[0].image;
        } else if (progress.percentage === 100 && !progress.controlImage) {
            return stories[1].image;
        } else if (progress.controlImage) {
            return progress.controlImage;
        }
    };
    return (
        <React.Fragment>
            <div className="overwatch2StoryContainer">
                {fadeBackground((style, index) => {
                    return (
                        <animated.img
                            style={style}
                            className="overwatch2StoryBackgroundImage"
                            src={renderBackground()}
                            alt="background"
                        />
                    );
                })}
                <div className="overwatch2StoryTimelineContainer">
                    <div className="overwatch2StoryTimelineProgress overwatch2StoryTimelineProgressNotFilled"></div>
                    <animated.div
                        style={fill}
                        className="overwatch2StoryTimelineProgress"
                    ></animated.div>

                    <div className="overwatch2StoryTimelineProgressControl">
                        <div
                            onClick={() => {
                                setProgress({
                                    percentage: 25,
                                    controlImage: "",
                                });
                            }}
                            className="overwatch2StoryTimelineProgressControlSectionWrap"
                        >
                            <div className="overWatch2StoryTimelineProgressTitleAndImageWrap">
                                {progress.percentage === 25 &&
                                    fadeControlImages((style, index) => {
                                        return (
                                            <animated.div
                                                className="overwatch2StoryTimelineControlImageWrap"
                                                style={style}
                                            >
                                                <img
                                                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/thumbnails/omnic-crisis.jpg"
                                                    alt=""
                                                    onClick={(e) => {
                                                        e.stopPropagation();

                                                        setProgress({
                                                            percentage: 25,
                                                            controlImage:
                                                                "https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/2560/honor-and-glory.jpg",
                                                        });
                                                    }}
                                                />
                                                <img
                                                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/thumbnails/honor-and-glory.jpg"
                                                    alt=""
                                                    onClick={(e) => {
                                                        e.stopPropagation();

                                                        setProgress({
                                                            percentage: 25,
                                                            controlImage:
                                                                "https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/2560/honor-and-glory.jpg",
                                                        });
                                                    }}
                                                />
                                            </animated.div>
                                        );
                                    })}

                                <p className="overWatch2StoryTimlineProgressTitle">
                                    Omnic Crisis
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setProgress({
                                    percentage: 100,
                                    controlImage: "",
                                });
                            }}
                            className="overwatch2StoryTimelineProgressControlSectionWrap"
                        >
                            <div className="overWatch2StoryTimelineProgressTitleAndImageWrap">
                                {progress.percentage === 100 &&
                                    fadeControlImages((style, index) => {
                                        return (
                                            <animated.div
                                                className="overwatch2StoryTimelineControlImageWrap"
                                                style={style}
                                            >
                                                <img
                                                    src=" https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/thumbnails/overwatch-established.jpg"
                                                    alt=""
                                                />
                                            </animated.div>
                                        );
                                    })}

                                <p className="overWatch2StoryTimlineProgressTitle">
                                    Overwatch Established
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Overwatch2SlideStory;
