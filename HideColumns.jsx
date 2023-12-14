import React, { useState } from 'react';
import './HideColumns.css';

const SampleData = () => {
  return [
    { name: 'John Doe', age: 30, salary: 50000 },
    { name: 'Jane Doe', age: 25, salary: 60000 },
    { name: 'Bob Smith', age: 35, salary: 55000 },
    { name: 'Samuel', age: 30, salary: 67000 },
    { name: 'Rishi', age: 23, salary: 86000 },
    { name: 'Bobby ', age: 31, salary: 55000 },
    { name: 'Mary', age: 37, salary: 57000 },
    { name: 'David', age: 21, salary: 34000 },
    { name: 'Smith', age: 30, salary: 55000 },
  ];
};

const HideColumns = () => {
  const columns = ['name', 'age', 'salary'];

  const [hiddenColumns, setHiddenColumns] = useState([]);

  const handleColumnToggle = (hiddenColumns) => {
    setHiddenColumns(hiddenColumns);
  };

  return (
    <div className="App">
      <HideableTable data={SampleData()} columns={columns} onColumnToggle={handleColumnToggle} />
    </div>
  );
};

const HideableTable = ({ data, columns, onColumnToggle }) => {
  const [hiddenColumns, setHiddenColumns] = useState([]);

  const toggleColumn = (column) => {
    if (hiddenColumns.includes(column)) {
      setHiddenColumns(hiddenColumns.filter((col) => col !== column));
    } else {
      setHiddenColumns([...hiddenColumns, column]);
    }

    onColumnToggle(hiddenColumns);
  };

  return (
    <div>
      <table className="hideable-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={!hiddenColumns.includes(column)}
                    onChange={() => toggleColumn(column)}
                  />
                  {column}
                </label>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} style={{ display: hiddenColumns.includes(column) ? 'none' : 'table-cell' }}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HideColumns;
