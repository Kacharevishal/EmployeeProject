import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EmployeeData = ({ refresh, handleUpdate }) => {

  const [employee, setEmployee] = useState([]);

  const loadData = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/emp/`
    );

    setEmployee(data);
  };

  const handleDelete = async (employeeId) => {

    await axios.delete(
      `http://localhost:8080/api/emp/delete/${employeeId}`
    );

    loadData();
  };

  useEffect(() => {
    loadData();
  }, [refresh]);

  return (
    <div className="table-container">

      <h2 className="section-title">
        Employee Data
      </h2>

      <table className="employee-table">

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Joining Date</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {employee.map((e) => (

            <tr key={e.employeeId}>

              <td>{e.employeeId}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.phoneNumber}</td>
              <td>{e.department}</td>
              <td>{e.designation}</td>
              <td>{e.salary}</td>
              <td>{e.joiningDate}</td>
              <td>{e.address}</td>

              <td>
                <div className="action-buttons">

                  <button
                    className="update-btn"
                    onClick={() => handleUpdate(e)}
                  >
                    Update
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(e.employeeId)}
                  >
                    Delete
                  </button>

                </div>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EmployeeData;