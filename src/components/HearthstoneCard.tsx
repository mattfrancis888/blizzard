import { render } from "react-dom";
import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
interface HearthstoneCardProps {
    cardImage: string;
}
const HearthstoneCard: React.FC<HearthstoneCardProps> = (props) => {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div className="hearthstoneCard" onClick={() => set((state) => !state)}>
            <a.div
                className="back"
                style={{
                    //.to is interpolate; interpolate is depercated in spring v9
                    opacity: opacity.to((o) => 1 - o),
                    transform,
                }}
            />
            <a.div
                className="front"
                style={{
                    opacity,
                    transform: transform.to((t) => `${t} rotateX(180deg)`),
                    backgroundImage: `url(${props.cardImage})`,
                }}
            />
            {!flipped && <div className="glow"></div>}
        </div>
    );
};

export default HearthstoneCard;
