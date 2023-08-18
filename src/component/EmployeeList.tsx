import React,{useState} from "react";
import "./EmployeeList.style.css"
import { IEmployee } from './Employee.type'
import EmployeeModal from "./EmployeeModal";


type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void
  onEdit: (data: IEmployee) => void
}

const EmployeeList = (props: Props) => {
  const {list, onDeleteClickHnd, onEdit} = props;
  const [showModal, setShowModal] = useState(false)
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

  const viewEmployee = (data:IEmployee) => {
    setDataToShow(data)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }
  
return (
    <>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>

        {list.map((employee) => {
          return (<tr key={employee.id}>
            <td>{`${employee.firstname} ${employee.lastname}`}</td>
            <td>{employee.email}</td>
            <td>
              <div>
                <input type="button" value="View" onClick={() => viewEmployee(employee)}/>
                <input type="button" value="Edit" onClick={() => onEdit(employee)} />
                <input type="button" value="Delete" onClick={() => onDeleteClickHnd(employee)} />
              </div>
            </td>
          </tr>)
        })}
      </table>
      {showModal && dataToShow !== null && (<EmployeeModal onClose={onCloseModal} data={dataToShow}/>)}
     
    </>
  )
}

export default EmployeeList