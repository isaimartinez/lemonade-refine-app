import React from 'react'
import {Stars, Title, MainContainer, Assets, Liabilities, Equity, LongWoodButton} from 'components'
import {bg} from 'assets'


const DocumentosFinancieros = () => {
  return (
    <div className='flex flex-col h-full' style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}>
      <div className='flex flex-row p-5 items-center justify-center'>
        <div className='flex basis-1/3 flex-col'>
          <p className='text-white text-xl'>1 de Marzo 2023</p>
          <p className='text-white text-xl'>Inventario: 20u</p>
        </div>
        <div className='flex basis-1/3  items-center justify-center'>
          <Title title='Documentos Financieros'/>
        </div>
        <div className='flex basis-1/3 items-center justify-end'>
          <Stars />
        </div>
      </div>  

      <div className='flex relative flex-col items-center'>
        <div className='flex flex-row absolute top-0 right-52'>
          <LongWoodButton label='Income Statement' className='w-52 h-20'/>
          <LongWoodButton label='Balance Sheet' className='w-52 h-20'/>
        </div>
        <MainContainer className='grid grid-cols-1 p-16 px-24 gap-4 w-11/12  justify-center'>
          <div className='flex flex-row gap-2 bg-white/70 rounded  my-2 mx-14'>
            <div className='flex basis-1/3'><Assets /></div>
            <div className='flex basis-1/3'><Liabilities/></div>
            <div className='flex basis-1/3'><Equity /></div>
          </div>
        </MainContainer>
      </div>


    </div>
  )
}

export default DocumentosFinancieros