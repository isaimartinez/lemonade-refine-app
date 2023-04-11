import React from 'react'
import { TiendaItemProps } from 'interfaces/common'

const TiendaItem = ({bgImage, price}: TiendaItemProps) => {
  return (
    <div className=' w-full h-full bg-no-repeat bg-contain bg-center'
      style={{backgroundImage: `url(${bgImage})`}}
    >
    </div>
  )
}

export default TiendaItem