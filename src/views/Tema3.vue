<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Componentes de un proyecto turístico
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p Un proyecto turístico en Colombia integra diversos elementos clave para garantizar su viabilidad, sostenibilidad y atractivo para los visitantes. En primer lugar, el diagnóstico y análisis de mercado permiten identificar las necesidades y preferencias de los turistas, así como las oportunidades y limitaciones del entorno. Esto incluye la evaluación de la infraestructura existente, como transporte, accesos y alojamiento, así como el análisis de la oferta de atractivos naturales, culturales e históricos. También se estudia la competencia en la región para definir estrategias de diferenciación.
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 La planificación y desarrollo de servicios turísticos es fundamental para ofrecer experiencias satisfactorias y seguras. Esto abarca la construcción y mejora de infraestructuras, incluyendo alojamientos, rutas de acceso, señalización y servicios básicos (agua, electricidad y saneamiento). Además, se prioriza la sostenibilidad ambiental, implementando prácticas de turismo responsable y conservación de los recursos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 Finalmente, el plan de #[em marketing] juega un papel clave en la promoción del destino. A través de campañas digitales y alianzas estratégicas con operadores turísticos, se busca atraer visitantes y posicionar la oferta en el mercado. Cada componente debe alinearse con las regulaciones locales para asegurar un proyecto rentable y con impacto positivo en la economía y la comunidad.
      
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Objetivos
    
    p.mb-5 Los objetivos de un proyecto turístico en Colombia deben seguir el modelo SMART, es decir, ser específicos, medibles, alcanzables, relevantes y temporales. Estos orientan el desarrollo del proyecto y aseguran su impacto positivo. A continuación, se presentan los principales objetivos:

    SlyderF.mb-5(columnas="col-lg-4 col-sm-6" data-aos="fade-right")
      .tarjeta.BGIMG02.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")
        .h4 Específicos
        p Deben definir con precisión qué se busca lograr.
        p.mb-0 #[b Ejemplo:] “Incrementar en un 20 % el número de turistas en Antioquia en el próximo año”.
      .tarjeta.BGIMG02.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema3/img04.svg' alt="Imagen decorativa")
        .h4 Medibles
        p Deben incluir indicadores cuantificables.
        p.mb-0 #[b Ejemplo:] “Aumentar en un 30 % las reservas hoteleras en San Andrés en seis meses”.
      .tarjeta.BGIMG02.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema3/img05.svg' alt="Imagen decorativa")
        .h4 Alcanzables
        p Deben ser realistas según los recursos disponibles.
        p.mb-0 #[b Ejemplo:] “Posicionar la oferta ecoturística de la región entre las cinco más destacadas del país en dos años”.
      .tarjeta.BGIMG02.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
        .h4 Relevantes
        p Deben alinearse con el potencial turístico y el beneficio local.
        p.mb-0 #[b Ejemplo:] “Generar 50 empleos directos mediante la promoción de actividades culturales y gastronómicas”.
      .tarjeta.BGIMG02.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
        .h4 Temporales
        p Deben tener un plazo definido para su cumplimiento.
        p.mb-0 #[b Ejemplo:] “Lograr 5.000 visitantes en el segundo año de implementación”.

    p.mb-5 Para aplicar estos principios, se presenta un ejemplo de objetivos para un proyecto turístico en Colombia:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img08.svg' alt='Imagen decorativa')
          .tarjeta.BGR05.p-4.ps-5
            .ms-4
              p.mb-0 #[strong Objetivo general]: posicionar a la región como un destino turístico sostenible y reconocido por su biodiversidad y cultura en un plazo de cinco años.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img09.svg' alt='Imagen decorativa')
          .tarjeta.BGR06.p-4.ps-5
            .ms-4
              .h4 Objetivos específicos:
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-plane-departure.tca
                  | Aumentar en un 25 % la afluencia de turistas en dos años mediante promoción digital y alianzas estratégicas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-plane-departure.tca
                  | Desarrollar tres nuevas rutas ecoturísticas con guías locales capacitados en seis meses.
                li(style="margin-bottom: 2px")
                  i.fas.fa-plane-departure.tca
                  | Capacitar a 100 residentes en turismo sostenible y atención al cliente en el próximo año.
                li(style="margin-bottom: 2px")
                  i.fas.fa-plane-departure.tca
                  p.mb-0 Implementar un plan de #[em marketing] cultural y gastronómico que incremente en un 30 % las ventas de productos locales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img10.png' alt="Imagen decorativa")

    p Todos los objetivos deben estar alineados con las políticas de turismo sostenible en Colombia, promoviendo el respeto por el entorno, la cultura y el bienestar de las comunidades locales.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Metas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Plantear metas para un proyecto turístico en Colombia requiere un enfoque claro y estratégico, dado que el sector turístico es clave en la economía del país. Las metas deben ser específicas, medibles, alcanzables, relevantes y con un tiempo definido (SMART), además de alinearse con las particularidades del entorno y los objetivos locales.
        p.mb-0 A continuación, se presentan ejemplos concretos de metas aplicadas a un proyecto turístico en una región específica:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img11.png' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 2.
          i Metas estratégicas para un proyecto turístico
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="En la tabla 2, se presentan ejemplos de metas aplicadas a un proyecto turístico en Colombia, destacando su alineación con objetivos estratégicos como sostenibilidad, desarrollo de infraestructura, promoción del destino y beneficio para la comunidad local.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #D1E1DD; width: 30%; font-size: 18px;") Meta
                th(style="background-color: #D1E1DD; width: 70%; font-size: 18px;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td Conocer el mercado objetivo
                td Aumentar en un 25 % la llegada de turistas internacionales a Cartagena, enfocándose en visitantes de Europa y Norteamérica, mediante campañas de promoción digital en el primer año.
              tr(data-aos="fade-right")
                td Identificar y destacar la oferta local
                td Diseñar y comercializar tres rutas ecoturísticas en el Eje Cafetero, resaltando la biodiversidad y la cultura cafetera, para atraer al menos 2.000 turistas adicionales en la próxima temporada alta.
              tr(data-aos="fade-right")
                td Apuntar a la sostenibilidad
                td Lograr que el 80 % de los operadores turísticos en el Parque Nacional Natural Tayrona implementen estrategias de turismo sostenible para 2025, reduciendo el uso de plásticos y promoviendo prácticas de conservación.
              tr(data-aos="fade-right")
                td Fortalecer la infraestructura y el servicio
                td Capacitar al 100 % del personal de atención turística en San Andrés en servicio al cliente y sostenibilidad ambiental durante los primeros seis meses de operación del proyecto.
              tr(data-aos="fade-right")
                td Incluir metas de #[em marketing] y visibilidad digital
                td Alcanzar 10.000 seguidores en redes sociales y aumentar en un 15 % las reservas a través del sitio web del proyecto en su primer año.
              tr(data-aos="fade-right")
                td Medir el impacto económico y social en la comunidad local
                td Generar al menos 100 empleos directos para habitantes de la región de La Guajira en el primer año del proyecto, priorizando a comunidades indígenas Wayuu.

    p El establecimiento de estas metas permitirá mantener el proyecto enfocado, evaluar su progreso de manera efectiva y tomar decisiones estratégicas para garantizar el crecimiento sostenible del turismo en Colombia.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Actividades
    
    p.mb-5 Para el desarrollo de un proyecto turístico en Colombia, es clave estructurar actividades alineadas con el contexto, los recursos locales y los principios de sostenibilidad. La siguiente tabla presenta las principales actividades junto con sus tareas específicas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 3.
          i Actividades clave en un proyecto turístico en Colombia
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="En la tabla 3, se presentan las principales actividades necesarias para la planificación y ejecución de un proyecto turístico en Colombia. Se incluyen tareas clave como la investigación del mercado, la definición de objetivos, el diseño de experiencias, la planificación operativa, la integración de la comunidad y la evaluación del impacto.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #D1E1DD; width: 30%; font-size: 18px;") Actividad
                th(style="background-color: #D1E1DD; width: 70%; font-size: 18px;") Tareas principales
            tbody
              tr(data-aos="fade-right")
                td Investigación y diagnóstico
                td Identificar el perfil del turista, evaluar recursos locales, analizar impacto ambiental y estudiar la competencia.
              tr(data-aos="fade-right")
                td Definición de objetivos
                td Establecer metas generales y específicas, considerando impacto turístico, económico y social.
              tr(data-aos="fade-right")
                td Diseño de experiencias
                td Planificar actividades culturales, ecoturísticas, de aventura y comunitarias.
              tr(data-aos="fade-right")
                td Planificación y ejecución
                td Crear un calendario, asignar recursos y definir estrategias de #[em marketing].
              tr(data-aos="fade-right")
                td Sostenibilidad y comunidad
                td Aplicar prácticas responsables, integrar a la comunidad y fomentar la educación ambiental.
              tr(data-aos="fade-right")
                td Evaluación y mejora
                td Recoger retroalimentación, medir impactos y ajustar las actividades para optimizar resultados.

    p.mb-5 Para consolidar la aplicación de estos principios, a continuación, se presenta un ejemplo de proyecto turístico en la Zona Cafetera de Colombia:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img12.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100
            p.mt-4.mb-0 #[b Actividades propuestas]: recorridos por fincas cafeteras, talleres sobre la elaboración de café, caminatas ecológicas y observación de flora y fauna.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img13.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100
            p.mt-4.mb-0 #[b Objetivo específico]: promover el turismo sostenible y fortalecer la economía local mediante la difusión de productos autóctonos y la participación activa de comunidades cafeteras.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img14.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100
            p.mt-4.mb-0 #[b Calendario]: programación de actividades diarias y eventos especiales en fechas clave para la cultura cafetera en Colombia.
    p Este ejemplo demuestra cómo la planificación estratégica y la sostenibilidad pueden integrarse en un proyecto turístico para generar beneficios económicos, sociales y ambientales en la región.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Cronograma
    
    p El cronograma de un proyecto turístico en Colombia debe estructurarse para abarcar todas las etapas esenciales, desde la planificación inicial hasta la implementación y la evaluación. A continuación, se presenta una estructura general que puede ajustarse según las especificaciones del proyecto:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 4.
          i Cronograma de desarrollo de un proyecto turístico en Colombia
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="En la tabla 4, se presenta el cronograma detallado para el desarrollo de un proyecto turístico en Colombia, desglosado en diferentes fases, desde la investigación inicial hasta el seguimiento y evaluación continua, con actividades clave y plazos definidos.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #D1E1DD; width: 20%; font-size: 18px;") Tema
                th(style="background-color: #D1E1DD; width: 20%; font-size: 18px;") Duración
                th(style="background-color: #D1E1DD; width: 60%; font-size: 18px;") Actividades
            tbody
              tr(data-aos="fade-right")
                td Investigación y análisis
                td 1-3 meses
                td 
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Análisis del mercado turístico en Colombia.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Identificación de tendencias y demanda turística.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Investigación sobre normativas y regulaciones locales.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Evaluación del impacto ambiental y social.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Consulta con expertos locales y actores clave.
              tr(data-aos="fade-right")
                td Planificación del proyecto
                td 1-2 meses.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Definición de los objetivos del proyecto.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Elaboración del plan de negocios (estudio de viabilidad y análisis financiero).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      p.mb-0 Diseño del plan de #[em marketing] y estrategia de marca.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Determinación de la ubicación y requisitos de permisos.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Asignación de presupuesto y recursos.
              tr(data-aos="fade-right")
                td Diseño del proyecto
                td 1-3 meses.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Desarrollo del diseño arquitectónico (si aplica).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Definición de la infraestructura y necesidades tecnológicas.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Planificación de actividades y rutas turísticas.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Estrategia de gestión ambiental y sostenibilidad.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Validación de diseños y conceptos con partes interesadas.
              tr(data-aos="fade-right")
                td Obtención de permisos y licencias
                td 2-4 meses.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Obtención de permisos ambientales y de construcción.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Cumplimiento de normativas de seguridad y salud.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Gestión de licencias turísticas y certificaciones.
              tr(data-aos="fade-right")
                td Financiación
                td 1-3 meses (puede coincidir con otras fases).
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Identificación de fuentes de financiamiento.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Negociación con bancos, inversionistas y entidades gubernamentales.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Acceso a subsidios o apoyos estatales y turísticos.
              tr(data-aos="fade-right")
                td Desarrollo y construcción
                td 6-12 meses.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Construcción de infraestructuras turísticas (hoteles, senderos y servicios).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Implementación de servicios básicos (electricidad, agua. Gas y comunicaciones).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Instalación de señalización y elementos de accesibilidad.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Capacitación del personal y voluntarios.
              tr(data-aos="fade-right")
                td #[em Marketing] y promoción
                td 3-6 meses antes de la apertura.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      p.mb-0 Creación de campañas de #[em marketing] digital y tradicional.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Alianzas con agencias de turismo y redes locales.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Estrategias en redes sociales y medios de comunicación.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Participación en ferias y eventos de turismo.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Diseño de paquetes y promociones de lanzamiento.
              tr(data-aos="fade-right")
                td Pruebas y evaluación de calidad
                td 1-2 meses antes de la apertura.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Realización de pruebas piloto y visitas de prueba.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Ajuste de servicios según la retroalimentación inicial.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Implementación de controles de calidad y seguridad.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Pruebas de sistemas de gestión y reservas.
              tr(data-aos="fade-right")
                td Apertura oficial
                td 1 mes (eventos de lanzamiento).
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Evento de lanzamiento y promoción de la inauguración.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      p.mb-0 Coordinación de #[em tours] iniciales y experiencias piloto.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Evaluación y optimización de procesos de servicio.
              tr(data-aos="fade-right")
                td Seguimiento y evaluación continua
                td Permanente.
                td
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Monitoreo del desempeño financiero, ambiental y social.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Encuestas de satisfacción y retroalimentación de visitantes.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      p.mb-0 Evaluación y ajuste del plan de #[em marketing].
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Generación de informes de resultados para inversionistas y actores clave.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #09614D;")
                      | Implementación de mejoras y expansiones según los resultados.

    p Cada fase debe incluir un desglose de tareas, responsables, plazos y un sistema de control y monitoreo para garantizar el éxito del proyecto.

</template>

<script>
export default {
  name: 'Tema3',
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
