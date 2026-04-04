import React,{useState} from 'react'

const ListEmployeeComponent = () => {

    const[employees, setEmployees]=useState([])

  return (
    <div className='container'> 
        <h2 className='text-center'>Employees List</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>      
                        <td>{employee.emailId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent