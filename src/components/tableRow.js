import React from 'react'
import { primaryKey } from './../utils'
import classNames from 'classnames'

const TableRow = ({ item, handleClick, fields, currentId }) => {
  const rowClasses = classNames({
    active: item[primaryKey] === currentId
  })
  return (
    <tr
      className={rowClasses}
      onClick={e => handleClick(e.currentTarget)}
      data-id={item[primaryKey]}
    >
      {Object.values(fields).map(field => (
        <td key={field.name}> {item[field.name]} </td>
      ))}
    </tr>
  )
}

export default TableRow
