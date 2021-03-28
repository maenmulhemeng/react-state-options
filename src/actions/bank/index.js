import Layout from 'components/layout';
import BankList from 'components/lists/banklist';
import React  from 'react';
import {Link} from "react-router-dom";

const BankIndexPage = (props) => {
  console.log("init the bank page")
  return (
    <Layout title="Bank - index">
        <Link className="btn btn-success mb-2" to="/actions/bank/add">Add Banks</Link>
        <BankList banks={props.banks} deleteBank={props.deleteBank} />
    </Layout>
     
  );
}

export default BankIndexPage;
