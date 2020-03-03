import React, { useState, useEffect } from 'react'
import TableRow from './tableRow'
import { dynamicSort } from '../utils'
import TableHeader from './tableHeader'
import SearchForm from './searchForm'
import { primaryKey, limit } from './../utils'
import ShowInfo from './showInfo'
import Pagination from './pagination'

const TableView = ({ data, fields }) => {
  const [sortedData, setSortedData] = useState([...data])
  const [doSort, setDoSort] = useState(true)
  const [sortBy, setSortBy] = useState({
    field: fields[0].name,
    descend: false
  })
  const [searchString, setSearchString] = useState('')
  const [currentId, setCurrentId] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (!doSort && sortedData.length === data.length) {
      return
    }
    setDoSort(false)
    setSortedData(
      data
        .filter(item =>
          Object.values(item)
            .join('\n')
            .includes(searchString)
        )
        .sort(dynamicSort(sortBy.field, sortBy.descend))
    )
  }, [
    data,
    sortedData.length,
    doSort,
    searchString,
    sortBy.field,
    sortBy.descend
  ])

  const handleHeaderClick = evt => {
    const col = evt.target.getAttribute('data-id')
    setSortBy({
      field: col,
      descend: col === sortBy.field ? !sortBy.descend : false
    })
    setDoSort(true)
  }

  const filterItems = text => {
    setSearchString(text)
    setDoSort(true)
  }

  const handleRowClick = e => {
    setCurrentId(e.dataset.id)
  }

  const switchPage = e => {
    setCurrentPage(Number(e.target.value))
  }

  return (
    <>
      <SearchForm handleSearch={filterItems} />
      <Pagination
        total={sortedData.length}
        limit={limit}
        currentPage={currentPage}
        handleClick={switchPage}
      />

      <table className='table table-sm datatable'>
        <thead className='thead-light'>
          <tr onClick={handleHeaderClick}>
            {Object.values(fields).map(field => (
              <TableHeader
                value={field.name}
                key={field.name}
                order={sortBy.field}
                descend={sortBy.descend}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData !== null &&
            sortedData
              .slice((currentPage - 1) * limit, currentPage * limit)
              .map(item => (
                <TableRow
                  item={item}
                  key={item[primaryKey]}
                  handleClick={handleRowClick}
                  fields={fields}
                  currentId={currentId}
                />
              ))}
        </tbody>
      </table>

      <ShowInfo currentId={currentId} data={sortedData} />
    </>
  )
}

export default TableView
