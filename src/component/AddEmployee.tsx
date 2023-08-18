import React, { useState } from 'react'
import { IEmployee } from './Employee.type';

type Props = {
    onBackBtnClickHnd : () => void;
    onSubmitClickHnd : (data: IEmployee) => void;
}


const AddEmployee = (props: Props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const {onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onFirstNameChangeHnd = (e : any) => {
        setFirstName(e.target.value)
        }
    const onLastNameChangeHnd = (e : any) => {
        setLastName(e.target.value)
        }
    const onEmailChangeHnd = (e : any) => {
        setEmail(e.target.value)
        }

    const onSubmitBtnClickHnd = (e : any) => {
        e.preventDefault();
      const data: IEmployee = {
        id: new Date().toJSON().toString(),
        firstname: firstName,
        lastname:lastName,
        email:email
      }
      onSubmitClickHnd(data);
      onBackBtnClickHnd();
    }
  return (
    <>
     <form onSubmit={onSubmitBtnClickHnd}>
        <div>
            <label>First Name</label>
            <input type='text' value={firstName} onChange={onFirstNameChangeHnd}/>
        </div>

        <div>
            <label>Last Name</label>
            <input type='text' value={lastName} onChange={onLastNameChangeHnd}/>
        </div>

        <div>
            <label>Email</label>
            <input type='text'value={email} onChange={onEmailChangeHnd}/>
        </div>

        <div>
            <input type='button' value="Back" onClick={onBackBtnClickHnd}/>
            <input type='submit' value="Add Employee"/>
        </div>

     </form>
    
    </>
  )
}

export default AddEmployee;