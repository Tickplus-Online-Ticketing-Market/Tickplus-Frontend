import React from 'react'

const EditTableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a name..." 
                name="UserName"
                value={editFormData.UserName}
                onChange={handleEditFormChange} 
            ></input>
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a User Category..." 
                name="UserCategory"
                value={editFormData.UserCategory}
                onChange={handleEditFormChange}  
            ></input>
        </td>
        <td>
        <input 
                type="text" 
                required="required" 
                placeholder="Enter a User E-mail..." 
                name="UserEmail" 
                value={editFormData.UserEmail}
                onChange={handleEditFormChange} 
            ></input>
        </td>
        <td>
        <input 
                type="text" 
                required="required" 
                placeholder="Enter a User Contact Number..." 
                name="UserContactNo" 
                value={editFormData.UserContactNo}
                onChange={handleEditFormChange} 
            ></input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditTableRow