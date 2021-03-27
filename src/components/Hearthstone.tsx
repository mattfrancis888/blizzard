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
import HearthstoneCard from "./HearthstoneCard";
import HearthstoneCardsCarousel from "./HearthstoneCardCarousel";

const cards = [
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a4d4a85f3addd14115f39c4f0a7aa05e85a1dda3c993927b988980536aef59b3.png",
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f4da378778158d9c0617ad47de49e187741bfcfd0c1307cdfbf8367a84fd7927.png",
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0ace69fb56c22c898ee0d77a703031fdc229dc7de0d190d62c9493f1f043707b.png",
    "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/92363d0d08f0a71e7ef4c886795def7c5df95167ea299e2b6acad37e2a7073bd.png",
];

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
            <div className="hearthstoneCardsSection">
                <div className="hearthstoneCardsWrap">
                    {width > LG_SCREEN_SIZE &&
                        cards.map((card, index) => {
                            return (
                                <HearthstoneCard key={index} cardImage={card} />
                            );
                        })}
                </div>

                {width < LG_SCREEN_SIZE && (
                    <HearthstoneCardsCarousel cards={cards} />
                )}
                <h2 className="hearthstoneDiscoverText">
                    Discover New Cards and Build Your Own Deck
                </h2>
            </div>
            <div className="hearthstonePlaySection">
                <video
                    className="hearthstonePlayGirl"
                    autoPlay={true}
                    playsInline={false}
                    muted={true}
                    loop={true}
                    // style={style}
                >
                    <source
                        src={
                            "https://assets.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt61940e6a1136f4e1/5f935a529d68980b2e94e681/homepage_ava_npe_small.webm"
                        }
                        type="video/mp4"
                    />
                </video>
                <div className="chatWrap">
                    <div className="chatTop"></div>

                    <div className="chatMiddle">
                        <p>
                            No matter how you sling cards, Hearthstone is for
                            you!
                        </p>
                    </div>

                    <div className="chatBottom"></div>
                </div>
                <video
                    className="hearthstonePlayBoy"
                    autoPlay={true}
                    playsInline={false}
                    muted={true}
                    loop={true}
                    // style={style}
                >
                    <source
                        src={
                            "https://assets.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt2aacb18ff09fc8d8/5f935c8b161ae70b23afc28c/homepage_innkeeper_npe_small.webm"
                        }
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
};

export default Hearthstone;
