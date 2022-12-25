const rightarrow=document.querySelector(".fa-angle-double-right")
const leftarrow=document.querySelector(".fa-angle-double-left")
const imgc=document.querySelector(".image-container")
const imgs=document.querySelectorAll("img")
let currentimage=1;

rightarrow.addEventListener("click",()=>{
    currentimage++
  update()

})
leftarrow.addEventListener("click",()=>{
    currentimage--
    update()
  
})
function update(){
    if (currentimage>imgs.length) {
        currentimage=1
    }else if(currentimage<1){
        currentimage=imgs.length

    }
imgc.style.transform=`translate(-${(currentimage-1)*500}px)`
console.log(currentimage)
}
setInterval(() => {
    currentimage++
    update()
}, 3000);