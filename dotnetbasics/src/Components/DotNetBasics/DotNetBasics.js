import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';
import Dapper from './Dapper/dapper';
import Delegates from './DelegatesAndEvents/DelegatesAndEvents';
import StaticVsDelegate from './SingletonVsStatic/SingletonVsSatic';
import AsyncVsThread from './AsyncVsAwait/AsyncVsThread';
import LazyLoading from './LazyLoading/LazyLoading';
import Keywords from './Keywords/keywords';
import Designpatterns from './DesignPatterns/DesignPatterns';
import JwtToken from './JWTToken/JwtToken';
import Covariance from './CovarianceAndContravariance/CovarianceAndContraVariance';
import CLR from './CLR/CLR';
import Mvclifecycle from './MVCLifeCycle/MVCLifeCycle';
import Middleware  from './Middleware/Middleware';
class dotnetbasics extends Component {
    state = {
        topics: [
            { Name: 'Dapper', Path: '/dotnetbasics/dapper' },
            { Name: 'Delegates And Events', Path: '/dotnetbasics/delegatesevents' },
            { Name: 'Static Vs Singleton', Path: '/dotnetbasics/staticvssingleton' },
            { Name: 'Async Vs Thread', Path: '/dotnetbasics/asyncvsthread' },
            { Name: 'Lazy Loading', Path: '/dotnetbasics/lazyloading' },
            { Name: 'Design Patterns', Path: '/dotnetbasics/designpatterns' },
            { Name: 'JWT Token', Path: '/dotnetbasics/jwttoken' },
            { Name: 'Keywords', Path: '/dotnetbasics/keywords' },
            { Name: 'Covariance and Contravariance', Path: '/dotnetbasics/covariancecontra' },
            { Name: 'CLR', Path: '/dotnetbasics/clr' },
            { Name: 'MVC Life Cycle', Path: '/dotnetbasics/mvclife' },
            { Name: 'Middleware core', Path: '/dotnetbasics/middleware' }
        ]   
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{marginLeft:'16%'}}>
                    <Switch>
                        <Route path='/dotnetbasics/dapper' component={Dapper} />
                        <Route path='/dotnetbasics/delegatesevents' component={Delegates} />
                        <Route path='/dotnetbasics/staticvssingleton' component={StaticVsDelegate} />
                        <Route path='/dotnetbasics/asyncvsthread' component={AsyncVsThread} />
                        <Route path='/dotnetbasics/lazyloading' component={LazyLoading} />
                        <Route path='/dotnetbasics/keywords' component={Keywords} />
                        <Route path='/dotnetbasics/jwttoken' component={JwtToken} />
                        <Route path='/dotnetbasics/designpatterns' component={Designpatterns} />
                        <Route path='/dotnetbasics/covariancecontra' component={Covariance} />
                        <Route path='/dotnetbasics/clr' component={CLR} />
                        <Route path='/dotnetbasics/mvclife' component={Mvclifecycle} />]
                        <Route path='/dotnetbasics/middleware' component={Middleware} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default dotnetbasics;