bar = document.querySelector(".flex_one").querySelectorAll("a");
console.log(bar);
bar.forEach(element =>{
  element.addEventListener("click", function(){
    bar.forEach(nav => nav.classList.remove("active"))
    // bar.forEach(nav => nav.classList.remove("activa"))


    this.classList.add("active")
    
  })
})
