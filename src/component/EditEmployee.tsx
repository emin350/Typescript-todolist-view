import React,{useState} from 'react'
import { IEmployee } from './Employee.type'

type Props = {
    onBackBtnClickHnd : () => void;
    onUpdateClickHnd : (data: IEmployee) => void;
    data: IEmployee
}

const EditEmployee = (props: Props) => {
    const {data,onBackBtnClickHnd,onUpdateClickHnd} = props
    const [firstName, setFirstName] = useState(data.firstname)
    const [lastName, setLastName] = useState(data.lastname)
    const [email, setEmail] = useState(data.email)

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
          const updatedData: IEmployee = {
            id: data.id,
            firstname: firstName,
            lastname:lastName,
            email:email
          }
          onUpdateClickHnd(updatedData);
          onBackBtnClickHnd();
        }

  return (
    <>
     <form  onSubmit={onSubmitBtnClickHnd}>
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
            <input type='submit' value="Update Employee"
        />
        </div>

     </form>
    
    </>
  )
}

export default EditEmployee