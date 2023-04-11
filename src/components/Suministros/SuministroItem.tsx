import React from 'react'
import PriceTag from './PriceTag'
import SquareButton from 'components/common/SquareButton'
import {Button} from 'components'
import { SuministroItemProps } from 'interfaces/common'

const SuministroItem = ({icon}:SuministroItemProps) => {
  return (
    <div className='flex w-fit flex-col '>
      <div className='flex flex-row items-center justify-center'>
        <PriceTag price='15.00'/>
      </div>
      <div className='flex items-center flex-row'>
        <SquareButton label='-'/>
        <Button label='1 kg' className='h-24 w-40' icon={icon} iconClassName={'h-10'}/>
        <SquareButton label='+'/>
      </div>
    </div>
  )
}

export default SuministroItem