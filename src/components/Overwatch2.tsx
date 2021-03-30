import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";
import anime from "animejs/lib/anime.es.js";
const timer = 3000;

//@ts-ignore
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
//@ts-ignore
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Overwatch2: React.FC<{}> = () => {
    const [xHook, setX] = useState(0);
    const [yHook, setY] = useState(0);
    const { xy } = useSpring({
        from: { xy: [0, 0] },
        config: { mass: 10, tension: 550, friction: 140 },
    });

    return (
        <React.Fragment>
            <div
                className="overwatch2ImgTestContainer"
                onMouseMove={({ clientX: x, clientY: y }) => {
                    setX(x);
                    setY(y);
                    //Code below does not work, so I used hooks above
                    // xy.to((xy) => [x, y])
                }}
            >
                <animated.img
                    className="overwatch2ImgTest"
                    style={{ transform: xy.to((x, y) => trans1(xHook, yHook)) }}
                    src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/landing/landing-bg-sky-LG.webp"
                    alt=""
                />
            </div>
        </React.Fragment>
    );
};

export default Overwatch2;
