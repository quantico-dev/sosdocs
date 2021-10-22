import { BsTelephone } from 'react-icons/bs'

import { useTranslation } from '@/utils/contexts/TranslationContext'

import styles from './index.module.css'

export function Phone() {
  const { language } = useTranslation()
  const phone = {
    'en-us': {
      label: 'Sales',
      number: '+55 0800 591 1478',
      link: 'tel:08009421991',
    },
    'es-py': {
      label: 'Ventas',
      number: '+55 0800 591 1478',
      link: 'tel:08009421991',
    },
    'pt-br': {
      label: 'Vendas',
      number: '+55 0800 591 1478',
      link: 'tel:08009421991',
    },
  }
  return (
    <a className={styles.wrapper} href={`tel:`}>
      <BsTelephone />
      <span className={styles.label}>{phone[language].label}</span>
      <div className={styles.number}>{phone[language].number}</div>
    </a>
  )
}
