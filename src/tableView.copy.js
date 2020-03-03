import React, { useState, useEffect } from 'react'
import TableRow from './tableRow'
import { dynamicSort } from '../utils'
import TableHeader from './tableHeader'
import SearchForm from './searchForm'
import { primaryKey } from './../utils'
// import ShowInfo from './showInfo'
// import Pagination from './pagination'

const TableView = ({ data, fields }) => {
  const [sortedData, setSortedData] = useState(null)
  const [doSort, setDoSort] = useState(true)
  const [sortBy, setSortBy] = useState({
    field: fields[0].name,
    descend: false
  })
  const [searchString, setSearchString] = useState('')
  const [currentRecord, setCurrentRecord] = useState(null)

  useEffect(() => {
    if (!sortedData || sortedData.length !== data.length || doSort) {
      console.log('sorting')
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
    }
  }, [data, sortedData, doSort, searchString, sortBy.field, sortBy.descend])

  const handleHeaderClick = evt => {
    // const col = evt.target.getAttribute('data-id')
    // setSortBy({
    //   field: col,
    //   descend: col === sortBy.field ? !sortBy.descend : false
    // })
    // setDoSort(true)
  }

  const filterItems = search => {
    // setSearchString({ search })
    // setDoSort(true)
  }

  const handleRowClick = e => {
    // setCurrentRecord(e.dataset.id)
  }

  return (
    <>
      <SearchForm handleSearch={filterItems} />

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
            sortedData.map(item => (
              <TableRow
                item={item}
                key={item[primaryKey]}
                handleClick={handleRowClick}
                fields={fields}
              />
            ))}
        </tbody>
      </table>

      {/* <ShowInfo person={currentPerson} /> */}
    </>
  )
}

export default TableView
