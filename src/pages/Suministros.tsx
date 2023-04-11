import React from 'react'
import {Stars, Title, Button, MainContainer, SuministroItem} from 'components'
import {bg, SugarIcon, CupsIcon, LemonadeIcon, IceIcon} from 'assets'

const Suministros = () => {
  return (
    <div className='flex flex-col h-full' style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}>
      <div className='flex flex-row p-5 items-center justify-center'>
        <div className='flex basis-1/3 flex-col'>
          <p className='text-white text-xl'>1 de Marzo 2023</p>
          <p className='text-white text-xl'>Inventario: 20u</p>
        </div>
        <div className='flex basis-1/3  items-center justify-center'>
          <Title title='Suministros'/>
        </div>
        <div className='flex basis-1/3 items-center justify-end'>
          <Stars />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <MainContainer className='flex w-11/12 flex-col  justify-center'>
          <div className='flex items-center basis-1/2'>
            <div className='flex flex-col items-center justify-center basis-1/2'>
              <SuministroItem icon={SugarIcon}/>
            </div>
            <div className='flex flex-col basis-1/2 items-center justify-center'>
              <SuministroItem icon={CupsIcon}/>
            </div>
          </div>
          <div className='flex items-center basis-1/2 '>
            <div className='flex flex-col items-center justify-center basis-1/2'>
              <SuministroItem icon={LemonadeIcon}/>
            </div>
            <div className='flex flex-col basis-1/2 items-center justify-center'>
              <SuministroItem icon={IceIcon}/>
            </div>
          </div>
        </MainContainer>
      </div>
  </div>
  )
}

export default Suministros