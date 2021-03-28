import React from 'react';
import AddCustomerFrom from 'components/forms/add/AddCustomerForm';
import Layout from 'components/layout';

const CustomerAddPage = () => {
    return (
      <Layout title="Customer - Add">
            <AddCustomerFrom />
      </Layout>
    );
  }
  
  export default CustomerAddPage;
  