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

const Overwatch2: React.FC<{}> = () => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0);
    //@ts-ignore
    const [bind, { height }] = useMeasure();
    console.log(height, selectedContentIndex);
    const showDesc = useTransition(selectedContentIndex, {
        from: {
            height: 0,
            overflow: "hidden",
        },
        enter: {
            height: height,
        },

        leave: {
            height: 0,
        },

        config: {
            duration: timer,
        },
    });

    // const showDescSpring = useSpring({
    //     from: {
    //         overflow: "hidden",
    //         height: 0,
    //     },
    //     to: {
    //         height: selectedContentIndex === 0 ? height : 0,
    //     },
    //     config: {
    //         duration: timer,
    //     },
    // });

    const { width } = useWindowDimensions();
    return (
        <React.Fragment>
            <div className="overwatch2SlideExploreDetailsContainer">
                {width < LG_SCREEN_SIZE && (
                    <h1 className="overwatch2SlideExploreDetailsHeader">
                        Power Up And Save The World
                    </h1>
                )}
                <img
                    className="overwatch2SlideExploreDetailsSlideImage"
                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/co-op-missions/story-missions/story01-2560.jpg"
                    alt=""
                />

                <div className="overwatch2SlideExploreDetailsTextContainer">
                    {width >= LG_SCREEN_SIZE && (
                        <h1 className="overwatch2SlideExploreDetailsHeader">
                            Power Up And Save The World
                        </h1>
                    )}
                    <div
                        className="overwatch2SlideExploreDetailsTitleWrap"
                        onClick={() => setSelectedContentIndex(0)}
                    >
                        <div className="overwatch2SlideExploreDetailsTitleSelected"></div>
                        <h3 className="overwatch2SlideExploreDetailsTitle">
                            Action-packed story missions
                        </h3>
                    </div>

                    <Overwatch2Accordion
                        toggle={selectedContentIndex === 0 ? true : false}
                    />

                    <div
                        onClick={() => setSelectedContentIndex(1)}
                        className="overwatch2SlideExploreDetailsTitleWrap"
                    >
                        <div className="overwatch2SlideExploreDetailsTitleSelected"></div>
                        <h3 className="overwatch2SlideExploreDetailsTitle">
                            Action-packed story missions 2
                        </h3>
                    </div>
                    <Overwatch2Accordion
                        toggle={selectedContentIndex === 1 ? true : false}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Overwatch2;
