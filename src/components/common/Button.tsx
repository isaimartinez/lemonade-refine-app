import React from 'react'
import { ButtonContainer } from 'assets'
import { ButtonProps } from 'interfaces/common'

const Button = ({label, icon, iconClassName, className, onClick}: ButtonProps) => {
  return (
    <button type='button' className={'flex w-full flex-row items-center justify-center bg-no-repeat bg-contain bg-center text-white '+className} style={{backgroundImage: `url(${ButtonContainer})`}}
      onClick={onClick}
    >
      {
        icon && <img src={icon} alt='' className={iconClassName}/>
      }
      {label}
    </button>
  )
}

export default Button