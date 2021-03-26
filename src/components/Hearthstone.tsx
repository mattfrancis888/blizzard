import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import useWindowDimensions from "../windowDimensions";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
import HearthstoneBannerCarousel from "./HearthstoneBannerCarousel";

const Hearthstone: React.FC<{}> = () => {
    const { width } = useWindowDimensions();

    return (
        <div className="hearthstoneContainer">
            <div
                className={`hearthstoneBanner ${
                    width < MED_SCREEN_SIZE ? "hearthstoneBannerImage" : ""
                }`}
            >
                {width > MED_SCREEN_SIZE && (
                    <video
                        className="hearthstoneBannerVid"
                        autoPlay={true}
                        playsInline={false}
                        muted={true}
                        loop={true}
                    >
                        <source
                            src="https://assets.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltaade578b5ef7e8e4/5f076b23d494e612aff463bf/homepage_header_video.webm"
                            type="video/mp4"
                        />
                    </video>
                )}
                <div className="hearthstoneBannerTextWrap">
                    <h1 className="hearthstoneBannerTitle">
                        Deceptively Simple, Insanely Fun
                    </h1>
                    <p className="hearthstoneBannerDesc">
                        Welcome to Hearthstone, the strategy card game that's
                        easy to learn but impossible to put down!
                    </p>
                </div>
                <HearthstoneBannerCarousel />
            </div>
        </div>
    );
};

export default Hearthstone;
