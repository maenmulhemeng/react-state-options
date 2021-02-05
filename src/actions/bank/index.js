
import {Link ,Switch,Route} from "react-router-dom";
import BankEdit from './edit';
import BankAdd from './add';
import BankList from "../../components/lists/banklist";
function Bank() {
  return (
    <div>
       Bank 
      
       <li>
            <Link to="/actions/bank/edit">Edit</Link>
          </li>
          <li>
            <Link to="/actions/bank/add">Add</Link>
          </li> 

          <BankList/>
          <Switch>
                <Route path="/actions/bank/add">
                    <BankAdd />
                </Route>
                <Route path="/actions/bank/edit">
                    <BankEdit />
                </Route>
            </Switch>
    </div>
     
  );
}

export default Bank;
