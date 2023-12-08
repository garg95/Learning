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
import Azure from './Components/Azure/Azure';
import ReactImplementation from './ReactImplementations/ReactImplementations';
import Docker from './Components/Docker/Docker';
import OtherBasicImplementation from './Components/OtherBasicImplementation/OtherBasicImplementation';

class App extends Component {
  state={
    Topics:[
      {Name:'DotNetBasics',Path:'/dotnetbasics'},
      {Name:'ReactBasics',Path:'/reactbasics'},
      {Name:'DotNet Interview',Path:'/interview'},
      {Name:'Sql Interview',Path:'/sqlinterview'},
      {Name:'React Interview',Path:'/reactinterview'},
      {Name:'Azure',Path:'/azure'},
      {Name:'React Implementations',Path:'/reactimplementation'},
      {Name:'Docker',Path:'/docker'},
      {Name:'Pending Implementation',Path:'/pending'},
      {Name:'Other Implementations',Path:'/otherbasicimplementation'},
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
          <Route path='/azure' component={Azure} />
          <Route path='/docker' component={Docker} />
          <Route path='/reactimplementation' component={ReactImplementation} />
          <Route path='/otherbasicimplementation' component={OtherBasicImplementation} />
        </Switch>
      </div>
    );
  }
}

export default App;
