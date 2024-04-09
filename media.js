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