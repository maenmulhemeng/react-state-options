import React, { useState } from "react";
import { useForm } from "react-hook-form";


const AddCustomerForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    //console.log(watch("example")); 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
               <h1>This form is built for the sake of demo and need to be done later</h1>
              
        </form>
    );
  }
  
  export default AddCustomerForm;
  