import React, { useState } from 'react';
import './Sort.css';

const Sort = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Bob Smith', age: 35 },
    { id: 4, name: 'Alice Johnson', age: 28},
    { id: 5, name: 'Charlie Brown', age: 32},
    { id: 6, name: 'Eva Davis', age: 29},
    { id: 7, name: 'John ', age: 31},
    { id: 8, name: 'Jane', age: 27},
    { id: 9, name: 'Bob Smith', age: 25},
    { id: 10, name: 'Johnson', age: 28},
    { id: 11, name: 'Charlie', age: 35},
    { id: 12, name: 'Max Davis', age:21},
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc',
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig === null) {
      return 0;
    }

    const key = sortConfig.key;
    const direction = sortConfig.direction === 'asc' ? 1 : -1;

    if (a[key] < b[key]) {
      return -1 * direction;
    }
    if (a[key] > b[key]) {
      return 1 * direction;
    }
    return 0;
  });

  return (
    <div>
      <table className="sortable-table">
        <thead>
          <tr>
            <th onClick={() => requestSort('id')}>ID</th>
            <th onClick={() => requestSort('name')}>Name</th>
            <th onClick={() => requestSort('age')}>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sort;
