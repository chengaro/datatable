import React from 'react'
import { objToArray, primaryKey } from '../utils'

const ShowInfo = ({ currentId, data }) => {
  if (!currentId) {
    return <></>
  }
  const currentItem = data.find(item => item[primaryKey] === currentId)
  if (currentItem === undefined) {
    return <></>
  }
  const values = objToArray(currentItem)
  return (
    <div className='text-secondary'>
      {values.map(v => (
        <p key={v.key}>
          {v.key}: <span className='text-primary'>{v.value}</span>
        </p>
      ))}
    </div>
  )
}

export default ShowInfo
