import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBarIndex from './SideTools/NavBarIndex';
import DotNetBasics from './Components/DotNetBasics/DotNetBasics';
import DotNetInterview from './Components/DotNetInterview/DotNetInterview';
import SqlInterview from './Components/SqlInterview/SqlInterview';
import Pending from './Components/PendingImplementation/Pending';
import ReactBasics from './Components/ReactBasics/ReactBasics';
import ReactInterview from './Components/ReactInterview/ReactInterview';
import ReactImplementation from './ReactImplementations/ReactImplementations';

class App extends Component {
  state={
    Topics:[
      {Name:'DotNetBasics',Path:'/dotnetbasics'},
      {Name:'ReactBasics',Path:'/reactbasics'},
      {Name:'DotNet Interview',Path:'/interview'},
      {Name:'Sql Interview',Path:'/sqlinterview'},
      {Name:'React Interview',Path:'/reactinterview'},
      {Name:'React Implementations',Path:'/reactimplementation'},
      {Name:'Pending Implementation',Path:'/pending'}
    ]
  }
  render() {
    return (
      <div className="App">
        <NavBarIndex topics={this.state.Topics} />
        <Switch>
          <Route path='/dotnetbasics' component={DotNetBasics} />
          <Route path='/reactbasics' component={ReactBasics} />
          <Route path='/interview' component={DotNetInterview} />
          <Route path='/sqlinterview' component={SqlInterview} />
          <Route path='/pending' component={Pending} />
          <Route path='/reactinterview' component={ReactInterview} />
          <Route path='/reactimplementation' component={ReactImplementation} />
        </Switch>
      </div>
    );
  }
}

export default App;
