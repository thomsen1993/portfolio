import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-slate-400 rounded-md hover:shadow-md hover:-translate-y-1 transition-all px-5 py-10 relative'>
        {children}
    </div>
  )
}

export default Card