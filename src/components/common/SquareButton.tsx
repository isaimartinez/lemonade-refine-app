import React from 'react'
import { SquareButtonContainer } from 'assets'
import { PriceTagProps } from 'interfaces/common'

const SquareButton = ({label, onClick}: PriceTagProps) => {
  return (
    <button type='button' className='flex text-white items-center w-12 h-12 justify-center bg-no-repeat bg-contain bg-center'
      style={{backgroundImage: `url(${SquareButtonContainer})`}}
    >
      {label}
    </button>
  )
}

export default SquareButton