import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBarIndex from './SideTools/NavBarIndex';
import DotNetBasics from './Components/DotNetBasics/DotNetBasics';
import DotNetInterview from './Components/DotNetInterview/DotNetInterview';
import SqlInterview from './Components/SqlInterview/SqlInterview';
import Pending from './Components/PendingImplementation/Pending';

class App extends Component {
  state={
    Topics:[
      {Name:'DotNetBasics',Path:'/dotnetbasics'},
      {Name:'DotNet Interview',Path:'/interview'},
      {Name:'Sql Interview',Path:'/sqlinterview'},
      {Name:'Pending Implementation',Path:'/pending'}
    ]
  }
  render() {
    return (
      <div className="App">
        <NavBarIndex topics={this.state.Topics} />
        <Switch>
          <Route path='/dotnetbasics' component={DotNetBasics} />
          <Route path='/interview' component={DotNetInterview} />
          <Route path='/sqlinterview' component={SqlInterview} />
          <Route path='/pending' component={Pending} />
        </Switch>
      </div>
    );
  }
}

export default App;
