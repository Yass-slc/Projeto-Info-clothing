
const menuToggle = document.getElementById("menuToggle");
const menuLinks = document.getElementById("menuLinks");

menuToggle.addEventListener("click", function () {
    const aberto = menuLinks.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "✕" : "☰";
});

menuLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menuLinks.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
    });
});
