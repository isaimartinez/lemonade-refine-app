import React from 'react'
import { ListItemProps } from 'interfaces/common'

const ListItem = ({label, price}: ListItemProps) => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <p>{label}</p>
      </div>
      <div>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default ListItem