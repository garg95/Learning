import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';
import BackEndHit from './BackendHit/BackEndHit';
import LifeCycle from './LifeCycle/LifeCycle';
import Keywords from './Keywords/Keywords';

class ReactBasics extends Component {
    state = {
        topics: [
            { Name: 'Life Cycle', Path: '/reactbasics/lifecycle' },
            { Name: 'Keywords', Path: '/reactbasics/keywords' },
            { Name: 'Backend Hit', Path: '/reactbasics/backendhit' }
        ]   
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{marginLeft:'16%'}}>
                    <Switch>
                        <Route path='/reactbasics/lifecycle' component={LifeCycle} />
                        <Route path='/reactbasics/backendhit' component={BackEndHit} />
                        <Route path='/reactbasics/keywords' component={Keywords} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default ReactBasics;