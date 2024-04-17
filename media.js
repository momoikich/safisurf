function togglenavbar() {
   var navbar = document.querySelector(".navbar-sm");
   navbar.classList.toggle("show");
}


let btnNavbars = document.querySelectorAll('.u-section-navbar a')
btnNavbars.forEach((btnNavbar)=>{
    btnNavbar.addEventListener('click',(e)=>{
        btnNavbars.forEach(el=> el.classList.remove('navbar-active'))
        e.target.classList.toggle('navbar-active')
    })
})

const galleries = document.querySelectorAll(".u-gallery");
const navbarli = document.querySelectorAll(".u-section-navbar a");
window.addEventListener("scroll", () => {
  let current = "";
  galleries.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop ) {
      current = section.getAttribute("id");
    }
  });

  navbarli.forEach((li) => {
    li.classList.remove("navbar-active");
    if (li.classList.contains(current)) {
      li.classList.add("navbar-active");
    }
  });
});

let media_nav = document.querySelector(".media");
let dropdown = document.getElementById("dropdown");

media_nav.addEventListener("mouseover", function(){
   dropdown.style.display = 'flex';
   dropdown.style.flexDirection = "column";
});

media_nav.addEventListener("mouseleave", function(){
   dropdown.style.display = 'none';
});
dropdown.addEventListener("mouseover", function(){
   dropdown.style.display = 'flex';
   dropdown.style.flexDirection = "column";
});
dropdown.addEventListener("mouseleave", function(){
   dropdown.style.display = 'none';
});
function go_surf_women() {
   window.location.href="media.html";
}
function go_surf_men() {
    window.location.href="media_men.html";
}
function go_bodyboard() {
    window.location.href = "media_body.html";
}
function go_pres() {
    window.location.href="presentation.html";
}
function go_live() {
   window.location.href = "live.html";
}