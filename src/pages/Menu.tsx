import React from 'react'
import {Stars, Title, Button} from 'components'
import {bg} from 'assets'

const Menu = () => {
  return (
    <div className='flex flex-col  h-full' style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}>

      <div className='flex flex-row p-5 items-center justify-center'>
        <div className='flex basis-1/3 flex-col'>
          <p className='text-white text-xl'>1 de Marzo 2023</p>
          <p className='text-white text-xl'>Inventario: 20u</p>
        </div>
        <div className='flex basis-1/3  items-center justify-center'>
          <Title title='Menú'/>
        </div>
        <div className='flex basis-1/3 items-center justify-end'>
          <Stars />
        </div>
      </div>


      <div className='flex flex-col m-5 p-5 bg-slate-100 shadow-md rounded'>
        <p className='text-slate-800 text-3xl'>Proyección de Ventas Semana</p>
        <div className='flex flex-col items-center justify-center mt-3 gap-2'>
          <p className='text-slate-800 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at officia ullam blanditiis harum obcaecati tempora corporis?</p>
          <p className='text-slate-800 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at officia ullam blanditiis harum obcaecati tempora corporis?</p>
          <p className='text-slate-800 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at officia ullam blanditiis harum obcaecati tempora corporis?</p>
        </div>
      </div>
      <div className='flex flex-row mt-16 justify-around'>
        <div className='flex basis1/2 bg-yellow-200'>

        </div>
        <div className='flex flex-row basis1/2 w-32'>
          <Button label='AVANZAR' className='h-28'/>
        </div>
      </div>
    </div>
  )
}

export default Menu