/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'

export interface ButtonCircleProps {
  backgroundColor?: string
  color?: string
  icon?: React.ReactNode | React.Component
  size?: 'small' | 'medium' | 'large'
  active?: boolean
  onClick?: () => void
  name?: string
}

export const ButtonCircleIcon: React.FC<ButtonCircleProps> = ({ 
  backgroundColor, 
  color, 
  size,
  icon,
  active = false,
  name,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      icon={icon}
      size={size}
      active={active}
      {...props}
    >
      {icon ? icon : <img src={name} alt='' />}
    </Container>
  )
}