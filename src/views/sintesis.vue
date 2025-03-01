<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe un enfoque general del componente formativo Estructuración del proyecto turístico, el cual busca generar actividades sostenibles que impulsen el crecimiento económico y cultural de una región. Para ello, se desarrollan planes de acción y operativos que incluyen estrategias enfocadas en infraestructura, marketing y capacitación local. La implementación de estas estrategias se evalúa mediante indicadores de gestión que permiten medir el rendimiento y mejorar la productividad local. El proyecto se organiza a través de objetivos, metas, actividades y cronogramas, y se respalda con documentos clave como la hoja de ruta y el plan de negocios. La gestión financiera, esencial para la viabilidad del proyecto, se sustenta en recursos provenientes de fuentes públicas y privadas, y se maneja mediante un presupuesto detallado que cubre costos y gastos. Las normas financieras aseguran la transparencia y un uso adecuado de los fondos, promoviendo un impacto económico y social positivo en la comunidad.

    .row.justify-content-center
      .col-lg-12.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El componente formativo Estructuración del proyecto turístico propone un enfoque integral para el desarrollo de proyectos que fomenten el crecimiento económico y cultural de las regiones. A través de la planificación adecuada, la identificación de recursos financieros y la implementación de indicadores de gestión, se busca garantizar la viabilidad y sostenibilidad del proyecto, asegurando un impacto positivo en la comunidad local.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
