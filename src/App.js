import './App.css';
import Login from './Components/login';
import About from './Components/about';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employee from './Components/employee';

function App() {
  return (
    <Router>
      <div> 
        <Switch>
          <Route exact path="/">
          <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Employee/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
