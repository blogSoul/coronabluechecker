import React from 'react';
import Home from '../Screens/Home';
import Result from '../Screens/Result';
import Check from '../Screens/Check';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const router = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/result" exact component={Result} />
            <Route path="/Check" exact component={Check} />
            <Redirect from="*" to="/" />
        </Router>
    );
};
export default router;