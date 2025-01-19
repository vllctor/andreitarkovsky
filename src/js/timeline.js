import "vis-timeline/styles/vis-timeline-graph2d.min.css";

import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("timeline");

  const items = new DataSet([
    {
      id: 1,
      content: `
          <div>
            <img src="https://a.ltrbxd.com/resized/film-poster/1/8/3/5/9/18359-voyage-in-time-0-1000-0-1500-crop.jpg?v=14f1c55ff5" alt="Un viaje en el tiempo">
            <p>Voyage in Time es un documental que recorre la vida del director</p>
            <p>durante la preparación de su última película, "Sacrificio"</p>
          </div>`,
      start: "1983-01-01",
    },
    {
      id: 2,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/cc/d6/8c/ccd68c50e61c9aaaad4b1eea41789e4e.jpg" alt="La infancia de Iván";">
            <p>Primer largometraje dirigido por él, consiguiendo así</p>
            <p>el León de Oro en el Festival de Venecia</p>
          </div>`,
      start: "1962-04-06",
    },
    {
      id: 3,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/6d/9c/8e/6d9c8ee6b1308c4677646ca198aa9b3d.jpg" alt="Andrei Rublev";">
            <p>Segunda película dirigida por Tarkovski, La película está basada libremente</p>
            <p>en la vida de Andréi Rublev, pintor de iconos ruso del siglo XV</p>
          </div>`,
      start: "1966-12-15",
    },
    {
      id: 4,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/96/f0/6f/96f06fa30e80d840aa1044df00f78112.jpg" alt="Solaris";">
            <p>Tercera película dirigida por Tarkovski, una película de ciencia ficción</p>
            <p>basada en la novela homónima del escritor polaco Stanisław Lem</p>
          </div>`,
      start: "1972-03-20",
    },
    {
      id: 5,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/b3/23/d9/b323d974b9a1d4bb8c179363ac2e3ef2.jpg" alt="Mirror";">
            <p>Cuarta película de Tarkovski, una obra autobiográfica</p>
            <p>que se basa en su propia vida y la de sus padres</p>
          </div>`,
      start: "1975-01-01",
    },
    {
      id: 6,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/18/20/bd/1820bdbe4b052f421342ccfd1b9423d1.jpg" alt="Stalker";">
            <p>Quinta película dirigida por Tarkovski, con el guión escrito por Arkady y</p>
            <p>Boris Strugatsky, ligeramente basada en su novela "Roadside Picnic".</p>
          </div>`,
      start: "1979-05-25",
    },
    {
      id: 7,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/76/ea/07/76ea07d0e794f5f00c6ce00940e4a7d1.jpg" alt="Nostalgia";">
            <p>Nostalghia es una de las películas más "personales" de Andréi Tarkovski,</p>
            <p>ya que es el primer film hecho por el artista fuera de la Unión Soviética</p>
          </div>`,
      start: "1983-05-01",
    },
    {
      id: 8,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/b8/47/ce/b847ce99732d39f6d228d0d9e660f4cd.jpg" alt="Back to the Game";">
            <p>Es una coproducción anglo-franco-sueca, dirigida por</p>
            <p>Tarkovski. Fue su séptimo y último trabajo.</p>
          </div>`,
      start: "1986-05-09",
    },
    {
      id: 9,
      content: `
          <div>
            <img src="https://i.pinimg.com/1200x/c7/c4/14/c7c414170a4c26b3cc168b496d2cdf4f.jpg" alt="The Killers";">
            <p>Primerísima obra dirigida por Andrei Tarkovski, es en realidad un cortometraje que fue realizado</p>
            <p>como parte de un ejercicio de clase en el Instituto Estatal de Cinematografía (VGIK) en Moscú</p>
          </div>`,
      start: "1956-01-01",
    },
  ]);

  const options = {
    width: "100%",
    height: "750px",
    editable: false,
  };

  const timeline = new Timeline(container, items, options);
});
