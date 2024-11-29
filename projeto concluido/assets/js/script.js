
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (!nome || !email || !comentario) {
      alert("Por favor, preencha todos os campos do Formulário antes de enviar!");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
