const slidebar=document.querySelector(".slidebar")
const bar=document.querySelector(".fa-bars")
const remove=document.querySelector(".fa-times")

bar.addEventListener("click",()=>{
    slidebar.classList.toggle("show")
})
remove.addEventListener("click",()=>{
    slidebar.classList.remove("show")

})