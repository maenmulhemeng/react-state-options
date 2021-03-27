import React from 'react';
import {Link,Switch,Route } from "react-router-dom";
import CutomerList from "components/lists/cutomerlist";


import CustomerAdd from "./add";
import CustomerEdit from "./edit";
import Layout from 'components/layout';
function Customer() {
  return (
    <Layout>
        Customer
        <li>
            <Link to="/actions/customer/edit">Edit</Link>
          </li>
          <li>
            <Link to="/actions/customer/add">Add</Link>
          </li>
          <CutomerList/>
          <Switch>
                <Route path="/actions/customer/add">
                    <CustomerAdd />
                </Route>
                <Route path="/actions/customer/edit">
                    <CustomerEdit />
                </Route>
            </Switch> 
      </Layout>
  );
}

export default Customer;
