import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PostsFeed from './NewsFeed';
import NotFound from './404';
import Profile from './Profile';
import NewsOverview from './NewsOverview';

const Routes = (props: any) => {

    return (
        <Switch>
            <Route exact path='/' component={PostsFeed}/>
            <Route exact path='/profile/:id' component={Profile}/>
            <Route exact path='/news/:id' component={NewsOverview}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    );
};

export default Routes;
