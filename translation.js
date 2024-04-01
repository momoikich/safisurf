function handleTranslation(lang) {
    if (lang=='english') {
       window.location.pathname='index.html'
    }else {
       window.location.pathname='About-Safi-Surf-fr.html'
    }
}
function pause() {
   let video = document.getElementById("videoId")
   video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
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

