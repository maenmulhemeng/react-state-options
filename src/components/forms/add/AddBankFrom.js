
import React, { useRef, useState } from 'react';
import { AvForm, AvField} from 'availity-reactstrap-validation-safe';
import {Row, Col, Button} from 'reactstrap';
import { useBankCtx } from 'contexts/BankCtx';

const  AddBankFrom = (props) => {
    const {banks,dispatch,bankActions} = useBankCtx();
    const formEl = useRef(null)

    const [bank, setBank] = useState({})

    const submitForm = (e) =>{
        dispatch({type:bankActions.add,payload:bank});
        formEl.current.reset();
    }
    const inputChanges = (e)=>{
        //console.log(e);
        setBank({...bank, [e.target.name]:e.target.value})
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
                                value={bank.title}  
                                onChange={inputChanges}
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
                                value={bank.address}  
                                onChange={inputChanges}
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
                    
                    <Button className="btn btn-success">Add</Button>
                   
                    </Col>
                </Row>
            </AvForm>
    );
  }
  
  export default AddBankFrom;
  