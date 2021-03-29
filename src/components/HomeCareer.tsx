import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import _ from "lodash";
import anime from "animejs/lib/anime.es.js";
const timer = 3000;
// const slides = [
//     {
//         key: 1,
//         image:
//             "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616701310/blizzard/careers-1.jpg",
//     },
//     {
//         key: 2,
//         image:
//             "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616701407/blizzard/careers-4.jpg",
//     },
// ];
const slides = [
    {
        key: 1,
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt0e136100d434095e/5f2dd6b7bb238f5556376fb0/careers-4.webp?auto=webp&format=pjpg",
    },
    {
        key: 2,
        image:
            "https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt019a41fb250fc116/5f2dd6b64eebe153cbb0921b/careers-3.webp?auto=webp&format=pjpg",
    },
];
const HomeCareer: React.FC<{}> = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const increment = () => setSlideIndex((slideIndex + 1) % slides.length);

    const transition = useTransition(slides[slideIndex], {
        // keys: _.map(slides, "key"),

        from: {
            opacity: 0,
        },
        enter: {
            // transform: "scale(1.05)",
            opacity: 1,
        },

        // leave: {
        //     //     //   transform: "scale(0.9)",
        //     opacity: 0,
        // },

        config: {
            duration: 3000,
            mass: 1,
            tension: 280,
            friction: 200,
        },
    });

    useEffect(() => {
        //Autoplay is removed becuss it takes too much bandwidth
        // const fillTimeOut = setTimeout(() => {
        //     increment();
        // }, 3000);
        // return () => {
        //     clearTimeout(fillTimeOut);
        // };
    }, [slideIndex]);

    return (
        <React.Fragment>
            <div className="homeCareerContainer">
                {transition((style, item) => {
                    return (
                        <animated.img
                            style={style}
                            src={item.image}
                        ></animated.img>
                    );
                })}

                <div className="homeCareerTextWrap">
                    <h1 className="createWorldText">Create Worlds</h1>
                    <h2 className="careerDescText">
                        With our career oppurtnies at Blizzard
                    </h2>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeCareer;
