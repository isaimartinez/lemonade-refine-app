import React from 'react'
import {Stars, Title, AddTrabajadorButton, ModalTrabajador} from 'components'
import {bg} from 'assets'
import { useSelector, useDispatch } from 'react-redux'
import { setIsModalAddTrabajadorOpen } from 'redux/reducers/ViewSlice'
import type { RootState } from 'redux/store'

const Trabajadores = () => {
  const {isModalAddPrestamistaOpen} = useSelector((state: RootState) => state.view)
  const dispatch = useDispatch()

  const handleOpenModalPrestamista = () => {
    dispatch(setIsModalAddTrabajadorOpen(true))
  }
  return (
    <div className='flex flex-col h-full' style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}>
      <div className='flex flex-row p-5 items-center justify-center'>
        <div className='flex basis-1/3 flex-col'>
          <p className='text-white text-xl'>1 de Marzo 2023</p>
          <p className='text-white text-xl'>Inventario: 20u</p>
        </div>
        <div className='flex basis-1/3  items-center justify-center'>
          <Title title='Trabajadores'/>
        </div>
        <div className='flex basis-1/3 items-center justify-end'>
          <Stars />
        </div>
      </div>  

      <div className='grid grid-cols-2 gap-4 relative flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
          <AddTrabajadorButton className='h-40 w-64' onClick={handleOpenModalPrestamista}/>
        </div>
        <div className='flex items-center justify-center'>
          <AddTrabajadorButton className='h-40 w-64' onClick={handleOpenModalPrestamista}/>
        </div>
        <div className='flex items-center justify-center'>
          <AddTrabajadorButton className='h-40 w-64' onClick={handleOpenModalPrestamista}/>
        </div>
      </div>

      <ModalTrabajador />
    </div>
  )
}

export default Trabajadores