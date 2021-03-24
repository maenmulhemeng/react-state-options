import React from 'react';
import { Button } from 'reactstrap';
function EditCustomerForm() {
    return (
                <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" className="btn btn-primary" value="Update" />
                <Button color="danger">Danger!</Button>
            </form>
    );
  }
  
  export default EditCustomerForm;
    