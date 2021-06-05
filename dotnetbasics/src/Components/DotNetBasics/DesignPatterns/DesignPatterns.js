import React from 'react';


import '../dotnetbasics.css';
import TopBarIndex from '../../../SideTools/TopBarIndex.js'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Adaptor from './Adaptor/Adaptor';

export default class Designpatterns extends React.Component {
    state={
        topics:[{Name:"Adaptor" ,Path:"/dotnetbasics/designpatterns/Adaptor"}]
    }
    render() {
        return (
            <div className='DNBStyle'>
                <TopBarIndex topics={this.state.topics}/>
                <Switch>
                    <Route path='/dotnetbasics/designpatterns/' component={Adaptor} />
                </Switch>
            </div >
        )
    }
}