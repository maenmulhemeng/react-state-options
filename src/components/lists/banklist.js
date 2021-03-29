import React from 'react';
import {Link} from "react-router-dom";
import {Button, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import { useBankCtx } from 'contexts/BankCtx';

const BankList = (props) => {
  console.log("Re-render BankList")
  const {banks,dispatch,bankActions} = useBankCtx();
  const deleteBank = (bank) => {
    dispatch({type:bankActions.delete,payload:bank})
  }
  if (banks && banks.length>0){
    return (
      <ListGroup>
    
      {banks.map((item, index)=>(
        <ListGroupItem key={index}>
        <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
        <ListGroupItemText>
        {item.address}
        </ListGroupItemText>
        <Row>
            <Col>
            <Link className="btn btn-sm btn-primary" to={ {pathname:`/actions/bank/edit/${item.id}`, state: item } }>Edit</Link> {' '}
            </Col>
            <Col>
            <Button className="btn btn-sm btn-danger" onClick={()=>deleteBank(item)}>Delete</Button>
            </Col>
        </Row>
      </ListGroupItem>
      
      ))}
      </ListGroup>
    );
  }
    return <div>No Banks - Add some banks</div>
  }
  
export default BankList;
  