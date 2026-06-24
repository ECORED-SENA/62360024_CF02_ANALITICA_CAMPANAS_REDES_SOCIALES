<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Interpretación y optimización de campañas digitales mediante analítica de datos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> analizar métricas, tendencias y comportamiento de audiencias en campañas digitales para interpretar resultados, identificar oportunidades de mejora y fortalecer la toma de decisiones estratégicas en plataformas digitales.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la optimización de campañas digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el rendimiento de las estrategias digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar la visibilidad de los contenidos publicados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer la interacción de las audiencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar la eficiencia en el uso de recursos publicitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            'Una campaña presenta alto alcance pero baja interacción. ¿Qué acción sería más adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la estrategia sin modificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la frecuencia de publicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los llamados a la acción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ajustar formatos y mensajes del contenido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento permite evaluar si una campaña está cumpliendo sus objetivos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las métricas de alcance obtenidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los KPI definidos para la campaña.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El volumen de publicaciones realizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La frecuencia de interacción de los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una función de las métricas dentro de la optimización digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar tendencias de comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interpretar resultados y orientar mejoras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir la identidad visual de la marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer el presupuesto general de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Una organización detecta que sus anuncios reciben muchas visualizaciones pero pocos clics. ¿Qué métrica está mostrando una oportunidad de mejora?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CTR.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'ROI.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alcance.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Retención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la finalidad principal de los ajustes estratégicos en campañas digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar el uso de recursos publicitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adaptar los contenidos a nuevas tendencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalecer el cumplimiento de los objetivos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar el desempeño de la campaña.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué aspecto puede optimizarse mediante la segmentación de audiencias?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La distribución de presupuestos publicitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La frecuencia de publicación de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La selección de formatos digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La orientación de campañas hacia públicos específicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Durante el proceso de optimización, la recopilación de datos tiene como objetivo principal:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar oportunidades de mejora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtener información sobre el rendimiento de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar tendencias de comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el cumplimiento de indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes situaciones representa una oportunidad de mejora en una campaña digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento sostenido de conversiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta participación de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bajo CTR en anuncios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumento de la retención de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante realizar seguimiento continuo a los resultados de una campaña?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilita la comparación entre diferentes campañas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contribuye a evaluar el comportamiento de las audiencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Apoya la toma de decisiones basada en datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permite detectar cambios y aplicar mejoras oportunamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué indica una tasa de conversión baja en una campaña digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La audiencia interactúa poco con el contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las métricas requieren revisión periódica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Existe una oportunidad de optimización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La campaña alcanza menos usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el principal beneficio de analizar tendencias en campañas digitales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cantidad de publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar cambios en los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la frecuencia de campañas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir el uso de indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una campaña obtiene un CTR alto, pero pocas conversiones. ¿Qué situación podría estar ocurriendo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La audiencia abandona el proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La campaña tiene poco alcance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las publicaciones generan rechazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los usuarios interactúan menos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué representa un <em>insight</em> dentro del análisis de campañas digitales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un hallazgo útil para decidir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una métrica de seguimiento digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un ajuste aplicado a la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un dato registrado en el sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes acciones se basa directamente en la interpretación de datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar el nombre de la campaña.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear un nuevo perfil digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ajustar la segmentación aplicada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actualizar elementos visuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Si una campaña muestra buenos niveles de interacción, pero bajo alcance, ¿qué estrategia podría aplicarse?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ampliar la audiencia objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la frecuencia de contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la inversión utilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar el diseño gráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la utilidad principal de comparar resultados entre campañas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar la red más utilizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la cantidad de métricas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el análisis de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué situación puede indicar que una campaña necesita optimización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento constante de conversiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora progresiva del alcance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incremento sostenido del CTR.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución frente a los objetivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Por qué es importante priorizar recomendaciones derivadas de un análisis?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evita recopilar más información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite enfocar acciones clave.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reduce el uso de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilita cambiar los objetivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de un <em>dashboard</em> en la analítica digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar contenido para campañas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Visualizar indicadores relevantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar recursos multimedia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Automatizar todas las decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
