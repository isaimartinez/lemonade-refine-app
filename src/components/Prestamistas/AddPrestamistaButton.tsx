import React from 'react'
import { AddPrestamistaContainer } from 'assets'
import { AddPrestamistaButtonProps } from 'interfaces/common'

const AddPrestamistaButton = ({onClick, className}: AddPrestamistaButtonProps) => {
  return (
    <button type='button' className={'flex flex-row items-center justify-center bg-no-repeat bg-contain bg-center '+ className} 
      style={{backgroundImage: `url(${AddPrestamistaContainer})`}}
      onClick={onClick}
    >
    </button>
  )
}

export default AddPrestamistaButton