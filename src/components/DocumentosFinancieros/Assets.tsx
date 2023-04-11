import React from 'react'
import ListItem from './ListItem'

const Assets = () => {
  return (
    <div className='flex flex-col w-full h-full px-3 py-5'>
      <p className='text-2xl font-bold'>Assets</p>
      <div className='flex flex-col px-3 gap-1 '>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
        <ListItem label='Cash' price='500'/>
      </div>
      <div className='flex flex-col px-3 mt-2'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <p className='font-bold'>Total Assets</p>
          </div>
          <div>
            <p className='font-bold'>$1840</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Assets