<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Optimización de campañas digitales
      p.mb-5 A continuación, se presenta un video sobre la optimización de campañas digitales, abordando los procesos de análisis, evaluación y mejora continua que permiten fortalecer el rendimiento de las estrategias implementadas en redes sociales y contribuir al cumplimiento de los objetivos comerciales de las organizaciones.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video #[b Video]. Optimización de campañas digitales
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], una organización puede identificar, mediante métricas analíticas, que una campaña presenta un alto alcance, pero un bajo nivel de interacción. En este caso, la optimización puede enfocarse en modificar formatos de contenido, mejorar los llamados a la acción o ajustar la segmentación de audiencias para aumentar la participación de los usuarios.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='').m-auto
        .col-xl
          p.mb-0 Antes de analizar las posibles acciones de mejora, es importante reconocer algunas situaciones frecuentes que pueden presentarse durante la ejecución de una campaña digital: 
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alto alcance y baja interacción
                  p.mb-0 El contenido llega a muchos usuarios, pero no genera interés. Se recomienda mejorar los formatos visuales y los llamados a la acción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bajo CTR en anuncios
                  p.mb-0 Los usuarios visualizan el anuncio, pero no realizan clics. Es conveniente optimizar los mensajes publicitarios y la segmentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alta interacción y baja conversión
                  p.mb-0 El contenido genera participación, pero no resultados comerciales. Se requiere fortalecer las estrategias de conversión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disminución de seguidores
                  p.mb-0 Existe pérdida de interés por parte de las audiencias. Se recomienda ajustar la frecuencia y el tipo de contenido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alto tiempo de visualización
                  p.mb-0 El contenido mantiene la atención de los usuarios. Conviene mantener las estrategias audiovisuales que generan mejores resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
      .bg___carrusel
        .px-5
          p.mb-5 Los procesos de optimización digital se apoyan en diversos elementos que facilitan la evaluación y el mejoramiento continuo de las campañas.
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Métricas digitales
                  p.mb-0.text-center Permiten medir resultados y comportamiento de los usuarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text KPI
                  p.mb-0.text-center Facilitan la evaluación del cumplimiento de objetivos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Herramientas analíticas
                  p.mb-0.text-center Ayudan a recopilar e interpretar datos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Segmentación de audiencias
                  p.mb-0.text-center Permite orientar campañas hacia públicos específicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ajustes estratégicos
                  p.mb-0.text-center Contribuyen al mejoramiento del rendimiento digital.
          p.mb-0 La adecuada implementación de procesos de optimización digital facilita la toma de decisiones basada en datos, fortalece el desarrollo de campañas orientadas al cumplimiento de objetivos comerciales y comunicativos en redes sociales y contribuye al mejoramiento continuo del rendimiento digital.
          Separador
          #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.1 Procesos de optimización de campañas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La optimización de campañas se desarrolla mediante un proceso sistemático que permite #[b evaluar resultados, identificar oportunidades de mejora e implementar acciones] orientadas al fortalecimiento del rendimiento digital. Este proceso se apoya en el análisis de datos obtenidos a través de métricas e indicadores relacionados con alcance, interacción, tráfico y conversiones.
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Las organizaciones realizan procesos de optimización de manera continua con el propósito de #[b ajustar contenidos, formatos publicitarios, segmentación de audiencias y estrategias de comunicación] de acuerdo con los resultados obtenidos. La información recopilada facilita la implementación de acciones orientadas al cumplimiento de objetivos comerciales y comunicativos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img14.png', alt='').m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img15.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], las publicaciones en formato de video pueden generar mayor interacción que las imágenes estáticas. Esta información permite incrementar la producción de contenido audiovisual para fortalecer el rendimiento de la campaña.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img16.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Las etapas que integran el proceso de optimización permiten organizar el análisis, la implementación de mejoras y la evaluación de resultados.
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Recopilación de datos
                p.mb-0 Obtener métricas e indicadores relevantes para la evaluación de la campaña.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Interpretación de resultados
                p.mb-0 Analizar el comportamiento de los usuarios y el desempeño de las acciones implementadas.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificación de problemas
                p.mb-0 Detectar factores asociados al bajo rendimiento o a desviaciones respecto de los objetivos establecidos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Implementación de ajustes
                p.mb-0 Optimizar campañas, contenidos y estrategias a partir de los hallazgos obtenidos.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Evaluación posterior
                p.mb-0 Verificar los resultados de los ajustes realizados y determinar su efectividad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img21.png', alt='' style="width: 300px").m-auto
      p.mb-5 La implementación adecuada de estas etapas facilita el mejoramiento continuo de las campañas digitales y fortalece la toma de decisiones basada en datos.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img22.svg" style="max-width: 60px").m-auto
        .col
          h3 Evaluación de rendimiento digital
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.mb-3.fit___box_1(data-aos="fade-right")
            p.mb-0 La evaluación de rendimiento digital consiste en #[b analizar los resultados] obtenidos mediante #[b campañas y estrategias] implementadas en plataformas digitales. Este proceso permite interpretar #[b métricas e indicadores] relacionados con #[b alcance, interacción, tráfico, conversiones y comportamiento de las audiencias], utilizando herramientas analíticas que facilitan el seguimiento del desempeño de contenidos y campañas publicitarias en redes sociales.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img24.svg', alt='').m-auto
            .col-xl
              p.mb-0 La información obtenida permite #[b identificar fortalezas y oportunidades de mejora], favorece la toma de decisiones orientadas a la optimización de campañas y facilita la adaptación de las estrategias frente a cambios en las tendencias y en el comportamiento de los usuarios.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img23.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img25.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], si una campaña presenta una disminución en los niveles de interacción y alcance, la organización puede evaluar factores relacionados con horarios de publicación, formatos de contenido o segmentación de audiencias, con el fin de implementar acciones de mejora.
      .bg___carrusel
        .px-5
          p.mb-5 Los indicadores de rendimiento proporcionan información clave para comprender el comportamiento de las campañas y orientar los procesos de optimización: 
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img26.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Alcance
              p.mb-0.text-center Nivel de visibilidad de los contenidos publicados.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Interacción
              p.mb-0.text-center Participación de los usuarios frente a los contenidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text CTR
              p.mb-0.text-center Nivel de interés generado por los anuncios y publicaciones.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Conversiones
              p.mb-0.text-center Resultados comerciales obtenidos a partir de la campaña.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Retención
              p.mb-0.text-center Permanencia de los usuarios en los contenidos digitales.
          p.mb-5 La evaluación del rendimiento digital contribuye al fortalecimiento de las estrategias analíticas y facilita la optimización continua de las campañas digitales. 
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img22.svg" style="max-width: 60px").m-auto
            .col
              h3 Ajustes estratégicos en campañas
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p Los ajustes estratégicos corresponden a #[b las modificaciones implementadas] en campañas digitales con el propósito de mejorar su rendimiento y fortalecer el cumplimiento de los objetivos comerciales. Estos ajustes se realizan a partir del análisis de métricas e indicadores obtenidos mediante herramientas analíticas.
              .box___style_2.fit___box_1(data-aos="fade-right")
                p.mb-0 Las organizaciones implementan ajustes relacionados con #[b segmentación de audiencias, formatos de contenido, inversión publicitaria, horarios de publicación y llamados a la acción]. Estas modificaciones permiten optimizar las campañas, mejorar la interacción con las audiencias digitales y adaptar las estrategias a los cambios en el comportamiento de los usuarios y las tendencias del entorno digital. Asimismo, contribuyen al fortalecimiento de acciones orientadas al reconocimiento de marca, la interacción y la conversión, favoreciendo el cumplimiento de los objetivos comerciales establecidos.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt='').m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img32.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], una campaña puede requerir ajustes en la segmentación debido a que las métricas evidencian bajos niveles de interacción en determinados grupos de usuarios. En este caso, la organización puede modificar criterios demográficos e intereses para mejorar el rendimiento de la campaña.
      p.mb-5 La implementación de ajustes estratégicos puede orientarse a diferentes componentes de la campaña, de acuerdo con los resultados obtenidos: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in").mb-5
        .py-3.py-md-4(titulo="Ajustes de contenido")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ajustes de contenido
              p.mb-0 Mejorar la interacción y el consumo de los contenidos publicados mediante la actualización de mensajes, recursos visuales, textos y propuestas de valor dirigidas a la audiencia.
        .py-3.py-md-4(titulo="Ajustes de segmentación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ajustes de segmentación
              p.mb-0 Dirigir las campañas hacia audiencias específicas con mayor potencial de respuesta, considerando variables demográficas, geográficas, comportamentales e intereses de los usuarios.
        .py-3.py-md-4(titulo="Ajustes de inversión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img35.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ajustes de inversión
              p.mb-0 Optimizar la distribución del presupuesto publicitario para asignar mayores recursos a las acciones, anuncios o segmentos que generan mejores resultados.
        .py-3.py-md-4(titulo="Ajustes de formatos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img36.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ajustes de formatos
              p.mb-0 Fortalecer el rendimiento de las publicaciones y anuncios mediante la selección de formatos adecuados, como imágenes, videos, historias, carruseles o contenido interactivo.
        .py-3.py-md-4(titulo="Ajustes de horarios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img37.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ajustes de horarios
              p.mb-0 Mejorar el alcance y la interacción mediante una programación más adecuada, identificando los momentos en los que las audiencias presentan mayor actividad dentro de las plataformas digitales.
      p.mb-0 La implementación de ajustes estratégicos contribuye al mejoramiento continuo de las campañas digitales y fortalece la toma de decisiones basada en datos analíticos.

</template>

<script>
export default {
  name: 'Tema1',
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
