export interface StarsProps {
  n?: number,
}

export interface TitleProps {
  title?: string,
}

export interface ButtonProps {
  label?: string,
  className?: string,
  // icon?: ReactNode,
  icon?: string,
  iconClassName?: string,
  onClick?: () => void
}

export interface SquareWoodButtonProps {
  icon?: string,
  className?: string,
  iconClassName?: string,
  onClick?: () => void
}

export interface LongWoodButtonProps {
  label?: string,
  className?: string,
  onClick?: () => void
}

export interface MainContainerProps {
  children?: React.ReactNode,
  className?: string
}

export interface PriceTagProps {
  price?: string,
}

export interface PriceTagProps {
  label?: string,
  onClick?: () => void
}

export interface SuministroItemProps {
  icon?: string,
}

export interface TiendaItemProps {
  bgImage?: string,
  price?: string
}

export interface ListItemProps {
  label?: string,
  price?: string
}