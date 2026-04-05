import React, { useState,useEffect } from 'react'
import {useNavigate, Link,useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
const AddEmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()


  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmailId(response.data.emailId)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [id])


  const saveorupdateEmployee = (e) => {
    e.preventDefault()
    // Handle employee saving logic here

    const employee = { firstName, lastName, emailId }
    // console.log(employee)
    if (id) {
      EmployeeService.updateEmployee(employee, id).then((response) => {
        console.log(response.data)
        navigate('/employees')
      }).catch(error => {
        console.log(error)
      })
      
    }else{
       EmployeeService.createEmployee(employee).then((response) => {
      console.log(response.data)
      navigate('/employees')

    }).catch(error => {
      console.log(error)
    })
    }

  }



  const title =() => {
    if(id){
      return <h2 className='text-center'>Update Employee</h2>
    }else{
      return <h2 className='text-center'>Add Employee</h2>
    }
  }
  return (
    <div>
      <br></br>
      <br></br>
      <div className='container '>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
            title()
            }
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Last Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email ID:</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter Email ID'
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
                <button className='btn btn-success' onClick={(e) => saveorupdateEmployee(e)}>Submit</button>
                <Link to='/employees' className='btn btn-danger' style={{ marginLeft: "20px" }}>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent