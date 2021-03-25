import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring } from "react-spring";
const slides = [
    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616701310/blizzard/careers-1.jpg",
    "https://res.cloudinary.com/du8n2aa4p/image/upload/v1616701407/blizzard/careers-4.jpg",
];
const HomeCareer: React.FC<{}> = () => {
    const [index, setIndex] = useState(0);
    const item = slides[index];

    const increment = () => setIndex((index + 1) % slides.length);

    const transition = useTransition(index, {
        from: {
            transform: "scale(1.1)",

            opacity: 0,
        },
        enter: {
            transform: "scale(1.05)",
            opacity: 1,
        },

        // leave: {
        //     //   transform: "scale(0.9)",
        //     opacity: 0,
        // },

        config: {
            duration: 3000,
            mass: 1,
            tension: 180,
            friction: 12,
        },
    });

    useEffect(() => {
        const fillTimeOut = setTimeout(() => {
            increment();
        }, 3000);

        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [index]);

    return (
        <React.Fragment>
            <div className="homeCareerContainer">
                {transition((style, item) => {
                    return (
                        <animated.img
                            style={{
                                backgroundImage: `url(${slides[index]})`,
                                ...style,
                            }}
                        ></animated.img>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default HomeCareer;
