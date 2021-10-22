import { CSSProperties, ReactNode } from 'react'

import StyleProps from '@/utils/types/StyleProps'

import styles from './Wrapper.module.css'

type Props = StyleProps & {
  children: ReactNode
}

type WrapperProps = Props & {
  padding?: 'tiny' | 'small' | 'medium' | 'large'
}

type RowProps = Props & {
  reversed?: boolean
}

export function Wrapper({
  padding = 'large',
  className,
  style,
  children,
}: WrapperProps) {
  return (
    <div
      className={`${styles[`padding--${padding}`]} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function Column({ className, style, children }: Props) {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  )
}

export function Row({
  reversed = false,
  className,
  style,
  children,
}: RowProps) {
  return (
    <div
      className={`${className}`}
      style={{
        display: 'flex',
        flexDirection: `row${reversed ? '-reverse' : ''}`,
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  )
}
