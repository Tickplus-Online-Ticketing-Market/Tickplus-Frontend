import React, { useState, Fragment } from 'react'
import {nanoid} from 'nanoid';
import "./UserTable.css";
import data from "./mock-data.json"
import ReadOnlyRow from './ReadOnlyRow';
import EditTableRow from './EditTableRow';

const UserTable = () => {

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        UserName: '',
        UserCategory: '',
        UserEmail: '',
        UserContactNo: '',
    });

    const [editFormData, setEditFormData] = useState({
        UserName: '',
        UserCategory: '',
        UserEmail: '',
        UserContactNo: '',
    })

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            UserName: addFormData.UserName,
            UserCategory: addFormData.UserCategory,
            UserEmail: addFormData.UserEmail,
            UserContactNo: addFormData.UserContactNo,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            UserName: editFormData.UserName,
            UserCategory: editFormData.UserCategory,
            UserEmail: editFormData.UserEmail,
            UserContactNo: editFormData.UserContactNo,
        }

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact)=> contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            UserName: contact.UserName,
            UserCategory: contact.UserCategory,
            UserEmail: contact.UserEmail,
            UserContactNo: contact.UserContactNo,
        }

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    // delete button
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact)=> contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    }

  return (
    <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
        <table>
            <thead>
                <tr>
                    <th> User Name</th>
                    <th> User Category </th>
                    <th> User E-mail </th>
                    <th> User Contact No. </th>
                    <th> Actions </th> 
                    <th> View Profile </th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <Fragment>
                            {editContactId === contact.id ? (
                            <EditTableRow 
                            editFormData={editFormData} 
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                            /> ) : 
                            (<ReadOnlyRow 
                            contact={contact} 
                            handleEditClick= {handleEditClick} 
                            handleDeleteClick={handleDeleteClick}
                            /> )}       
                    </Fragment>
                   
                )) }   
            </tbody>
        </table>
        </form>

        <h2> Add User Details </h2>
        <form onSubmit={handleAddFormSubmit}>
            <input 
                type="text" 
                name="UserName" 
                required="required" 
                placeholder="Enter name..."
                onChange={handleAddFormChange}
            />
            <input 
                type="text" 
                name="UserCategory" 
                required="required" 
                placeholder="Enter user category..."
                onChange={handleAddFormChange}
            />
            <input 
                type="email" 
                name="UserEmail" 
                required="required" 
                placeholder="Enter user E-mail..."
                onChange={handleAddFormChange}
            />
            <input 
                type="text" 
                name="UserContactNo" 
                required="required" 
                placeholder="Enter Contact Number..."
                onChange={handleAddFormChange}
            />

            <div className="btn">
            <button type="submit"> Add </button>
            </div>

        </form>
    </div>
  )
}

export default UserTable