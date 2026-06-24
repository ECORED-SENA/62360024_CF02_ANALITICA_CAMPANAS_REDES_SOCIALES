<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .box___style_1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La transformación digital ha cambiado la manera en que las organizaciones desarrollan sus estrategias de comunicación, #[i marketing] y relacionamiento con las audiencias. Las redes sociales y las plataformas digitales se han consolidado como espacios fundamentales para la difusión de contenidos, la promoción de productos y la interacción con los usuarios. En este contexto, la analítica digital se convierte en una herramienta indispensable para comprender el comportamiento de las audiencias, evaluar el rendimiento de las campañas y apoyar la toma de decisiones basada en información confiable.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
      .row.justify-content-center.align-items-center
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
        .col-xl
          p Este componente formativo aborda los fundamentos de la optimización de campañas digitales, el análisis de conversiones, la interpretación de métricas y el uso de herramientas analíticas aplicadas al marketing digital. A lo largo de su desarrollo se estudiarán conceptos relacionados con embudos de conversión, indicadores clave de desempeño (KPI), análisis del comportamiento de usuarios y generación de insights estratégicos. Además, se explorará el uso de herramientas como #[i Meta Business Suite, TikTok Analytics, YouTube Studio y Google Analytics] para recopilar e interpretar datos relevantes sobre el desempeño de campañas y contenidos digitales.
          .box___style_2(data-aos="fade-left")
            p.mb-0 La formación permitirá fortalecer capacidades relacionadas con la evaluación de resultados, la identificación de oportunidades de mejora y la optimización de estrategias digitales. Asimismo, contribuirá al desarrollo de competencias para interpretar métricas, analizar tendencias y utilizar información analítica en la toma de decisiones orientadas al cumplimiento de objetivos comerciales y comunicativos dentro de los entornos digitales actuales.
      
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
