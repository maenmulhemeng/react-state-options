import React from 'react';
import AddBankFrom from 'components/forms/add/AddBankFrom';
import {Row, Col, Button} from 'reactstrap';

import BankList from 'components/lists/banklist';
import Layout from 'components/layout';
import { useDispatch, useSelector } from 'react-redux';
//import { useBankCtx } from 'contexts/BankCtx';
import {bankActions} from 'redux/reducers/bankReducer';
const BankAddPage = (props) => {
  console.log("Re-render BankAddPage");
  const banks = useSelector((state) => {return state.bankReducer})
  
  const dispatch = useDispatch()

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
  