const button=document.querySelector("button")
const trailercontainer=document.querySelector(".trailer-container")
const cross=document.querySelector("i")
const vid=document.querySelector("video")
console.log(vid)
button.addEventListener("click",()=>{
    trailercontainer.classList.remove("active")
})
cross.addEventListener("click",()=>{
    trailercontainer.classList.add("active")
    vid.pause()
    vid.currentTime=0
})