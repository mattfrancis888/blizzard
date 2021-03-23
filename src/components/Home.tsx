import React from "react";
import { Router } from "react-router-dom";
import history from "../browserHistory";
import Routes from "./Routes";
const Body: React.FC<{}> = () => {
    history.listen((_) => {
        window.scrollTo(0, 0);
    });
    return <h1>Hi</h1>;
};

export default Body;
