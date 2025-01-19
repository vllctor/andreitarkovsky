document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "Un libro leído por mil personas diferentes son mil libros diferentes",
        "La cultura de masas moderna, dirigida al “consumidor”, la civilización de las prótesis, paraliza el alma de las personas, levanta barreras entre el hombre y las cuestiones cruciales de su existencia, su conciencia de sí mismo como ser espiritual.",
        "Un hombre escribe porque está atormentado, porque duda. Necesita demostrar constantemente a sí mismo y a los demás que vale algo. ¿Y si sé con certeza que soy un genio? ¿Para qué escribir entonces? ¿Para qué demonios?",
        "Nunca intentes transmitir tu idea al público: es una tarea ingrata y sin sentido. Muéstrales la vida y ellos encontrarán en sí mismos los medios para evaluarla y apreciarla.",
        "La película [Stalker] debe ser más lenta y aburrida al principio para que los espectadores que entraron en el cine equivocado tengan tiempo de irse antes de que comience la acción principal.",
        "Siempre me ha gustado la gente que no sabe adaptarse a la vida de forma pragmática.",
        "La poesía es una toma de conciencia del mundo, una manera particular de relacionarse con la realidad.",
        "Sólo me interesan las opiniones de dos personas: una se llama Bresson y la otra se llama Bergman."
    ];

    const citaElement = document.getElementById('cita-aleatoria');
    const citaAleatoria = frases[Math.floor(Math.random() * frases.length)];
    citaElement.textContent = `“${citaAleatoria}”`;
});
