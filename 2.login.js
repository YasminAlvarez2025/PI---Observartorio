let perfilSelecionado = "aluno";
const form = document.getElementById("loginForm");
const perfilCards = document.querySelectorAll(".perfil-card");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const eyeIcon = document.querySelector(".eye");

if (perfilCards.length > 0) {

  perfilCards.forEach(card => {

    card.addEventListener("click", () => {

      perfilCards.forEach(item =>
        item.classList.remove("active")
      );

      card.classList.add("active");

      perfilSelecionado = card.dataset.perfil;

    });

  });

}

if (eyeIcon) {

  eyeIcon.addEventListener("click", () => {

    if (senhaInput.type === "password") {

      senhaInput.type = "text";

      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");

    } else {

      senhaInput.type = "password";

      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");

    }

  });

}

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (email === "" || senha === "") {

    alert("Preencha todos os campos.");
    return;

  }

  if (
    email === "aluno@edu.pe.senac.br" &&
    senha === "1234"
  ) {

    alert("Login realizado com sucesso!");

    window.location.href = "4.painel-aluno.html";

    return;
  }

  if (
    email === "professor@edu.pe.senac.br" &&
    senha === "1234"
  ) {

    alert("Login realizado com sucesso!");

    window.location.href = "12.painel-professor.html";

    return;
  }

  alert(
    "Usuário ou senha incorretos.\n\n" +
    "Aluno:\n" +
    "aluno@edu.pe.senac.br\n\n" +
    "Professor:\n" +
    "professor@edu.pe.senac.br"
  );

});