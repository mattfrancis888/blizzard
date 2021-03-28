import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import useWindowDimensions from "../windowDimensions";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";

import LazyLoad from "react-lazyload";

const cards = [
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a4d4a85f3addd14115f39c4f0a7aa05e85a1dda3c993927b988980536aef59b3.png",
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f4da378778158d9c0617ad47de49e187741bfcfd0c1307cdfbf8367a84fd7927.png",
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0ace69fb56c22c898ee0d77a703031fdc229dc7de0d190d62c9493f1f043707b.png",
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/92363d0d08f0a71e7ef4c886795def7c5df95167ea299e2b6acad37e2a7073bd.png",
];

const Overwatch: React.FC<{}> = () => {
    const { width } = useWindowDimensions();

    return (
        <div className="overwatchContainer">
            <div className="overwatchBanner">
                <video
                    className="overwatchBannerVid"
                    autoPlay={true}
                    playsInline={false}
                    muted={true}
                    loop={true}
                    // style={style}
                >
                    <source
                        src={
                            " https://static.playoverwatch.com/video/pages/home/header-04cd3f46c6.webm"
                        }
                        type="video/mp4"
                    />
                </video>
                <svg className="overwatchBannerLogo" viewBox="0 27 64 9.4">
                    <g>
                        <polygon
                            fill="rgb(255,156,0)"
                            points="10.71 27.11 12.11 29.09 9.32 29.09 10.71 27.11"
                        ></polygon>
                        <polygon points="34.85 29.15 33.74 31.79 33.74 31.79 32.59 29.15 31.38 29.15 30.23 31.75 29.14 29.15 27.3 29.15 29.58 34.33 30.73 34.33 31.9 31.72 33.05 34.33 34.29 34.33 36.55 29.15 34.85 29.15"></polygon>
                        <polygon points="60.55 29.15 60.55 30.97 57.38 30.97 57.38 29.15 55.6 29.15 55.6 34.33 57.38 34.33 57.38 32.33 60.55 32.33 60.55 34.33 62.31 34.33 62.31 29.15 60.55 29.15"></polygon>
                        <polygon points="38.65 29.15 35.18 34.33 37.1 34.33 39.26 31 41.39 34.33 43.38 34.33 39.99 29.15 38.65 29.15"></polygon>
                        <polygon points="14.56 29.15 12.61 29.15 10.64 32.3 8.7 29.15 6.7 29.15 9.96 34.33 11.17 34.33 14.56 29.15"></polygon>
                        <polygon points="42.01 29.15 42.01 30.51 44.26 30.51 44.26 34.33 46.03 34.33 46.03 30.51 47.81 30.51 48.71 29.15 42.01 29.15"></polygon>
                        <path
                            d="M6,29.53a2.1,2.1,0,0,0-.61-.08H1.45c-.9,0-1.45.45-1.45,1.17v2.83a1.07,1.07,0,0,0,.61,1l.07,0,1.08-1.09V30.8h3.3v2.46H2.64L1.27,34.62h4.1c.86,0,1.46-.48,1.46-1.17V30.76L6,29.54Z"
                            transform="translate(0 -0.29)"
                        ></path>
                        <path
                            d="M53.41,29.44H49.87l-.28,0h-.05l-.15.24h0l-1,1.47v2.27c0,.69.6,1.17,1.45,1.17h3.53a1.31,1.31,0,0,0,1.46-1.17v-.89H53.1v.7H50.18V30.8H53.1v.6h1.77v-.78C54.87,29.91,54.29,29.44,53.41,29.44Z"
                            transform="translate(0 -0.29)"
                        ></path>
                        <polygon points="14.47 30.45 14.47 34.33 19.95 34.33 19.95 32.97 16.24 32.97 16.24 32.31 18.74 32.31 18.74 31.13 16.24 31.13 16.24 30.51 19.95 30.51 19.95 29.15 15.37 29.15 14.47 30.45"></polygon>
                        <path
                            d="M25.66,32.68c.63,0,1.31-.33,1.31-.94V30.5c0-.65-.51-1.06-1.33-1.06H20.73v5.18H22.5V30.77h2.77s0,0,0,.05v.78h0a.19.19,0,0,1-.1,0H23.3v1l2.17,1.95h2.42l-2.23-1.94Z"
                            transform="translate(0 -0.29)"
                        ></path>
                        <polygon
                            fill="rgb(255,156,0)"
                            points="39.28 36.31 37.88 34.33 40.67 34.33 39.28 36.31"
                        ></polygon>
                        <path
                            d="M63.32,29.59h.26l.07,0a.16.16,0,0,1,.05.13.15.15,0,0,1-.13.17l.18.24h-.16l-.15-.22v.22h-.13Zm.13.1v.15h.09a.07.07,0,0,0,0-.06.07.07,0,0,0,0-.06l-.08,0Z"
                            transform="translate(0 -0.29)"
                        ></path>
                        <path
                            d="M63.5,30.37a.5.5,0,1,1,.5-.5A.5.5,0,0,1,63.5,30.37Zm.41-.5a.41.41,0,1,0-.41.41A.41.41,0,0,0,63.91,29.87Z"
                            transform="translate(0 -0.29)"
                        ></path>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Overwatch;
