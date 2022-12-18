const valuex=document.querySelector(".value-x")
const valuey=document.querySelector(".value-y")

window.addEventListener("mousemove",(e)=>{
   valuex.textContent=e.clientX
   valuey.textContent=e.clientY
})