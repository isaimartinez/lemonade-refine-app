import React from 'react'
import { Star, StarBorder } from '@mui/icons-material'
import {StarsProps} from 'interfaces/common'

const Stars = ({n}: StarsProps) => {
  return (
    <div className='flex flex-row'>
      <Star color='warning'/>
      <Star color='warning'/>
      <Star color='warning'/>
      <StarBorder color='warning'/>
      <StarBorder color='warning'/>
    </div>
  )
}

export default Stars