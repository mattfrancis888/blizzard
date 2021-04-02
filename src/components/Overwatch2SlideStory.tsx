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
    const [progress, setProgress] = useState(0);

    const fade = useTransition(progress, {
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
            width: `${progress}%`,
        },

        config: {
            duration: timer,
        },
    });

    const renderBackground = () => {
        if (progress === 25) {
            return stories[0].image;
        } else if (progress === 100) {
            return stories[1].image;
        }
    };
    return (
        <React.Fragment>
            <div className="overwatch2StoryContainer">
                {fade((style, index) => {
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
                    {/* {fill((style, index) => (
                    <animated.div
                        style={style}
                        className="overwatch2StoryTimelineProgress"
                    >
                         <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"></img>
                </animated.div> 

                
                ))} */}

                    <div className="overwatch2StoryTimelineProgress overwatch2StoryTimelineProgressNotFilled"></div>
                    <animated.div
                        style={fill}
                        className="overwatch2StoryTimelineProgress"
                    ></animated.div>

                    <div className="overwatch2StoryTimelineProgressControl">
                        <div
                            onClick={() => setProgress(25)}
                            className="overwatch2StoryTimelineProgressControlSectionWrap"
                        >
                            <div className="overWatch2StoryTimelineProgressTitleAndImageWrap">
                                {progress === 25 &&
                                    fade((style, index) => {
                                        return (
                                            <animated.div
                                                className="overwatch2StoryTimelineControlImageWrap"
                                                style={style}
                                            >
                                                <img
                                                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/thumbnails/honor-and-glory.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/timeline/thumbnails/omnic-crisis.jpg"
                                                    alt=""
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
                            onClick={() => setProgress(100)}
                            className="overwatch2StoryTimelineProgressControlSectionWrap"
                        >
                            <div className="overWatch2StoryTimelineProgressTitleAndImageWrap">
                                {progress === 100 &&
                                    fade((style, index) => {
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
