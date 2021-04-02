import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import useWindowDimensions from "../windowDimensions";
import Overwatch2SlideExplore from "./Overwatch2SlideExplore";
import anime from "animejs/lib/anime.es.js";
import Overwatch2Carousel from "./Overwatch2Carousel";
import { LG_SCREEN_SIZE, MED_SCREEN_SIZE } from "../constants";
const timer = 3000;

const Overwatch2: React.FC<{}> = () => {
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
                    {width > LG_SCREEN_SIZE && (
                        <h1 className="overwatch2SlideExploreDetailsHeader">
                            Power Up And Save The World
                        </h1>
                    )}
                    <div className="overwatch2SlideExploreDetailsTitleWrap">
                        <div className="overwatch2SlideExploreDetailsTitleSelected"></div>
                        <h3 className="overwatch2SlideExploreDetailsTitle">
                            Action-packed story missions
                        </h3>
                    </div>
                    <p className="overwatch2SlideExploreDetailsText">
                        Play an active role in the next chapter of the Overwatch
                        saga through a series of intense four-player missions.
                        Fight back against Null Sector, uncover the motives
                        behind the omnic attacks, and confront a rising wave of
                        new threats.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Overwatch2;
