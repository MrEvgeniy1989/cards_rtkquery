import { ComponentProps, ComponentPropsWithoutRef, FC, useState } from 'react'

import { Eye, VisibilityOff } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './text-field.module.scss'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<TextFieldProps> = ({
  className,
  errorMessage,
  placeholder,
  type,
  containerProps,
  labelProps,
  label,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const isShowPasswordButtonShown = type === 'password'

  const finalType = getFinalType(type, showPassword)

  return (
    <div className={`${s.root} ${containerProps?.className}`}>
      {label && (
        <Typography variant="body2" as="label" className={`${s.label} ${labelProps?.className}`}>
          {label}
        </Typography>
      )}
      <div className={s.fieldContainer}>
        <input
          className={`${s.field} ${!!errorMessage && s.error} ${className}`}
          placeholder={placeholder}
          type={finalType}
          {...restProps}
        />
        {isShowPasswordButtonShown && (
          <button
            className={s.showPassword}
            type={'button'}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <VisibilityOff /> : <Eye />}
          </button>
        )}
      </div>

      <Typography variant="error" className={s.error}>
        {errorMessage}
      </Typography>
    </div>
  )
}

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
