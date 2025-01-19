import "@fortawesome/fontawesome-free/css/all.css";

import "@fontsource/playfair-display";
import "@fontsource/playfair-display/500-italic.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { startQuiz } from "./quiz.js";

document.getElementById("startQuizBtn").addEventListener("click", () => {
  startQuiz();
});
