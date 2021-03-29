import logo from './logo.svg';
import './App.css';
import BankIndexPage from './actions/bank';
import BankEditPage from './actions/bank/edit';
import BankAddPage from './actions/bank/add';
import CustomerPage from './actions/customer';
import CustomerAddPage from './actions/customer/add';
import CustomerEditPage from './actions/customer/edit';
import homePage from './actions/home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {BankCtxTag} from 'contexts/BankCtx';

const App = () => {
  
  return (
  <BankCtxTag>
    <Router>
          
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch> 
      <Route exact path="/" component={homePage}></Route>
      <Route path="/actions/bank/edit/:id">
            <BankEditPage />
        </Route> 
      <Route path="/actions/bank/add">
          <BankAddPage />
      </Route>
      <Route path="/actions/bank" >
          <BankIndexPage />
      </Route> 
      <Route path="/actions/customer/add">
          <CustomerAddPage />
      </Route>  
      <Route path="/actions/customer/adit">
          <CustomerEditPage />
      </Route>  
      <Route path="/actions/customer">
          <CustomerPage />
      </Route>
      </Switch>
    </Router>
  </BankCtxTag>

  );
}

export default App;
