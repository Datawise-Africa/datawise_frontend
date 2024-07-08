import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const totalNumbers = maxPagesToShow + 2; // including first and last
    const halfWindow = Math.floor(maxPagesToShow / 2);

    let startPage, endPage;
    if (totalPages <= totalNumbers) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage - halfWindow <= 1) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + halfWindow >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfWindow;
      endPage = currentPage + halfWindow;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 2) {
      pages.unshift('...');
      pages.unshift(1);
    } else if (startPage === 2) {
      pages.unshift(1);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
      pages.push(totalPages);
    } else if (endPage === totalPages - 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination flex items-center justify-center mt-4">
      <button
        className='mr-5'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => number !== '...' && handlePageChange(number)}
          className={`mx-1 px-3 py-1 ${currentPage === number ? 'bg-purple-500 text-white' : ''} ${number === '...' ? 'cursor-default' : 'cursor-pointer'}`}
          disabled={number === '...'}
        >
          {number}
        </button>
      ))}
      <button
        className='ml-5'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
