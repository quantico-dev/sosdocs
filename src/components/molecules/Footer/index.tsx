import { Brand } from '@/components/atoms/Brand'
import { Button } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'
import { FooterLink } from '@/components/atoms/FooterLink'
import { Wrapper } from '@/components/atoms/Grid'
import { Facebook, Instagram, Linkedin } from '@/components/atoms/SocialIcon'
import { Text } from '@/components/atoms/Typography'

import styles from './index.module.css'

export function Footer() {
  return (
    <Container tag="footer" background="primary800">
      <Wrapper className={styles.wrapper}>
        <div className={styles.links}>
          <div className={styles.social}>
            <div>
              <Brand color="positive" size="small" />
            </div>

            <div>
              <Linkedin href="https://www.linkedin.com" />
              <Facebook href="https://www.facebook.com" />
              <Instagram href="https://www.instagram.com" />
            </div>
          </div>
          <div className={styles.menu}>
            <Text color="dark">
              <strong>Menu</strong>
            </Text>

            <ul>
              <FooterLink href="/solucoes">Soluções</FooterLink>
              <FooterLink href="/segmentos">Segmentos</FooterLink>
              <FooterLink href="/sosdocs">SOS Docs</FooterLink>
              <FooterLink href="/conteudo">Conteúdo</FooterLink>
              <FooterLink href="/contato">Contato</FooterLink>
            </ul>
          </div>
          <div className={styles.contact}>
            <Text color="dark">
              <strong>Contato</strong>
            </Text>

            <div>
              <Text color="light">
                <strong>+55 0800 591 1478</strong>
              </Text>
              <Text color="light">
                <strong>contato@sosdocs.com.br</strong>
              </Text>
            </div>
          </div>
          <div className={styles.cta}>
            <Text color="dark">
              <strong>Venha para a SOS Docs</strong>
            </Text>

            <div>
              <Button outline color="secondary">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <Text color="dark">
            <strong>
              © 2021 SOS Docs. Todos os direitos reservados. Feito por{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://quantico.cc"
                style={{ color: 'white' }}
              >
                Quantico
              </a>
            </strong>
          </Text>
        </div>
      </Wrapper>
    </Container>
  )
}
