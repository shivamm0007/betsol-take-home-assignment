import React from "react";
import MainDataField from '../components/Screen-1/MainDataField'
import Signup from '../components/Signup/Signup'
import Signin from '../components/Signin/Signin'
import  {BrowserRouter as Router,Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path = "/signup" component = {Signup}/>
        <Route path = "/" exact component = {Signin}/>
        <Route path = "/dashboard" exact component = {MainDataField}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
