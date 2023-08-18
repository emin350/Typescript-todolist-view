import {useState} from 'react'
import "./Home.style.css";
import { IEmployee, PageEnum} from './Employee.type';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

const Home = () => {

    const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
    const [showPage, setShowPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

    const onAddEmployeeClickHnd = () => {
        setShowPage(PageEnum.add);
    }

    const showListPage = () => {
        setShowPage(PageEnum.list)
    }

const addEmployee = (data: IEmployee) => {
   setEmployeeList([...employeeList, data])
}

const deleteEmployee = (data:IEmployee) => {
    const indexToDelete = employeeList.indexOf(data)
    const templist = [...employeeList]

    templist.splice(indexToDelete, 1);
    setEmployeeList(templist)
}

const editEmployeeData = (data:IEmployee) => {
    setShowPage(PageEnum.edit)
    setDataToEdit(data)
}

const updatedData = (data:IEmployee) => {
 const filteredData = employeeList.filter(x => x.id === data.id)[0]
 const indexOfRecord = employeeList.indexOf(filteredData);
 const tempData = [...employeeList]
 tempData[indexOfRecord] = data;
 setEmployeeList(tempData)
}

  return (
      <>
          <article className='article-header'>
              <header>
                  <h1>Crud Oparation</h1>
              </header>
          </article>
          <section className='section-content'>

            {showPage === PageEnum.list &&(
            <>
            <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd}/>
            <EmployeeList 
            list={employeeList} 
            onDeleteClickHnd={deleteEmployee}
            onEdit={editEmployeeData}
            />
            </>
            )}

        {showPage === PageEnum.add && (<AddEmployee 
        onBackBtnClickHnd={showListPage} 
        onSubmitClickHnd = {addEmployee} />) }
          
        {showPage === PageEnum.edit && <EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updatedData}/>}


          </section>
      </>
  )
}

export default Home