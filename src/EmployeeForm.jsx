import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EmployeeForm = ({ added, addEdit }) => {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: '',
    designation: '',
    salary: '',
    joiningDate: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  useEffect(() => {
    if (addEdit) {
      setForm(addEdit);
    }
  }, [addEdit]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (addEdit) {
      await axios.put(
        `http://localhost:8080/api/emp/update/${addEdit.employeeId}`,
        form
      );
    } else {
      await axios.post(
        `http://localhost:8080/api/emp/register`,
        form
      );
    }

    added();

    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      department: '',
      designation: '',
      salary: '',
      joiningDate: '',
      address: ''
    });
  };

  return (
    <div className="form-container">

      <h2 className="section-title">
        {addEdit ? 'Update Employee' : 'Add Employee'}
      </h2>

      <form className="employee-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact No</label>
          <input
            type="number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={form.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn" type="submit">
          {addEdit ? 'Update Employee' : 'Add Employee'}
        </button>

      </form>

    </div>
  );
};

export default EmployeeForm;