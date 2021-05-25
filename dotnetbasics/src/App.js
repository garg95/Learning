import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBarIndex from './SideTools/NavBarIndex';
import DotNetBasics from './Components/DotNetBasics/DotNetBasics';
import DotNetInterview from './Components/DotNetInterview/DotNetInterview';
import SqlInterview from './Components/SqlInterview/SqlInterview';

class App extends Component {
  state={
    Topics:[
      {Name:'DotNetBasics',Path:'/dotnetbasics'},
      {Name:'DotNet Interview',Path:'/interview'},
      {Name:'Sql Interview',Path:'/sqlinterview'}
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
        </Switch>
      </div>
    );
  }
}

export default App;
