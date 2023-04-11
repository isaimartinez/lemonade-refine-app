import { MainContainerProps } from 'interfaces/common'
import { MainContainer as MainContainerBg} from 'assets'

const MainContainer = ({children, className}: MainContainerProps) => {
  return (
    // <div>
    <div className={' h-[42rem] bg-no-repeat bg-contain bg-center '+className} style={{backgroundImage: `url(${MainContainerBg})`}}>
      {children}
    </div>
  )
}

export default MainContainer