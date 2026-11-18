const navigation = document.querySelector("#Topo ul");

if (navigation && !navigation.querySelector('a[href="Localizacao.html"]')) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const button = document.createElement("button");

  link.href = "Localizacao.html";
  button.textContent = "Localização";
  link.append(button);
  item.append(link);
  navigation.append(item);
}

const mobileMenuToggle = document.querySelector(".menu-mobile");

if (mobileMenuToggle) {
  mobileMenuToggle.setAttribute("role", "button");
  mobileMenuToggle.setAttribute("tabindex", "0");
  mobileMenuToggle.setAttribute("aria-controls", "Topo");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
  mobileMenuToggle.setAttribute("aria-label", "Abrir menu");

  mobileMenuToggle.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    window.toggleMenu();
  });
}

window.toggleMenu = function () {
  const menu = document.querySelector("#Topo ul");
  if (!menu) return;

  const isOpen = menu.classList.toggle("ativo");
  mobileMenuToggle?.setAttribute("aria-expanded", String(isOpen));
  mobileMenuToggle?.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

function setMenuOpen(menu, isOpen) {
  menu.classList.toggle("is-open", isOpen);
  menu.classList.toggle("line-dismissed", !isOpen);
  menu.querySelector(".button2")?.setAttribute("aria-expanded", String(isOpen));
}

function closeOpenMenus() {
  document.querySelectorAll(".paste-button.is-open").forEach((menu) => {
    setMenuOpen(menu, false);
  });
}

document.querySelectorAll(".paste-button").forEach((menu) => {
  menu.querySelector(".button2")?.setAttribute("aria-expanded", "false");

  menu.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") menu.classList.remove("line-dismissed");
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const trigger = target.closest(".paste-button > .button2");

  if (trigger) {
    const menu = trigger.closest(".paste-button");
    if (!menu) return;

    const shouldOpen = !menu.classList.contains("is-open");
    closeOpenMenus();
    setMenuOpen(menu, shouldOpen);
    return;
  }

  if (target.closest(".dropdown-content a")) {
    closeOpenMenus();
    return;
  }

  if (!target.closest(".paste-button")) closeOpenMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const openMenu = document.querySelector(".paste-button.is-open");
  if (!openMenu) return;

  setMenuOpen(openMenu, false);
  openMenu.querySelector(".button2")?.focus();
});