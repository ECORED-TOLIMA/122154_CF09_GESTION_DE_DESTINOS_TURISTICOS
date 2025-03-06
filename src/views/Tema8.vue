<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Presupuesto

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema8/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Este apartado aborda de manera integral el proceso de elaboración de un presupuesto para un proyecto turístico, un componente fundamental para garantizar la correcta planificación financiera y operativa. La creación de un presupuesto detallado y bien estructurado es esencial para evaluar la viabilidad económica del proyecto, ya que permite prever los recursos necesarios, identificar las fuentes de ingreso y gestionar de forma eficiente los costos. Un presupuesto bien elaborado no solo establece las bases para el éxito financiero, sino que también brinda una visión clara sobre el desempeño esperado, ayudando a tomar decisiones estratégicas informadas.
        .cajon.color-secundario.p-4
          p.mb-0 La capacidad de un proyecto turístico para generar ingresos sostenibles a largo plazo depende en gran medida de la precisión y eficacia con que se gestione su presupuesto. Es crucial que el presupuesto cubra todas las áreas clave, desde los costos de inversión inicial hasta los gastos operativos recurrentes, y contemple una planificación adecuada para mitigar riesgos financieros. Además el presupuesto debe servir como una herramienta de control y seguimiento, permitiendo ajustes durante la ejecución del proyecto para optimizar el uso de los recursos y maximizar la rentabilidad. Al realizar este proceso de manera meticulosa, se fortalece la probabilidad de éxito del proyecto y se fomenta la confianza de inversionistas y socios estratégicos.

    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Generalidades y aspectos clave

    p.mb-5 Para elaborar el presupuesto de un proyecto turístico, se deben considerar los siguientes puntos clave:
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
          div(titulo="Identificación de costos")
            p.mb-0 Es fundamental clasificar los costos asociados al proyecto, incluyendo tanto los costos fijos como variables, así como los costos de inversión inicial.
          div(titulo="Fuentes de financiamiento")
            p.mb-0 Se deben identificar las fuentes de financiamiento disponibles, como fondos propios, préstamos o inversores.
          div(titulo="Proyecciones de ingresos")
            p.mb-0 Establecer proyecciones realistas de ingresos basadas en la estimación de la demanda de los servicios turísticos, los precios de los servicios, y el volumen de ventas esperado.
          div(titulo="Costos operativos")
            p.mb-0 Detallar los costos operativos recurrentes, como salarios, materiales, mantenimiento, #[em marketing] y otros gastos operacionales.
          div(titulo="Rentabilidad y análisis financiero")
            p.mb-0 Evaluar la rentabilidad del proyecto, mediante la comparación de los costos estimados con los ingresos proyectados, y el análisis de indicadores como el punto de equilibrio, el retorno sobre la inversión (ROI), y el flujo de caja.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema8/img02.png' alt="Imagen decorativa")

    p Al seguir este proceso, se puede tener una visión clara de los recursos necesarios y el potencial económico del proyecto turístico, lo que permitirá tomar decisiones informadas y ajustar el enfoque según sea necesario.

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Metodología
    
    p.mb-5 Para elaborar un presupuesto adecuado en el contexto de un proyecto turístico, se sigue una metodología estructurada que asegura la cobertura de todas las áreas relevantes y facilita la toma de decisiones financieras. Esta metodología incluye los siguientes pasos:

    .BGIMG05.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Definir objetivos y alcance
            p.mb-0 Es fundamental establecer claramente los objetivos y el alcance del proyecto, lo cual orienta la identificación de los servicios y actividades que se llevarán a cabo. Esto permitirá tener una visión clara de lo que se va a ofrecer y cómo se deben planificar los costos asociados.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img03.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Desglose de actividades
            p.mb-0 El proyecto debe ser desglosado en actividades específicas que se ejecutarán a lo largo de su desarrollo. Cada una de estas actividades debe tener asignados sus respectivos costos y recursos, lo que facilita la planificación detallada y el control financiero.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img04.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Estimación de costos
            p.mb-0 En este paso, se deben estimar los costos tanto directos como indirectos del proyecto. Los costos directos incluyen aquellos vinculados de manera directa con la ejecución del proyecto, como construcción, #[em marketing], y adquisición de equipamiento. Los costos indirectos, por su parte, comprenden gastos generales, administración, transporte, entre otros, que no están directamente relacionados con la actividad principal pero que son necesarios para su ejecución.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img05.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Análisis de recursos
            p.mb-0 Es crucial identificar todos los recursos necesarios para la implementación del proyecto. Estos incluyen tanto los recursos materiales (como equipos y suministros) como el personal requerido y la tecnología necesaria. A cada uno de estos recursos se le debe asignar un valor económico adecuado para determinar el costo total de su uso en el proyecto.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img06.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Cronograma de desembolsos
            p.mb-0 El presupuesto debe estar acompañado de un cronograma que detalle los desembolsos previstos a lo largo del proyecto. Este cronograma debe alinearse con las fases de ejecución del proyecto, garantizando que los fondos se liberen en el momento adecuado y en la cantidad necesaria para cada etapa.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img07.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Contingencias y riesgos
            p.mb-0 Para manejar posibles imprevistos, es recomendable incluir un margen de contingencia dentro del presupuesto. Además, se debe realizar un análisis de los riesgos potenciales, evaluando cómo estos pueden afectar el presupuesto y qué medidas se pueden tomar para mitigarlos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img08.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Seguimiento y control
            p.mb-0 Es esencial monitorear constantemente los gastos a medida que se avanza en el proyecto. Este seguimiento permitirá identificar desviaciones significativas respecto al presupuesto inicial, lo cual facilita tomar acciones correctivas oportunas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img09.jpg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.px-4.order-lg-1.order-2
            .h4.mt-5 Herramientas adicionales
            p.mb-0 Para optimizar tanto la elaboración como el control del presupuesto, se recomienda el uso de herramientas tecnológicas, como hojas de cálculo, #[em software] de gestión de proyectos y plataformas financieras. Estas herramientas permiten una gestión más precisa y eficiente de los recursos y los gastos, facilitando la toma de decisiones informadas a lo largo del proceso.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema8/img10.jpg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 Esta metodología permite que los responsables del proyecto, tengan una visión clara de los recursos financieros necesarios y pueden asegurar la viabilidad económica del proyecto turístico.
      
    separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Elementos clave del presupuesto turístico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema8/img11.png' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 El presupuesto turístico debe considerar varios elementos clave que permitan una gestión adecuada de los recursos y aseguren el éxito financiero del proyecto. Estos elementos son fundamentales para elaborar un presupuesto realista y eficaz, que sirva como guía en la toma de decisiones. A continuación, se describen los elementos clave que deben integrarse:
    
    .BGM10.px-md-5.px-4
      PasosA.color-acento-contenido.mb-5(tipo="l")
        div(data-aos="fade-left")
          .h4 Ingresos proyectados
          p.mb-0 Estimar los ingresos futuros es un paso crucial en la elaboración del presupuesto. Esto incluye la proyección de ingresos provenientes de las ventas de servicios turísticos, como alojamiento, transporte, actividades recreativas, o paquetes turísticos. La estimación debe basarse en datos de mercado, tendencias de consumo y la capacidad de generación de ingresos del proyecto.
        div(data-aos="fade-right")
          .h4 Costos fijos y variables
          p.mb-0 Es fundamental distinguir entre los costos fijos, aquellos que no cambian independientemente del nivel de actividad (como alquileres y salarios fijos), y los costos variables, que dependen de la actividad del proyecto (como suministros y comisiones por ventas). El presupuesto debe reflejar ambos tipos de costos para asegurar una visión completa de los gastos.
        div(data-aos="fade-left")
          .h4 Financiamiento y fuentes de capital
          p.mb-0 Un presupuesto adecuado debe identificar las fuentes de financiamiento necesarias para cubrir los costos iniciales y operativos del proyecto. Esto puede incluir fondos propios, préstamos, inversionistas o subsidios. Es importante determinar cuánto capital es necesario y cómo se va a obtener, además de considerar las condiciones y plazos de pago de los préstamos, si es el caso.
        div(data-aos="fade-right")
          .h4 Estrategia de precios
          p.mb-0 La definición de precios adecuados para los servicios ofrecidos es esencial para garantizar la rentabilidad del proyecto. Se debe tener en cuenta el mercado objetivo, la competencia, los costos de operación y el margen de ganancia deseado. Una estrategia de precios bien definida permitirá maximizar los ingresos sin comprometer la competitividad del proyecto.
        div(data-aos="fade-left")
          .h4 Gastos operativos
          p.mb-0 Los gastos operativos incluyen todos los costos relacionados con el funcionamiento diario del proyecto, tales como la compra de materiales, el pago de salarios, el mantenimiento de infraestructuras y el costo de la comercialización. Estos gastos deben estar claramente definidos para evitar sorpresas durante la ejecución del proyecto.
        div(data-aos="fade-right")
          .h4 Provisión para imprevistos
          p.mb-0 Los proyectos turísticos, como cualquier otra iniciativa, pueden enfrentar imprevistos. Por lo tanto, es recomendable establecer una provisión dentro del presupuesto para cubrir situaciones inesperadas, como fluctuaciones económicas, cambios en la demanda, o costos adicionales debido a factores externos.
        div(data-aos="fade-left")
          .h4 Indicadores de rendimiento financiero
          p.mb-0 Para evaluar el desempeño financiero del proyecto, se deben definir indicadores clave de rendimiento (KPIs), como el retorno sobre la inversión (ROI), el margen de beneficio bruto, el punto de equilibrio y otros indicadores relevantes. Estos KPIs permiten monitorear la salud financiera del proyecto y hacer ajustes en el presupuesto si es necesario.
        div(data-aos="fade-right")
          .h4 Impacto económico y social
          p.mb-0 Un buen presupuesto también debe considerar el impacto que el proyecto tendrá en la comunidad local, la economía regional y el medio ambiente. Esto es especialmente relevante en los proyectos turísticos, donde la sostenibilidad y la responsabilidad social son factores clave. Incluir medidas para mitigar impactos negativos y promover beneficios a largo plazo es fundamental.

    p Este enfoque proporciona un marco integral para abordar todas las áreas clave al elaborar un presupuesto turístico, ayudando a garantizar que el proyecto sea financieramente viable, sostenible y alineado con sus objetivos estratégicos.

    separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Evaluación y ajustes del presupuesto turístico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La evaluación constante del presupuesto durante todo el ciclo del proyecto es esencial para asegurar que el proyecto se mantenga dentro de los márgenes establecidos y que los recursos se utilicen de manera eficiente. Además, deben realizarse ajustes según sea necesario para responder a cambios en el entorno, en la demanda de servicios turísticos o en los costos operativos. A continuación, se describen las prácticas clave para llevar a cabo la evaluación y los ajustes del presupuesto turístico:
        LineaTiempoD.color-acento-boton
          div(numero="1" titulo="Monitoreo continuo de los gastos")
            p.mb-0 Es importante realizar un seguimiento constante de los gastos a lo largo del proyecto para asegurarse de que se ajusten al presupuesto inicial. Este monitoreo permite identificar desviaciones en tiempo real y tomar medidas correctivas antes de que se conviertan en problemas significativos. La implementación de un sistema de control financiero, como un #[em software] de gestión de proyectos, facilita la visibilidad de los gastos y el rendimiento financiero del proyecto.
          div(numero="2" titulo="Revisión periódica de los ingresos")
            p.mb-0 Además de controlar los gastos, es crucial evaluar los ingresos proyectados frente a los ingresos reales generados. Las proyecciones pueden necesitar ajustes si la demanda de servicios turísticos varía debido a factores estacionales, económicos o sociales. Una revisión periódica permite realizar modificaciones en las estrategias de #[em marketing], precios y ventas para maximizar los ingresos durante el ciclo del proyecto.
          div(numero="3" titulo="Identificación y análisis de desviaciones")
            p.mb-0 Cuando se identifican desviaciones significativas entre el presupuesto original y la ejecución real, es necesario analizar sus causas. Las desviaciones pueden ser tanto positivas como negativas: si los costos son más bajos de lo esperado, podrían aprovecharse para reinvertir en el proyecto o mejorar la rentabilidad; si son más altos, se deben revisar los procesos operativos, optimizar recursos y buscar alternativas para reducir costos.
          div(numero="4" titulo="Ajustes de planificación y control")
            p.mb-0 En función de los resultados obtenidos del monitoreo y la revisión, deben realizarse ajustes en la planificación financiera. Esto puede incluir la redistribución de recursos, la revisión de los plazos de pago, la actualización de las estimaciones de ingresos o la renegociación de costos con proveedores. Además, los ajustes deben ser documentados para mantener la transparencia y garantizar que todas las partes involucradas estén al tanto de las modificaciones.
          div(numero="5" titulo="Análisis de rentabilidad y viabilidad continua")
            p.mb-0 Durante la ejecución del proyecto, es necesario evaluar de manera continua la rentabilidad y la viabilidad del mismo. Esto se puede hacer utilizando indicadores clave de rendimiento (KPIs), como la rentabilidad operativa, el flujo de caja, el punto de equilibrio y el retorno de inversión (ROI). Si los resultados no son los esperados, es crucial analizar si el proyecto es sostenible a largo plazo y tomar decisiones estratégicas para mejorar su rentabilidad.
          div(numero="6" titulo="Informe de seguimiento financiero")
            p.mb-0 Un informe regular de seguimiento financiero proporciona una visión clara y actualizada de la situación económica del proyecto. Este informe debe incluir un análisis detallado de los ingresos, los costos, las desviaciones, los ajustes realizados y los próximos pasos. Los informes deben ser compartidos con todas las partes interesadas para asegurar la transparencia y el control adecuado del proyecto.
          div(numero="7" titulo="Retroalimentación y mejora continua")
            p.mb-0 Los resultados de la evaluación del presupuesto deben servir como base para la mejora continua de futuros proyectos. Las lecciones aprendidas durante el ciclo de vida del proyecto pueden ayudar a afinar los procesos de planificación y gestión financiera, mejorando la precisión de las proyecciones y la efectividad de los controles financieros en el futuro.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema8/img12.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 Este apartado subraya la importancia de un enfoque dinámico en la gestión financiera del proyecto turístico, donde la flexibilidad y la capacidad de adaptación son claves para garantizar el éxito económico y la sostenibilidad del proyecto.
    
    separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Herramientas adicionales para la elaboración y control del presupuesto
    
    p.mb-5 Para elaborar un presupuesto para un proyecto turístico, se emplean varias herramientas que ayudan a estimar los costos, administrar recursos y prever ingresos. Estas son algunas de las herramientas y técnicas clave

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 9.
          i Herramientas para presupuestos
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="En la tabla 9, se presenta una selección de herramientas clave para la elaboración, seguimiento y control de presupuestos en proyectos turísticos. Cada herramienta se describe brevemente en cuanto a sus funcionalidades y beneficios para optimizar la gestión financiera y mejorar la toma de decisiones.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #D1E1DD; width: 30%; font-size: 18px;") Herramienta
                th(style="background-color: #D1E1DD; width: 70%; font-size: 18px;") Descripción
            tbody
              tr(data-aos="fade-right")
                td Hojas de cálculo (Excel y Google Sheets)
                td Las hojas de cálculo siguen siendo una de las herramientas más utilizadas para la elaboración de presupuestos. Ofrecen flexibilidad para personalizar los modelos de presupuesto según las necesidades del proyecto, y permiten llevar un control detallado de los costos e ingresos. Además, su facilidad de uso y las funciones avanzadas, como las fórmulas, gráficos y tablas dinámicas, hacen que las hojas de cálculo sean una opción accesible para proyectos de cualquier tamaño.
              tr(data-aos="fade-right")
                td #[em Software] de gestión de proyectos (Trello, Asana y Monday.com)
                td Estos programas permiten no solo la planificación de tareas y actividades, sino también la asignación de recursos financieros a cada fase del proyecto. Son ideales para proyectos colaborativos, ya que permiten que el equipo de trabajo acceda en tiempo real a la información actualizada sobre el presupuesto y los avances del proyecto. Además, integran herramientas de seguimiento que ayudan a controlar los costos y plazos de manera más eficiente.
              tr(data-aos="fade-right")
                td Plataformas de gestión financiera (QuickBooks, Xero y FreshBooks)
                td Las plataformas de gestión financiera están diseñadas para automatizar la contabilidad y el control de los presupuestos. Estas herramientas ofrecen funcionalidades como la conciliación bancaria, la generación de informes financieros, y la integración con cuentas bancarias y proveedores. Son útiles para proyectos turísticos de mayor envergadura, ya que proporcionan un control detallado de los flujos de caja, la rentabilidad y los impuestos, y pueden integrarse con otras herramientas de gestión.
              tr(data-aos="fade-right")
                td #[em Software] de planificación y análisis financiero (Microsoft Project, SAP y Oracle)
                td Estos sistemas son más sofisticados y se utilizan principalmente en proyectos grandes y complejos. Permiten realizar una planificación financiera más detallada, gestionar múltiples recursos y seguir el avance del presupuesto en tiempo real. También ofrecen capacidades avanzadas de análisis de datos, lo que permite identificar tendencias, prever necesidades de financiamiento y ajustar los costos según los resultados obtenidos.
              tr(data-aos="fade-right")
                td Aplicaciones de contabilidad en la nube (Zoho Books y Wave)
                td Las aplicaciones de contabilidad en la nube permiten gestionar el presupuesto de manera remota y colaborar con diferentes miembros del equipo sin importar la ubicación. Estas aplicaciones son especialmente útiles para pequeñas y medianas empresas turísticas, ya que ofrecen funciones de facturación, seguimiento de gastos, y generación de informes financieros, todo en una plataforma accesible desde cualquier dispositivo.
              tr(data-aos="fade-right")
                td Sistemas de control de inventarios (TradeGecko y Stock&Buy)
                td En proyectos turísticos que involucren la gestión de productos o servicios tangibles, los sistemas de control de inventarios son esenciales para garantizar una correcta estimación de los costos de los recursos. Estas herramientas ayudan a mantener un registro detallado de los inventarios, el uso de materiales, y el costo de los productos, lo que facilita la planificación del presupuesto y permite un control adecuado de los costos operativos.
              tr(data-aos="fade-right")
                td Herramientas de análisis de rentabilidad (ProfitCents y PlanGuru)
                td Estas herramientas están orientadas a evaluar la rentabilidad y viabilidad financiera de proyectos. A través de simulaciones y análisis de escenarios, permiten determinar el retorno de inversión (ROI) y otros indicadores clave de rendimiento. Son fundamentales para realizar una evaluación precisa del impacto financiero a largo plazo de un proyecto turístico y para ajustar las estrategias según los resultados obtenidos.
              tr(data-aos="fade-right")
                td #[em Software] de control de riesgos (RiskWatch y Active Risk Manager)
                td La gestión de riesgos financieros es esencial para asegurar que el proyecto se mantenga dentro de los márgenes previstos. Las herramientas de control de riesgos ayudan a identificar, evaluar y mitigar los riesgos financieros que puedan afectar el presupuesto. Permiten realizar un análisis detallado de los posibles imprevistos y elaborar estrategias de contingencia para minimizar su impacto.

    p Estas herramientas no solo facilitan la organización y seguimiento de los recursos financieros, sino que también ayudan a mejorar la eficiencia en la gestión del presupuesto, lo que aumenta las probabilidades de éxito del proyecto turístico.

  </template>

<script>
export default {
  name: 'Tema8',
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
