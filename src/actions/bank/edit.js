import React, { useState } from 'react';
import EditBankForm from 'components/forms/edit/EditBankForm';
import {useLocation} from "react-router-dom";
import Layout from 'components/layout';

const BankEditPage = (props) => {
    const {state}= useLocation();
    
    const [bank, setBank] = useState(state)
    
    const inputChanges = (e)=>{
      //console.log(e);
      setBank({...bank, [e.target.name]:e.target.value})
    }
    return (
      <Layout title="Bank - Edit">
         <div>
           Preview: {bank.title} in {bank.address}
          </div>
         <EditBankForm updateBank={props.updateBank}  inputChanges={inputChanges} bank={bank} />
      </Layout>
    );
  }
  
  export default BankEditPage;
  