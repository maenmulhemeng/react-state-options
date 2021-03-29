import React from 'react';
import AddBankFrom from 'components/forms/add/AddBankFrom';
import {Row, Col, Button} from 'reactstrap';

import BankList from 'components/lists/banklist';
import Layout from 'components/layout';
import { useBankCtx } from 'contexts/BankCtx';

const BankAddPage = (props) => {
  console.log("Re-render BankAddPage");
  const {banks,dispatch,bankActions} = useBankCtx();
  return (
    <Layout title="Bank - Add">
      <Row>
        <Col> 
          <AddBankFrom /> 
        </Col>
        <Col>
          <div>  
            <Button onClick={()=>dispatch({type:bankActions.reset})}>Reset</Button> 
          </div>  
          
          <BankList />
        </Col>
      </Row>
    </Layout>
  );
}
  
export default BankAddPage;
  