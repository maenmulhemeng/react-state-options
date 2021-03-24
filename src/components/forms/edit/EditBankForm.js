
import React from 'react';
function EditBankForm() {
    return (
                <form>
                <label>
                    Bank Name :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Update" />
            </form>
    );
  }
  
  export default EditBankForm;
  