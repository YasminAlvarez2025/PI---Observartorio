let perfilSelecionado = "aluno";

const form = document.getElementById("loginForm");
const perfilCards = document.querySelectorAll(".perfil-card");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const eyeIcon = document.querySelector(".eye");

const usuarios = {
  aluno: {
    email: "aluno@edu.pe.senac.br",
    senha: "1234",
    pagina: "../student/dashboard.html"
  },

  professor: {
    email: "professor@edu.pe.senac.br",
    senha: "1234",
    pagina: "../professor/dashboard.html"
  },

  administrador: {
    email: "administrador@edu.pe.senac.br",
    senha: "1234",
    pagina: "../admin/dashboard.html"
  },

  empresa: {
    email: "empresa@edu.pe.senac.br",
    senha: "1234",
    pagina: "../company/dashboard.html"
  }
};

perfilCards.forEach(card => {
  card.addEventListener("click", () => {
    perfilCards.forEach(item => {
      item.classList.remove("active");
    });

    card.classList.add("active");
    perfilSelecionado = card.dataset.perfil;
  });
});

if (eyeIcon) {
  eyeIcon.addEventListener("click", () => {
    const senhaVisivel = senhaInput.type === "text";

    senhaInput.type = senhaVisivel ? "password" : "text";

    eyeIcon.classList.toggle("fa-eye", senhaVisivel);
    eyeIcon.classList.toggle("fa-eye-slash", !senhaVisivel);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (email === "" || senha === "") {
    alert("Preencha todos os campos.");
    return;
  }

  const usuario = usuarios[perfilSelecionado];

  if (
    usuario &&
    email === usuario.email &&
    senha === usuario.senha
  ) {
    alert("Login realizado com sucesso!");
    window.location.href = usuario.pagina;
    return;
  }

  alert(
    "Usuário ou senha incorretos para o perfil selecionado.\n\n" +
    "Acessos disponíveis:\n\n" +
    "Aluno:\n" +
    "aluno@edu.pe.senac.br\n\n" +
    "Professor:\n" +
    "professor@edu.pe.senac.br\n\n" +
    "Administrador:\n" +
    "administrador@edu.pe.senac.br\n\n" +
    "Empresa:\n" +
    "empresa@edu.pe.senac.br"
  );
});
