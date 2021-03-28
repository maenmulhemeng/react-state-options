import Layout from 'components/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'reactstrap';

const HomePage = (props)=>{
    return(
        <Layout title="Home">
            <Row>
                <Col> <Link to="./actions/bank">Banks</Link></Col>
                <Col> <Link to="./actions/customer">Customers</Link></Col>
            </Row>
        </Layout>
    )
}

export default HomePage;