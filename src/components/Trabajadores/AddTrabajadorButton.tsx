import React from 'react'
import { AddTrabajadorContainer } from 'assets'
import { AddPrestamistaButtonProps } from 'interfaces/common'

const AddTrabajadorButton = ({onClick, className}: AddPrestamistaButtonProps) => {
  return (
    <button type='button' className={'flex flex-row items-center justify-center bg-no-repeat bg-contain bg-center '+ className} 
      style={{backgroundImage: `url(${AddTrabajadorContainer})`}}
      onClick={onClick}
    >
    </button>
  )
}

export default AddTrabajadorButton