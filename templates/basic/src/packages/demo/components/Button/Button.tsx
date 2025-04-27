import './button.css'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const Button = ({ size = 'medium', label, ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      className={['button', `button--${size}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
