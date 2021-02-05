import logo from './logo.svg';
import './App.css';
import Bank from './actions/bank';
import Customer from './actions/customer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/actions/bank/">Bank</Link>
          </li>
          <li>
            <Link to="/actions/customer/">Customer</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
     
       
        <Route path="/actions/bank">
          <Bank />
        </Route> 
        <Route path="/actions/customer">
          <Customer />
        </Route>   
      </Switch>
    </div>
  </Router>
  );
}

export default App;
