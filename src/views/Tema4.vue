<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Indicadores de gestión
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El turismo en Colombia representa una oportunidad crucial para impulsar el desarrollo económico, dado su inmenso potencial en biodiversidad, cultura y paisajes únicos. En este contexto, los indicadores de gestión se convierten en herramientas esenciales para la planificación, monitoreo y optimización de los proyectos turísticos. La implementación de estos indicadores permite evaluar tanto el rendimiento del proyecto como su impacto en la economía local, los recursos naturales y las comunidades. Este documento aborda algunos indicadores clave que podrían utilizarse en un proyecto turístico en Colombia, enfocándose en aspectos financieros, de sostenibilidad, satisfacción del cliente y desarrollo comunitario.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 5.
          i Indicadores de gestión
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="En la tabla 5 se presentan los principales indicadores utilizados en la gestión de proyectos turísticos, junto con sus características y tipos, proporcionando una visión estructurada para su aplicación en distintos contextos.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #D1E1DD; width: 20%; font-size: 18px;") Indicador
                th(style="background-color: #D1E1DD; width: 20%; font-size: 18px;") Características
                th(style="background-color: #D1E1DD; width: 60%; font-size: 18px;") Tipos
            tbody
              tr(data-aos="fade-right")
                td Indicadores financieros
                td Para la viabilidad de un proyecto turístico, es fundamental monitorear su rendimiento financiero. Los siguientes indicadores ayudan a evaluar el retorno de la inversión y el control de los costos.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Retorno de Inversión (ROI): permite medir la rentabilidad del proyecto, comparando las ganancias generadas frente a la inversión inicial. Un ROI alto indica que el proyecto está generando ingresos suficientes para cubrir los costos y generar beneficios adicionales.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Costo de Adquisición de Clientes (CAC): evalúa el costo de atraer a cada visitante, considerando gastos en marketing y publicidad. Es especialmente relevante en proyectos que buscan atraer turistas internacionales, ya que los costos pueden ser más altos.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Ingresos por visitante: mide el promedio de ingresos generados por cada turista durante su visita. Este indicador ayuda a evaluar la efectividad de las actividades y servicios turísticos ofertados, así como a ajustar las estrategias de precios.
              tr(data-aos="fade-right")
                td Indicadores de sostenibilidad
                td Colombia es reconocida por su biodiversidad y la riqueza de sus paisajes naturales. Por ello, los proyectos turísticos en el país deben considerar indicadores que evalúen su impacto ambiental y promuevan la sostenibilidad.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Huella de carbono: mide las emisiones de gases de efecto invernadero generadas por el proyecto, desde el transporte hasta las actividades recreativas. Reducir la huella de carbono no solo es esencial para cumplir con estándares ambientales, sino también para atraer turistas que valoren el turismo sostenible.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Consumo de recursos naturales: monitorear el consumo de agua y energía permite evaluar el impacto ambiental del proyecto. Implementar prácticas de ahorro y tecnologías sostenibles ayuda a reducir este consumo, mejorando la imagen del proyecto ante los turistas conscientes del medio ambiente.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Gestión de residuos: medir la cantidad de residuos generados y reciclados en el proyecto promueve la implementación de sistemas de gestión eficientes, evitando la contaminación y contribuyendo a la protección del entorno.
              tr(data-aos="fade-right")
                td Indicadores de satisfacción del cliente
                td La experiencia del visitante es un factor crucial en el éxito de un proyecto turístico. Los indicadores de satisfacción permiten conocer el nivel de satisfacción del turista, identificar áreas de mejora y asegurar que los servicios cumplen con las expectativas.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Índice de satisfacción del cliente: mide la percepción de los turistas sobre el servicio, instalaciones y actividades. Se puede obtener mediante encuestas o comentarios. Un índice alto refleja una buena calidad de servicio y experiencia, mientras que un índice bajo indica la necesidad de mejoras.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Tasa de Recomendación o Net Promoter Score (NPS): mide la probabilidad de que un turista recomiende el destino a otros. Un NPS positivo sugiere que los visitantes han tenido una experiencia satisfactoria y probablemente actúen como promotores del destino.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Tiempo de permanencia del visitante: mide la duración de la estancia de los turistas. Una estadía más prolongada suele traducirse en un mayor gasto en el destino, lo que es positivo para la economía local y para el éxito del proyecto.
              tr(data-aos="fade-right")
                td Indicadores de desarrollo comunitario
                td El turismo en Colombia debe contribuir al desarrollo de las comunidades locales, por lo que es importante medir cómo los proyectos turísticos benefician a la población.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Empleo local generado: mide el número de empleos creados en la comunidad por el proyecto turístico. Un proyecto exitoso no solo debe atraer visitantes, sino también generar empleo para los residentes, contribuyendo a mejorar su calidad de vida.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Distribución de beneficios: evalúa el porcentaje de ingresos que se destina a las comunidades locales, ya sea en salarios, inversión en infraestructuras o servicios. Un mayor porcentaje indica un proyecto comprometido con el desarrollo local.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Índice de participación comunitaria: mide el nivel de involucramiento de la comunidad en la planificación y operación del proyecto. La participación de la comunidad es clave para asegurar que el proyecto esté alineado con sus necesidades y valores, generando un sentido de pertenencia y colaboración.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 El uso de indicadores de gestión en proyectos turísticos en Colombia es esencial para evaluar su éxito y sostenibilidad. Estos indicadores permiten a los gestores tomar decisiones informadas, optimizar recursos y asegurar que el proyecto beneficie tanto a los turistas como a las comunidades y al entorno natural. Implementar un sistema de gestión basado en indicadores bien definidos permite alcanzar los objetivos económicos, ambientales y sociales de manera equilibrada, garantizando el éxito y sostenibilidad del proyecto turístico en el largo plazo.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img02.png' alt="Imagen decorativa")

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Clasificación indicadores
    
    p.mb-5 Los indicadores de gestión en un proyecto turístico en Colombia pueden organizarse en diversas categorías según los objetivos del proyecto y la información a monitorear. A continuación, se presentan las principales clasificaciones junto con sus aspectos clave:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-boton
          div(numero="1" titulo="Desempeño financiero")
            p.mb-0 Mide la rentabilidad del proyecto mediante indicadores como ingresos generados, costos operativos, margen de beneficio, tasa de ocupación e ingresos por visitante.
          div(numero="2" titulo="Demanda y llegadas")
            p.mb-0 Evalúa el flujo turístico a través del número de visitantes, perfil del turista, frecuencia de visita, estacionalidad y duración de la estancia.
          div(numero="3" titulo="Sostenibilidad ambiental")
            p.mb-0 Analiza el impacto ecológico del proyecto considerando la huella de carbono, consumo de recursos, gestión de residuos, impacto en los ecosistemas y certificaciones ambientales.
          div(numero="4" titulo="Satisfacción del cliente")
            p.mb-0 Mide la percepción del turista mediante encuestas de satisfacción, tasa de recomendación, número de quejas, calidad de servicios y experiencia en el destino.
          div(numero="5" titulo="Desarrollo socioeconómico")
            p.mb-0 Examina el impacto en la comunidad local, incluyendo generación de empleo, crecimiento económico, programas de capacitación, participación comunitaria e inversión en infraestructura.
          div(numero="6" titulo="Promoción y posicionamiento")
            p.mb-0 Evalúa la efectividad de las estrategias de marketing, el reconocimiento de marca, los canales de atracción de visitantes y el posicionamiento en plataformas digitales.
          div(numero="7" titulo="Seguridad y salud")
            p.mb-0 Monitorea la percepción de seguridad del destino, el registro de incidentes, el cumplimiento de protocolos sanitarios y la accesibilidad a servicios médicos.

    p Estos indicadores permiten una evaluación integral del desempeño del proyecto turístico, asegurando su sostenibilidad económica, social y ambiental, al tiempo que optimizan la experiencia del visitante y fortalecen el desarrollo local.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Enfoques
    
    p.mb-5 Los indicadores de gestión en proyectos turísticos deben centrarse en distintos enfoques que permitan evaluar la eficiencia operativa, el impacto en el destino y la satisfacción del visitante. A continuación, se presentan los principales enfoques:

    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img04.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Desempeño financiero
            p.text-center.mb-0 Analiza la rentabilidad del proyecto mediante indicadores como ingresos totales, costos operativos, margen de ganancia y retorno sobre la inversión (ROI).
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img05.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Experiencia del cliente
            p.text-center.mb-0 Mide la satisfacción del visitante a través de encuestas, opiniones en redes sociales, tasa de retención y el Net Promoter Score (NPS), que indica la probabilidad de recomendación.
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img06.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Sostenibilidad y responsabilidad social
            p.text-center.mb-0 Evalúa el impacto ambiental y social del proyecto, considerando la huella de carbono, consumo de recursos, manejo de residuos, participación en proyectos comunitarios y sostenibilidad de los proveedores.
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img07.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Operativo y logístico
            p.text-center.mb-0 Optimiza la capacidad de carga, la eficiencia en la gestión de recursos y el tiempo de respuesta a quejas o solicitudes, garantizando una operación fluida y eficiente.
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img08.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Marketing y promoción
            p.text-center.mb-0 Mide la efectividad de las estrategias publicitarias mediante el alcance de campañas, tasa de conversión y perfil de los visitantes, permitiendo una segmentación más precisa.
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema4/img09.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Innovación y desarrollo
            p.text-center.mb-0 Evalúa la adopción de nuevas tecnologías, la capacitación del personal y la recepción de mejoras en la experiencia turística, asegurando una evolución constante del proyecto.
    
    p Estos enfoques permiten un análisis integral del proyecto turístico, asegurando su sostenibilidad y éxito a largo plazo.
    
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Procedimiento de elaboración

    p.mb-5 El desarrollo de indicadores de gestión en un proyecto turístico en Colombia requiere una serie de pasos estratégicos que permitan medir el rendimiento, la eficiencia y el impacto del proyecto. A continuación, se presentan los pasos esenciales para su elaboración:

    .tarjeta.BGIMG03.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 a) Definir los objetivos del proyecto turístico
            p.mb-0 Es fundamental establecer objetivos claros y alineados con la visión del proyecto. Estos deben ser SMART (específicos, medibles, alcanzables, relevantes y con un tiempo definido). Los objetivos pueden incluir el aumento de turistas, la mejora de la experiencia del visitante, el incremento de la rentabilidad o la promoción del turismo sostenible.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img10.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 b) Identificar los factores críticos de éxito
            p.mb-0 Se deben determinar los elementos clave que influyen en el logro de los objetivos. En turismo, estos factores pueden incluir la calidad de la infraestructura, la satisfacción del cliente, la efectividad de la promoción del destino, la seguridad, la conservación ambiental y la integración con la comunidad local.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img11.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 c) Determinar las áreas clave de gestión
            p.mb-0 Para un monitoreo eficiente, el proyecto debe dividirse en áreas clave de gestión que permitan evaluar su desempeño de manera estructurada. La promoción y el marketing abarcan aspectos como el alcance de las campañas y la atracción de turistas. La atención al cliente se centra en la satisfacción del visitante y la gestión de quejas. En el área de finanzas, se analizan el retorno de inversión y los costos operativos. Las operaciones incluyen la capacidad de carga y la eficiencia de los servicios. Finalmente, la sostenibilidad mide el uso de recursos, el impacto ambiental y la relación con la comunidad.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img12.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 d) Seleccionar indicadores específicos para cada área
            p.mb-0 En función de cada una de estas áreas clave, se deben definir indicadores cuantitativos y cualitativos que permitan evaluar su desempeño. Algunos ejemplos incluyen el número de visitantes, considerando registros diarios, mensuales o por temporada; la tasa de ocupación hotelera, como indicador de la demanda turística; el índice de satisfacción del cliente, basado en encuestas y comentarios; la tasa de retorno de visitantes, que mide la fidelización del turista; el impacto ambiental, enfocado en el consumo de recursos y la huella de carbono; y la eficiencia en marketing, evaluada a través de la interacción en redes y el número de reservas generadas tras campañas promocionales..
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img13.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 e) Establecer metas o valores de referencia
            p.mb-0 Cada indicador debe contar con una meta basada en estándares de la industria, datos históricos o análisis de la competencia. Las metas deben ser desafiantes pero alcanzables, fomentando la mejora continua.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img14.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 f) Definir la frecuencia de medición y los métodos de recolección de datos
            p.mb-0 Se debe determinar cada cuánto se medirán los indicadores (diaria, semanal, mensual o anual) y los métodos de recolección (encuestas, informes financieros, plataformas de reservas, análisis de redes sociales, etc.). La consistencia en la recolección de datos garantiza información confiable.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img15.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 g) Monitoreo y evaluación continua
            p.mb-0 Los resultados deben ser evaluados periódicamente para identificar desviaciones y oportunidades de mejora. En caso de ser necesario, los indicadores pueden ajustarse si las condiciones del proyecto cambian.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img16.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            .h4 h) Generación de informes y toma de decisiones
            p.mb-0 La consolidación de los datos en informes permite la toma de decisiones informadas. Estos informes deben incluir análisis de tendencias y recomendaciones estratégicas para optimizar el desempeño del proyecto. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img17.jpg' alt="Imagen decorativa")

    p.mb-5 Para aplicar estos pasos, se presenta el siguiente ejemplo de indicadores comunes en proyectos turísticos:

    .tarjeta--container.row.mb-5
      .col-lg.col-sm-6.col-8.mb-lg-0.mb-4.tarjeta.color-primario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img18.svg', alt='Imagen decorativa')
        p.mb-0 #[b Marketing]: la tasa de ocupación, la interacción en redes sociales y el número de reservas directas.
      .col-lg.col-sm-6.col-8.mb-lg-0.mb-4.tarjeta.color-secundario.p-5(data-aos="flip-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img19.svg', alt='Imagen decorativa')
        p.mb-0 #[b Sostenibilidad]: se evalúa el consumo de agua y energía por visitante, así como la gestión de residuos.
      .col-lg.col-sm-6.col-8.mb-lg-0.mb-4.tarjeta.color-primario.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img20.svg', alt='Imagen decorativa')
        p.mb-0 #[b Calidad del servicio]: se analizan la satisfacción del visitante y el número de quejas registradas.
      .col-lg.col-sm-6.col-8.mb-lg-0.mb-4.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img21.svg', alt='Imagen decorativa')
        p.mb-0 #[b Finanzas]: se toman en cuenta el retorno sobre inversión (ROI), el margen de beneficio y los ingresos por visitante.

    p Siguiendo estos pasos, se pueden diseñar indicadores que permitan un monitoreo efectivo del desempeño del proyecto, asegurando su sostenibilidad y éxito a largo plazo.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Relación entre metas, indicadores de gestión y actividades en el proyecto turístico

    p.mb-5 La relación entre metas, indicadores de gestión y actividades en un proyecto turístico es fundamental para garantizar su éxito, ya que cada uno de estos elementos cumple un rol complementario en la planificación, ejecución y evaluación del proyecto. Es primordial comprender la función de cada elemento:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img22.png' alt='Imagen decorativa')
          .tarjeta.BG05.p-4.ps-5
            .ms-4
              p #[strong a) Metas]: representan los objetivos generales que se desean alcanzar en el proyecto turístico. Estas pueden ser cualitativas o cuantitativas, pero siempre deben ser claras, alcanzables y alineadas con la misión y visión del proyecto. Algunos ejemplos incluyen:
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Aumentar la afluencia de turistas en un 20 % en el próximo año.
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Mejorar la satisfacción del cliente en un 90 % según encuestas.
              p.mb-0 Las metas proporcionan dirección al proyecto y permiten que todos los involucrados comprendan el fin común.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img23.png' alt='Imagen decorativa')
          .tarjeta.BG04.p-4.ps-5
            .ms-4
              p #[strong b) Indicadores de gestión]: son herramientas de medición que permiten evaluar el progreso hacia las metas planteadas. Deben cumplir con los criterios SMART (específicos, medibles, alcanzables, relevantes y con un marco temporal). Algunos indicadores en el ámbito turístico incluyen:
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Número de turistas atendidos por mes.
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Nivel de satisfacción del cliente, medido a través de encuestas o revisiones.
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Ocupación hotelera media durante el año.
              p.mb-0 Estos indicadores cuantifican y monitorean el desempeño del proyecto, facilitando la toma de decisiones.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img24.png' alt='Imagen decorativa')
          .tarjeta.BG05.p-4.ps-5
            .ms-4
              p #[strong c) Actividades]: son las acciones específicas que deben realizarse para alcanzar las metas del proyecto. En un proyecto turístico, estas pueden incluir:
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Campañas de marketing en redes sociales para promover el destino.
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Capacitación del personal en atención al cliente.
                li(style="margin-bottom: 2px")
                  i.fa-solid.fa-plane.tca
                  | Mejoras en infraestructura, como construcción de áreas recreativas o accesos.
              p.mb-0 Las actividades representan los pasos concretos y tangibles que permiten cumplir con las metas establecidas.

    p.mb-5 Estos tres elementos están interconectados y su correcta alineación es clave para el éxito de un proyecto turístico. Se destacan las siguientes relaciones:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img25.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100
            p.mt-4.mb-0 Las metas establecen el “qué” se quiere lograr, y los indicadores definen “cómo” se medirá el progreso. Cada meta debe contar con indicadores que faciliten su monitoreo.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img26.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100
            p.mt-4.mb-0 Los indicadores permiten definir y ajustar actividades para garantizar su efectividad. Si el progreso es bajo, se pueden modificar o agregar acciones estratégicas.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img27.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100
            p.mt-4.mb-0 Las actividades ejecutadas influyen directamente en el cumplimiento de las metas, asegurando que se realicen en función de alcanzar los indicadores establecidos. 

    p.mb-5 A continuación, se presenta un ejemplo de aplicación en un proyecto turístico:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        .BGIMG04.p-4
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img28.png' alt="Imagen decorativa")
            .col-lg-8
              .h5 Meta: 
              p.mb-2 Aumentar la afluencia de turistas en un 20 % en el próximo año.
              .h5 Indicadores de gestión:
              p.mb-2 Incremento mensual en la cantidad de visitantes.
              p.mb-2 Número de consultas realizadas en la página web del proyecto.
              p Nivel de satisfacción del turista.
              .h5 Actividades:
              p.mb-2 Desarrollar una campaña publicitaria en redes sociales.
              p.mb-2 Ofrecer descuentos o paquetes promocionales en temporadas específicas.
              p.mb-0 Mejorar las instalaciones turísticas para hacerlas más atractivas y accesibles.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img29.png' alt="Imagen decorativa")
    
    p En un proyecto turístico, la adecuada coordinación entre las metas, indicadores y actividades es clave para planificar, ejecutar y evaluar los resultados, facilitando una gestión eficiente y aumentando las probabilidades de éxito.

  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
