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

function togglenavbar() {
   var navbar = document.querySelector(".navbar-sm");
   navbar.classList.toggle("show");
}

function go_surf_women() {
   window.location.href="media.html";
}
function go_surf_men() {
    window.location.href="media_men.html";
}

