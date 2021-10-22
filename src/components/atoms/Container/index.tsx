import { CSSProperties, ReactNode } from 'react'

import styles from './index.module.css'

type Props = {
  tag?: 'section' | 'footer' | 'header'
  style?: CSSProperties
  background?:
    | 'white'
    | 'black'
    | 'dark100'
    | 'dark200'
    | 'dark300'
    | 'dark400'
    | 'light100'
    | 'light200'
    | 'light300'
    | 'light400'
    | 'primary100'
    | 'primary200'
    | 'primary300'
    | 'primary400'
    | 'primary500'
    | 'primary600'
    | 'primary700'
    | 'primary800'
    | 'primary900'
    | 'secondary100'
    | 'secondary200'
    | 'secondary300'
    | 'secondary400'
    | 'secondary500'
    | 'secondary600'
    | 'secondary700'
    | 'secondary800'
    | 'secondary900'
    | 'gradient100'

  className?: string
  children: ReactNode
}

export function Container({
  tag = 'section',
  style,
  background = 'white',
  className,
  children,
}: Props) {
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={`${styles[`background--${background}`]} ${className}`}
      style={style}
    >
      <div>{children}</div>
    </Tag>
  )
}
