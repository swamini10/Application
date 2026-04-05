
import React, { useState } from 'react'
const AddEmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const saveEmployee = (e) => {
    e.preventDefault()
    // Handle employee saving logic here

    const employee = { firstName, lastName, emailId }
    console.log(employee)

  }
  return (
    <div>
      <br></br>
      <br></br>
      <div className='container '>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
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

                <button className='btn btn-success' onClick={(e) => saveEmployee(e)}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent