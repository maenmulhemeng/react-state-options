import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import { useHistory } from "react-router-dom";
import {Button} from 'reactstrap';

const Layout = (props)=>{
    const history = useHistory();
    
    return (
        <>
         <Header />
         
            <Container>
                <Row>
                    <Col md={1}>
                      <Button onClick={() => history.goBack()}>&larr;</Button>
                    </Col>
                    <Col>
                    <h2>{props.title}</h2>
                    </Col>
                    <Col md={1}>
                        <Button onClick={() => history.goForward()}>&rarr;</Button>
                    </Col>
                </Row>
                {props.children}
            </Container>
         
        </>
        
    )
}

export default Layout;