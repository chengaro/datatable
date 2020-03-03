import React from 'react'

const Error = ({ error }) => {
  return (
    <>
      <p>Something went wrong while loading data</p>
      <p>Error: {error}</p>
    </>
  )
}

export default Error
