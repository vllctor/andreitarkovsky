const quizData = [
  {
    question: "¿En qué localidad nació Andréi Tarkovski?",
    options: ["Zavrazhie", "Moscú", "San Petersburgo", "Ivánovo"],
    answer: "Zavrazhie",
  },
  {
    question:
      "¿Qué ocupación tenía el padre de Andréi Tarkovski, Arseni Tarkovski?",
    options: ["Escritor", "Pintor", "Poeta", "Actor"],
    answer: "Poeta",
  },
  {
    question:
      "¿Con quién vivió Andréi Tarkovski después de la separación de sus padres?",
    options: [
      "Solo",
      "Con su madre, hermana y abuela",
      "Con su padre",
      "En un internado",
    ],
    answer: "Con su madre, hermana y abuela",
  },
  {
    question:
      "¿Qué experiencia influyó significativamente en la decisión de Tarkovski de dedicarse al cine?",
    options: [
      "Trabajar como geólogo en Siberia",
      "Estudiar lenguas orientales",
      "Su amor por la pintura",
      "La Segunda Guerra Mundial",
    ],
    answer: "Trabajar como geólogo en Siberia",
  },
  {
    question:
      "¿Qué disciplinas artísticas exploró Tarkovski antes de dedicarse al cine?",
    options: [
      "Música y pintura",
      "Escultura",
      "Todas las anteriores",
      "Ninguna de las anteriores",
    ],
    answer: "Todas las anteriores",
  },
  {
    question: "¿En qué escuela de cine se formó Tarkovski?",
    options: ["VGIK", "Moscow Art Theatre", "AFI Conservatory", "RSFSR"],
    answer: "VGIK",
  },
  {
    question: "¿Cuál fue el primer cortometraje dirigido por Tarkovski?",
    options: [
      "The Killers",
      "El violín y la apisonadora",
      "Solaris",
      "Nostalgia",
    ],
    answer: "The Killers",
  },
  {
    question:
      "¿Qué película le valió el León de Oro en el Festival de Venecia?",
    options: ["Solaris", "Andréi Rubliov", "La infancia de Iván", "Sacrificio"],
    answer: "La infancia de Iván",
  },
  {
    question:
      "¿Qué obra es considerada una de las más autobiográficas de Tarkovski?",
    options: ["Mirror", "Stalker", "Nostalgia", "Sacrificio"],
    answer: "Mirror",
  },
  {
    question: "¿En qué año se estrenó la película 'Solaris'?",
    options: ["1966", "1972", "1975", "1983"],
    answer: "1972",
  },
  {
    question:
      "¿Qué película de Tarkovski fue escrita con Arkady y Boris Strugatsky?",
    options: ["Stalker", "Andréi Rubliov", "Mirror", "La infancia de Iván"],
    answer: "Stalker",
  },
  {
    question: "¿Cuál fue la última película dirigida por Tarkovski?",
    options: ["Sacrificio", "Nostalgia", "Stalker", "Mirror"],
    answer: "Sacrificio",
  },
  {
    question:
      "¿Qué premio recibió Tarkovski en el Festival de Cannes por 'Stalker'?",
    options: [
      "Gran Premio del Jurado",
      "Premio del Jurado Ecuménico",
      "Mejor Director",
      "FIPRESCI",
    ],
    answer: "Premio del Jurado Ecuménico",
  },
  {
    question:
      "¿Qué película de Tarkovski se basa en la novela de Stanisław Lem?",
    options: ["Solaris", "Stalker", "Nostalgia", "Mirror"],
    answer: "Solaris",
  },
  {
    question: "¿Qué tema central caracteriza la obra de Tarkovski?",
    options: [
      "Exploración científica",
      "Reflexión espiritual y existencial",
      "Narrativas de acción",
      "Crítica política",
    ],
    answer: "Reflexión espiritual y existencial",
  },
];

export async function startQuiz() {
  let score = 0;

  for (const questionData of quizData) {
    const { isConfirmed, value: selectedOption } = await Swal.fire({
      title: questionData.question,
      input: "radio",
      inputOptions: questionData.options.reduce((acc, option, index) => {
        acc[index] = option;
        return acc;
      }, {}),
      inputValidator: (value) => {
        if (!value) {
          return "Por favor selecciona una respuesta";
        }
      },
      showCancelButton: false,
      confirmButtonText: "Responder",
      allowOutsideClick: false,
    });

    if (isConfirmed) {
      const correctIndex = questionData.options.indexOf(questionData.answer);
      if (parseInt(selectedOption, 10) === correctIndex) {
        score++;
        await Swal.fire(
          "¡Correcto!",
          "Has seleccionado la respuesta correcta.",
          "success"
        );
      } else {
        await Swal.fire(
          "Incorrecto",
          `La respuesta correcta era: ${questionData.answer}`,
          "error"
        );
      }
    }
  }

  await Swal.fire({
    title: "¡Quiz Finalizado!",
    text: `Tu puntaje es: ${score}/${quizData.length}`,
    icon: "info",
    confirmButtonText: "Aceptar",
  });
}
