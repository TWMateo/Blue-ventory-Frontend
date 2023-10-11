import React from 'react'
import ReactPaginate from 'react-paginate';

const PaginatedItems = ({ itemsPerPage }) => {
    const currentItems = 5;
    const pageCount = 5;
    const handlePageClick = ()=>{
        console.log('Funcionando')
    }
    return (
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className='flex gap-3 lg:gap-9 bg-white rounded-xl p-1 border border-black'
            pageClassName='pr-2 pl-2 hover:bg-blue-400 rounded-md'
          />
        </>
      );
}

export default PaginatedItems