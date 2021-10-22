import { ButtonLink } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'
import { Wrapper } from '@/components/atoms/Grid'
import { Title } from '@/components/atoms/Typography'

import styles from './index.module.css'

export function Cta() {
  return (
    <Container>
      <Wrapper className={styles.background}>
        <Title color="light" className={styles.title}>
          Entre em contato conosco e saiba como a SOS Docs pode ajudar seu
          negócio.
        </Title>
        <ButtonLink color="secondary" href="/contato">
          Fale com um consultor
        </ButtonLink>
      </Wrapper>
    </Container>
  )
}
