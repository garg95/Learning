import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import TopBarIndex from '../../../SideTools/TopBarIndex';
import Part from './Part1/webpack_1';

export default class Webpack_main extends React.Component{
    state={
        topics:[{Name:'Part1',Path:'/reactbasics/web_packs/part1'}]
    }
    render(){
        return (
            <div>
                <TopBarIndex topics={this.state.topics}/>
                <Switch>
                    <Route path='/reactbasics/web_packs/part1' component={Part} />
                </Switch>
            </div>

        )
    }
} 