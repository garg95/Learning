import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';
import dapper from './Dapper/dapper';
import Dapper from './Dapper/dapper';
class dotnetbasics extends Component {
    state = {
        topics: [{ Name: 'Dapper', Path: '/dotnetbasics/dapper' }]
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{marginLeft:'15%'}}>
                    <Switch>
                        <Route path='/dotnetbasics/dapper' component={dapper} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default dotnetbasics;