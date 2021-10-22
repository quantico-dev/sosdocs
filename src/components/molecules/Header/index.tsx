import Image from 'next/image'
import { useState } from 'react'
import { BsGlobe2 } from 'react-icons/bs'

import flagBR from '@/public/images/flags/brazil.png'
import flagPY from '@/public/images/flags/paraguay.png'
import flagUS from '@/public/images/flags/united-states.png'

import { useTranslation } from '@/utils/contexts/TranslationContext'

import { Container } from '@/components/atoms/Container'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/atoms/Dropdown'
import { Wrapper } from '@/components/atoms/Grid'
import { Phone } from '@/components/atoms/Phone'

import styles from './index.module.css'

export function Header() {
  const { language, setLanguage } = useTranslation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const label = {
    'en-us': 'English (United States)',
    'es-py': 'Español (Paraguay)',
    'pt-br': 'Português (Brasil)',
  }

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <Container tag="header" background="primary500">
      <Wrapper padding="tiny" className={styles[`wrapper`]}>
        <Dropdown>
          <DropdownToggle onClick={handleDropdown}>
            <BsGlobe2 />
            <span>{label[language]}</span>
          </DropdownToggle>

          <DropdownMenu open={dropdownOpen}>
            <DropdownItem
              disabled
              // onClick={() => {
              //   setLanguage('en-us')
              //   handleDropdown()
              // }}
            >
              <Image src={flagUS} alt="US english" />
              <span>English</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setLanguage('es-py')
                handleDropdown()
              }}
            >
              <Image src={flagPY} alt="Español paraguayo" />
              <span>Español</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setLanguage('pt-br')
                handleDropdown()
              }}
            >
              <Image src={flagBR} alt="Português brasileiro" />
              <span>Português</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Phone />
      </Wrapper>
    </Container>
  )
}
