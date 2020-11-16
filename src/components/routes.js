import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import InfoUsuario from '../pages/infoUsuario';
import { InfoUserProvider } from '../context';
import InfoFollowers from '../pages/infoFollowers'
import InfoRepos from '../pages/infoRepo';
import InfoFollowing from '../pages/infoFollowing';
import InfoFollowerX from '../pages/infoFollowerX';

const Routes = () => (

    <BrowserRouter>
        <InfoUserProvider>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/infousuario" component={InfoUsuario} />
                <Route exact path="/infofollowers" component={InfoFollowers} />
                <Route exact path="/inforepos" component={InfoRepos} />
                <Route exact path="/infofollowing" component={InfoFollowing} />
            </Switch>
        </InfoUserProvider>
    </BrowserRouter>

);

export default Routes;