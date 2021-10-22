type Props = {
  [language: string]: {
    [page: string]: {
      title: string
      description: string
    }
  }
}

export const seo: Props = {
  'en-us': {
    home: {
      title: 'Home - SOS Docs',
      description:
        'A SOS DOCS foi fundada em 2011, estamos presentes em 5 estados, contamos com 8 unidades físicas, voltada para guarda e gestão de documentos.',
    },
    about: {
      title: 'Quem somos - SOS Docs',
      description:
        'Os serviços necessários para a gestão de documentos físicos e digitais, com segurança e efetividade através da nossa guarda.',
    },
    documentGuard: {
      title: 'Guarda documental - SOS Docs',
      description:
        'Uma consultoria documental completa, com profissionais altamente especializados na área  e uma gestão completa para sua empresa.',
    },
    documentManagement: {
      title: 'Gestão documental - SOS Docs',
      description:
        'Estruturas, sistemas e equipes altamente capacitados para realizar a gestão dos documentos da sua empresa.',
    },
    processManagement: {
      title: 'Gestão de processos - SOS Docs',
      description:
        'Melhore processos e resultados da sua empresa através do Gerenciamento de Processos de Negócio.',
    },
  },
  'pt-br': {
    home: {
      title: 'Home - SOS Docs',
      description:
        'A SOS DOCS foi fundada em 2011, estamos presentes em 5 estados, contamos com 8 unidades físicas, voltada para guarda e gestão de documentos.',
    },
    about: {
      title: 'Quem somos - SOS Docs',
      description:
        'Os serviços necessários para a gestão de documentos físicos e digitais, com segurança e efetividade através da nossa guarda.',
    },
    documentGuard: {
      title: 'Guarda documental - SOS Docs',
      description:
        'Uma consultoria documental completa, com profissionais altamente especializados na área  e uma gestão completa para sua empresa.',
    },
    documentManagement: {
      title: 'Gestão documental - SOS Docs',
      description:
        'Estruturas, sistemas e equipes altamente capacitados para realizar a gestão dos documentos da sua empresa.',
    },
    processManagement: {
      title: 'Gestão de processos - SOS Docs',
      description:
        'Melhore processos e resultados da sua empresa através do Gerenciamento de Processos de Negócio.',
    },
  },
  'es-py': {
    home: {
      title: 'Home - SOS Docs',
      description:
        'SOS DOCS fue fundada en el 2011, estamos presentes en 5 estados, contamos con 8 unidades físicas, empresa de guarda y gestión de documentos.',
    },
    about: {
      title: 'Quién somos - SOS Docs',
      description:
        'Los servicios necesarios para la gestión de documentos físicos y digitales, con seguridad y efectividad a través de nuestra guarda.',
    },
    documentGuard: {
      title: 'Guarda documental - SOS Docs',
      description:
        'Una consultoría documental completa, con profesionales altamente especializados en el área y una gestión completa para su empresa.',
    },
    documentManagement: {
      title: 'Gestión documental - SOS Docs',
      description:
        'Estructuras, sistemas y equipos altamente capacitados para realizar la gestión de documentos de su empresa.',
    },
    processManagement: {
      title: 'Gestión de procesos - SOS Docs',
      description:
        'Mejora de procesos y resultados de su empresa a través del Gerenciamiento de Procesos de Negocio.',
    },
  },
}
