import React from "react";
import { Router } from "react-router-dom";
import history from "../browserHistory";
import HomeCarousel from "./HomeCarousel";
const Body: React.FC<{}> = () => {
    return (
        <div>
            <HomeCarousel />
        </div>
    );
};

export default Body;
