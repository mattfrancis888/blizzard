import React from "react";
import { Router } from "react-router-dom";
import history from "../browserHistory";
import HomeCarousel from "./HomeCarousel";
import HomeCareer from "./HomeCareer";

const gamesCard = [
    {
        name: "Hearthstone",
        img:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt4b4b9263a566ff5e/5fb41cd8a9e913483b74d3ce/game-card_hearthstone_enUS.webp?auto=webp&format=pjpg",
        fallbackImg:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1617113590/blizzard/game-card_hearthstone_enUS_1.jpg",
        link: "/hearthstone",
    },
    {
        name: "Overwatch",
        img:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt3f643e0faaaecab1/5fb41cbe8acca34834e6456c/game-card_overwatch_enUS.webp?auto=webp&format=pjpg",
        fallbackImg:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1617113684/blizzard/game-card_overwatch_enUS.jpg",
        link: "/overwatch",
    },
    {
        name: "WoW",
        img:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt62f9e7c9f3df274f/5fb3f4d021b96a46dc51a801/game-card_wow_enUS.webp?auto=webp&format=pjpg",
        fallbackImg:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616697194/blizzard/game-card_wow_enUS.jpg",
        link: "/wow",
    },
    {
        name: "Warzone",
        img:
            "https://bnetproduct-a.akamaihd.net//4a/23d217616446ccdca7452bc01629d2b5-CODCW_S2_Warzone_Keyart-Bnet-Shop_Card_Product_Vert-700x850.jpg",
        fallbackImg:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616994397/blizzard/23d217616446ccdca7452bc01629d2b5-CODCW_S2_Warzone_Keyart-Bnet-Shop_Card_Product_Vert-700x850.jpg",
        link: "/warzone",
    },
];
const Body: React.FC<{}> = () => {
    return (
        <div>
            <HomeCarousel />
            <div className="homeGamesSection">
                <h3 className="homeGamesTitle">Games</h3>
                <div className="homeGamesCardsContainer">
                    {gamesCard.map((card, index) => {
                        return (
                            <div
                                className="homeGamesCard"
                                onClick={() => history.push(card.link)}
                            >
                                <img
                                    src={card.img}
                                    alt=""
                                    onError={(e: any) => {
                                        e.target.onError = null;
                                        e.target.src = `${card.fallbackImg}`;
                                    }}
                                ></img>
                            </div>
                        );
                    })}
                </div>
            </div>
            <HomeCareer />
        </div>
    );
};

export default Body;
