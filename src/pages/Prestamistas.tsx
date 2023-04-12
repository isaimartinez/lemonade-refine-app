import React from 'react'
import {Stars, Title, AddPrestamistaButton, ModalPrestamista} from 'components'
import {bg} from 'assets'
import { useSelector, useDispatch } from 'react-redux'
import { setIsModalAddPrestamistaOpen } from 'redux/reducers/ViewSlice'
import type { RootState } from 'redux/store'

const Prestamistas = () => {
  const {isModalAddPrestamistaOpen} = useSelector((state: RootState) => state.view)
  const dispatch = useDispatch()

  const handleOpenModalPrestamista = () => {
    dispatch(setIsModalAddPrestamistaOpen(true))
  }

  return (
    <div className='flex flex-col h-full' style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}>
      <div className='flex flex-row p-5 items-center justify-center'>
        <div className='flex basis-1/3 flex-col'>
          <p className='text-white text-xl'>1 de Marzo 2023</p>
          <p className='text-white text-xl'>Inventario: 20u</p>
        </div>
        <div className='flex basis-1/3  items-center justify-center'>
          <Title title='Prestamistas'/>
        </div>
        <div className='flex basis-1/3 items-center justify-end'>
          <Stars />
        </div>
      </div>  

      <div className='flex relative flex-col items-center'>
        <AddPrestamistaButton className='h-40 w-64' onClick={handleOpenModalPrestamista}/>
        <AddPrestamistaButton className='h-40 w-64' onClick={handleOpenModalPrestamista}/>
        <AddPrestamistaButton className='h-40 w-64' onClick={handleOpenModalPrestamista}/>
      </div>

      <ModalPrestamista />
    </div>
  )
}

export default Prestamistas