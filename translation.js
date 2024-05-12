function go_media(){
   window.location.href = "media.html";
}
var container_number = document.querySelectorAll(".stat-number");

let counts_1 = setInterval(updated_1);
let upto = [0,0,0,0,0,0,0];
function updated_1() {
   upto[0]+=1;
   container_number[0].innerHTML = upto[0];
   if (upto[0] == 36) {
      clearInterval(counts_1);
   }
}
let counts_2 = setInterval(updated_2);
function updated_2(){
   upto[1]+=5;
   container_number[1].innerHTML = upto[1];
   if (upto[1] == 4000) {
      clearInterval(counts_2);
   }
}
let counts_3 = setInterval(updated_3);
function updated_3(){
   upto[2]+=1;
   container_number[2].innerHTML = upto[2];
   if (upto[2] == 4) {
      clearInterval(counts_3);
   }
}
let counts_4 = setInterval(updated_4);
function updated_4(){
   upto[3]+=10;
   container_number[3].innerHTML = upto[3];
   if (upto[3] == 3000) {
      clearInterval(counts_4);
   }
}
let counts_5 = setInterval(updated_5);
function updated_5(){
   upto[4]+=1000;
   container_number[4].innerHTML = upto[4];
   if (upto[4] == 500000) {
      clearInterval(counts_5);
   }
}
let counts_6 = setInterval(updated_6);
function updated_6(){
   upto[5]+=10000;
   container_number[5].innerHTML = upto[5];
   if (upto[5] == 5000000) {
      clearInterval(counts_6);
   }
}
let counts_7 = setInterval(updated_7);
function updated_7(){
   upto[6]+=1;
   container_number[6].innerHTML = upto[6];
   if (upto[6] === 35) {
      clearInterval(counts_7);
   }
}

// //let slideIndex = 1;
// //showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
function togglenavbar() {
   var navbar = document.querySelector(".navbar-sm");
   navbar.classList.toggle("show");
}
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "block";  
// }


const contact_container = document.querySelector('.contact-container')


const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    
      entry.target.classList.toggle('contact-container-animated',entry.isIntersecting)
    
  })
})
observer.observe(contact_container);



// // -------------------------------------------
// let countItems = document.querySelectorAll('.count-items-info')

// let endDate = '05/01/2024 00:00:00'
// let x = setInterval(()=>{
//    let now = new Date(endDate).getTime()
//    let countDown = new Date().getTime()
//    let distance = now - countDown

//    let d = Math.floor(distance/( 1000 * 60 * 60 * 24))
//    let h = Math.floor((distance % (1000 * 60 * 60 * 24))
//    /(1000 * 60 * 60))
//    let m = Math.floor((distance%(1000*60*60))/(1000*60))
//    let s = Math.floor((distance%(1000*60))/(1000))
//    if(s<10){
//       countItems[3].innerHTML = `0${s}`
   
//    }else{
//       countItems[3].innerHTML = s
//    }
//    if(d<10){
//       countItems[0].innerHTML = `0${d}`
      
//    }else{
//       countItems[0].innerHTML = d
//    }
//    if(h<10){
//       countItems[1].innerHTML = `0${h}`
      
//    }else{
//       countItems[1].innerHTML = h
//    }  
//    if(m<10){
//       countItems[2].innerHTML = `0${m}`
//    }else{
//       countItems[2].innerHTML = m

//    }
// })

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('.memory-title h1');
var p = document.querySelector('.paragraph-event');
var delay = h1.innerHTML.length * speed + speed;

// // type affect to header
// typeEffect(h1, speed);

// type affect to body
setTimeout(function(){
  typeEffect(p, 1/4*speed);
}, delay);
// window.addEventListener("scroll",()=> {
//    function typeEffect(element, speed) {
//   var text = element.innerHTML;
//   element.innerHTML = "";
  
//   var i = 0;
//   var timer = setInterval(function() {
//     if (i < text.length) {
//       element.append(text.charAt(i));
//       i++;
//     } else {
//       clearInterval(timer);
//     }
//   }, speed);
//   }

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//       if (current=="first-event") {
//          var speed = 75;
//          var h1 = document.querySelector('.memory-title h1');
//          var p = document.querySelector('.paragraph-event');
//          var delay = h1.innerHTML.length * speed + speed;

//          // type affect to header
//          typeEffect(h1, speed);

//          // type affect to body
//          setTimeout(function(){
//             typeEffect(p, speed);
//             }, delay);
//          }
//     }
//   });
   

// })

// ---------------------------------------------
let SlideItems = document.querySelectorAll('.slide-items')
let section_press = document.querySelector('.section-press')

for (let index = 8; index < SlideItems.length; index++) {
  
  SlideItems[index].classList.add('hide-img') 
}
function handleLoadingImg(){
  window.location.href="press.html";
    
}
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


$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
});