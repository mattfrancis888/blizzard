import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import Overwatch2SlideLanding from "./Overwatch2SlideLanding";
import Overwatch2SlideExplore from "./Overwatch2SlideExplore";
import Overwatch2SlideStory from "./Overwatch2SlideStory";
import Overwatch2SlideNext from "./Overwatch2SlideNext";
import anime from "animejs/lib/anime.es.js";
import Overwatch2Carousel from "./Overwatch2Carousel";

const Overwatch2: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Overwatch2SlideStory />
            {/* <Overwatch2Carousel /> */}
            {/* <Overwatch2SlideLanding /> */}
            {/* <Overwatch2SlideExplore /> */}
            {/* <Overwatch2SlideNext /> */}
        </React.Fragment>
    );
};

export default Overwatch2;
