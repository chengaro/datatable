import React, { useState } from 'react'

const SearchForm = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    handleSearch(searchInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row align-items-center mb-2'>
        <div className='col-auto'>
          <input
            className='form-control'
            type='text'
            placeholder='Search Substring'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-warning'>
            Filter
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
