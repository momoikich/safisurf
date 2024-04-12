
function togglenavbar() {
   var navbar = document.querySelector(".navbar-sm");
   navbar.classList.toggle("show");
}


// ---------------------------------------------
let SlideItems = document.querySelectorAll('.slide-items')

for (let index = 4; index < SlideItems.length; index++) {
  
  SlideItems[index].classList.add('hide-img') 
}
function handleLoadingImg(){
  let showBtn = document.querySelector('.lazy-loading span')
  
  let x = setTimeout(()=>{
    if(SlideItems[SlideItems.length - 1].classList.contains('hide-img')){
      showBtn.innerHTML = "show less ..."
    }else{
      showBtn.innerHTML = "show more ..."
    }
    for (let index = 4; index < SlideItems.length; index++) {
  
      SlideItems[index].classList.toggle('hide-img') 
    }
  },2000)
    
}