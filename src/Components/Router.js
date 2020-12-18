import React from 'react';
import Home from '../Screens/Home';
import Result from '../Screens/Result';
import Check from '../Screens/Check';
import Last from '../Screens/Last';
import Manual from '../Screens/Manual';
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
            <Route path="/check" exact component={Check} />
            <Route path="/manual" exact component={Manual} />
            <Route path="/check/0" exact component={PreventOne} />
            <Route path="/check/1" exact component={PreventTwo} />
            <Route path="/check/2" exact component={PreventThree} />
            <Route path="/check/3" exact component={PreventFour} />
            <Route path="/check/4" exact component={PreventFive} />
            <Route path="/last" exact component={Last} />
            <Redirect from="*" to="/" />
        </Router>
    );
};

export default router;