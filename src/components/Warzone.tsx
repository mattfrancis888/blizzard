import React from "react";
import useWindowDimensions from "../windowDimensions";
import history from "../browserHistory";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
const Warzone: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    return (
        <div className="warzoneContainer">
            <div className="warzoneBanner">
                <img
                    src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/tile-bgs/2021/03/hub-hero-wz-s2-desktop.jpg"
                    alt="banner"
                />
            </div>

            <div className="warzoneContentContainer">
                <div className="warzoneContentIntroWrapText">
                    <h1 className="warzoneContentIntroTitle">The End Begins</h1>
                    <p>
                        The next wave is here. A mysterious ship makes its way
                        toward Verdansk’s shores while the city erupts in chaos.
                        Get your crew together for Season Two of Call of Duty’s
                        free-to-play Battle Royale.
                    </p>
                </div>
                <div className="warzoneSingleImageContentWrap">
                    <img
                        src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/warzone/home/seasons/season-2/wz-home-s2-shipwreck-desktop.jpg"
                        alt="map"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Warzone;
