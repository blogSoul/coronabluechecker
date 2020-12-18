import React from 'react';
import Home from '../Routes/Home';
import Result from '../Routes/Result';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

const router = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/result" exact component={Result} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
export default router;