import { ReactNode } from 'react'

import StyleProps from '@/utils/types/StyleProps'

import styles from './index.module.css'

type Props = StyleProps & {
  tag?: 'div' | 'ul'
  shadow?: 'none' | 'small' | 'medium' | 'large'
  borderRadius?: '0' | '8' | '12' | '16' | '24' | '32'
  children: ReactNode
}

export function Box({
  tag = 'div',
  shadow = 'none',
  borderRadius = '0',
  className,
  children,
}: Props) {
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={`
        ${styles[`shadow--${shadow}`]} 
        ${styles[`borderRadius--${borderRadius}`]} 
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}
