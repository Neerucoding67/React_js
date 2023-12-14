import React, { useState } from 'react';
import './table.css';
import './Pagination.css'

const Pagination = () => {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const data = [
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

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = data.slice(startIndex, endIndex);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div>
            <table className="paginated-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </div>
    );
};
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination-controls">
            <center>
                <button onClick={() => onPageChange(currentPage - 1)}disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{` Page ${currentPage} of ${totalPages} `}</span>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </center>
        </div>
    );
};

export default Pagination;
