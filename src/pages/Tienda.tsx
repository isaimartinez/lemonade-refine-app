import React from 'react'
import {Stars, Title, Button, MainContainer, TiendaItem, SquareWoodButton} from 'components'
import {bg, SugarIcon, CupsIcon, LemonadeIcon, IceIcon, BolsaHielos, Hielera, MaquinaHielo, MiniRefri, RefriGrande, Prox} from 'assets'

const Tienda = () => {
  return (
    <div className='flex flex-col h-full' style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}>
      <div className='flex flex-row p-5 items-center justify-center'>
        <div className='flex basis-1/3 flex-col'>
          <p className='text-white text-xl'>1 de Marzo 2023</p>
          <p className='text-white text-xl'>Inventario: 20u</p>
        </div>
        <div className='flex basis-1/3  items-center justify-center'>
          <Title title='Tienda'/>
        </div>
        <div className='flex basis-1/3 items-center justify-end'>
          <Stars />
        </div>
      </div>

      <div className='flex relative flex-col items-center'>
        <div className='flex flex-row absolute top-0 right-52'>
          <SquareWoodButton icon={SugarIcon} className="w-20 h-20" iconClassName="h-10 w-10"/>
          <SquareWoodButton icon={CupsIcon} className="w-20 h-20" iconClassName="h-10 w-10"/>
          <SquareWoodButton icon={LemonadeIcon} className="w-20 h-20" iconClassName="h-10 w-10"/>
          <SquareWoodButton icon={IceIcon} className="w-20 h-20" iconClassName="h-10 w-10"/>
        </div>
        <MainContainer className='grid grid-cols-3 p-16 px-24 gap-4 w-11/12  justify-center'>
          <div className='flex items-center justify-center'><TiendaItem bgImage={BolsaHielos} /></div>
          <div className='flex items-center justify-center'><TiendaItem bgImage={MiniRefri}/></div>
          <div className='flex items-center justify-center'><TiendaItem bgImage={RefriGrande}/></div>
          <div className='flex items-center justify-center'><TiendaItem bgImage={Hielera}/></div>
          <div className='flex items-center justify-center'><TiendaItem bgImage={MaquinaHielo}/></div>
          <div className='flex items-center justify-center'><TiendaItem bgImage={Prox}/></div>
        </MainContainer>
      </div>

    </div>
  )
}

export default Tienda