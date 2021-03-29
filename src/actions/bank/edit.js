import React, { useContext } from 'react';
import EditBankForm from 'components/forms/edit/EditBankForm';

import Layout from 'components/layout';
import { useParams } from 'react-router';


const BankEditPage = (props) => {
    let { id } = useParams();
    return (
      <Layout title="Bank - Edit">
         <EditBankForm id={id}/>
      </Layout>
    );
  }
  
  export default BankEditPage;
  