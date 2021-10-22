import Image from 'next/image'
import { useState } from 'react'

import brandRegiusRounded from '@/public/images/brands/regius-rounded.png'
import brandSaudeSimRounded from '@/public/images/brands/saude-sim-rounded.png'
import brandVivaPrevidenciaRounded from '@/public/images/brands/viva-previdencia-rounded.png'

import { ArrowButton } from '@/components/atoms/ArrowButton'
import { Container } from '@/components/atoms/Container'
import { Wrapper } from '@/components/atoms/Grid'
import { Dots } from '@/components/atoms/Icons'
import { Text, Title } from '@/components/atoms/Typography'

import styles from './index.module.css'

export function Testimonials() {
  const [testimonialActive, setTestimonialActive] = useState(1)

  function NextTestimonial() {
    const val = testimonialActive === 2 ? 0 : testimonialActive + 1
    setTestimonialActive(val)
  }
  function PrevTestimonial() {
    const val = testimonialActive === 0 ? 2 : testimonialActive - 1
    setTestimonialActive(val)
  }
  const testimonials = [
    {
      text: '“Trabalhar com a SOS DOCS tem sido uma grata surpresa, sempre fomos atendidos com tempestividade e gentileza por todos os colaboradores. Tudo muito profissional e tecnicamente organizado.”',
      company: 'Regius',
      role: 'Coordenadora de Administração',
    },
    {
      text: 'Excelência! Essa palavra resume bem o atendimento prestado pela SOS Docs. Da prospecção do contrato a coleta dos arquivos somos tratados com total atenção, respeito e qualidade por cada colaborador. Obrigado pela parceria.',
      company: 'Saúde Sim',
      role: 'General Manager',
    },
    {
      text: 'A migração das caixa com os documentos foi um sucesso, o pós venda está muito bom e os sistemas DOC Z e DOC Z CLOUD cumprem o que era esperado!',
      company: 'Fundação Viva Previdência',
      role: 'Gerência de Estratégia e Inovação',
    },
  ]
  return (
    <Container>
      <Wrapper className={styles.testimonials}>
        <Dots />
        <Title tag="h2" size="5">
          Confiado por empresas <em>líderes no mercado</em>
        </Title>
        <Text size="2">
          <small>{testimonials[testimonialActive].text}</small>
        </Text>

        <Text>
          <strong>{testimonials[testimonialActive].company}, </strong>
          {testimonials[testimonialActive].role}
        </Text>

        <div>
          <div className={styles.brands}>
            <Image
              className={`${testimonialActive === 0 && styles.active}`}
              src={brandRegiusRounded}
              alt=""
            />
            <Image
              className={`${testimonialActive === 1 && styles.active}`}
              src={brandSaudeSimRounded}
              alt=""
            />
            <Image
              className={`${testimonialActive === 2 && styles.active}`}
              src={brandVivaPrevidenciaRounded}
              alt=""
            />
          </div>
          <div className={styles.controls}>
            <ArrowButton direction="left" onClick={PrevTestimonial} />
            <ArrowButton onClick={NextTestimonial} />
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}
