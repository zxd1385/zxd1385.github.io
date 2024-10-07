// carosel

let slides = ["slide0","slide1","slide2","slide3","slide4"];
let next = document.querySelector(".next");
let preve = document.querySelector(".preve");
let counter = 0;

next.addEventListener("click",()=>{
   counter = counter + 1 ;
   for( i = 0; i < slides.length ; i++ ) {
         document.getElementById(slides[i]).classList = "slide"
   }
   if(counter > slides.length - 1){
    counter = 0 ;
    document.getElementById(slides[0]).classList.add("slide-avtive")
   } else {
    document.getElementById(slides[counter]).classList.add("slide-avtive")
   }

});
preve.addEventListener("click",()=>{
   counter = counter - 1 ;
   for( i = 0; i < slides.length ; i++ ) {
         document.getElementById(slides[i]).classList = "slide"
   }
   if(counter < 0){
    counter = slides.length - 1 ;
    document.getElementById(slides[counter]).classList.add("slide-avtive")
   } else {
    document.getElementById(slides[counter]).classList.add("slide-avtive")
   }

});

setInterval(()=>{
    counter = counter + 1 ;
    for( i = 0; i < slides.length ; i++ ) {
          document.getElementById(slides[i]).classList = "slide"
    }
    if(counter > slides.length - 1){
     counter = 0 ;
     document.getElementById(slides[0]).classList.add("slide-avtive")
    } else {
     document.getElementById(slides[counter]).classList.add("slide-avtive")
    }
 
 },6000);
 
// menu

let menu = document.querySelector(".menu");
let span = document.querySelector(".header__icon");
let Alert = document.querySelector(".header__icon--alert");
let icon = document.getElementById("bars");


span.addEventListener("click",()=> {
if( icon.classList.contains("fa-bars") ){
 menu.style.left = "0px";
 icon.classList = "fa fa-times";
} else {
  menu.style.left = "-272px";
 icon.classList = "fa fa-bars";
}




});

Alert.addEventListener("click",()=>{
      menu.style.left = "-272px"
      icon.classList = "fa fa-bars"
})



// dark mood
let ds = document.getElementById("dark-span")
let di = document.getElementById("dark-icon")
ds.addEventListener("click",()=>{
 
 if(di.classList.contains("fa-moon")){
      document.body.style.color = "white"
      document.body.style.backgroundColor = "black"
      di.classList = "fa fa-sun"
 } else {

      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
      di.classList = "fa fa-moon"
       
      
 }



})

// accurdion
let icons = ["icon0","icon1","icon2"];
let texts = ["text0","text1","text2"];

function acc (i) {
    let icon = document.getElementById(icons[i]);
    let text = document.getElementById(texts[i]);
 
if ( icon.classList.contains("fa-chevron-down")){
    text.style.display = "block";
    icon.classList = " fa fa-chevron-up"
} else {
    text.style.display = "none";
    icon.classList = " fa fa-chevron-down"
}
}

// go-top

function go_top() {
      let btn = document.querySelector(".go-top");
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
           btn.classList.add("visible"); 
      } else {
            btn.classList.remove("visible"); 
      }
      
}