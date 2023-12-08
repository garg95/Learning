import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';
import BackEndHit from './BackendHit/BackEndHit';
import LifeCycle from './LifeCycle/LifeCycle';
import Keywords from './Keywords/Keywords';
import Webpack from './Webpack/Webpack_Main';
import CreateReactApp from './CreateReactApp/CreateReactApp'
class ReactBasics extends Component {
    state = {
        topics: [
            {Name:'Create App', Path:'/reactbasics/createreactapp'},
            { Name: 'Life Cycle', Path: '/reactbasics/lifecycle' },
            { Name: 'Keywords', Path: '/reactbasics/keywords' },
            { Name: 'Backend Hit', Path: '/reactbasics/backendhit' },
            { Name: 'Webpack', Path: '/reactbasics/web_packs' }
        ]   
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{marginLeft:'16%'}}>
                    <Switch>
                        <Route path='/reactbasics/createreactapp' component={CreateReactApp} />
                        <Route path='/reactbasics/lifecycle' component={LifeCycle} />
                        <Route path='/reactbasics/backendhit' component={BackEndHit} />
                        <Route path='/reactbasics/keywords' component={Keywords} />
                        <Route path='/reactbasics/web_packs' component={Webpack} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default ReactBasics;