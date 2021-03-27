import logo from './logo.svg';
import './App.css';
import BankIndexPage from './actions/bank';
import BankEditPage from './actions/bank/edit';
import BankAddPage from './actions/bank/add';
import Customer from './actions/customer';
import homePage from './actions/home';

import bankReducer ,{bankActions} from 'reducers/bankReducer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useReducer,useState } from 'react';
import Layout from 'components/layout';

function App() {
  const [banks, dispatch] = useReducer(bankReducer, []);
  
  const addBank = (bank) =>{
    console.log(banks)
    if (banks.filter(e => e.title == bank.title).length <= 0){
      dispatch({ type:bankActions.add, payload:bank });
    }
  }
  const updateBank = (bank) =>{
    console.log(bank)
    dispatch({ type:bankActions.update, payload:bank })
  }

  const deleteBank = (bank) =>{
    console.log(bank);
    dispatch({ type:bankActions.delete, payload:bank })
  }
  const resetBanks = () =>{
    dispatch({ type:bankActions.reset })
  }

  return (
      
      <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch> 
            <Route exact path="/" component={homePage}></Route>
            <Route path="/actions/bank/edit">
                  <BankEditPage updateBank={updateBank} />
              </Route> 
            <Route path="/actions/bank/add">
                <BankAddPage banks={banks} addBank={addBank}  deleteBank={deleteBank} resetBanks={resetBanks}/>
              </Route>
              <Route path="/actions/bank" banks={banks}>
                  <BankIndexPage banks={banks} deleteBank={deleteBank} resetBanks={resetBanks}/>
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
