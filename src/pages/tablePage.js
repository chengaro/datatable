import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../components/loading'
import Error from '../components/error'
import TableView from '../components/tableView'
import CreateItem from '../components/createItem'
import { baseUrl, tableFields } from '../utils'

const TablePage = props => {
  const rows = props.match.params.rows
  const apiUrl = baseUrl + `&rows=${rows}`

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isLoading || data) {
      return
    }

    axios(apiUrl)
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.response.data)
        setIsLoading(false)
      })
  }, [apiUrl, data, isLoading])

  const handleInsert = item => {
    setData(data.concat([{ ...item }]))
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          {isLoading && <Loading />}
          {error && <Error error={error} />}
          {!isLoading && data && (
            <>
              <h3>The Table</h3>

              <div className='mb-2'>
                <Link to='/' className='btn btn-secondary mr-2'>
                  Home
                </Link>
                <CreateItem
                  insertIntoData={handleInsert}
                  fields={tableFields}
                />
              </div>

              <TableView data={data} fields={tableFields} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TablePage
