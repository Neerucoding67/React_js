import React, { useState } from 'react';
import './table.css'; 

const Table = () => {
  const [columns, setColumns] = useState([
    { id: 1, label: 'Column 1' },
    { id: 2, label: 'Column 2' },
    { id: 3, label: 'Column 3' },
    { id: 4, label: 'Column 4' },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    const draggedOverItem = columns[index];

    
    const newColumns = columns.filter((item) => item !== draggedOverItem);
    newColumns.splice(index, 0, draggedOverItem);

    setColumns(newColumns);
  };

  return (
    <div>
      <table className="reorderable-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map((column) => (
              <td key={column.id}>{column.label}</td>
            ))}
          </tr>
          <tr>
            {columns.map((column) => (
              <td key={column.id}>{column.label}</td>
            ))}
          </tr>
          <tr>
            {columns.map((column) => (
              <td key={column.id}>{column.label}</td>
            ))}
          </tr>
          <tr>
            {columns.map((column) => (
              <td key={column.id}>{column.label}</td>
            ))}
          </tr>
          <tr>
            {columns.map((column) => (
              <td key={column.id}>{column.label}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
