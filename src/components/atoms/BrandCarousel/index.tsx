import Image from 'next/image'
import { ReactNode } from 'react'

import BrandCarouselItemStyles from './BrandCarouselItem.module.css'

type BrandCarouselProps = {
  children: ReactNode
}

type BrandCarouselItemProps = {
  image: StaticImageData
  alt: string
}

export function BrandCarousel({ children }: BrandCarouselProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ul
        style={{
          width: 'calc(180px * 27)',
          height: '100%',
          gap: '1rem',
          display: 'flex',
        }}
      >
        {children}
      </ul>
    </div>
  )
}

export function BrandCarouselItem({ image, alt }: BrandCarouselItemProps) {
  return (
    <li className={BrandCarouselItemStyles.item}>
      <Image src={image} alt={alt} priority />
    </li>
  )
}
