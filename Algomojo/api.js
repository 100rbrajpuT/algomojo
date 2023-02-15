bar = document.querySelector(".flex_one").querySelectorAll("a");
console.log(bar);
bar.forEach(element =>{
  element.addEventListener("click", function(){
    bar.forEach(nav => nav.classList.remove("active"))
    // bar.forEach(nav => nav.classList.remove("activa"))


    this.classList.add("active")
    
  })
})

// barr = document.querySelector(".nav-link").querySelectorAll(".active");
// console.log(barr);
// barr.forEach(element =>{
//   element.addEventListener("click", function(){
//     barr.forEach(nav => nav.classList.remove("active"))
    


//     this.classList.add("activa")
//   })
// })

// function ChangeColor(){
  
// var arrow = document.querySelector(".activa")
// arrow.style.color = "white"
// arrow.style.color = "blue"
// }
function getfocus() {
  document.getElementById("myAnchor").focus();
   console.log("clicked") 
}

function losefocus() {
  document.getElementById("myAnchor").blur();
  console.log("clicked2") 
}
