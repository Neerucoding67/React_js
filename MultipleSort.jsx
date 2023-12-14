import React, { useState } from 'react';
import './table.css';

const MultipleSort = () => {
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

  const [sortConfig, setSortConfig] = useState([]);

  const handleSort = (key) => {
    let newSortConfig = [...sortConfig];
    let sortIndex = newSortConfig.findIndex((config) => config.key === key);

    if (sortIndex !== -1) {
      newSortConfig[sortIndex].direction =
        newSortConfig[sortIndex].direction === 'ascending' ? 'descending' : 'ascending';
    } else {
      if (!key.includes('()')) {
        newSortConfig.push({ key, direction: 'ascending' });
      }
    }
    newSortConfig = newSortConfig.filter((config) => config.key !== key);
    newSortConfig.unshift({ key, direction: 'ascending' });

    setData((prevData) => {
      const newData = [...prevData].sort((a, b) => {
        return newSortConfig.reduce((acc, config) => {
          const sortOrder = config.direction === 'ascending' ? 1 : -1;
          return acc || sortOrder * (a[config.key] - b[config.key]);
        }, 0);
      });

      return newData;
    });

    setSortConfig(newSortConfig);
  };

  return (
    <div>
      <table className="multi-sort-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortConfig.find((config) => config.key === 'id')?.direction}
            </th>
            <th onClick={() => handleSort('name')}>
              Name {sortConfig.find((config) => config.key === 'name')?.direction}
            </th>
            <th onClick={() => handleSort('age')}>
              Age {sortConfig.find((config) => config.key === 'age')?.direction}
            </th>
            <th onClick={() => handleSort('salary')}>
              Salary {sortConfig.find((config) => config.key === 'salary')?.direction}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
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

export default MultipleSort;
