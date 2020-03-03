import React from 'react'
import { range } from '../utils'
import classNames from 'classnames'

const PaginationItem = ({ page, currentPage, handleClick }) => {
  const liClasses = classNames({
    'page-item': true,
    active: currentPage === page
  })
  return (
    <li className={liClasses}>
      <button className='page-link' onClick={handleClick} value={page}>
        {page}
      </button>
    </li>
  )
}

const Pagination = ({ total, limit, currentPage, handleClick }) => {
  const pagesCount = Math.ceil(total / limit)
  const pages = range(1, pagesCount)

  return (
    <ul className='pagination'>
      {pages.map(page => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          key={page}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}

export default Pagination
