import { ComponentPropsWithoutRef, FC } from 'react'

import s from './card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card: FC<CardProps> = ({ className, ...restProps }) => {
  return <div className={`${s.root} ${className}`} {...restProps}></div>
}
