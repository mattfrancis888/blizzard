import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import useWindowDimensions from "../windowDimensions";
import Overwatch2SlideExplore from "./Overwatch2SlideExplore";
import anime from "animejs/lib/anime.es.js";
import Overwatch2Carousel from "./Overwatch2Carousel";
const timer = 3000;
//const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
//@ts-ignore
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
//@ts-ignore
const podTrans1 = (x, y, z) => `translate3d(${x}px,${y}px,${z}px)`;

const Overwatch2: React.FC<{}> = () => {
    const [xHook, setX] = useState(0);
    const [yHook, setY] = useState(0);

    return (
        <React.Fragment>
            {/* <div className="overwatch2SlideParentContainer"> */}
            <animated.div
                className="overwatch2SlideContainer overwatch2NextSlideContainer"
                onMouseMove={({ clientX: x, clientY: y }) => {
                    setX(x - window.innerWidth / 2);
                    setY(y - window.innerHeight / 2);
                    //Code below does not work, so I used hooks above
                    // xy.to((xy) => [x, y])
                }}
                style={{
                    transform: trans1(xHook, yHook),
                }}
            >
                <img
                    className="overwatch2NextSky"
                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/whats-next/whats-next-bg-lg.webp"
                    alt=""
                />

                <img
                    className="overwatch2NextRein"
                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/whats-next/lg/whats-next-hero-rein-lg.webp"
                    alt=""
                />
                <img
                    className="overwatch2NextTracer"
                    src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/whats-next/lg/whats-next-hero-tracer-lg.webp"
                    alt=""
                />
                <img
                    className="overwatch2NextMei"
                    src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/whats-next/lg/whats-next-hero-mei-lg.webp"
                    alt=""
                />
            </animated.div>
            {/* </div> */}
        </React.Fragment>
    );
};

export default Overwatch2;
