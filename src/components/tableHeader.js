import React from 'react'
import classNames from 'classnames'

const TableHeader = ({ value, order, descend }) => {
  const thClasses = classNames({
    active: value === order,
    descend: value === order && descend
  })
  return (
    <th data-id={value} className={thClasses}>
      {value}
    </th>
  )
}

export default TableHeader
