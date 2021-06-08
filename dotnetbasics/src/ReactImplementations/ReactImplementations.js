import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import SideBarIndex from '../SideTools/SideBarIndex';
import UploadImage from './UploadImage/UploadImage';
import Reduce_Entries from './Reduce_Entries/reduce_entries';
export default class ReactImplementations extends React.Component {
    state = {
        topics: [
            { Name: 'Upload Image', Path: '/reactimplementation/uploadimage' },
            { Name: 'Reduce_Entries', Path: '/reactimplementation/reduce' }
        ]
    }
    render() {
        return (
            <>
                <SideBarIndex topics={this.state.topics} />
                <div style={{ marginLeft: '16%' }}>
                    <h1>ReactImplementations</h1>
                    <Switch>
                        <Route path='/reactimplementation/uploadimage' component={UploadImage} />
                        <Route path='/reactimplementation/reduce' component={Reduce_Entries} />
                    </Switch>
                </div>
            </>
        )
    }
}