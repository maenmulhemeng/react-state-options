import React from 'react';
import {Link ,Switch,Route, useRouteMatch} from "react-router-dom";
import BankEdit from './edit';
import BankAdd from './add';
import BankList from "components/lists/banklist";
function Bank() {
  let match = useRouteMatch();
  console.log("init the bank page")
  return (
    <div>
       Bank 
      
       <li>
            <Link to={`${match.url}/edit`}>Edit</Link>
          </li>
          <li>
            <Link to={`${match.url}/add`}>Add</Link>
          </li> 

          <BankList/>
          {match.url}
          <Switch>
                <Route path={`${match.url}/add`}>
                    <BankAdd />
                </Route>
                <Route path={`${match.url}/edit`}>
                    <BankEdit />
                </Route>
            </Switch>
    </div>
     
  );
}

export default Bank;
