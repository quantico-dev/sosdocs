import { MouseEventHandler, ReactNode } from 'react'
import { CgChevronDown } from 'react-icons/cg'

import { Box } from '../Box'
import DropdownItemStyles from './DropdownItem.module.css'
import DropdownMenuStyles from './DropdownMenu.module.css'

type DropdownProps = {
  children: ReactNode
}

type DropdownToggleProps = {
  onClick: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode
}

type DropdownMenuProps = {
  children: ReactNode
  open: boolean
}

type DropdownItemProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>
  disabled?: boolean
  children: ReactNode
}

export function Dropdown({ children }: DropdownProps) {
  return <div style={{ position: 'relative' }}>{children}</div>
}

export function DropdownToggle({ onClick, children }: DropdownToggleProps) {
  return (
    <a
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
      }}
    >
      {children}
      <CgChevronDown />
    </a>
  )
}

export function DropdownMenu({ children, open }: DropdownMenuProps) {
  return (
    <Box
      tag="ul"
      shadow="small"
      borderRadius="16"
      className={open ? DropdownMenuStyles.open : DropdownMenuStyles.close}
    >
      <div className={DropdownMenuStyles.triangulo}></div>
      {children}
    </Box>
  )
}

export function DropdownItem({
  onClick,
  disabled = false,
  children,
}: DropdownItemProps) {
  return (
    <li>
      <a
        className={`${DropdownItemStyles.link} ${
          disabled && DropdownItemStyles.isDisabled
        }`}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  )
}
