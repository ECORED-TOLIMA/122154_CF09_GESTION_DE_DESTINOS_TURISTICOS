<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planes
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los proyectos turísticos requieren una planificación detallada que garantice su viabilidad, operatividad y sostenibilidad. Entre los principales planes que se pueden desarrollar están:
        .BG04.p-4.mb-4
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-plane-departure.tca
              p.mb-0 #[b Plan de viabilidad:] evalúa la rentabilidad del proyecto mediante el análisis de costos, ingresos proyectados y retorno de inversión.
            li(style="margin-bottom: 2px")
              i.fas.fa-plane-departure.tca
              p.mb-0 #[b Plan de #[em marketing]:] define estrategias de promoción, segmentación de mercado y posicionamiento.
            li(style="margin-bottom: 2px")
              i.fas.fa-plane-departure.tca
              p.mb-0 #[b Plan financiero:] detalla la estructura de financiamiento, incluyendo inversiones y flujo de caja.
            li(style="margin-bottom: 2px")
              i.fas.fa-plane-departure.tca
              p.mb-0 #[b Plan ambiental:] establece medidas para minimizar el impacto ambiental y cumplir con normativas ecológicas.
            li(style="margin-bottom: 2px")
              i.fas.fa-plane-departure.tca
              p.mb-0 #[b Plan de seguridad y emergencias:] diseña protocolos para la protección de visitantes y personal.
        p.mb-0 Sin embargo, para la correcta estructuración de un proyecto turístico, es fundamental desarrollar un plan de acción y un plan operativo, los cuales se detallan a continuación.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Plan de acción de un proyecto turístico
    
    .row.justify-content-center.mb-5
      .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 El plan de acción del proyecto turístico tiene como objetivo impulsar el desarrollo sostenible y el crecimiento económico de la región a través de la promoción de sus atractivos naturales y culturales. Como parte de esta estrategia, se implementará un plan de #[em marketing] digital enfocado en atraer visitantes nacionales e internacionales, resaltando la autenticidad de la experiencia local. Además, se establecerán alianzas con negocios locales para diseñar paquetes turísticos que fortalezcan la economía de la comunidad.
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img02.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img03.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p.mb-0 Para garantizar un turismo responsable, se desarrollarán programas de capacitación dirigidos a los residentes, enfocados en atención al cliente y prácticas sostenibles. Asimismo, se implementará un monitoreo continuo del impacto ambiental y socioeconómico del proyecto, asegurando su viabilidad a largo plazo. A través de estas acciones, se busca mejorar la infraestructura turística, generar empleo y consolidar a la región como un destino atractivo, responsable y comprometido con el bienestar de la comunidad local.

    .titulo-sexto.color-secundario.mb-4(data-aos="fade-right")
      h5 Tabla 1.
      i Plan de acción 
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="En la tabla 1 se presenta el plan de acción, el cual se basa en la investigación del mercado para comprender la demanda turística y definir un concepto atractivo. Se diseña la oferta turística, considerando experiencias y alianzas estratégicas. La promoción se enfoca en marketing digital y eventos sectoriales. La sostenibilidad es clave, asegurando impacto ambiental y social positivo. Un plan financiero sólido garantiza la viabilidad económica. La implementación incluye infraestructura, capacitación y sistemas de gestión. Finalmente, el monitoreo permite evaluar el desempeño y optimizar estrategias.")
        thead
          tr(data-aos="fade-right")
            th(style="background-color: #D1E1DD; width: 18%; font-size: 18px;") Plan de acción
            th(style="background-color: #D1E1DD; width: 18%; font-size: 18px;") Objetivo
            th(style="background-color: #D1E1DD; width: 46%; font-size: 18px;") Acciones
            th(style="background-color: #D1E1DD; width: 18%; font-size: 18px;") Resultado esperado
        tbody
          tr(data-aos="fade-right")
            td Investigación y análisis del mercado
            td Comprender la demanda turística y las características de los visitantes potenciales.
            td 
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Realizar estudios de mercado para identificar segmentos de turistas (intereses, presupuesto y estacionalidad).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Analizar la competencia y las ofertas similares en la región.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Identificar tendencias de turismo (ecoturismo, cultural, aventura y gastronómico).
            td Reporte de análisis de mercado y perfil de los turistas objetivo.
          tr(data-aos="fade-right")
            td Definición del concepto y objetivos del proyecto
            td Establecer una visión clara del proyecto turístico y sus metas a largo plazo.
            td 
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Determinar el tipo de turismo (aventura, cultural, gastronómico, etc.).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Fijar objetivos específicos (visitantes, satisfacción e impacto económico).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Definir el valor diferencial del proyecto frente a la competencia.
            td Documento de misión, visión y objetivos del proyecto.
          tr(data-aos="fade-right")
            td Planificación del producto turístico
            td Diseñar las experiencias, servicios y productos que se ofrecerán a los turistas.
            td
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Desarrollar itinerarios, actividades y servicios específicos (recorridos, alojamiento, transporte y guías).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Crear alianzas con proveedores locales (hoteles, restaurantes y transportistas).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Planificar la infraestructura turística (centro de visitantes, señalización y puntos de información).
            td Plan detallado de experiencias y servicios turísticos.
          tr(data-aos="fade-right")
            td Plan de #[em marketing] y promoción
            td Dar a conocer el proyecto y atraer al turista objetivo.
            td
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Diseñar una identidad visual y marca atractiva.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  p.mb-0 Implementar estrategias de #[em marketing] digital y tradicional (redes sociales, sitio web, #[em blogs] o #[em influencers]).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Planificar promociones y descuentos de lanzamiento.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Participar en ferias y eventos turísticos.
            td Estrategia de #[em marketing] con cronograma y presupuesto.
          tr(data-aos="fade-right")
            td Evaluación de impacto ambiental y social
            td Garantizar que el proyecto sea sostenible y beneficie a la comunidad local.
            td
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Evaluar el impacto ambiental para minimizar daños al ecosistema.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Aplicar prácticas de turismo sostenible (reducción de residuos o conservación de recursos).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Crear programas de empleo y participación comunitaria.
            td Plan de sostenibilidad y compromiso social del proyecto.
          tr(data-aos="fade-right")
            td Plan financiero
            td Estimar la inversión inicial y asegurar la viabilidad económica.
            td
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Determinar costos de desarrollo, operación y mantenimiento.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  p.mb-0 Definir un modelo de ingresos (tarifas, servicios adicionales o #[em souvenirs]).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Identificar fuentes de financiamiento (inversionistas, subvenciones y créditos).
            td Presupuesto detallado y plan de financiación.
          tr(data-aos="fade-right")
            td Desarrollo e implementación
            td Ejecutar la infraestructura y los servicios turísticos.
            td
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Construir y acondicionar las instalaciones necesarias.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Capacitar al personal en atención al cliente y seguridad.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Implementar sistemas de reservas y gestión de servicios.
            td Infraestructura y servicios listos para recibir turistas.
          tr(data-aos="fade-right")
            td Monitoreo y evaluación
            td Evaluar el rendimiento del proyecto y mejorar continuamente.
            td
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Establecer métricas de éxito (visitantes, satisfacción e ingresos).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Realizar encuestas de satisfacción.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #09614D;")
                  | Monitorear el impacto ambiental y ajustar prácticas si es necesario.
            td Informes periódicos de evaluación y optimización de estrategias.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Plan operativo para la implementación de un proyecto   
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 Elaborar un plan operativo para un proyecto turístico en Colombia requiere definir estrategias, recursos, tiempos y actividades concretas para garantizar su ejecución efectiva. En un país con gran diversidad cultural y riqueza natural, este proceso resulta clave para aprovechar el crecimiento del mercado turístico. A continuación, se presentan los pasos para su implementación:
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-boton
          div(numero="1" titulo="Definición de objetivos específicos")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Establecer objetivos claros, medibles y alcanzables, como aumentar visitantes, mejorar infraestructura o desarrollar experiencias culturales y ecológicas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                p.mb-0 #[b Ejemplo]: "Incrementar en un 20 % la afluencia de turistas nacionales e internacionales en el próximo año".
          div(numero="2" titulo="Descripción de actividades")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Desglosar cada objetivo en actividades concretas: creación de material promocional, mejoras de infraestructura, capacitación, desarrollo de paquetes turísticos, alianzas con operadores, etc.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Definir cómo cada actividad contribuye al logro del objetivo.
          div(numero="3" titulo="Asignación de responsables y recursos")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Designar responsables para cada actividad y definir roles específicos.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Identificar los recursos necesarios (financieros, humanos, materiales y tecnológicos).
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                p.mb-0 #[b Ejemplo]: responsable (agencia de #[em marketing] local) y recurso (presupuesto para anuncios digitales).
          div(numero="4" titulo="Cronograma de ejecución")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Establecer tiempos de inicio y finalización para cada actividad.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Utilizar herramientas como diagramas de Gantt para visualizar el desarrollo del proyecto.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Definir hitos clave para monitorear avances.
          div(numero="5" titulo="Presupuesto detallado")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Calcular costos por actividad y estimar el presupuesto total.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Desglosar gastos en categorías como publicidad, infraestructura, personal y logística.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Incluir una reserva presupuestaria para imprevistos.
          div(numero="6" titulo="Indicadores de evaluación y seguimiento")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Establecer KPI para medir el avance y éxito del proyecto, como el número de turistas atendidos, el nivel de satisfacción del cliente (mediante encuestas), los ingresos generados y el retorno de inversión.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Definir fechas de revisión y métodos de reporte.
          div(numero="7" titulo="Plan de mitigación de riesgos")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Identificar riesgos como problemas logísticos, condiciones climáticas o fluctuaciones en la demanda.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Desarrollar planes de contingencia. Ejemplo: "Si hay restricciones de viaje, ofrecer promociones a turistas nacionales".
          div(numero="8" titulo="Estrategia de comunicación")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                | Definir un plan de comunicación interna y externa para informar sobre los avances del proyecto.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #09614D;")
                p.mb-0 Establecer medios y frecuencia de comunicación con #[em stakeholders] como socios comerciales, inversionistas y organismos gubernamentales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img04.png' alt="Imagen decorativa")
        
    p Es fundamental cumplir con la normativa vigente en Colombia y garantizar la sostenibilidad del proyecto. Se recomienda incluir a la comunidad local en las actividades para fortalecer la identidad cultural y fomentar el desarrollo responsable del turismo.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
