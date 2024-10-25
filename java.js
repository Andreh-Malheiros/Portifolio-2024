"use strict";

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const textColorBody = ["#191106", "#1d080f", "#1b0f02", "#0c0b06", "#00140f"];
const bgCartaoContatos = [
    "linear-gradient(135deg, #ffb457, #ff9a00)",
    "linear-gradient(135deg, #ff96bd, #ff4b6d)",
    "linear-gradient(135deg, #9999fb, #4d4dff)",
    "linear-gradient(135deg, #ffe797, #ffcc00)",
    "linear-gradient(135deg, #cffff1, #99e2e3)"
];
const colorsSVG = ["#ffffff", "#ffffff", "#ffffff", "#333333", "#333333"];
const corDestaque = ["#ff4b00", "#d5006d", "#4a3cbb", "#e0a300", "#009688"];
const colorButtons = ["#e98f1e", "#d04279", "#4848cb", "#bca657", "#15f2b2"];
const colorConhecimentos = [
    "#f38a23",
    "#b64b72",
    "#7171a1",
    "#cfad3c",
    "#47cfad"];

const colorProjects = [
    "#f38a23",
    "#b64b72",
    "#7171a1",
    "#cfad3c",
    "#47cfad"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

// Fun��o que altera as cores ao clicar em um item do menu
function clickItem(item, index) {
    menu.style.removeProperty("--timeOut");

    if (activeItem == item) return;

    if (activeItem) {
        activeItem.classList.remove("active");
    }



    const cartaoEmail = document.getElementById("email");
    if (cartaoEmail) {
        cartaoEmail.style.background = bgCartaoContatos[index];
    }

    const cartaoLinkedin = document.getElementById("linkedin");
    if (cartaoLinkedin) {
        cartaoLinkedin.style.background = bgCartaoContatos[index];
    }

    const cartaoTelefone = document.getElementById("telefone");
    if (cartaoTelefone) {
        cartaoTelefone.style.background = bgCartaoContatos[index];
        cartaoTelefone.style.boxShadow = corDestaque[index];
    }

    const colorSVG = document.querySelectorAll(".colorSVG");
    colorSVG.forEach((svg) => {
        svg.style.fill = colorsSVG[index];
    });

    const colorCardsConhecimento = document.querySelectorAll(".quadrados");
    colorCardsConhecimento.forEach((quadrado) => {
        quadrado.style.fill = colorConhecimentos[index]
        quadrado.style.boxShadow = colorConhecimentos[index];
        quadrado.style.color = colorConhecimentos[index];
        quadrado.style.border = colorConhecimentos[index];
    });

    const buttonsColor = document.querySelectorAll(".botaoCartoes");
    buttonsColor.forEach((button) => {
        button.style.background = colorButtons[index];
        button.style.boxShadow = bgCartaoContatos[index];
    });

    const BgCartoes = document.querySelectorAll(".Cards");
    BgCartoes.forEach((cartao) => {
        cartao.style.background = bgCartaoContatos[index];
    });

    

    
    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    body.style.color = textColorBody[index];

    activeItem = item;
}

// Ajustar a borda de menu ativa
function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const top = Math.floor(
        offsetActiveItem.top - menu.offsetTop - (menuBorder.offsetHeight - offsetActiveItem.height) / 2
    ) + "";
    menuBorder.style.transform = `translate3d(0, ${top}px, 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
});



// Aplicar o efeito de rota��o nas se��es
VanillaTilt.init(document.querySelectorAll(".Cards"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

// Fun��o para mudar cores conforme rolagem
function changeColorsOnScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calcular o �ndice com base na posi��o de rolagem
    const index = Math.min(Math.floor(scrollPosition / windowHeight), bgColorsBody.length - 1);

    // Alterar cores dinamicamente
    body.style.backgroundColor = bgColorsBody[index];
    body.style.color = textColorBody[index];

    const BgCartoes = document.querySelectorAll(".Cards");
    BgCartoes.forEach((cartao) => {
        cartao.style.background = bgCartaoContatos[index];
    });

    const buttonsColor = document.querySelectorAll(".botaoCartoes");
    buttonsColor.forEach((button) => {
        button.style.background = colorButtons[index];
    });

    const colorSVG = document.querySelectorAll(".colorSVG");
    colorSVG.forEach((svg) => {
        svg.style.fill = colorsSVG[index];
    });

    const colorCardsConhecimento = document.querySelectorAll(".quadrados");
    colorCardsConhecimento.forEach((quadrado) => {
        quadrado.style.fill = colorConhecimentos[index]
        quadrado.style.boxShadow = colorConhecimentos[index];
        quadrado.style.color = colorConhecimentos[index];
        quadrado.style.border = colorConhecimentos[index];

    });
}

// Ouvir o evento de rolagem
window.addEventListener("scroll", changeColorsOnScroll);

// Revela��o de elementos na rolagem (ScrollReveal)
window.sr = ScrollReveal({ reset: true });
sr.reveal('.area-1', { duration: 1000 });
sr.reveal('#imagem', {
    duration: 2000,
    rotate: { x: 0, y: 80, z: 0 }
});
sr.reveal('#Cartoes', {
    duration: 2000,
    rotate: { x: 100, y: 0, z: 30 }
});