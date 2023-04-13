import React from 'react'
import { TitleContainer, MenuTitle } from 'assets'
import { TitleProps } from 'interfaces/common'

const Title = ({title}:TitleProps) => {

  if(title == "Menú") {
    return (
      <div className='flex items-center justify-center bg-no-repeat bg-cover bg-center h-40 w-72' style={{backgroundImage: `url(${MenuTitle})`}}>
        {/* <p className='text-white text-5xl text-center	'>{title}</p> */}
      </div>
    )

  }

  return (
    <div className='flex items-center justify-center bg-no-repeat bg-cover bg-center h-40 w-72' style={{backgroundImage: `url(${TitleContainer})`}}>
      <p className='text-white text-5xl text-center	'>{title}</p>
    </div>
  )
}

export default Title