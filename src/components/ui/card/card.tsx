import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = ({ className, ...restProps }: CardProps) => {
  return <div className={`${s.root} ${className}`} {...restProps}></div>
}
