import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";
import Home from './pages/Home';

class App extends Component {
  render(props) {
    return (

<div className="app-wrapper">
 
  <Switch>
    <Route exact path='/' component={Home}/>
  </Switch>   
  </div>
    )
  }
}
export default App;
