import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/home/HomeContainer';
import Movie from '../components/movie/MovieContainer';
import About from '../components/about/AboutContainer';
import Detail from '../components/detail/DetailContainer';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/movie" component={Movie}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/detail/:id" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;