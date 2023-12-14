import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
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

  const [filter, setFilter] = useState({
    name: '',
    age: '',
    salary: '',
  });

  const handleFilterChange = (column, value) => {
    setFilter({ ...filter, [column]: value });
  };

  const filteredData = data.filter((item) => {
    return Object.keys(filter).every((key) => {
      if (!filter[key]) {
        return true;
      }
      return String(item[key]).toLowerCase().includes(filter[key].toLowerCase());
    });
  });

  return (
    <div>
      <div className="filter-row">
        <input
          type="text"
          placeholder="Filter by Name"
          value={filter.name}
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Age"
          value={filter.age}
          onChange={(e) => handleFilterChange('age', e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Salary"
          value={filter.salary}
          onChange={(e) => handleFilterChange('salary', e.target.value)}
        />
      </div>
      <table className="filterable-table">
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
export default Filter;
