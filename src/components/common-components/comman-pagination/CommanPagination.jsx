import React from "react";
import { Pagination } from 'react-bootstrap';
import "./index.css"
import { NextIcon, PreviousIcon } from "@/icons";

const CommanPagination=({ totalItems, itemsPerPage, currentPage, onPageChange })=> {
   
    
    // const totalPages = Math.ceil(totalItems / itemsPerPage);
    const totalPages = totalItems && itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 1;


    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

   const renderPaginationItems = () => {
    let items = [];

    if (totalPages <= 5) {
        for (let page = 1; page <= totalPages; page++) {
            items.push(
                <li
                    key={`page-${page}`}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => handlePageChange(page)}
                >
                    <span>{page}</span>
                </li>
            );
        }
    } else {
        items.push(
            <li
                key="page-1"
                className={currentPage === 1 ? "active" : ""}
                onClick={() => handlePageChange(1)}
            >
                <span>1</span>
            </li>
        );

        if (currentPage > 2) {
            items.push(
                <li
                    key={`page-${currentPage - 1}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <span>{currentPage - 1}</span>
                </li>
            );
        }

        if (currentPage !== 1 && currentPage !== totalPages) {
            items.push(
                <li key={`page-${currentPage}`} className="active">
                    <span>{currentPage}</span>
                </li>
            );
        }

        if (currentPage < totalPages - 1) {
            items.push(
                <li
                    key={`page-${currentPage + 1}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    <span>{currentPage + 1}</span>
                </li>
            );
        }

        if (currentPage < totalPages - 2) {
            items.push(
                <li key="ellipsis" className="ellipsis">
                    <span>...</span>
                </li>
            );
        }

        items.push(
            <li
                key={`page-${totalPages}`}
                className={currentPage === totalPages ? "active" : ""}
                onClick={() => handlePageChange(totalPages)}
            >
                <span>{totalPages}</span>
            </li>
        );
    }

    return items;
};

    return <ul className=" list-unstyled mb-0 d-flex align-items-center gap-2 custom-pagination">
  
        <li className={`prev-btn ${currentPage === 1 ? 'disabled':""}`} onClick={() => handlePageChange(currentPage - 1)}>
            <i><PreviousIcon width={16} height={16}/></i>
        </li>
        {renderPaginationItems()}
    
        <li className={`next-btn ${currentPage === totalPages ? 'disabled':""}`} onClick={() => handlePageChange(currentPage + 1)} >
           <i><NextIcon/></i>
        </li>
    </ul>;
}
export default CommanPagination