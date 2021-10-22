import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './index.module.css'

type Props = {
  href: string
  children: ReactNode
}

export function FooterLink({ href, children }: Props) {
  return (
    <li className={styles.link}>
      <Link href={href}>
        <a>
          <strong>{children}</strong>
        </a>
      </Link>
    </li>
  )
}
