import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
    // =======================>
    // PageChanging Handler Function
    let currentPage = props.setCurrentPage;
    const pageChangingHandler = (event) => {
        currentPage(event.target.id);
    };

    let numberOfPages = [];
    for (let i = 1; i <= Math.ceil(props.filteredFinalMenu.length / props.itemsPerPage); i++) {
        numberOfPages.push(i);
    }
    let pageNumber = numberOfPages.map((pages) => {
        return (
            <li id={pages} onClick={pageChangingHandler} className={"br-2 "}>
                {pages}
            </li>
        );
    });

    return (
        <section>
            
            <ul className="pagination  ">{pageNumber}</ul>
        </section>
    );
};

export default Pagination;
