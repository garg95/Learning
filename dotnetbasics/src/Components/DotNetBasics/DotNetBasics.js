import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';
import Dapper from './Dapper/dapper';
import Delegates from './DelegatesAndEvents/DelegatesAndEvents';
class dotnetbasics extends Component {
    state = {
        topics: [
            { Name: 'Dapper', Path: '/dotnetbasics/dapper' },
            { Name: 'Delegates And Events', Path: '/dotnetbasics/delegatesevents' }
        ]   
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{marginLeft:'15%'}}>
                    <Switch>
                        <Route path='/dotnetbasics/dapper' component={Dapper} />
                        <Route path='/dotnetbasics/delegatesevents' component={Delegates} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default dotnetbasics;