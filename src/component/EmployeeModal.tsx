import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css"

type Props = {
  onClose: () => void;
  data: IEmployee;
}

const EmployeeModal = (props: Props) => {
  const {onClose, data} = props
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div>
          <h1>Employee Data</h1>
          <div>{data.firstname}</div>
          <div>{data.lastname}</div>
          <div>{data.email}</div>
        </div>
      </div>
    </div>
  )
}
export default EmployeeModal

