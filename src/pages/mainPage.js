import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  const [rows, setRows] = useState(32)
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-sm-4 offset-sm-4'>
          <label htmlFor='inputRows'>Rows to load</label>
          <input
            type='number'
            min='1'
            max='1000'
            required
            value={rows}
            onChange={e => setRows(e.target.value)}
            className='form-control'
            id='inputRows'
          />
          <Link to={`/view/${rows}`} className='btn btn-primary mt-3'>
            Load & Show
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage
