// =============================
// SCROLL SUAVE NOS LINKS
// =============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));
        alvo.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =============================
// DESTACAR MENU ATIVO
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("ativo");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("ativo");
        }
    });
});


// =============================
// ANIMAÇÃO AO APARECER NA TELA
// =============================
const elementos = document.querySelectorAll(".card, .texto, .praticas");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }
    });
});

elementos.forEach(el => observer.observe(el));


// =============================
// BOTÃO COM FEEDBACK MELHOR
// =============================
function clicou() {
    const botao = document.querySelector("button");

    botao.innerText = "Enviando...";
    botao.disabled = true;

    setTimeout(() => {
        botao.innerText = "Mensagem enviada 🌱💚";
        botao.style.background = "#166534";
    }, 1500);
}
