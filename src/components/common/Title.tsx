import React from 'react'
import { TitleContainer } from 'assets'
import { TitleProps } from 'interfaces/common'

const Title = ({title}:TitleProps) => {
  return (
    <div className='flex items-center justify-center bg-no-repeat bg-cover bg-center h-40 w-72' style={{backgroundImage: `url(${TitleContainer})`}}>
      <p className='text-white text-5xl'>{title}</p>
    </div>
  )
}

export default Title