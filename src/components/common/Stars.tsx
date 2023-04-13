import React from 'react'
import { Star, StarBorder } from '@mui/icons-material'
import {StarsProps} from 'interfaces/common'
import { ThreeStars } from 'assets'

const Stars = ({n}: StarsProps) => {
  return (
    <div className='bg-no-repeat bg-contain h-14 w-32 bg-center'

    style={{backgroundImage: `url(${ThreeStars})`}}
    >
      {/* <Star color='warning'/>
      <Star color='warning'/>
      <Star color='warning'/>
      <StarBorder color='warning'/>
      <StarBorder color='warning'/> */}
    </div>
  )
}

export default Stars