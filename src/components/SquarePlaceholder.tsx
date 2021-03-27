import React from "react";
import ContentLoader from "react-content-loader";

const SquarePlaceholder: React.FC<{}> = (props) => {
    //Note to me: If we completely get rid of viewbox, it would not respond to assigned the classname

    return (
        <ContentLoader
            speed={2}
            width={350}
            height={265}
            viewBox=""
            backgroundColor="#938585"
            foregroundColor="#736464"
            className="placeholder"
            {...props}
        >
            <rect
                x="26"
                y="-7"
                rx="0"
                ry="0"
                width="177"
                height="286"
                className="placeholder"
            />
        </ContentLoader>
    );
};
export default SquarePlaceholder;
