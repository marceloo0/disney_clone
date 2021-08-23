import { Container } from './styles'

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Is this the principal call to action on the page?
   */
  outlined?: boolean
  /**
   * How large should the button be?
   */
  size?: 'medium' | 'large'
  /**
   * Button contents
   */
  title?: string
  /**
   * What text color to use
   */
  color: string
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  outlined = false,
  size,
  backgroundColor,
  color,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      size={size}
      outlined={outlined}
      color={color}
    >
      {title}
    </Container>
  )
}