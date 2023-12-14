import React, { useState } from 'react';
import './ResizeableTable.css';

const ResizeableTable = () => {
  const [columns, setColumns] = useState([
    { key: 'id', title: 'ID', width: 100 },
    { key: 'name', title: 'Name', width: 200 },
    { key: 'age', title: 'Age', width: 100 },
    { key: 'salary', title: 'Salary', width: 150 },
  ]);

  const [draggingColumn, setDraggingColumn] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
    setDraggingColumn(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (sourceIndex !== targetIndex) {
      setColumns((prevColumns) => {
        const newColumns = [...prevColumns];
        const [movedColumn] = newColumns.splice(sourceIndex, 1);
        newColumns.splice(targetIndex, 0, movedColumn);
        return newColumns;
      });
    }
    setDraggingColumn(null);
  };

  const sampleData = [
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
  ];

  return (
    <div>
      <table className="resizable-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.key}
                style={{ width: column.width }}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
                draggable
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResizeableTable;
