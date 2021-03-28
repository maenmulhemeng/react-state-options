
import React from 'react';
import {Link} from "react-router-dom";
import {Button, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

const BankList = (props) => {
    
    const deleteBank = (bank) => {
      props.deleteBank(bank)
    }
    if (props.banks && props.banks.length>0){
      return (
        <ListGroup>
      
        {props.banks.map((item, index)=>(
          <ListGroupItem key={index}>
          <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
          <ListGroupItemText>
          {item.address}
          </ListGroupItemText>
          <Row>
              <Col>
              <Link className="btn btn-sm btn-primary" to={ {pathname:"/actions/bank/edit", state: item } }>Edit</Link> {' '}
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
  