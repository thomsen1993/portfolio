import React from 'react'

const Card = ({children}) => {
  return (
    <div className='border bg-white rounded-md px-5 py-10 mb-5 relative'>
        {children}
    </div>
  )
}

export default Card