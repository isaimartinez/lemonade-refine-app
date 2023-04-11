import React from 'react'
import { PriceTagContainer, DollarSign } from 'assets'
import {PriceTagProps} from 'interfaces/common'

const PriceTag = ({price}: PriceTagProps) => {
  return (
    <div className='flex flex-row h-20 w-40 items-center justify-center gap-2 bg-no-repeat bg-contain bg-center'
      style={{backgroundImage: `url(${PriceTagContainer})`}}
    >
      <img src={DollarSign} alt="" className='w-10'/>
      <p className='font-bold	text-lg'>{price}</p>
    </div>
  )
}

export default PriceTag