import { ReactNode } from 'react'

import StyleProps from '@/utils/types/StyleProps'

import textStyles from './Text.module.css'
import titleStyles from './Title.module.css'

type TitleProps = StyleProps & {
  children: ReactNode
  transform?: 'normal' | 'uppercase' | 'capitalize' | 'lowercase'
  decorator?: boolean
  color?: 'light' | 'dark'
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type TextProps = StyleProps & {
  children: ReactNode
  color?: 'light' | 'medium' | 'dark'
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
}

export function Title({
  decorator = false,
  transform = 'normal',
  color = 'dark',
  size = '4',
  tag = 'h2',
  className,
  style,
  children,
}: TitleProps) {
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={`${titleStyles[color]} ${
        decorator && titleStyles.decorator
      } fontSize--${size} textTransform--${transform} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}

export function Text({
  color = 'dark',
  size = '1',
  className,
  style,
  children,
}: TextProps) {
  return (
    <p
      className={`${textStyles[color]} fontSize--${size} ${textStyles[size]} ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}
