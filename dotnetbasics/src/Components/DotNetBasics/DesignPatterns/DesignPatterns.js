import React from 'react';


import '../dotnetbasics.css';
import TopBarIndex from '../../../SideTools/TopBarIndex.js'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Adaptor from './Adaptor/Adaptor';
import Observer from './Observer/Observer';
import Repository from './Repository/Repository';

export default class Designpatterns extends React.Component {
    state={
        topics:[
            {Name:"Adaptor" ,Path:"/dotnetbasics/designpatterns/Adaptor"},
            {Name:"Observer" ,Path:"/dotnetbasics/designpatterns/observer"},
            {Name:"Repository" ,Path:"/dotnetbasics/designpatterns/repository"}
        ]
    }
    render() {
        return (
            <div className='DNBStyle'>
                <TopBarIndex topics={this.state.topics}/>
                <Switch>
                    <Route path='/dotnetbasics/designpatterns/observer' component={Observer} />
                    <Route path='/dotnetbasics/designpatterns/repository' component={Repository} />
                    <Route path='/dotnetbasics/designpatterns/' component={Adaptor} />
                </Switch>
            </div >
        )
    }
}