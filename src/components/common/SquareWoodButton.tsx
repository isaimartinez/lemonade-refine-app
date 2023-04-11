import React from 'react'
import { SquareWoodButtonContainer } from 'assets'
import { SquareWoodButtonProps } from 'interfaces/common'

const SquareWoodButton = ({icon, className, iconClassName, onClick}: SquareWoodButtonProps) => {
  return (
    <button type='button' className={'flex flex-row items-center justify-center bg-no-repeat bg-contain bg-center '+ className} style={{backgroundImage: `url(${SquareWoodButtonContainer})`}}
      onClick={onClick}
    >
      <img src={icon} alt='' className={iconClassName}/>
    </button>
  )
}

export default SquareWoodButton