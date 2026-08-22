import React, { useState } from 'react';
import EmployeeData from './EmployeeData';
import EmployeeForm from './EmployeeForm';
import './App.css';

const App = () => {

  const [refresh, setRefresh] = useState(0);
  const [edit, setEdit] = useState(null);

  return (
    <div className="app">

      <h1 className="page-title">
        Employee Management System
      </h1>

      <EmployeeForm
        added={() => {
          setRefresh(refresh + 1);
          setEdit(null);
        }}
        addEdit={edit}
      />

      <EmployeeData
        refresh={refresh}
        handleUpdate={(e) => setEdit(e)}
      />

    </div>
  );
};

export default App;