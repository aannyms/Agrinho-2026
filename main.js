document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "") {
        mensagem.innerText = "⚠️ Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        mensagem.innerText = "⚠️ Digite um email válido!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.innerText = `🌱 Obrigada, ${nome}! Em breve entraremos em contato 💚`;
    mensagem.style.color = "#166534";

    // limpa o formulário
    document.getElementById("formContato").reset();
});
