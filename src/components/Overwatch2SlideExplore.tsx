import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import _ from "lodash";

import { AiFillPlusCircle } from "react-icons/ai";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
import useWindowDimensions from "../windowDimensions";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import anime from "animejs/lib/anime.es.js";
import Overwatch2Carousel from "./Overwatch2Carousel";
import history from "../browserHistory";
const timer = 3000;
const HIGHLIGHT_TEAM = "HIGHLIGHT_TEAM";
const HIGHLIGHT_MISSIONS = "HIGHLIGHT_MISSIONS";
//const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
//@ts-ignore
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
//@ts-ignore
const podTrans1 = (x, y, z) => `translate3d(${x}rem,${y}rem,${z}px)`;
const podTimer = 13000;
const Overwatch2SlideExplore: React.FC<{}> = () => {
    const [xHook, setX] = useState(0);
    const [yHook, setY] = useState(0);
    const [renderOverlay, setRenderOverlay] = useState<any>({
        showOverlay: false,
        highlight: "",
    });
    const [startPod, setStartPod] = useState(false);

    const { podX, podY } = useSpring({
        podX: startPod ? 5 : 0,
        podY: startPod ? 60 : 0,

        config: {
            duration: podTimer / 2,
            mass: 10,
            tension: 550,
            friction: 140,
        },
    });

    const overlaySpring = useSpring({
        opacity: renderOverlay.showOverlay ? 1 : 0,
        zIndex: renderOverlay.showOverlay ? 1 : 0,
        config: {
            duration: 250,
            // mass: 10,
            // tension: 550,
            // friction: 140,
        },
    });
    useEffect(() => {
        setStartPod(true);
    }, []);

    useEffect(() => {
        const fillTimeOut = setTimeout(() => {
            setStartPod(!startPod);
        }, podTimer);
        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [startPod]);

    const { width } = useWindowDimensions();
    return (
        <React.Fragment>
            {width <= LG_SCREEN_SIZE && (
                <div className="overwatch2ExploreMobile">
                    <div
                        className="overwatch2ExploreMobileCard"
                        onClick={() => {
                            history.push("/overwatch2-detail/team");
                        }}
                    >
                        <div className="overwatch2ExploreMobileCardImageWrap">
                            <img
                                src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/menu/mobile/menu-image-TVT-SM.jpg"
                                alt=""
                                onError={(e: any) => {
                                    e.target.onError = null;
                                    e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617242697/blizzard/overwatch2/slide%202%20-%20explore/menu-image-TVT-SM.jpg`;
                                }}
                            />
                        </div>
                        <div className="overwatch2ExploreMobileTextWrap">
                            <p className="overwatch2ExploreMobileCardSubTitle">
                                Team vs Team
                            </p>
                            <h1 className="overwatch2ExploreMobileCardTitle">
                                Epic Team Competition
                            </h1>
                        </div>
                        <div className="overwatch2MobileArrowWrap">
                            <RiArrowRightSLine className="overwatch2MobileArrow" />
                        </div>
                    </div>
                    <div
                        className="overwatch2ExploreMobileCard"
                        onClick={() => {
                            history.push("/overwatch2-detail/mission");
                        }}
                    >
                        <div className="overwatch2ExploreMobileCardImageWrap">
                            <img
                                src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/menu/mobile/menu-image-COOP-SM.jpg"
                                alt=""
                                onError={(e: any) => {
                                    e.target.onError = null;
                                    e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617243129/blizzard/overwatch2/slide%202%20-%20explore/menu-image-COOP-SM.jpg`;
                                }}
                            />
                        </div>
                        <div className="overwatch2ExploreMobileTextWrap">
                            <p className="overwatch2ExploreMobileCardSubTitle">
                                Co-op Missions
                            </p>
                            <h1 className="overwatch2ExploreMobileCardTitle">
                                Save the world
                            </h1>
                        </div>
                        <div className="overwatch2MobileArrowWrap">
                            <RiArrowRightSLine className="overwatch2MobileArrow" />
                        </div>
                    </div>
                </div>
            )}

            {width > LG_SCREEN_SIZE && (
                <div className="overwatch2SlideParentContainer overwatch2SlideExploreParentContainer">
                    <div
                        className="overwatch2SlideContainer overwatch2NextSlideContainer"
                        onMouseMove={({ clientX: x, clientY: y }) => {
                            setX(x - window.innerWidth / 2);
                            setY(y - window.innerHeight / 2);
                        }}
                        style={{
                            transform: trans1(xHook, yHook),
                        }}
                    >
                        {
                            <animated.div
                                style={overlaySpring}
                                className="overwatch2OverlayExplore"
                            ></animated.div>
                        }
                        <img
                            className="overwatch2Sky"
                            src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/landing/landing-bg-sky-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617597198/blizzard/overwatch2/landing-bg-sky-LG.webp`;
                            }}
                        />
                        <img
                            className="overwatch2ExploreCoast"
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-bg-coast-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617212334/blizzard/overwatch2/slide%202%20-%20explore/menu-bg-coast-LG.webp`;
                            }}
                        />
                        <animated.img
                            className="overwatch2ExplorePodRight"
                            style={{
                                opacity: startPod ? 1 : 0,
                                transform: to([podX, podY], (podX, podY) =>
                                    podTrans1(podX, podY, 0)
                                ),
                            }}
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-pod-2-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617212929/blizzard/overwatch2/slide%202%20-%20explore/menu-pod-2-LG.webp`;
                            }}
                        />
                        <animated.img
                            className="overwatch2ExplorePodLeft"
                            style={{
                                opacity: startPod ? 1 : 0,
                                transform: to([podX, podY], (podX, podY) =>
                                    podTrans1(podX, podY, 0)
                                ),
                            }}
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-pod-1-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617222631/blizzard/overwatch2/slide%202%20-%20explore/menu-pod-1-LG.webp`;
                            }}
                        />
                        <img
                            className="overwatch2ExploreGround"
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-bg-ground-LG.webp
                    "
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617631320/blizzard/overwatch2/slide%202%20-%20explore/menu-bg-ground-LG_1.webp`;
                            }}
                        />
                        <img
                            className="overwatch2ExploreShip"
                            src="https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-bg-ship-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617212315/blizzard/overwatch2/slide%202%20-%20explore/menu-bg-ship-LG.webp`;
                            }}
                        />
                        <img
                            className={`overwatch2ExploreTracer ${
                                renderOverlay.showOverlay &&
                                renderOverlay.highlight === HIGHLIGHT_TEAM
                                    ? "overwatch2ExploreHighlightWhenOverlayIsOn"
                                    : ""
                            }`}
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-hero-tracer-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617212296/blizzard/overwatch2/slide%202%20-%20explore/menu-hero-tracer-LG.webp`;
                            }}
                            onMouseEnter={() => {
                                setRenderOverlay({
                                    showOverlay: true,
                                    highlight: HIGHLIGHT_TEAM,
                                });
                            }}
                            onMouseLeave={() => {
                                setRenderOverlay({
                                    showOverlay: false,
                                    highlight: "",
                                });
                            }}
                            onClick={() => {
                                history.push("/overwatch2-detail/team");
                            }}
                        />
                        <div
                            className={`exploreInfoTextWrap exploreTeamvsTeamTextWrap ${
                                renderOverlay.showOverlay &&
                                renderOverlay.highlight === HIGHLIGHT_TEAM
                                    ? "overwatch2ExploreHighlightWhenOverlayIsOn"
                                    : ""
                            }`}
                            onMouseEnter={() => {
                                setRenderOverlay({
                                    showOverlay: true,
                                    highlight: HIGHLIGHT_TEAM,
                                });
                            }}
                            onMouseLeave={() => {
                                setRenderOverlay({
                                    showOverlay: false,
                                    highlight: "",
                                });
                            }}
                            onClick={() => {
                                history.push("/overwatch2-detail/team");
                            }}
                        >
                            <AiFillPlusCircle className="overwatch2PlusCircleExplore" />
                            <h3>Team Vs. Team</h3>
                        </div>
                        <img
                            onMouseEnter={() => {
                                setRenderOverlay({
                                    showOverlay: true,
                                    highlight: HIGHLIGHT_MISSIONS,
                                });
                            }}
                            onMouseLeave={() => {
                                setRenderOverlay({
                                    showOverlay: false,
                                    highlight: "",
                                });
                            }}
                            className={`overwatch2ExploreBot ${
                                renderOverlay.showOverlay &&
                                renderOverlay.highlight === HIGHLIGHT_MISSIONS
                                    ? "overwatch2ExploreHighlightWhenOverlayIsOn"
                                    : ""
                            }`}
                            onClick={() => {
                                history.push("/overwatch2-detail/mission");
                            }}
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-bot-main-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617212282/blizzard/overwatch2/slide%202%20-%20explore/menu-bot-main-LG.webp`;
                            }}
                        />
                        <div
                            className={`exploreInfoTextWrap exploreMissionsTextWrap ${
                                renderOverlay.showOverlay &&
                                renderOverlay.highlight === HIGHLIGHT_MISSIONS
                                    ? "overwatch2ExploreHighlightWhenOverlayIsOn"
                                    : ""
                            }`}
                            onMouseEnter={() => {
                                setRenderOverlay({
                                    showOverlay: true,
                                    highlight: HIGHLIGHT_MISSIONS,
                                });
                            }}
                            onMouseLeave={() => {
                                setRenderOverlay({
                                    showOverlay: false,
                                    highlight: "",
                                });
                            }}
                            onClick={() => {
                                history.push("/overwatch2-detail/mission");
                            }}
                        >
                            <AiFillPlusCircle className="overwatch2PlusCircleExplore" />
                            <h3>Co-op Missions</h3>
                        </div>

                        <animated.img
                            style={{
                                transform: trans1(xHook, yHook),
                            }}
                            className="overwatch2Flier"
                            src="
                    https://overwatch2-static.playoverwatch.com/9bff17453c4b61344f201071908821fc391221ca/static/images/parallax/menu/menu-flier-2-LG.webp"
                            alt=""
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src = `https://res.cloudinary.com/du8n2aa4p/image/upload/v1617223738/blizzard/overwatch2/slide%202%20-%20explore/menu-flier-2-LG.webp`;
                            }}
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Overwatch2SlideExplore;
