// garante que o site carregou antes
document.addEventListener("DOMContentLoaded", () => {

    const botao = document.querySelector("button");
    const mensagem = document.createElement("p");

    mensagem.style.marginTop = "15px";
    mensagem.style.fontWeight = "bold";

    botao.addEventListener("click", () => {
        botao.innerText = "Enviando...";
        botao.disabled = true;

        setTimeout(() => {
            mensagem.innerText = "Entraremos em contato com você 🌱💚";
            botao.after(mensagem);

            botao.innerText = "Enviado ✔";
        }, 1200);
    });

});
