"use client"
import React, { useState } from 'react';

interface PaginationProps {
    totalPages: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const maxVisiblePages = 5;

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    };

    const renderPagination = () => {
        let pages = [];

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <div
                        key={i}
                        className={`w-10 h-10 flex items-center justify-center text-xl font-semibold rounded-md cursor-pointer ${i === currentPage ? 'bg-yellow text-white' : 'bg-gray-200 text-white'}`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </div>
                );
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);

            if (startPage > 1) {
                pages.push(
                    <div
                        key={1}
                        className={`w-10 h-10 max-md:w-7 max-md:h-7 flex items-center justify-center text-xl max-md:text-base font-semibold rounded-md cursor-pointer ${1 === currentPage ? 'bg-yellow text-white' : 'bg-gray-200 text-white'}`}
                        onClick={() => handlePageClick(1)}
                    >
                        1
                    </div>
                );
                if (startPage > 2) {
                    pages.push(<div key="dots-start" className='w-10 h-10 max-md:w-7 max-md:h-7 flex items-center justify-center text-white'>. . .</div>);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(
                    <div
                        key={i}
                        className={`w-10 h-10 max-md:w-7 max-md:h-7 flex items-center justify-center text-xl max-md:text-base font-semibold rounded-md cursor-pointer ${i === currentPage ? 'bg-yellow text-white' : 'bg-gray-200 text-white'}`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </div>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pages.push(<div key="dots-end" className='w-10 h-10 max-md:w-7 max-md:h-7 flex items-center justify-center text-white'>. . .</div>);
                }
                pages.push(
                    <div
                        key={totalPages}
                        className={`w-10 h-10 max-md:w-7 max-md:h-7 flex items-center justify-center text-xl max-md:text-base font-semibold rounded-md cursor-pointer ${totalPages === currentPage ? 'bg-yellow text-white' : 'bg-gray-200 text-white'}`}
                        onClick={() => handlePageClick(totalPages)}
                    >
                        {totalPages}
                    </div>
                );
            }
        }

        return pages;
    };

    return (
        <div className='w-fit flex items-center gap-2 max-sm:gap-1 mx-auto pt-20'>
            <button
                className='w-10 h-10 max-md:w-5 max-md:h-7 flex items-center justify-center text-xl font-semibold rounded-md cursor-pointer bg-gray-300 text-white'
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {renderPagination()}
            <button
                className='w-10 h-10 max-md:w-5 max-md:h-7 flex items-center justify-center text-xl font-semibold rounded-md cursor-pointer bg-gray-300 text-white'
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
