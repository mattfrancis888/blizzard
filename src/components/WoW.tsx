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
                    <div className="mobileBannerImageWrap">
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
        </div>
    );
};

export default WoW;
