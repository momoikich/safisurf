const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-head a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop -sectionHeight/6) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("colorized");
    if (li.classList.contains(current)) {
      li.classList.add("colorized");
    }
  });
});