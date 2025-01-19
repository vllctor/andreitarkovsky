document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(
      `Gracias, ${name}! Tu mensaje ha sido enviado con éxito. Te responderemos a ${email} pronto.`
    );

    form.reset();
  });
});
