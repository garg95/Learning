import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideBarIndex from '../../SideTools/SideBarIndex';

class ReactBasics extends Component {
    state = {
        topics: [
            { Name: 'Life Cycle', Path: '/dotnetbasics/lifecycle' },
        ]   
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{marginLeft:'16%'}}>
                    
                </div>
            </>
        )
    }
}

export default ReactBasics;