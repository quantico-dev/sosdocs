import { ReactNode } from 'react'

import { Brand } from '../../atoms/Brand'
import styles from './index.module.css'

type Props = {}

export function Preload({}: Props) {
  return (
    <div className={styles.box}>
      <div>
        <Brand animation />
      </div>
    </div>
  )
}
