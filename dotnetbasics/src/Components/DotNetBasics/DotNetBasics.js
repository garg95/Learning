import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';
import Dapper from './Dapper/dapper';
import Delegates from './DelegatesAndEvents/DelegatesAndEvents';
import StaticVsDelegate from './SingletonVsStatic/SingletonVsSatic';
class dotnetbasics extends Component {
    state = {
        topics: [
            { Name: 'Dapper', Path: '/dotnetbasics/dapper' },
            { Name: 'Delegates And Events', Path: '/dotnetbasics/delegatesevents' },
            { Name: 'Static Vs Singleton', Path: '/dotnetbasics/staticvssingleton' }
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
                    </Switch>
                </div>
            </>
        )
    }
}

export default dotnetbasics;