import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
        <td> {contact.UserName} </td>
        <td> {contact.UserCategory} </td>
        <td> {contact.UserEmail} </td>
        <td> {contact.UserContactNo} </td>
        <td>
            <button type="button" onClick={(event)=> handleEditClick(event, contact)}>Edit</button>
            <button type="button" onClick={()=> handleDeleteClick(contact.id)}> Delete </button>
        </td>
        <td>
            <button>View Profile Details</button>
        </td>
    </tr>
  )
}

export default ReadOnlyRow