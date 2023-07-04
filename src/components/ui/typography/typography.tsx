import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type TypographyVariants =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'
  | 'error'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: TypographyVariants
  className?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) => {
  const { variant = 'body1', className, as: Component = 'p', children, ...restProps } = props

  return (
    <Component className={`${s[variant]} ${className ?? ''}`} {...restProps}>
      {children}
    </Component>
  )
}
