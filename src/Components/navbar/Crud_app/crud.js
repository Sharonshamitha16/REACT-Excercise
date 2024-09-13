import React, { useState } from 'react';

function Crud() {
  // Using React's useState to manage form inputs and table data
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [rows, setRows] = useState([]);

  // Handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the page from refreshing
    if (name && age) { // Only add row if both fields are filled
      setRows([...rows, { name, age }]); // Adds the new row to the table
      setName(''); // Clears the name input field
      setAge('');  // Clears the age input field
    }
  };

  // Handles deleting a row from the table
  const handleDelete = (index) => {
    const newRows = rows.filter((_, i) => i !== index); // Removes the row at the given index
    setRows(newRows); // Updates the table
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Updates name as you type
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">AGE:</label>
        <input
          type="text"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)} // Updates age as you type
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
