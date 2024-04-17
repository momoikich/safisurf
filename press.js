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
function go_bodyboard() {
    window.location.href="media_body.html";
}
function go_pres() {
    window.location.href="presentation.html";
}
function go_live() {
   window.location.href = "live.html";
}

let event_nav = document.querySelector(".event");
let dropdown_event = document.getElementById("dropdown-event");

event_nav.addEventListener("mouseover", function(){
   dropdown_event.style.display = 'flex';
   dropdown_event.style.flexDirection = "column";
});

event_nav.addEventListener("mouseleave", function(){
   dropdown_event.style.display = 'none';
});
dropdown_event.addEventListener("mouseover", function(){
   dropdown_event.style.display = 'flex';
   dropdown_event.style.flexDirection = "column";
});
dropdown_event.addEventListener("mouseleave", function(){
   dropdown_event.style.display = 'none';
});

