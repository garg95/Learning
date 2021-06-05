import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import SideBarIndex from '../SideTools/SideBarIndex';
import UploadImage from './UploadImage/UploadImage';
export default class ReactImplementations extends React.Component {
    state = {
        topics: [
            { Name: 'Upload Image', Path: '/reactimplementation/uploadimage' }
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
                    </Switch>
                </div>
            </>
        )
    }
}