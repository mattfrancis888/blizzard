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
import HearthstoneHeroesCarousel from "./HearthstoneHeroesCarousel";
import LazyLoad from "react-lazyload";
//Note, look at desc.ts, typescript isnt happy with webm
import hearthstoneVid from "../vid/hearthstone_homepage_header_video.webm";
import hearthstoneGirl from "../vid/hearthstone_girl.webm";
import hearthstoneBoy from "../vid/hearthstone_boy.webm";

const cards = [
    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616789808/blizzard/hearthstone/a4d4a85f3addd14115f39c4f0a7aa05e85a1dda3c993927b988980536aef59b3.png",

    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616789858/blizzard/hearthstone/f4da378778158d9c0617ad47de49e187741bfcfd0c1307cdfbf8367a84fd7927.png",

    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616789840/blizzard/hearthstone/0ace69fb56c22c898ee0d77a703031fdc229dc7de0d190d62c9493f1f043707b.png",

    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616784435/blizzard/hearthstone/92363d0d08f0a71e7ef4c886795def7c5df95167ea299e2b6acad37e2a7073bd.png",
];

const Hearthstone: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const [load, setLoad] = useState(false);

    //useSpring does not work with lazyload,  so we use useTransition
    const transition = useTransition(load, {
        from: {
            transform: load ? "translate3d(0px , 2rem, 0px)" : "",

            opacity: load ? 0 : "",
        },
        enter: {
            transform: load ? "translate3d(0px , 0px, 0px)" : "",
            opacity: load ? 1 : "",
        },

        config: {
            duration: 1000,
        },
    });
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
                        <source src={hearthstoneVid} type="video/mp4" />
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
                    <source src={hearthstoneGirl} type="video/mp4" />
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
                    <source src={hearthstoneBoy} type="video/mp4" />
                </video>
            </div>
            <LazyLoad>
                {transition((style, item) => {
                    return (
                        <animated.div
                            className="hearthstoneHeroesSection"
                            // style={style}
                            // onLoad={() => setLoad(true)}
                        >
                            <h1 className="hearthstoneHeroesSSectionTitle">
                                Master Unique Hero Classes
                            </h1>
                            <animated.div
                                onLoad={() => setLoad(true)}
                                style={style}
                            >
                                <HearthstoneHeroesCarousel />
                            </animated.div>
                        </animated.div>
                    );
                })}
            </LazyLoad>
        </div>
    );
};

export default Hearthstone;
