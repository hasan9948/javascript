const scroll=document.querySelector(".img")


window.addEventListener("scroll",(e)=>{
const value=window.scrollY
scroll.style.clipPath=`circle( ${value*2.5}px at center)` 
})