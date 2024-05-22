import React from 'react'
import Button from './Button'

const Card = ({children}) => {
  return (
    <div className='border backdrop-blur-sm bg-white/10 rounded-md px-5 py-10 relative'>
        {children}
    </div>
  )
}

export default Card