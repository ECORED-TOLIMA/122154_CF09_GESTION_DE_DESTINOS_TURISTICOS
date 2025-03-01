export default {
  global: {
    Name: 'Estructuración del proyecto turístico',
    Description:
      'El proyecto turístico requiere una metodología para analizar planes, proponer metas, evaluar indicadores de productividad y la gestión eficiente de recursos. Para su implementación, es crucial establecer un presupuesto adecuado y buscar fuentes de financiación que garanticen el desarrollo sostenible de las iniciativas turísticas, promoviendo el crecimiento económico y la conservación del patrimonio cultural y natural del país.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Proyecto turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metodología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instituciones y programas de apoyo a proyectos turísticos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Plan de acción de un proyecto turístico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Plan operativo para la implementación de un proyecto',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Componentes de un proyecto turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Metas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Actividades',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cronograma',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación indicadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Enfoques',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procedimiento de elaboración',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Relación entre metas, indicadores de gestión y actividades en el proyecto turístico',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Productividad local',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Factor productivo y factor humano',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Impacto del proyecto turístico',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Documentos de un proyecto turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Hoja de ruta',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Plan de negocios',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Informe',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Herramientas',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Recursos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de recursos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Costos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Gastos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Generalidades y aspectos clave',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Metodología',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Elementos clave del presupuesto turístico',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Evaluación y ajustes del presupuesto turístico',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo:
              'Herramientas adicionales para la elaboración y control del presupuesto',
            hash: 't_8_5',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Normas financieras para proyectos turísticos en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Política financiera',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Financiación',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Informe de proyecto',
            hash: 't_9_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '4. Indicadores de gestión',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Interpretación de indicadores de gestión (KPI) [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY',
    },
    {
      tema: '8. Presupuesto',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Presupuesto del servicio guiado [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JwhY34xdSmI',
    },
  ],
  glosario: [
    {
      termino: 'Actividades',
      significado:
        'son acciones o tareas realizadas por individuos o grupos para alcanzar objetivos específicos. Pueden ser recreativas, educativas, laborales o sociales y contribuyen al desarrollo personal, comunitario o profesional.',
    },
    {
      termino: 'Costos',
      significado:
        'son los gastos asociados a la producción de bienes o servicios. Incluyen materiales, mano de obra, y otros gastos operativos, y son fundamentales para la contabilidad y la gestión financiera de una empresa.',
    },
    {
      termino: 'Gasto',
      significado:
        'se define como la salida de dinero que una persona o empresa realiza para adquirir bienes o servicios. Es un desembolso voluntario que no se recupera y se clasifica en diferentes tipos según su naturaleza, como gastos fijos, flexibles o discrecionales.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'son métricas utilizadas para medir y evaluar el desempeño de una organización en diferentes áreas, ayudando a tomar decisiones estratégicas y mejorar la eficiencia y efectividad de los procesos.',
    },
    {
      termino: 'Objetivos SMART',
      significado:
        'son metas específicas, medibles, alcanzables, relevantes y con un tiempo definido. Esta metodología ayuda a establecer objetivos claros y realistas, optimizando la planificación y el seguimiento de los progresos.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'es una estrategia organizada que detalla las tareas, recursos y responsables para alcanzar objetivos específicos en un tiempo determinado. Incluye mecanismos de seguimiento y control para asegurar su efectividad.',
    },
    {
      termino: 'Plan financiero',
      significado:
        'es un documento que describe los objetivos financieros y las estrategias para alcanzarlos, incluyendo análisis de ingresos, gastos, y proyecciones financieras.',
    },
    {
      termino: 'Plan de <em>marketing</em> y promoción',
      significado:
        'es un documento que define estrategias y acciones necesarias para alcanzar objetivos de <em>marketing</em>, considerando análisis de mercado, entorno, competidores, producto y presupuesto, optimizando recursos para lograr posicionamiento y ventas.',
    },
    {
      termino: 'Plan de negocios',
      significado:
        'es un documento que detalla los objetivos de una empresa, la estrategia para alcanzarlos y la viabilidad económica del proyecto. Es fundamental para atraer inversores y guiar el desarrollo del negocio.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'es un plan financiero que establece los ingresos y gastos previstos de una persona, empresa o entidad durante un periodo específico. Sirve para gestionar recursos, controlar costos y tomar decisiones informadas.',
    },
    {
      termino: 'Productividad local',
      significado:
        'se refiere a la creación y manufactura de bienes y servicios dentro de una comunidad específica, utilizando recursos locales. Este enfoque fomenta el desarrollo económico sostenible, la generación de empleo y la preservación de la identidad cultural de la región.',
    },
    {
      termino: 'Proyecto turístico',
      significado:
        'es un plan estratégico destinado a desarrollar y promover un destino turístico. Incluye fases como planificación, ejecución y gestión, con el objetivo de atraer visitantes y generar beneficios económicos, sociales y culturales, asegurando la sostenibilidad y calidad de los servicios.',
    },
    {
      termino: 'Recursos financieros',
      significado:
        'son los fondos que una empresa utiliza para llevar a cabo sus operaciones y cumplir con sus objetivos. Incluyen capital propio, efectivo, créditos y otros instrumentos que permiten financiar inversiones y operaciones diarias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acerenza, M. A. (2008). Gestión municipal del turismo (1a ed.). Editorial Trillas.',
    },
    {
      referencia:
        'Hernández Díaz, E. A. (2012). Proyectos turísticos: Formulación y evaluación (2a ed.). Editorial Trillas.',
    },
    {
      referencia:
        'Méndez, J. A. (2018). Manual para formulación y evaluación de proyectos turísticos: Herramientas técnicas para inversiones turísticas. Lima: Academia Global de Turismo.',
    },
    {
      referencia:
        'Ministerio de Comercio Exterior y Turismo. (2014). Proyectos de inversión en el sector turismo en Colombia. Bogotá: Ministerio de Comercio Exterior y Turismo.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo de Colombia. (2019). Lineamientos para el desarrollo de proyectos turísticos sostenibles.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo de Colombia. (2020). Estrategia de turismo para Colombia.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Turismo en armonía con la vida: Plan sectorial de turismo 2022-2026. Bogotá, Colombia: Ministerio de Comercio, Industria y Turismo. ',
      link:
        'https://www.mincit.gov.co/participa/consulta-ciudadana/20-12-2022-plan-sectorial-de-turismo-vfpp.aspx',
    },
    {
      referencia:
        'Morales Mejía, D., Vallejo Terreros, E. V., & López Guerrero, M. E. (1987). Financiamiento turístico: Fuentes internas y externas. Trillas.',
    },
    {
      referencia:
        'Ramírez, C. F. (2020). Estrategias para mejorar la productividad turística en regiones colombianas. Bogotá: Ediciones Turismo y Sociedad.',
    },
    {
      referencia:
        'Welsch, G. A., Hilton, R. W., & Gordon, P. N. (2005). Presupuestos: Planificación y control de utilidades (6a ed.). Pearson Prentice Hall.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
