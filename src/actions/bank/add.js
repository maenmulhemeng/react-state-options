import React from 'react';
import AddBankFrom from 'components/forms/add/AddBankFrom';
import {Row, Col, Button} from 'reactstrap';
import {Link, useRouteMatch} from "react-router-dom";
import BankList from 'components/lists/banklist';
import Layout from 'components/layout';

function BankAddPage(props) {
  const  match = useRouteMatch();
  return (
    <Layout title="Bank - Add">
      <Row>
        <Col> 
          <AddBankFrom addBank={props.addBank}/> 
        </Col>
        <Col>
          <div>  
            <Button onClick={props.resetBanks}>Reset</Button> 
          </div>  
          
          <BankList banks={props.banks}  deleteBank={props.deleteBank} />
        </Col>
      </Row>
    </Layout>
  );
}
  
export default BankAddPage;
  