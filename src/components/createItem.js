import React, { useState } from 'react'
import { changeProperty } from '../utils'

const CreateItem = ({ insertIntoData, fields }) => {
  const emptyItem = {}
  Object.values(fields).map(field => (emptyItem[field.name] = ''))

  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState({ ...emptyItem })

  const showModal = () => {
    setIsOpen(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    insertIntoData({ ...item })
    closeModal()
  }

  const closeModal = () => {
    setIsOpen(false)
    setItem({ ...emptyItem })
  }

  return (
    <>
      <button className='btn btn-primary' onClick={showModal}>
        Add new record
      </button>

      {isOpen && (
        <div className='create-item'>
          <div className='create-item__body'>
            <h3>New item</h3>
            <form onSubmit={handleSubmit}>
              {Object.values(fields).map(field => (
                <div className='form-group' key={field.name}>
                  <input
                    type={field.type}
                    placeholder={field.name}
                    value={item[field.name]}
                    required={field.isRequired}
                    onChange={e =>
                      setItem(changeProperty(item, field.name, e.target.value))
                    }
                  />
                </div>
              ))}

              <button type='submit' className='btn btn-primary mr-2'>
                Save
              </button>
              <button className='btn btn-secondary' onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateItem
