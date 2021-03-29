import Layout from 'components/layout';
import BankList from 'components/lists/banklist';
import React  from 'react';
import {Link} from "react-router-dom";


const BankIndexPage = (props) => {
 

  return (
    <Layout title="Bank - index">
        <Link className="btn btn-success mb-2" to="/actions/bank/add">Add Banks</Link>
        <BankList />
    </Layout>
     
  );
}

export default BankIndexPage;
