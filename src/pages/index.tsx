import Image from 'next/image'

import styles from '@/styles/css/Home.module.css'

import brandBenner from '@/public/images/brands/benner-white.png'
import brandCorreioBraziliense from '@/public/images/brands/correio-braziliense-white.png'
import brandEdebe from '@/public/images/brands/edebe-white.png'
import brandHeineken from '@/public/images/brands/heineken-white.png'
import brandIcob from '@/public/images/brands/icob-white.png'
import brandMontrealClub from '@/public/images/brands/montreal-club-white.png'
import brandMontrealTi from '@/public/images/brands/montreal-ti-white.png'
import brandVivaPrevidencia from '@/public/images/brands/viva-previdencia-white.png'
import DigitalCertificate from '@/public/images/DigitalCertificate.jpg'
import DigitalTransformation from '@/public/images/DigitalTransformation.jpg'
import DocumentGuard from '@/public/images/DocumentGuard.jpg'
import manTyping from '@/public/images/man-typing.png'
import Scanning from '@/public/images/Scanning.jpg'

import { useTranslation } from '@/utils/contexts/TranslationContext'

import { Box } from '@/components/atoms/Box'
import {
  BrandCarousel,
  BrandCarouselItem,
} from '@/components/atoms/BrandCarousel'
import { Button, ButtonLink } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'
import { Column, Row, Wrapper } from '@/components/atoms/Grid'
import { Dots } from '@/components/atoms/Icons'
import * as PainIcon from '@/components/atoms/PainIcons'
import { Text, Title } from '@/components/atoms/Typography'
import { Cta } from '@/components/molecules/Cta'
import { Preload } from '@/components/molecules/Preload'
import { Testimonials } from '@/components/molecules/Testimonials'
import { Page } from '@/components/organisms/Page'
import { seo } from '@/components/organisms/Page/seo'

export default function Home() {
  const { language } = useTranslation()
  const brands = [
    {
      image: brandBenner,
      alt: 'Benner',
    },
    {
      image: brandCorreioBraziliense,
      alt: 'Correio braziliense',
    },
    {
      image: brandEdebe,
      alt: 'Editora Edebê',
    },
    {
      image: brandHeineken,
      alt: 'Heineken',
    },
    {
      image: brandIcob,
      alt: 'Icob',
    },
    {
      image: brandMontrealClub,
      alt: 'Montreal clube de hospedagem',
    },
    {
      image: brandMontrealTi,
      alt: 'Montreal TI',
    },
    {
      image: brandVivaPrevidencia,
      alt: 'Viva previdência',
    },
  ]
  return (
    <Page
      title={seo[language].home.title}
      description={seo[language].home.title}
    >
      <Preload />
      <Container background="white" tag="section">
        <div className={styles[`cover__background`]}>
          <Wrapper className={styles[`cover__cta`]}>
            <Title tag="h1" size="5" color="light">
              Reduzimos custos de armazenagem de documentos, com{' '}
              <em>soluções eficientes.</em>
            </Title>
            <ButtonLink color="secondary" href="/soluções">
              Nossas soluções
            </ButtonLink>
          </Wrapper>

          <Wrapper padding="tiny">
            <Title size="2" color="light">
              <strong>Com experiência das principais empresas:</strong>
            </Title>
          </Wrapper>

          <BrandCarousel>
            {brands.map((brand, index) => (
              <BrandCarouselItem
                key={index}
                image={brand.image}
                alt={brand.alt}
              />
            ))}

            {brands.map((brand, index) => (
              <BrandCarouselItem
                key={index}
                image={brand.image}
                alt={brand.alt}
              />
            ))}

            {brands.map((brand, index) => (
              <BrandCarouselItem
                key={index}
                image={brand.image}
                alt={brand.alt}
              />
            ))}
          </BrandCarousel>
        </div>
      </Container>

      <Container className={styles[`about`]}>
        <Wrapper>
          <Row className={styles[`about__heading`]}>
            <Column>
              <Dots />
              <Title size="4">
                <em>Com mais de 10 anos de experiência</em> e tecnologia,
                possuímos estruturas, sistemas e equipes altamente capacitadas.
              </Title>
            </Column>
          </Row>
          <Row className={styles[`about__description`]}>
            <Column style={{ position: 'relative' }}>
              <Image
                src={manTyping}
                alt="Nossa Missão"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Column>
            <Column>
              <Title size="1" decorator transform="uppercase">
                <em>Nossa Missão</em>
              </Title>
              <Title size="2" tag="h3">
                Ajudamos empresas a reduzir custos e melhorar processos com uma
                gestão inteligente dos documentos.
              </Title>
              <Text>
                Somos uma empresa que apoia nossos clientes em seus negócios por
                meio de soluções inovadoras e tecnológicas voltadas para a
                gestão da informação.
              </Text>
              <ButtonLink href="/quem-somos">Conheça a SOS Docs</ButtonLink>
            </Column>
          </Row>
        </Wrapper>
      </Container>

      <Container className={styles[`pains`]} background="gradient100">
        <Wrapper>
          <Row className={styles[`pains__heading`]}>
            <Column>
              <Dots />
              <Title size="6" color="light">
                Os riscos de não ter um sistema de{' '}
                <em>gestão de documentos:</em>
              </Title>
              <Text color="medium">
                Sua empresa pode estar gerando mais gastos e perdendo mais tempo
                ao não investir nisso.
              </Text>
            </Column>
          </Row>

          <Row className={styles[`pains__cards`]}>
            <Column>
              <PainIcon.Coin />
              <Title color="light">Custos</Title>
              <Text color="medium">Maiores custos operacionais</Text>
            </Column>
            <Column>
              <PainIcon.RemoveFile />
              <Title color="light">Custos</Title>
              <Text color="light">Maiores custos operacionais</Text>
            </Column>
            <Column>
              <PainIcon.Marker />
              <Title color="light">Custos</Title>
              <Text color="medium">Maiores custos operacionais</Text>
            </Column>
            <Column>
              <PainIcon.Box />
              <Title color="light">Custos</Title>
              <Text color="light">Maiores custos operacionais</Text>
            </Column>
            <Column>
              <PainIcon.Clock />
              <Title color="light">Custos</Title>
              <Text color="medium">Maiores custos operacionais</Text>
            </Column>
            <Column>
              <PainIcon.Repeat />
              <Title color="light">Custos</Title>
              <Text color="light">Maiores custos operacionais</Text>
            </Column>
          </Row>
        </Wrapper>
      </Container>

      <Container className={styles[`solutions`]}>
        <Wrapper>
          <Row className={styles[`solutions__heading`]}>
            <Column style={{ position: 'relative' }}>
              <Title size="1" decorator transform="uppercase">
                <em>NOSSAS SOLUÇÕES</em>
              </Title>
              <Title size="6">
                Confira nossas soluções pensando em seu{' '}
                <em>negócio e seu crescimento.</em>
              </Title>
              <Text>
                Aplicamos com alta performance e com garantia de excelência e
                originalidade.
              </Text>
            </Column>
          </Row>

          <Row className={styles[`solutions__item`]}>
            <Column style={{ position: 'relative' }}>
              <Image
                src={DocumentGuard}
                alt=""
                layout="fill"
                objectPosition="center"
                objectFit="cover"
              />
            </Column>
            <Column>
              <Dots />
              <Title tag="h3" size="3">
                Guarda Documental
              </Title>
              <Text>
                Estrutura, sistemas e equipes altamente capacitadas para
                realizar a guarda de documentos da sua empresa.
              </Text>
              <ButtonLink href="">Saiba mais</ButtonLink>
            </Column>
          </Row>

          <Row reversed className={styles[`solutions__item`]}>
            <Column style={{ position: 'relative' }}>
              <Image
                src={DigitalTransformation}
                alt=""
                layout="fill"
                objectPosition="center"
                objectFit="cover"
              />
            </Column>
            <Column>
              <Dots />
              <Title tag="h3" size="3">
                Transformação digital
              </Title>
              <Text>
                Desenvolva soluções para seu negócio através das ondas de
                transformação digital.
              </Text>
              <ButtonLink href="">Saiba mais</ButtonLink>
            </Column>
          </Row>

          <Row className={styles[`solutions__item`]}>
            <Column style={{ position: 'relative' }}>
              <Image
                src={Scanning}
                alt=""
                layout="fill"
                objectPosition="center"
                objectFit="cover"
              />
            </Column>
            <Column>
              <Dots />
              <Title tag="h3" size="3">
                Digitalização
              </Title>
              <Text>
                Poupe espaço na sua empresa, tenha seus documentos digitalizados
                com facilidade e segurança.
              </Text>
              <ButtonLink href="">Saiba mais</ButtonLink>
            </Column>
          </Row>

          <Row reversed className={styles[`solutions__item`]}>
            <Column style={{ position: 'relative' }}>
              <Image
                src={DigitalCertificate}
                alt=""
                layout="fill"
                objectPosition="center"
                objectFit="cover"
              />
            </Column>
            <Column>
              <Dots />
              <Title tag="h3" size="3">
                Certificado digital
              </Title>
              <Text>
                Tenha mais agilidade nos seus processos com o Certificado
                Digital, tudo isso com a segurança que você merece.
              </Text>
              <ButtonLink href="">Saiba mais</ButtonLink>
            </Column>
          </Row>
        </Wrapper>
      </Container>

      <Container>
        <Wrapper>
          <Box borderRadius="16" className={styles[`cta`]}>
            <Dots />
            <Title color="light" className={styles[`cta__heading`]}>
              Conheça as nossas soluções para o seu negócio
            </Title>
            <Text color="light" className={styles[`cta__text`]}>
              Apresentamos as soluções que se adaptam a necessidade do cliente.
            </Text>
            <Button color="secondary">Conheça nossas soluções</Button>
          </Box>
        </Wrapper>
      </Container>

      <Testimonials />

      <Cta />
    </Page>
  )
}
