import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Hearthstone from "./Hearthstone";
const Routes: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/hearthstone" exact component={Hearthstone} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default Routes;
