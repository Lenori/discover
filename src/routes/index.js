import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Property from '../pages/Property';
import Dashboard from '../pages/Dashboard';
import Reservation from '../pages/Reservation';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/property" component={Property} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/:menu" component={Dashboard} />
            <Route path="/reservation" component={Reservation} />
        </Switch>
    )
}