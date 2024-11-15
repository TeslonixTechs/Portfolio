import React from 'react'

const Images = ({src, alt, height, width}) => {
  return (
    <div className={`h-${height} w-${width} rounded-full`}>
        <img className='h-full w-full' src={src} alt={alt} />
    </div>
  )
}

export default Images