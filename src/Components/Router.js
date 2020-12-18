import React from 'react';
import Home from '../Screens/Home';
import Result from '../Screens/Result';
import Check from '../Screens/Check';
import PreventOne from '../Screens/solution/PreventOne';
import PreventTwo from '../Screens/solution/PreventTwo';
import PreventThree from '../Screens/solution/PreventThree';
import PreventFour from '../Screens/solution/PreventFour';
import PreventFive from '../Screens/solution/PreventFive';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const router = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/result" exact component={Result} />
            <Route path="/Check" exact component={Check} />
            <Route path="/Check/1" exact component={PreventOne} />
            <Route path="/Check/2" exact component={PreventTwo} />
            <Route path="/Check/3" exact component={PreventThree} />
            <Route path="/Check/4" exact component={PreventFour} />
            <Route path="/Check/5" exact component={PreventFive} />
            <Redirect from="*" to="/" />
        </Router>
    );
};
export default router;