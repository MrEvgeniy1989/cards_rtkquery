import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import { Check } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  position,
  disabled,
  required,
  label,
  id,
  className,
}) => {
  return (
    <div className={`${s.container} ${className || ''}`}>
      <div
        className={`${s.buttonWrapper} ${disabled ? s.disabled : ''} ${
          position === 'left' ? s.left : ''
        }`}
      >
        <CheckboxRadix.Root
          className={s.root}
          checked={checked}
          onCheckedChange={onChange}
          disabled={disabled}
          required={required}
          id={id}
        >
          {checked && (
            <CheckboxRadix.Indicator className={s.indicator} forceMount>
              {disabled ? <Check color={'#808080'} /> : <Check />}
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
      <LabelRadix.Root className={`${s.label} ${disabled ? s.disabled : ''}`} htmlFor={id} asChild>
        <Typography
          variant="body2"
          className={`${s.label} ${disabled ? s.disabled : ''}`}
          as={'label'}
        >
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>

    /*<div className={`${s.container} ${className || ''}`}>
                                              <LabelRadix.Root asChild>
                                                <Typography
                                                  variant="body2"
                                                  className={`${s.label} ${disabled ? s.disabled : ''}`}
                                                  as={'label'}
                                                >
                                                  <div
                                                    className={`${s.buttonWrapper} ${disabled ? s.disabled : ''} ${
                                                      position === 'left' ? s.left : ''
                                                    }`}
                                                  >
                                                    <CheckboxRadix.Root
                                                      className={s.root}
                                                      checked={checked}
                                                      onCheckedChange={onChange}
                                                      disabled={disabled}
                                                      required={required}
                                                      id={id}
                                                    >
                                                      {checked && (
                                                        <CheckboxRadix.Indicator className={s.indicator} forceMount>
                                                          <Check />
                                                        </CheckboxRadix.Indicator>
                                                      )}
                                                    </CheckboxRadix.Root>
                                                  </div>
                                                  {label}
                                                </Typography>
                                              </LabelRadix.Root>
                                            </div>*/
  )
}
