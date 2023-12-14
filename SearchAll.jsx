import React, { useState } from 'react';
import './SearchAll.css';

const SearchAll = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30, salary: 50000 },
    { id: 2, name: 'Jane Doe', age: 25, salary: 60000 },
    { id: 3, name: 'Bob Smith', age: 35, salary: 55000 },
    { id: 4, name: 'Alice Johnson', age: 28, salary: 70000 },
    { id: 5, name: 'Charlie Brown', age: 32, salary: 65000 },
    { id: 6, name: 'Eva Davis', age: 29, salary: 75000 },
    { id: 7, name: 'John ', age: 31, salary: 50000 },
    { id: 8, name: 'Jane', age: 27, salary: 65000 },
    { id: 9, name: 'Bob Smith', age: 25, salary: 55000 },
    { id: 10, name: 'Johnson', age: 28, salary: 80000 },
    { id: 11, name: 'Charlie', age: 35, salary: 65000 },
    { id: 12, name: 'Max Davis', age: 29, salary: 75000 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchColumn, setSearchColumn] = useState('name'); 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleColumnSelect = (e) => {
    setSearchColumn(e.target.value);
  };

  const filteredData = data
    .filter((row) =>
      row[searchColumn].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="search">
      <div className = "search-column">
        <label htmlFor="searchColumn">Select Column: </label>
        <select id="searchColumn" value={searchColumn} onChange={handleColumnSelect}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="salary">Salary</option>
        </select>
      </div>
      <input
        type="text"
        placeholder={`Search by ${searchColumn}...`}
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="searchable-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchAll;




