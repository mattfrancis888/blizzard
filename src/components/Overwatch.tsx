import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import useWindowDimensions from "../windowDimensions";
import {
    LG_SCREEN_SIZE,
    XL_SCREEN_SIZE,
    MED_SCREEN_SIZE,
    SM_SCREEN_SIZE,
} from "../constants";
import overwatchBannerVid from "../vid/overwatch_banner_video.webm";

import LazyLoad from "react-lazyload";

const heroes: IHero[] = [
    {
        name: "Ana",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/full-portrait.png",
        description:
            "This Overwatch stalwart has emerged from years of seclusion to defend a new generation.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616896860/blizzard/overwatch/icon-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616947671/blizzard/overwatch/ana-spotlight.png",
    },
    {
        name: "Ashe",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/full-portrait.png",
        description:
            "The leader of the notorious Deadlock Gang menaces the American Southwest. ",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616947714/blizzard/overwatch/ashe-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616947414/blizzard/overwatch/full-portrait.png",
    },
    {
        name: "Bastion",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/full-portrait.png",
        description:
            "A transforming robot who explores the world; fascinated by nature, but wary of humanity.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616951575/blizzard/overwatch/bastion-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616951575/blizzard/overwatch/bastion-spotlight.png",
    },
    {
        name: "D.Va",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png",

        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/full-portrait.png",
        description:
            "A former pro gamer who now pilots a state-of-the-art mech in defense of her homeland.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616951882/blizzard/overwatch/dva-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616951886/blizzard/overwatch/dva-spotlight.png",
    },
    {
        name: "Genji",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/full-portrait.png",
        description:
            "A cyborg ninja and deadly warrior who has found peace with his mechanical body.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616952158/blizzard/overwatch/genji-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616952161/blizzard/overwatch/genji-spotlight.png",
    },
    {
        name: "Hanzo",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/full-portrait.png",
        description: "A lethal bowman and assassin without peer.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1617127364/blizzard/overwatch/hanzo-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1617127361/blizzard/overwatch/hanzo-spotlight.png",
    },
    {
        name: "Junkrat",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/full-portrait.png",
        description:
            "An explosives-obsessed freak who lives to cause chaos and destruction.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616952564/blizzard/overwatch/junkrat-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616952567/blizzard/overwatch/junkrat-spotlight.png",
    },
    {
        name: "Lúcio",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/full-portrait.png",
        description:
            "An international celebrity who fights for social change through his music and actions.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616952871/blizzard/overwatch/lucio-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616952874/blizzard/overwatch/lucio-spotlight.png",
    },
    {
        name: "Mccree",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/full-portrait.png",
        description:
            "An outlaw gunslinger who doles out justice on his own terms.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616953445/blizzard/overwatch/mcree-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616953442/blizzard/overwatch/mcree-spotlight.png",
    },
    {
        name: "Mei",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/mei/full-portrait.png",
        description:
            "A specialist in weather manipulation who has taken up the fight to preserve the environment.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616953723/blizzard/overwatch/mei-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616953720/blizzard/overwatch/mei-spotlight.png",
    },
    {
        name: "Mercy",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/full-portrait.png",
        description:
            "A guardian angel, peerless healer, brilliant medical researcher, and staunch advocate for peace.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954211/blizzard/overwatch/mercy-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954224/blizzard/overwatch/mercy-spotlight.png",
    },
    {
        name: "Pharah",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/full-portrait.png",
        description:
            "A decorated soldier who patrols the skies in her experimental Raptora combat suit.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1617127555/blizzard/overwatch/pharah-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1617127570/blizzard/overwatch/pharah-spotlight.png",
    },
    {
        name: "Reaper",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/full-portrait.png",
        description:
            "A mercenary and ruthless killer who hunts the former agents of Overwatch.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954386/blizzard/overwatch/reaper-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954232/blizzard/overwatch/reaper-spotlight.png",
    },
    {
        name: "Reinhardt",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/full-portrait.png",
        description:
            "A champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954888/blizzard/overwatch/rein-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954889/blizzard/overwatch/rein-spotlight.png",
    },
    {
        name: "Roadhog",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/full-portrait.png",
        description:
            "A ruthless killer with tremendous strength and a reputation for cruelty and wanton destruction.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954908/blizzard/overwatch/roadhog-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616954908/blizzard/overwatch/roadhog-spotlight.png",
    },
    {
        name: "Soldier: 76",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/full-portrait.png",
        description:
            "A vigilante who will stop at nothing to bring the enemies of Overwatch to justice.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955352/blizzard/overwatch/soldier-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955352/blizzard/overwatch/soldier-spotlight.png",
    },
    {
        name: "Symmetra",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/full-portrait.png",
        description:
            "An architech who manipulates hard-light constructs to build her perfect, ordered world.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955371/blizzard/overwatch/symmetra-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955371/blizzard/overwatch/symmetra-spotlight.png",
    },
    {
        name: "Torbjörn",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/full-portrait.png",
        description:
            "An ingenious engineer who forges weapons systems on the battlefield.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955698/blizzard/overwatch/torb-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955698/blizzard/overwatch/torb-spotlight.png",
    },
    {
        name: "Tracer",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/full-portrait.png",
        description:
            "A former Overwatch agent, time-jumping adventurer, and irrepressible force for good.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955717/blizzard/overwatch/tracer-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616955717/blizzard/overwatch/tracer-spotlight.png",
    },
    {
        name: "Widowmaker",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/full-portrait.png",
        description:
            "A perfect assassin: patient, ruthlessly efficient, and without emotion or remorse.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956243/blizzard/overwatch/widow-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956244/blizzard/overwatch/widow-spotlight.png",
    },
    {
        name: "Winston",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/winston/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/winston/full-portrait.png",
        description:
            "A super-intelligent, genetically engineered gorilla, scientist, and champion for humanity's potential.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956264/blizzard/overwatch/winston-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956265/blizzard/overwatch/winston-spotlight.png",
    },
    {
        name: "Zarya",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/full-portrait.png",
        description:
            "One of the world's strongest women, who sacrificed personal glory to protect her country.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956959/blizzard/overwatch/zarya-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956959/blizzard/overwatch/zarya-spotlight.png",
    },
    {
        name: "Zenyatta",
        portrait:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/icon-portrait.png",
        spotlight:
            "https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/full-portrait.png",
        description:
            "An omnic monk who wanders the world in search of spiritual enlightenment.",
        fallbackPortrait:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956981/blizzard/overwatch/zenyatta-portrait.png",
        fallbackSpotlight:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616956981/blizzard/overwatch/zenyatta-spotlight.png",
    },
];

interface IHero {
    name: string;
    portrait: string;
    spotlight: string;
    description: string;
    fallbackPortrait: string;
    fallbackSpotlight: string;
}
const Overwatch: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    const [spotlightHero, setSpotlightHero] = useState<IHero>(heroes[0]);
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
                    <source src={overwatchBannerVid} type="video/mp4" />
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
            <div className="overwatchHeroesSection">
                <div className="overwatchHeroesSectionTitleWrap">
                    <h1 className="heroesSectionTitle">
                        The World Needs Heroes
                    </h1>
                    <p className="heroesSectionTitleDesc">
                        Slow down time, rain destruction from above in a
                        jet-powered armor suit, or pilot a superpowered hamster
                        ball: In Overwatch, every hero has a unique set of
                        devastating abilities.
                    </p>
                </div>
                <div className="overwatchHeroSpotlight">
                    <img
                        className="heroSpotlightImage"
                        src={spotlightHero.spotlight}
                        alt="hero"
                        onError={(e: any) => {
                            e.target.onError = null;
                            e.target.src = `${spotlightHero.fallbackSpotlight}`;
                        }}
                    ></img>
                    <div className="heroSpotlightTextWrap">
                        <h3 className="heroSpotlightName">
                            {spotlightHero.name}
                        </h3>
                        <p className="heroSpotlightDesc">
                            {spotlightHero.description}
                        </p>
                    </div>
                </div>
                <div className="overwatchHeroesList">
                    {heroes.map((hero, index) => {
                        return (
                            <div
                                onMouseEnter={() => setSpotlightHero(hero)}
                                key={index}
                                className="overwatchHeroPortraitAndNameWrap"
                            >
                                <div className="overwatchHeroPortrait">
                                    <img
                                        src={hero.portrait}
                                        alt="hero portrait"
                                        onError={(e: any) => {
                                            e.target.onError = null;
                                            e.target.src = `${hero.fallbackPortrait}`;
                                        }}
                                    />
                                </div>
                                <p className="overwatchHeroPortraitName">
                                    {hero.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="overwatchBuySection">
                <div className="overwatchBuyImageWrap">
                    <img
                        src="https://res.cloudinary.com/du8n2aa4p/image/upload/v1616958837/blizzard/overwatch/Buy-Footer-Art.png"
                        alt="buy"
                    ></img>
                </div>
                <div className="overwatchBuyTextWrap">
                    <h1 className="overwatchBuyTitle">Begin Your Watch</h1>
                    <p>
                        Join the fight for the future in the ultimate team-based
                        shooter.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Overwatch;
