<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.BG01.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/introduccion/img01.png' alt="Imagen decorativa")
        .col-lg-10(data-aos="fade-left")
          p.mb-0 El desarrollo de un proyecto turístico requiere una planificación estratégica que optimice los recursos disponibles y genere un impacto positivo en la comunidad local. Este proceso involucra un análisis detallado, el respaldo de instituciones especializadas que proporcionan financiamiento y apoyo logístico, y la definición de planes de acción y operativos que aseguren la viabilidad y sostenibilidad del proyecto. Los componentes esenciales incluyen objetivos, metas, actividades y un cronograma que permiten monitorear el progreso, mientras que los indicadores de gestión aseguran el alineamiento de las metas con las actividades programadas. Además, se debe considerar el impacto económico y social en la comunidad, respaldado por una adecuada documentación y una planificación financiera que identifique recursos, costos y gastos, garantizando así la viabilidad económica y la sostenibilidad del proyecto. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bYVqE3hyTIA?si=n7qsY_kL5qNmOBJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
