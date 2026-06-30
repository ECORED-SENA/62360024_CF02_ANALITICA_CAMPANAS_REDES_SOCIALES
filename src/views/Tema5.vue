<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Interpretación de métricas en tiempo real
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La interpretación de métricas en tiempo real permite #[b analizar el comportamiento de las audiencias y el rendimiento de campañas digitales mientras las estrategias se encuentran activas en plataformas sociales]. Este proceso facilita la toma de decisiones inmediatas orientadas a la optimización de contenidos, anuncios y estrategias digitales de acuerdo con los resultados obtenidos.
          .box___style_2(data-aos="fade-right")
            p.mb-0 Las organizaciones utilizan herramientas analíticas para #[b monitorear métricas] relacionadas con alcance, interacción, clics, conversiones, reproducciones y comportamiento de usuarios. La información recopilada permite identificar variaciones en el rendimiento de las campañas, detectar tendencias y desarrollar acciones orientadas al mejoramiento continuo de las estrategias digitales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='').m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], una publicación puede generar altos niveles de interacción durante determinadas horas del día. Esta información permite ajustar los horarios de publicación para fortalecer el rendimiento de futuras campañas.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img24.svg', alt='').m-auto
            .col-xl
              p.mb-0 La supervisión constante de métricas facilita la adaptación estratégica frente a cambios en el comportamiento de los usuarios y las dinámicas de consumo digital, permitiendo implementar ajustes oportunos para fortalecer la efectividad de las campañas. Entre los principales beneficios de la interpretación de métricas en tiempo real se encuentran los siguientes:
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Detección inmediata de problemas
                  p.mb-0.text-center Permite corregir campañas rápidamente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Optimización continua
                  p.mb-0.text-center Facilita ajustes estratégicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Interpretación de tendencias
                  p.mb-0.text-center Identifica cambios de comportamiento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mejora del rendimiento
                  p.mb-0.text-center Fortalece resultados comerciales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Toma de decisiones basada en datos
                  p.mb-0.text-center Facilita acciones estratégicas inmediatas.
          p.mb-0 La interpretación de métricas en tiempo real fortalece los procesos de análisis digital y contribuye al mejoramiento continuo de campañas implementadas en redes sociales.
          Separador
          #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.1 Monitoreo de campañas digitales
          p.mb-5 A continuación, se presenta un pódcast sobre el monitoreo de campañas digitales, un proceso fundamental para evaluar el desempeño de las estrategias implementadas en entornos digitales y fortalecer la toma de decisiones basada en datos.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img29.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Monitoreo de campañas digitales"
                  :audio="audio2"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img9.png" ).m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img22.svg" style="max-width: 60px").m-auto
        .col
          h3 Interpretación práctica de métricas digitales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img10.png', alt='').m-auto
        .col-xl
          p La interpretación práctica de métricas digitales consiste en #[b analizar los resultados obtenidos] para comprender el desempeño de una campaña y determinar acciones de mejora. Este proceso permite relacionar los indicadores con los objetivos establecidos y comprender las causas de los resultados alcanzados.
          .box___style_2.box___color_1(data-aos="fade-left")
            p.mb-0 #[b Por ejemplo], una campaña puede alcanzar un amplio nivel de difusión, pero registrar pocas conversiones. En este caso, la organización puede determinar la necesidad de fortalecer los llamados a la acción o mejorar la experiencia de la página de destino.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 8.
            span Panel de métricas para el análisis de alcance, interacciones y conversiones por canal digital
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t5/img11.png', alt='Panel de métricas digitales con indicadores de alcance, impresiones, interacciones, conversiones y gráficos comparativos de diferentes canales digitales. ').m-auto
      .box___style_7.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img12.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 La figura presenta un panel de métricas utilizado para evaluar el rendimiento de diferentes canales digitales. Incluye indicadores relacionados con alcance, impresiones, interacciones, conversiones y tasa de conversión, además de gráficos comparativos que permiten analizar el desempeño de Instagram, Facebook, TikTok, YouTube y sitio web en términos de visibilidad y generación de resultados comerciales.
      .color___box_1
        .px-5
          p.mb-5 La siguiente tabla relaciona algunas métricas con posibles interpretaciones y acciones estratégicas.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Interpretación de métricas y acciones estratégicas de mejora
              .tabla-a(data-aos="zoom-in").mb-5
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Métrica analizada
                      th.ajuste-border-tabla.texto-left Resultado observado
                      th.ajuste-border-tabla.texto-left Interpretación
                      th.texto-left Acción estratégica
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alcance bajo
                      td.ajuste-border-tabla.texto-left Poca difusión de contenidos
                      td.ajuste-border-tabla.texto-left Segmentación limitada
                      td.texto-left Ajustar públicos y horarios
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold CTR alto
                      td.ajuste-border-tabla.texto-left Alto interés del usuario
                      td.ajuste-border-tabla.texto-left Contenido atractiv
                      td.texto-left Mantener la estrategia
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Baja conversión
                      td.ajuste-border-tabla.texto-left Escasos resultados comerciales
                      td.ajuste-border-tabla.texto-left Llamado a la acción poco efectivo
                      td.texto-left Optimizar la página de destino y los mensajes
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Baja retención
                      td.ajuste-border-tabla.texto-left Los usuarios abandonan el contenido
                      td.ajuste-border-tabla.texto-left Contenido poco dinámico
                      td.texto-left Fortalecer formatos audiovisuales
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alta interacción
                      td.ajuste-border-tabla.texto-left Participación activa de usuarios
                      td.ajuste-border-tabla.texto-left Contenido relevante
                      td.texto-left Incrementar publicaciones similares
              .box___style_3(data-aos="flip-up")
                .row.align-items-center
                  .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/t1/img16.svg', alt='' style="width: 85px").m-auto
                  .col-xl.col-md-10
                    p.mb-0 La interpretación de métricas permite transformar los datos obtenidos en decisiones orientadas al mejoramiento continuo de las campañas digitales.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Análisis de comportamiento de audiencias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.mb-3.box___color_1.fit___box_5(data-aos="fade-right")
            p.mb-0 El análisis de comportamiento de audiencias permite interpretar #[b las acciones y respuestas de los usuarios] frente a campañas digitales y contenidos publicados en redes sociales. Este proceso facilita la comprensión de intereses, necesidades, preferencias y patrones de interacción que influyen en el rendimiento de las estrategias digitales.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img24.svg', alt='').m-auto
            .col-xl
              p.mb-0 El análisis de estos datos #[b permite identificar tendencias de consumo digital, preferencias de contenido y niveles de participación de las audiencias]. A partir de esta información, es posible realizar ajustes orientados al fortalecimiento de las estrategias digitales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img13.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img14.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], determinados contenidos pueden generar mayores niveles de interacción en segmentos específicos de usuarios. Esta información permite diseñar estrategias adaptadas a sus características e intereses.
      .bg___carrusel
        .px-5
          p.mb-5 El análisis de audiencias se apoya en diferentes tipos de información que contribuyen a comprender el comportamiento de los usuarios y respaldar la toma de decisiones.
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Interacción
              p.mb-0.text-center Identificar la participación de los usuarios.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Tiempo de permanencia
              p.mb-0.text-center Evaluar el interés en los contenidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img17.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Clics y navegación
              p.mb-0.text-center Analizar el comportamiento digital.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img18.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Conversión
              p.mb-0.text-center Interpretar acciones comerciales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img19.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Preferencias de contenido
              p.mb-0.text-center Orientar estrategias digitales.
          p.mb-5 El análisis de comportamiento de audiencias proporciona información relevante para comprender la respuesta de los usuarios frente a los contenidos y campañas desarrollados en entornos digitales.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img22.svg" style="max-width: 60px").m-auto
            .col
              h3 Interpretación del comportamiento de usuarios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La interpretación del #[b comportamiento de los usuarios] consiste en analizar los datos obtenidos para comprender cómo interactúan las audiencias con los contenidos, campañas y plataformas digitales. Este proceso permite identificar tendencias, preferencias y oportunidades de mejora que contribuyen al fortalecimiento de las estrategias de comunicación y marketing digital.
          .box___style_2(data-aos="fade-right")
            p.mb-0 A partir del análisis de métricas e indicadores, las organizaciones pueden determinar qué tipos de contenidos generan mayor participación, cuáles favorecen las conversiones y qué elementos requieren ajustes para mejorar su efectividad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img20.png', alt='').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='').m-auto
        .col-xl
          p.mb-0 #[b Por ejemplo], determinados contenidos audiovisuales publicados en horarios específicos pueden generar mayores niveles de interacción que otros formatos, mientras que las publicaciones educativas pueden alcanzar niveles de participación superiores a los contenidos promocionales.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 9.
            span Panel de métricas para el análisis de interacción y rendimiento de contenidos en redes sociales
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t5/img21.png', alt='Panel de analítica de redes sociales con métricas de interacción, alcance, publicaciones, tasa de interacción y gráficos sobre formatos y horarios de mayor rendimiento. ').m-auto
      .box___style_1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La figura presenta un panel de métricas orientado al análisis del rendimiento de publicaciones en redes sociales. Incluye indicadores relacionados con interacciones totales, alcance, cantidad de publicaciones y tasa de interacción, además de gráficos comparativos que permiten identificar los formatos de contenido con mejor desempeño, los horarios de mayor participación de las audiencias y los tipos de contenido que generan mayores niveles de interacción.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img22.png', alt='').m-auto
      p.mb-5 A continuación, se presentan algunos comportamientos frecuentes y su posible interpretación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img23.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mayor interacción en horarios específicos").ajuste-cajaAcordion.ajuste-vineta
              p #[b Posible interpretación:] las audiencias presentan mayor actividad digital en determinados momentos del día.
              p.mb-3 Esta información permite identificar franjas horarias favorables para la publicación de contenidos y campañas.
            .row(titulo="Alta interacción en publicaciones educativas").ajuste-cajaAcordion.ajuste-vineta
              p #[b Posible interpretación:] existe un interés significativo por contenidos informativos y formativos.
              p.mb-3 Este comportamiento sugiere la conveniencia de fortalecer la producción de recursos educativos dentro de la estrategia digital.
            .row(titulo="Mayor visualización de videos").ajuste-cajaAcordion.ajuste-vineta
              p #[b Posible interpretación:] las audiencias muestran preferencia por contenidos audiovisuales frente a otros formatos.
              p.mb-3 Este resultado orienta la creación de videos como recurso principal de comunicación.
            .row(titulo="Incremento de compartidos").ajuste-cajaAcordion.ajuste-vineta
              p #[b Posible interpretación:] el contenido genera interés y favorece su difusión entre diferentes usuarios y comunidades digitales.
              p.mb-3 Este comportamiento contribuye a ampliar el alcance de manera orgánica.
            .row(titulo="Abandono rápido de enlaces").ajuste-cajaAcordion.ajuste-vineta
              p #[b Posible interpretación:] pueden existir problemas de relevancia del contenido, expectativas no cumplidas o dificultades en la experiencia de navegación.Este resultado indica la necesidad de revisar los contenidos y los destinos de los enlaces compartidos.
      p.mb-0 La interpretación del comportamiento de los usuarios facilita la adaptación de contenidos, formatos y estrategias de comunicación de acuerdo con las características y preferencias de las audiencias.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Interpretación de resultados en tiempo real 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La interpretación de resultados en tiempo real permite analizar el desempeño de campañas digitales mientras se encuentran activas en plataformas sociales. Este proceso facilita la identificación oportuna de fortalezas, oportunidades de mejora y situaciones que requieren ajustes para favorecer el cumplimiento de los objetivos establecidos.
          .box___style_2(data-aos="fade-right")
            p.mb-0 A partir del análisis de métricas relacionadas con alcance, interacción, clics, conversiones, visualizaciones y retención, es posible comprender el comportamiento de las audiencias, reconocer tendencias relevantes y evaluar la efectividad de las estrategias implementadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img24.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img25.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Por ejemplo], una campaña puede incrementar sus niveles de interacción después de modificar el formato de contenido o ajustar la segmentación de audiencias.
      .bg___carrusel
        .px-5
          p.mb-5 La interpretación de resultados aporta información útil para evaluar el desempeño de las campañas y orientar acciones de optimización.
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img26.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificación rápida de situaciones relevantes
                  p.mb-0.text-center Permite realizar ajustes durante la ejecución de la campaña.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reconocimiento de tendencias
                  p.mb-0.text-center Facilita la adaptación de contenidos y estrategias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Optimización continua
                  p.mb-0.text-center Favorece el mejoramiento del rendimiento digital.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comprensión de las audiencias
                  p.mb-0.text-center Permite interpretar comportamientos y preferencias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Apoyo a la toma de decisiones
                  p.mb-0.text-center Reduce la incertidumbre en la gestión de campañas.
          .row.justify-content-center.mb-5
            .col-xl-10
              .box___style_3(data-aos="flip-up").mb-5
                .row.align-items-center
                  .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/t1/img16.svg', alt='' style="width: 85px").m-auto
                  .col-xl.col-md-10
                    p.mb-0 La siguiente tabla presenta algunos ejemplos de interpretación de resultados y las decisiones que pueden derivarse de su análisis.
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Resultados observados y acciones de optimización en campañas digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Resultado observado
                      th.ajuste-border-tabla.texto-left Interpretación
                      th.texto-left Acción estratégica
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alto alcance y baja interacción
                      td.ajuste-border-tabla.texto-left El contenido logra difusión, pero genera poca participación.
                      td.texto-left Ajustar formatos o mensajes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alta interacción y baja conversión
                      td.ajuste-border-tabla.texto-left Existe interés, pero pocos resultados comerciales.
                      td.texto-left Fortalecer llamados a la acción y procesos de conversión.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bajo CTR
                      td.ajuste-border-tabla.texto-left Los anuncios presentan baja capacidad de atracción.
                      td.texto-left Optimizar textos, creatividades o segmentación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alta retención de videos
                      td.ajuste-border-tabla.texto-left El contenido mantiene la atención de las audiencias.
                      td.texto-left Incrementar publicaciones similares.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incremento de conversiones
                      td.ajuste-border-tabla.texto-left La estrategia genera resultados favorables.
                      td.texto-left Mantener o fortalecer las acciones implementadas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mayor interacción en ciertos horarios
                      td.ajuste-border-tabla.texto-left Las audiencias presentan patrones de actividad definidos.
                      td.texto-left Ajustar la programación de publicaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mejor desempeño de contenidos audiovisuales
                      td.ajuste-border-tabla.texto-left Existe preferencia por formatos dinámicos.
                      td.texto-left Priorizar recursos audiovisuales.
      p.mb-0 La interpretación de resultados en tiempo real permite transformar los datos obtenidos durante la ejecución de las campañas en acciones orientadas al mejoramiento continuo de las estrategias digitales.

</template>

<script>
import audio2 from '@/assets/componentes/audios/Monitoreo_campanas_digitales.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio2,
    mostrarIndicadorTarjetaAudio: true,
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
