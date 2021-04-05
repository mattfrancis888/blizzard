import React from "react";
import useWindowDimensions from "../windowDimensions";
import wowBannerVid from "../vid/wow_banner_video.mp4";
import history from "../browserHistory";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
const WoW: React.FC<{}> = () => {
    const renderContentInfo = (
        classBackground: string,
        title: string,
        subtitle: string,
        desc: string,
        alignTextLeftAtLgScreen: boolean = false
    ) => {
        return (
            <div className="wowContentInfoContainer">
                <div className={`wowBackground ${classBackground}`}></div>
                <div
                    className={`wowContentInfoTextWrap ${
                        alignTextLeftAtLgScreen
                            ? "wowContentInfoAdjustLeftTextWrapForLgScreens"
                            : ""
                    }`}
                >
                    <p className="wowContentInfoSubTitle">{subtitle}</p>
                    <h1 className="wowContentInfoTitle">{title}</h1>
                    <p className="wowContentInfoDesc">{desc}</p>
                </div>
            </div>
        );
    };
    const { width } = useWindowDimensions();
    return (
        <div className="wowContainer">
            <div className="wowBanner">
                {width > LG_SCREEN_SIZE && (
                    <video
                        className="wowBannerVid"
                        autoPlay={true}
                        playsInline={false}
                        muted={true}
                        loop={true}
                        // style={style}
                    >
                        <source src={wowBannerVid} type="video/mp4" />
                    </video>
                )}

                {width < LG_SCREEN_SIZE && (
                    <div className="wowMobileBannerImageWrap">
                        <img
                            src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/UXK7M895FJ3Q1606119959229.jpg"
                            alt="banner"
                            onError={(e: any) => {
                                e.target.onError = null;
                                e.target.src =
                                    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616964647/blizzard/wow/UXK7M895FJ3Q1606119959229.jpg";
                            }}
                        ></img>
                    </div>
                )}
                <div className="wowBannerTextWrap">
                    <h1 className="wowBannerTitle">Shadowlands Now Live</h1>
                    <p className="wowBannerDesc">
                        The Shadowlands are open and Season One has begun. Face
                        deadly foes, earn new rewards and achievements, and raid
                        Castle Nathria, Sire Denathrius' fortress in the dark
                        heart of Revendreth.
                    </p>
                </div>
            </div>
            <div className="wowContentContainer">
                <div className="wowBeginAndReturningWrap">
                    <div className="wowBeginContainer">
                        <div className="wowBeginImageWrap">
                            <img
                                src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/bd/BDMOXH9OQ6B31594740408177.png"
                                alt="adventurers"
                                onError={(e: any) => {
                                    e.target.onError = null;
                                    e.target.src =
                                        "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616967479/blizzard/wow/BDMOXH9OQ6B31594740408177.png";
                                }}
                            ></img>
                        </div>
                        <div className="wowBeginAndReturnTextWrap">
                            <p className="wowBeginAndReturnSubTitle">
                                New to WoW
                            </p>
                            <h1 className="wowBeginAndReturnTitle">
                                Begin Your Adventure
                            </h1>
                            <p className="wowBeginAndReturnDesc">
                                Start your journey through Azeroth here and try
                                WoW for free!
                            </p>
                        </div>
                    </div>
                    <div className="wowReturningContainer">
                        <div className="wowReturningImageWrap">
                            <img
                                src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/et/ETA7LQVBODH61594740917046.png"
                                alt="ragnarok and lich king"
                                onError={(e: any) => {
                                    e.target.onError = null;
                                    e.target.src =
                                        "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616968138/blizzard/wow/ETA7LQVBODH61594740917046.png";
                                }}
                            ></img>
                        </div>
                        <div className="wowBeginAndReturnTextWrap">
                            <p className="wowBeginAndReturnSubTitle">
                                Returning Players
                            </p>
                            <h1 className="wowBeginAndReturnTitle">
                                Welcome Back to Azeroth
                            </h1>
                            <p className="wowBeginAndReturnDesc">
                                Learn how to get back in the game and play the
                                latest content for WoW and WoW Classic.
                            </p>
                        </div>
                    </div>
                </div>

                {renderContentInfo(
                    "wowAdoptBackground",
                    "Wow Charity Pet Program",
                    "Introducing Daisy And Bananas",
                    `         You can make a difference in the global response to
                            COVID-19 by supporting the medical humanitarian aid
                            organization Doctors Without Borders/Médecins Sans
                            Frontières (MSF). Your donations can help gift two
                            adorable pets to the World of Warcraft
                            community—Bananas the Monkey, and Daisy the Sloth.`
                )}
                {renderContentInfo(
                    "wowTBCBackground",
                    "Burning Crusade Classic",
                    "Prepare for Beta",
                    `The Burning Crusade Classic™ Beta Test is underway!
                    Opt-in for a chance to participate in the future.
                    Subscribe today and play WoW® Classic—and be
                    prepared to return to Outland later in 2021.`,
                    true
                )}
                {renderContentInfo(
                    "wowMountBackground",
                    "New Subscription Bundle Mount",
                    "Bovine Intervention",
                    `Lucky Yun will bestow prosperity upon anyone who touches its glittering hide.
                     Grab your new ox mount by the horns and take to the skies today, included with a 6-month subscription, or as a standalone purchase.`,
                    true
                )}
                {renderContentInfo(
                    "wowCelebrationBackground",
                    "BlizzConline In-game Goodies",
                    "Three Decades of Fun",
                    `Get one of the three Celebration Collection packs and commemorate 30 years of Blizzard with in-game loot like the bear-y impressive Snowstorm mount
                     or the otherworldly Moon-Touched Netherwhelp pet. Head over to the Shop for details.`,
                    true
                )}
                {renderContentInfo(
                    "wowRecruitAFriendBackground",
                    "New Rewards",
                    "Recruit A Friend",
                    `Bring your friends to Azeroth, adventure together and earn epic rewards. Receive unique 
                    in-game benefits and perks with the new program, from game time to mounts and pets when your friends join you to fight for the Alliance or the Horde!`
                )}
                {renderContentInfo(
                    "wowShadowlandsBackground",
                    "Latest Expansion",
                    "Shadowlands",
                    `Check out the dedicated Shadowlands website and explore the afterlife 
                    in World of Warcraft. Read about new features, gameplay, story, and more!`,
                    true
                )}
            </div>
        </div>
    );
};

export default WoW;
