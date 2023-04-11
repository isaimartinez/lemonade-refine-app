import { LongWoodButtonContainer } from 'assets'
import { LongWoodButtonProps } from 'interfaces/common'

const LongWoodButton = ({label, className, onClick}: LongWoodButtonProps) => {
  return (
    <button type='button' className={'flex flex-row items-center justify-center bg-no-repeat bg-contain bg-center '+ className} 
      style={{backgroundImage: `url(${LongWoodButtonContainer})`}}
      onClick={onClick}
    >
      <p className='text-white text-xl font-bold'>{label}</p>
    </button>
  )
}

export default LongWoodButton