import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import useWindowDimensions from "../windowDimensions";
const timer = 1000;

const Overwatch2SlideStory: React.FC<{}> = () => {
    const [progress, setProgress] = useState(0);

    // const fill = useTransition(progress, {
    //     from: {
    //         width: "0%",
    //     },
    //     enter: {
    //         width: `${progress}%`,
    //     },

    //     config: {
    //         duration: timer,
    //     },
    // });

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

    // const [startPod, setStartPod] = useState(false);

    // const { podX, podY } = useSpring({
    //     podX: startPod ? 5 : 0,
    //     podY: startPod ? 60 : 0,

    //     config: {
    //         duration: podTimer / 2,
    //         mass: 10,
    //         tension: 550,
    //         friction: 140,
    //     },
    // });

    return (
        <React.Fragment>
            <div>
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
                            <div className="overWatch2StoryTimlineProgressTitleAndImageWrap">
                                {/* {progress === 25 && (
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"></img>
                                    )} */}

                                <p className="overWatch2StoryTimlineProgressTitle">
                                    Omnic Crisis
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => setProgress(100)}
                            className="overwatch2StoryTimelineProgressControlSectionWrap"
                        >
                            <div className="overWatch2StoryTimlineProgressTitleAndImageWrap">
                                {progress === 100 && (
                                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"></img>
                                )}

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
