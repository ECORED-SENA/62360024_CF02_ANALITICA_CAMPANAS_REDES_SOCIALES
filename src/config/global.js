export default {
  global: {
    Name: 'Optimización y análisis de campañas en redes sociales',
    Description:
      'El componente formativo aborda procesos de optimización y análisis de campañas en redes sociales mediante el uso de métricas, herramientas analíticas, interpretación de resultados y toma de decisiones basada en datos. Asimismo, permite identificar tendencias, patrones de comportamiento y oportunidades de mejora orientadas al fortalecimiento del rendimiento de campañas digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Optimización de campañas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procesos de optimización de campañas',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mejora continua en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de oportunidades de mejora',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Optimización de contenidos y segmentación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Seguimiento de resultados optimizados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conversión en campañas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de conversiones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Seguimiento del embudo de conversión',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Optimización orientada a conversiones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de analítica digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Funcionalidad de herramientas analíticas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plataformas de análisis en redes sociales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas de análisis web',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Interpretación de métricas en tiempo real',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Monitoreo de campañas digitales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Análisis de comportamiento de audiencias',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Interpretación de resultados en tiempo real ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tendencias y patrones en campañas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tendencias de contenido e interacción en redes sociales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Patrones de comportamiento digital',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Evaluación estratégica de tendencias',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Analítica digital',
      significado:
        'recopila y analiza datos de productos provenientes de múltiples fuentes digitales para fundamentar las estrategias de producto y <em>marketing</em>.',
    },
    {
      termino: 'CTR',
      significado:
        'es la tasa de clics (<em>click-through rate</em>). Se trata de una métrica clave del <em>marketing</em> digital que mide cuántas personas hacen clic en un anuncio o enlace en relación con el número de personas que lo han visualizado. Permite evaluar la eficacia de una campaña para captar la atención de clientes potenciales.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'se utiliza en investigación de mercados, <em>marketing</em>, comunicación y gestión empresarial para referirse a un descubrimiento o idea reveladora que ayuda a comprender y resolver un problema. En el contexto del consumidor, permite identificar motivaciones, necesidades o comportamientos que influyen en la decisión de compra.',
    },
    {
      termino: 'Métricas de <em>marketing</em>',
      significado:
        'son indicadores que permiten evaluar si las estrategias de marketing están contribuyendo a los resultados de la empresa. Estas mediciones ayudan a demostrar la efectividad de las acciones realizadas y a justificar la inversión de recursos destinados a la atracción de nuevos prospectos y clientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso, M. (2026, febrero 13). Insights: qué son y cómo aplicarlos a tu proyecto. Asana. ',
      link: '',
    },
    {
      referencia:
        'Amórtegui, T. (2024, enero 22). Qué son las métricas de marketing y cuáles miden el éxito. RD Station. ',
      link: '',
    },
    {
      referencia:
        'Leung, A. X. (2022, enero 26). ¿Qué es la analítica digital? Definición, ejemplos y herramientas. Amplitude. ',
      link: '',
    },
    {
      referencia:
        'Salinas, D. (2025, enero 7). CTR: qué es, por qué es importante y cómo calcularlo y mejorarlo. Wix Blog. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
