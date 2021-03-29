import React from "react";
import { Router } from "react-router-dom";
import history from "../browserHistory";
import HomeCarousel from "./HomeCarousel";
import HomeCareer from "./HomeCareer";
const Body: React.FC<{}> = () => {
    return (
        <div>
            <HomeCarousel />
            <div className="homeGamesSection">
                <h3 className="homeGamesTitle">Games</h3>
                <div className="homeGamesCardsContainer">
                    {/* <div className="homeGamesCard">
                        <img
                            src="https://res.cloudinary.com/du8n2aa4p/image/upload/v1616697194/blizzard/game-card_wow_enUS.jpg"
                            alt=""
                       p ></img>
                    </div>
                    <div className="homeGamesCard">
                        <img
                            src="https://res.cloudinary.com/du8n2aa4p/image/upload/v1616697194/blizzard/game-card_wow_enUS.jpg"
                            alt=""
                        ></img>
                    </div>
                    <div className="homeGamesCard">
                        <img
                            src="https://res.cloudinary.com/du8n2aa4p/image/upload/v1616697194/blizzard/game-card_wow_enUS.jpg"
                            alt=""
                        ></img>
                    </div>
                    <div className="homeGamesCard">
                        <img
                            src="https://res.cloudinary.com/du8n2aa4p/image/upload/v1616697194/blizzard/game-card_wow_enUS.jpg"
                            alt=""
                        ></img>
                    </div> */}
                    <div className="homeGamesCard">
                        <img
                            src="https://bnetproduct-a.akamaihd.net//4a/23d217616446ccdca7452bc01629d2b5-CODCW_S2_Warzone_Keyart-Bnet-Shop_Card_Product_Vert-700x850.jpg"
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
            <HomeCareer />
        </div>
    );
};

export default Body;
