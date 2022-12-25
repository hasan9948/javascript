const next =document.querySelector(".next")
const prev =document.querySelector(".back")
let x=0
const imgs=document.querySelectorAll("img")
const container=document.querySelector(".image-container")
next.addEventListener("click",()=>{
 x=x-40
    update()
})
prev.addEventListener("click",()=>{
   x = x+40
    // console.log(x)
    // if(x<0){
    //     x=imgs.length
    // }
    update()
})


function update(){
//  console.log(x)
container.style.transform=`perspective(1000px) rotatey(${x}deg)`
}
setInterval(() => {
    x=x-40
    update()
}, 2000);