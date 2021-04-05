import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Hearthstone from "./Hearthstone";
import Overwatch from "./Overwatch";
import WoW from "./WoW";
import Warzone from "./Warzone";
import Overwatch2 from "./Overwatch2";
import Overwatch2SlideExploreDetails from "./Overwatch2SlideExploreDetails";
const Routes: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hearthstone" exact component={Hearthstone} />
                <Route path="/overwatch" exact component={Overwatch} />
                <Route path="/wow" exact component={WoW} />
                <Route path="/warzone" exact component={Warzone} />
                <Route path="/overwatch2" exact component={Overwatch2} />
                <Route
                    path="/overwatch2-detail/:section"
                    exact
                    component={Overwatch2SlideExploreDetails}
                />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default Routes;
