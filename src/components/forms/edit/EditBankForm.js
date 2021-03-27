
import React, { useRef, useState }  from 'react';
import { AvForm, AvField} from 'availity-reactstrap-validation-safe';
import {Row, Col, Button} from 'reactstrap';

function EditBankForm(props) {
    const formEl = useRef(null)

   
    const submitForm = (e) =>{
        //console.log(e)
        props.updateBank(props.bank);
    }
  
    return (
        <AvForm onValidSubmit={submitForm} ref={formEl} className="p-2">
            <Row>
                <Col md={6}>   
                        <AvField 
                            type="text" 
                            name="title"
                            label="Title"
                            id="title" 
                            value={props.bank.title}  
                            onChange={props.inputChanges}
                            helpMessage="Please enter the name"     
                            errorMessage="" 
                            validate={{ required:{ value:true, errorMessage:"it is required"} ,
                                        minLength:{value: 7, errorMessage:"must be larger than 7"},
                                        maxLength:{value: 20, errorMessage:"must be less than 20"}}}         
                            required/>
                </Col>
                <Col md={6}>   
                        <AvField 
                            type="text" 
                            name="address"
                            label="address"
                            id="address" 
                            value={props.bank.address}  
                            onChange={props.inputChanges}
                            helpMessage="Please enter the address"     
                            errorMessage="" 
                            validate={{ required:{ value:true, errorMessage:"it is required"} ,
                                        minLength:{value: 7, errorMessage:"must be larger than 7"},
                                        maxLength:{value: 100, errorMessage:"must be larger than 100"}}}         
                            required/>
                </Col>
                
            </Row>
            <Row>
            <Col md={6}>
                
                <Button className="btn btn-success">Update</Button>
            
                </Col>
            </Row>
        </AvForm>
    );
  }
  
  export default EditBankForm;
  