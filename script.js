// Navegação por Tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
initTabNav();

//Accordion List
function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].nextElementSibling.classList.add("ativo");

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
initAccordionList();

//Links Internos
const linksInternos = document.querySelectorAll(".js-menu a[href^='#'");

function scrollToPlace(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const scrollY = section.offsetTop;
  window.scrollTo({
    top: scrollY,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToPlace);
});

//Scroll Anim
const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisibleSection = sectionTop - windowMetade < 0;
    if (isVisibleSection) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animaScroll);
