import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import _ from "lodash";
const slides = [
    {
        key: 1,
        image:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616701310/blizzard/careers-1.jpg",
    },
    {
        key: 2,
        image:
            "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616701407/blizzard/careers-4.jpg",
    },
];
const HomeCareer: React.FC<{}> = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const increment = () => setSlideIndex((slideIndex + 1) % slides.length);
    console.log(_.map(slides, "key"));
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
        const fillTimeOut = setTimeout(() => {
            increment();
        }, 3000);

        return () => {
            clearTimeout(fillTimeOut);
        };
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
