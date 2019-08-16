import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import EventList from './containers/EventListView';
import EventDetail from './containers/EventDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path = '/articles' component={ArticleList}/>
        <Route exact path = '/articles/:articleID' component={ArticleDetail}/>
        <Route exact path = '/events' component={EventList}/>
        <Route exact path = '/events/:eventID' component={EventDetail}/>
    </div>
);

export default BaseRouter;