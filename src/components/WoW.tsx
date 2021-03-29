import React from "react";
import useWindowDimensions from "../windowDimensions";
import history from "../browserHistory";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
const WoW: React.FC<{}> = () => {
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
                        <source
                            src={
                                "https://bnetcmsus-a.akamaihd.net/cms/template_resource/MIADXRRLBRCP1606119959603.mp4"
                            }
                            type="video/mp4"
                        />
                    </video>
                )}

                {width < LG_SCREEN_SIZE && (
                    <div className="wowMobileBannerImageWrap">
                        <img
                            src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/UXK7M895FJ3Q1606119959229.jpg"
                            alt="banner"
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
                <div className="wowContentInfoContainer">
                    <div className="wowAdoptBackground"></div>
                    <div className="wowContentInfoTextWrap">
                        <p className="wowContentInfoSubTitle">
                            Wow Charity Pet Program
                        </p>
                        <h1 className="wowContentInfoTitle">
                            Introducing Daisy And Bananas
                        </h1>
                        <p className="wowContentInfoDesc">
                            You can make a difference in the global response to
                            COVID-19 by supporting the medical humanitarian aid
                            organization Doctors Without Borders/Médecins Sans
                            Frontières (MSF). Your donations can help gift two
                            adorable pets to the World of Warcraft
                            community—Bananas the Monkey, and Daisy the Sloth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WoW;
