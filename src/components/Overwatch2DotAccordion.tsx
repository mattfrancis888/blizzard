import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import useWindowDimensions from "../windowDimensions";
import Overwatch2SlideExplore from "./Overwatch2SlideExplore";
import anime from "animejs/lib/anime.es.js";
import Overwatch2Carousel from "./Overwatch2Carousel";
import { LG_SCREEN_SIZE, MED_SCREEN_SIZE } from "../constants";
import useMeasure from "../useMeasure";
const timer = 1000;

interface Overwatch2AccordianProps {
    toggle: boolean;
}
const Overwatch2: React.FC<Overwatch2AccordianProps> = (props) => {
    //@ts-ignore
    const [bind, { height }] = useMeasure();
    const showDescSpring = useSpring({
        from: {
            overflow: "hidden",
            height: 0,
        },
        to: {
            width: props.toggle ? height : 0,
        },
        config: {
            duration: timer,
        },
    });
    console.log(props.toggle, height);
    return (
        <React.Fragment>
            <animated.div style={showDescSpring}>
                <div {...bind} className="overwatch2DotBackground">
                    <p className="overwatch2DotText">Story</p>
                </div>
            </animated.div>
        </React.Fragment>
    );
};

export default Overwatch2;
