import Link from 'next/link'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react'

import styles from './index.module.css'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  outline?: boolean
  color?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

type ButtonLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string
  outline?: boolean
  color?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

export function Button({
  outline = false,
  color = 'primary',
  children,
  size = 'large',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`
        ${styles[`${color}${outline ? '--outline' : ''}`]}
        ${styles[size]} 
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  outline = false,
  color = 'primary',
  children,
  size = 'large',
  href,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
          ${styles[`${color}${outline ? '--outline' : ''}`]}
          ${styles[size]} 
          ${className}
        `}
      >
        {children}
      </a>
    </Link>
  )
}
